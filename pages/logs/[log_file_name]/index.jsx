import Butthole from "@/components/Butthole";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState, useEffect, useContext, useRef, createContext } from "react";
import keywords from "@/lib/keywords";
import Tran from "@/lib/translater";
import { LangContext } from "@/pages/_app";
import Head from "next/head";

export const Log_file = createContext();

const log_upload = async (log_file_localString, log_file_name) => {
  const timestamp = Date.now();
  const randomNumbers = Math.floor(Math.random() * 1e10); // generates a random number between 0 and 9999999999
  const log_file_name_encode = encodeURIComponent(log_file_name);
  const log_id = `${timestamp}_${randomNumbers}`;
  const data = {
    log_id: log_id,
    fileName: log_file_name,
    log_data: log_file_localString.value
  }
  const response = await fetch('/api/log_upload', {
    method: 'POST',
    body: JSON.stringify(data),
  });
  const responseData = await response.json();
  console.log(responseData);

  localStorage.setItem(log_file_name + '_share_link', log_id);
  return log_id
}

function findItem(matchingCondition) {
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);

    if (matchingCondition(key)) {
      return { key, value };
    }
  }

  return {key: '', value: ''};
}

function dataUrlToString(dataUrl) {
  // Remove the "data:text/html;base64," part
  const base64 = dataUrl.replace('data:text/html;base64,', '');

  // Decode the base64 data
  let decodedString;
  try {
    decodedString = atob(base64);
  } catch (e) {
    console.error(e);
    return null; // or handle the error in another appropriate way
  }

  // Decode ASCII characters
  let htmlString;
  try {
    htmlString = decodeURIComponent(escape(decodedString));
  } catch (e) {
    console.error(e);
    htmlString = decodedString;
  }

  return htmlString;
}

function rgbToHex(rgb) {
  // Choose correct separator
  let sep = rgb.indexOf(",") > -1 ? "," : " ";
  // Turn "rgb(r, g, b)" into [r, g, b]
  rgb = rgb.substr(4).split(")")[0].split(sep);

  let r = (+rgb[0]).toString(16),
    g = (+rgb[1]).toString(16),
    b = (+rgb[2]).toString(16);

  if (r.length == 1)
    r = "0" + r;
  if (g.length == 1)
    g = "0" + g;
  if (b.length == 1)
    b = "0" + b;

  return "#" + r + g + b;
}

function Character_block({ char, index, char_update_color}) {
  const expand = useState(true);//[0] is state, [1] is setState
  return(
    <div key={index} className="flex flex-col gap-[5px] bg-[#444] p-[2px] rounded-[5px]">
      <div className="flex gap-[5px] items-center">
        <div className="color_circle w-[15px] rounded-[15px] aspect-square cursor-pointer"
          style={{ backgroundColor: char.color }} onClick={(e) => e.currentTarget.children[0].click()}>
          <input type="color" value={char.color} style={{ display: 'none' }} onChange={(e) => char_update_color(char.character, e.target.value)} />
        </div>
        <div className={`text-[14px] font-[700] truncate`} style={{ color: char.color, maxWidth: '150px' }} title={char.character}>{char.character}</div>
        <div className="text-[12px] bg-[#555] p-[5px] rounded-[5px] h-[14px] flex items-center">{char.message.length}</div>
        <div className=" flex-grow text-[12px] flex justify-end gap-[5px]">
          <a href={`#${char.character}`} className="g_i"
            title={'Jump to first appear time'}>timer</a>
          {
            char.stat[2].value === null ? <></> : 
            <div className="g_i" title={'Show stat panel'} onClick={() => expand[1](!expand[0])}>
                {expand[0] ? 'expand_less' : 'expand_more'}
              </div>
          }

        </div>
      </div>

      {//If characotr have "SAN" stat than show the stat panel 
        char.stat[2].value === null || expand[0]==false? <></> : <>
          <div className="grid grid-cols-3 gap-[2px] [&>*]:bg-[#2e2e2e] text-[12px] [&>*]:rounded-[5px]">
            {
              char.stat.map((stat, index) => {
                return (
                  <Stat_block key={index} name={stat.name} value={stat.value} max={stat.max} />
                )
              })
            }

          </div>
          <div className="grid grid-cols-8 gap-[2px] [&>*]:bg-[#2e2e2e] text-[12px] [&>*]:rounded-[5px]">
            {
              char.ability.map((stat, index) => {
                return (
                  <Abliity_block key={index} name={stat.name} value={stat.value} />
                )
              })
            }
          </div>
          <div className="grid grid-cols-2 gap-[2px] [&>*]:bg-[#2e2e2e] text-[12px] [&>*]:rounded-[5px]">
            {
              char.skills.map((stat, index) => {
                return (
                  <Abliity_block_t2 key={index} name={stat.name} value={stat.value} />
                )
              })
            }

          </div>
        </>}

    </div>
  )
}

function Stat_block({ name, value, max }) {
  return (
    <div style={{
      backgroundImage: `linear-gradient(90deg, #4f4f4f ${value / max * 100}%, #333 ${value / max * 100}%)`
    }}>
      <div className="flex flex-col" style={{ color: value?'#fff':'#999' }}>
        <div>{name}</div>
        <div>{`${value ?? '??'}${max ? '/' + max : ''}`}</div>
      </div>
    </div>
  )
}

function Abliity_block_t2({ name, value, max = 100 }) {
  return (
    <div className=" grid grid-cols-[auto_20px] gap-[5px]  items-center" style={{
      backgroundImage: `linear-gradient(90deg, #4f4f4f ${value / max * 100}%, #333 ${value / max * 100}%)`
    }}>
      <div>{name}</div>
      {/*<div className="relative flex overflow-x-hidden gap-[5px]">
          <div class="animate-marquee whitespace-nowrap">
            <div>{name}</div>
          </div>
          <div class="absolute left-[5px] top-0 animate-marquee2 whitespace-nowrap">
            <div>{name}</div>
          </div>
        </div>*/}

      <div>{value ?? '??'}</div>
    </div>
  )
}

function Abliity_block({ name, value }) {
  return (
    <div className="flex flex-col" style={{ color: value ? '#fff' : '#999' }}>
      <div>{name}</div>
      <div>{value ?? '??'}</div>
    </div>
  )
}

function Character_panel({log_charactors, char_update_color, color_randomize, cycleSortOption, sortOption, sortedCharacters, lang}){
  const panel_state = useState(true);

  return(
    <div className="char_container">
      {panel_state[0] ?
        <div className="text-[15px] flex justify-center items-center gap-[5px] select-none cursor-pointer" onClick={()=>{panel_state[1](false);}}>
          <div className="text-[12px] bg-[#555] p-[5px] rounded-[5px] h-[14px] flex items-center">{sortedCharacters.length}</div>
          <Tran text={`Charactors`} lang={lang[0]} />
          <div className="g_i">keyboard_arrow_down</div>
        </div> :
        <div className="text-[15px] flex justify-center items-center gap-[5px] select-none cursor-pointer" onClick={()=>{panel_state[1](true);}}>
          <div className="text-[12px] bg-[#555] p-[5px] rounded-[5px] h-[14px] flex items-center">{sortedCharacters.length}</div>
          <Tran text={`Charactors`} lang={lang[0]} />
          <div className="g_i">keyboard_arrow_up</div>
        </div>
      }
      {panel_state[0] ? 
        <>
          <button className="text-[14px] w-[100%] flex gap-[5px] items-center justify-center text-[#ccc]" onClick={cycleSortOption}>
            <div><Tran text={'sort by ' + sortOption} lang={lang[0]} /></div>
            <span className="g_i text-[20px]">sort</span>
          </button>
          <button className="text-[14px] w-[100%] flex gap-[5px] items-center justify-center text-[#ccc]" onClick={color_randomize}>
            <div><Tran text={'Color randomize'} lang={lang[0]} /></div>
            <span className="g_i text-[20px]">cached</span>
          </button>
          <div className="flex flex-col gap-[5px] p-[5px] rounded-[5px]">
            {
              sortedCharacters.map((char, index) => {
                return (
                  <Character_block key={index} char={char} index={index} char_update_color={char_update_color} />
                )
              })
            }
          </div>
        </>
       : <></>}
      
    </div>
  )
}

function Chat_log_viewer({ log_json, log_charactors, scrollPos, setTimeline, lang }) {
  const viewerRef = useRef();

  let debounceTimeoutId;

  const handleScroll = () => {
    if (debounceTimeoutId) {
      clearTimeout(debounceTimeoutId);
    }

    debounceTimeoutId = setTimeout(() => {
      const maxScrollTop = viewerRef.current.scrollHeight - viewerRef.current.clientHeight;
      const newScrollPos = (viewerRef.current.scrollTop / maxScrollTop);
      if (newScrollPos !== scrollPos) {
        setTimeline(newScrollPos);
      }
    }, 20); // 100ms debounce time
  };

  useEffect(() => {
    const maxScrollTop = viewerRef.current.scrollHeight - viewerRef.current.clientHeight;
    viewerRef.current.scrollTop = (scrollPos ) * maxScrollTop;
  }, [scrollPos]);

  return (
    <div ref={viewerRef} onScroll={handleScroll}
    className="chat_log_viewer overflow-y-scroll h-[100%] w-[100%] flex flex-col gap-[5px] p-[5px] bg-[#333] rounded-[5px]">
      {
        log_json.map((log, index) => {
          let color;
          log_charactors.map((char, index) => {
            if (log.character === char.character) {
              color = char.color;
            }
          })
          return (
            <div key={index} id={log.character} className={`flex flex-col gap-[2px]  justify-center 
                text-left shadow-[0px_0px_3px_#555] rounded-[5px] p-[5px] hover:bg-[#444] duration-[0.25s]`}>
              <div className="flex gap-[5px] items-center">
                <div className=" text-[12px] bg-[#555] p-[5px] rounded-[5px]">{log.channel.split('[')[1]?.split(']')[0] ?? log.channel}</div>
                <div className={`text-[15px] font-[900] `} style={{ color: color }}>{log.character}</div>
                <div className={`text-[12px] font-[500] text-right flex-grow `} style={{ color: '#999' }}>{`#${index}`}</div>
              </div>
              <div className=" text-[15px]">{log.message}</div>
            </div>
          )
        })
      }
    </div>
  )
}

function Timeline_controler({ lang, timeline, setTimeline, log_file_name, logHtml_string }){
  const [isDragging, setIsDragging] = useState(false);
  const [localTimeline, setLocalTimeline] = useState(timeline);
  const max = 99.25;
  const timelineRef = useRef();
  let debounceTimeoutId;

  const handleStart = () => {
    setIsDragging(true);
  };

  const handleMove = (e) => {
    if (!isDragging) return;
    const rect = timelineRef.current.getBoundingClientRect();
    const x = e.touches ? e.touches[0].clientX : e.clientX - rect.left; // x position within the element
    const width = rect.right - rect.left;
    const newTimeline = Math.max(0, Math.min(1, x / width));
    setLocalTimeline(newTimeline);

    if (debounceTimeoutId) {
      clearTimeout(debounceTimeoutId);
    }

    debounceTimeoutId = setTimeout(() => {
      setTimeline(newTimeline);
    }, 500); // 100ms debounce time 
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    const storedTimeline = localStorage.getItem(`${log_file_name}_replayReadingProgress`);
    if (storedTimeline) {
      console.log('storedTimeline', storedTimeline);
      setLocalTimeline(parseFloat(storedTimeline));
      setTimeout(() => {
        setTimeline(parseFloat(storedTimeline));
      }, 50);
      
    }
  }, [logHtml_string[0]]);

  useEffect(() => {
    setLocalTimeline(timeline);
    if (timeline == 0) { return }
    localStorage.setItem(`${log_file_name}_replayReadingProgress`, timeline);
  }, [timeline]);

  useEffect(() => {
    if (localStorage.getItem(`${log_file_name}_replayReadingProgress`) === null) { return }
    if (timeline == 0) { return }
    localStorage.setItem(`${log_file_name}_replayReadingProgress`, timeline);
  },[])

  useEffect(() => {
    if (isDragging) {
      window.addEventListener('mousemove', handleMove);
      window.addEventListener('mouseup', handleEnd);
      window.addEventListener('touchmove', handleMove);
      window.addEventListener('touchend', handleEnd);
    }

    return () => {
      if (isDragging) {
        window.removeEventListener('mousemove', handleMove);
        window.removeEventListener('mouseup', handleEnd);
        window.removeEventListener('touchmove', handleMove);
        window.removeEventListener('touchend', handleEnd);
      }
    };
  }, [isDragging]);

  return(
    <div className="timeline_controler bg-[#333] rounded-[5px] h-[40px] flex flex-col justify-center relative"
      ref={timelineRef}
      onMouseDown={handleStart}
      onMouseUp={handleEnd}
      onTouchStart={handleStart}
      onTouchEnd={handleEnd}>
      <div className="text-[15px] z-[1] select-none"><Tran text={'Progress rate'} lang={lang} />{` ${Math.round(localTimeline * 100)} %`}</div>
      <div className="timeline_handler absolute bg-[#555] h-[90%] rounded-[5px] m-[2px]" style={{ width: `${localTimeline * max}%` }}></div>
    </div>
  )
}

function Log_reader({ log_file_name}){
  const lang = useContext(LangContext);
  const log_file_context = useContext(Log_file);

  const logFile = useState({key: '', value: '123'})
  const logHtml_string = useState('')
  const log_json = useState([])
  const log_charactors = useState([/*{ character: 'character', color: 'log_color', message: [] }*/])
  const log_locations = useState([])
  const log_keywords = useState([])

  const [timeline, setTimeline] = useState(0);
  const log_read_progress = useState(0)

  const router = useRouter();
  
  //download log file if not exist
  useEffect(() => {
    const logFile_raw = findItem((key) => log_file_name === key.split('.').shift().split('[').shift());
    console.log('logFile_raw', logFile_raw);
    if (logFile_raw.key === '') {
      if (log_file_name === undefined) { return }
      fetch(`/api/log_upload?key=${log_file_name}`) // replace with your URL
        .then(response => response.json())
        .then(data => {
          const log_json_file = fetch(data.url)
            .then(response => response.json())
            .then(log_data => {
              // create the key-value pair
              const newId = log_data.log_id
              const newKey = log_data.fileName+'.json'
              const newValue = log_data.log_data;
              // write the key-value pair
              localStorage.setItem(newKey, newValue);
              const share_link_key = log_data.fileName + '_share_link';
              localStorage.setItem(share_link_key, newId);
              router.push(`/logs/${newKey.split('.').shift().split('[').shift() }`);
              //logFile[1]({ key: newKey, value: newValue });
              //log_file_context[1]({ key: newKey, value: newValue });
            })
        })
        .catch(error => console.error('Error:', error));
    } else {
      logFile[1](logFile_raw);
      log_file_context[1](logFile_raw);
    }
  }, [log_file_name]);

  useEffect(() => {
    //console.log('logFile', logFile[0]);
    if(logFile[0].key === ''){return}
    const htmlString = dataUrlToString(logFile[0].value);
    console.log('htmlString');
    logHtml_string[1](htmlString)
  }, [logFile[0]])

  useEffect(() => {
    const danger_html = document.querySelector('.danger_html')
    const chat_logs = danger_html.querySelectorAll('p');
    console.log('danger_html', danger_html);
    if (logHtml_string[0].length === 0) { return }
    //danger_html.style.display = 'none';
    //remove raw file after loaded
    danger_html.remove()

    for (let i = 0; i < chat_logs.length; i++) {

      //if length more than 30 than stop
      //if(i > 10){break;}

      const log_color = rgbToHex(chat_logs[i].style.color);
      const channel = chat_logs[i].children[0]?.innerText??'';
      const character = chat_logs[i].children[1]?.innerText??'';
      const message = chat_logs[i].children[2]?.innerText??'';
      
      let first_message = false;

      log_charactors[1]((v) => {
        // Find the index of the character in the array
        const index = v.findIndex((item) => item.character === character);
        //find locations
        //Not yey done
        const foundLocation = locationDictionary.find(location => message.includes(location));
        if (foundLocation) {
          const updatedMessage = message.replace(foundLocation, `[[${foundLocation}]]`);
          //console.log('Updated message', updatedMessage);
        }

        

        if (index !== -1) {

          //find state
          //[ 紫宮るな ( LUNA／露娜 ) ] HP : 10 → 7
          const statChange = message.match(/\[\s(.*?)\s\]\s(HP|MP|SAN)\s:\s(\d+)\s→\s(\d+)/);
          if (statChange != null) {
            const character = statChange[1];
            const statName = statChange[2];
            const initialValue = parseInt(statChange[3], 10);
            const finalValue = parseInt(statChange[4], 10);
            const decreaseInValue = initialValue - finalValue;
            const ii = v.findIndex((char) => char.character === character);
            //console.log('Character', character, statName, 'decrease', decreaseInValue);
            //console.log('log_charactors[0][i]', v[ii]);
            const characterStats = v[ii].stat;
            characterStats.forEach(stat => {
              if (stat.name === statName) {
                if (stat.max === null) {
                  stat.max = initialValue;
                  stat.value = initialValue;
                }
                //console.log('Character', character, stat.name, 'max set to', stat.max);
                stat.log.push({ value: finalValue, time: i });
              }
            });
          }

          //find sub state
          // CCB<=70 【アイデア】
          // CCB<=65 【幸運】
          // CCB<=45 【知識】
          const subStatChange = message.match(/CCB<=(.*?)【(アイデア|幸運|知識)】/);
          if (subStatChange != null) {
            //console.log('subStatChange', subStatChange);
            const subStatName = subStatChange[2];
            const subStatValue = parseInt(subStatChange[1], 10);
            const ii = v.findIndex((char) => char.character === character);
            const characterStats = v[ii].stat;
            characterStats.forEach(stat => {
              if (stat.name === subStatName) {
                if (stat.max === null) {
                  stat.max = 100;
                  stat.value = subStatValue;
                }
                //console.log('Character', character, stat.name, 'max set to', stat.max);
                stat.log.push({ value: subStatValue, time: i });
              }
            });
          }
          
          //find ability
          // CCB<={STR}*5 【STR × 5】
          // CCB<={CON}*5 【CON × 5】
          // CCB<={POW}*5 【POW × 5】
          // CCB<={DEX}*5 【DEX × 5】
          // CCB<={APP}*5 【APP × 5】
          // CCB<={SIZ}*5 【SIZ × 5】
          // CCB<={INT}*5 【INT × 5】
          // CCB<={EDU}*5 【EDU × 5】
          // CCB<={STAT}*5
          
          const abilityCheck = message.match(/【(\w+)/);
          if(abilityCheck != null){
            //console.log('statCheck', abilityCheck.input);
            const abilityName = abilityCheck[1];
            const abilityValue = parseInt(message.split('<=')[1], 10);
            const ii = v.findIndex((char) => char.character === character);
            const characterAbilities = v[ii].ability;
            characterAbilities.forEach(ability => {
              if (ability.name === abilityName) {
                ability.value = abilityValue;
              }
            })
          }

          //find skills
          // CCB<=70 【目星】
          // CCB<=70 【聞き耳】
          // CCB<=70 【図書館】
          // CCB<=16 【回避】
          // CCB<=50 【こぶし（パンチ）】
          // CCB<=65 【応急手当】
          // CCB<=80 【言いくるめ】
          // CCB<=80 【心理学】

          //CCB check
          const skillCheck = message.match(/CCB<=(.*?)【(.*?)】/);
          if (skillCheck != null && skillCheck[2] != 'アイデア'&& skillCheck[2] != '幸運' && skillCheck[2] != '知識') {
            //console.log('skillCheck', skillCheck);
            const skillName = skillCheck[2];
            if (/[a-zA-Z]/.test(skillName)) {
              
            }else{
              const skillValue = parseInt(skillCheck[1], 10);
              const ii = v.findIndex((char) => char.character === character);
              const characterSkills = v[ii].skills;
              const skillIndex = characterSkills.findIndex(skill => skill.name === skillName);
              if (skillIndex === -1) {
                characterSkills.push({ name: skillName, value: skillValue });
              } else {
                characterSkills.forEach(skill => {
                  if (skill.name === skillName) {
                    skill.value = skillValue;
                  }
                })
              }
            }
            
          }
          
          
          /*if (statCheck != null) {
            const character = statCheck[1];
            const statName = statCheck[2];
            const ii = v.findIndex((char) => char.character === character);
            const characterAbilities = v[ii].ability;
            characterAbilities.forEach(ability => {
              if (ability.name === statName) {
                ability.value = 1;
              }
            })
          }*/
          

          // If the character exists, add the message to its message array
          const newChar = { ...v[index], message: [...v[index].message, message] };
          return [...v.slice(0, index), newChar, ...v.slice(index + 1)];
        } else {
          // If the character doesn't exist, add it to the array
          first_message = true;
          return [...v, {
            character: character, color: log_color, message: [message], 
            stat: [
              { name: 'HP', value: null, max: null, min: 0, log: [/*{ value: null, time: null }*/] },
              { name: 'MP', value: null, max: null, min: 0, log: [/*{ value: null, time: null }*/] },
              { name: 'SAN', value: null, max: null, min: 0, log: [/*{ value: null, time: null }*/] },
              { name: 'アイデア', value: null, max: null, min: 0, log: [/*{ value: null, time: null }*/] },
              { name: '幸運', value: null, max: null, min: 0, log: [/*{ value: null, time: null }*/] },
              { name: '知識', value: null, max: null, min: 0, log: [/*{ value: null, time: null }*/] },
            ],
            ability: [
              { name: 'STR', value: null },
              { name: 'CON', value: null },
              { name: 'POW', value: null },
              { name: 'DEX', value: null },
              { name: 'SAP', value: null },
              { name: 'SIZ', value: null },
              { name: 'INT', value: null },
              { name: 'EDU', value: null },
            ],
            skills: [
              //{ name: '目星', value: null },
            ],
            items: []
          }];
        }

      });
      log_json[1]((v) => [...v, { color: log_color, channel: channel, character: character, message: message, first_message: first_message }])
    }

    
    
    //find locations
    const locationDictionary = keywords.locations;

    log_json[0].map((log, index) => {
      const messageContainsLocation = locationDictionary.some(location => log.message.includes(location));
      if (messageContainsLocation) {
        // do something
        console.log('log.message', log.message);
      }
    });

    
    

  }, [logHtml_string[0]])

  useEffect(() => {
    console.log('log_json', log_json[0]);
    console.log('log_charactors', log_charactors[0]);
  }, [log_json[0]])

  useEffect(() => {
    console.log('timeline', timeline);
    
  }, [timeline])

  let debounceTimer;

  function char_update_color(char, color){
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(() => {
      log_charactors[1]((v) => {
        const index = v.findIndex((item) => item.character === char);
        if (index !== -1) {
          const newChar = { ...v[index], color: color };
          return [...v.slice(0, index), newChar, ...v.slice(index + 1)];
        }
      });
    }, 300);  // 300ms debounce time
  }

  const [sortOption, setSortOption] = useState('appendTime');

  const cycleSortOption = () => {
    if (sortOption === 'appendTime') {
      setSortOption('messageLength');
    } else if (sortOption === 'messageLength') {
      setSortOption('name');
    } else {
      setSortOption('appendTime');
    }
  };

  const sortedCharacters = [...log_charactors[0]].sort((a, b) => {
    if (sortOption === 'messageLength') {
      return b.message.length - a.message.length;
    } else if (sortOption === 'name') {
      return a.character.localeCompare(b.character);
    } else {
      return 0;
    }
  });

  function color_randomize(){
    const colors = [
      "#FF0000", // Red
      "#FFA500", // Orange
      "#FFFF00", // Yellow
      "#32CD32", // Lime Green
      "#008000", // Green
      "#00FFFF", // Cyan
      "#0000FF", // Blue
      "#8A2BE2", // Blue Violet
      "#FF00FF", // Magenta
      "#FF69B4", // Hot Pink
      "#800000", // Maroon
      "#A52A2A", // Brown
      "#FFD700", // Gold
      "#FF8C00", // Dark Orange
      "#FF7F50", // Coral
      "#FF1493", // Deep Pink
      "#FF4500", // Orange Red
      "#800080", // Purple
      "#4B0082", // Indigo
      "#6A5ACD", // Slate Blue
      "#000080", // Navy Blue
      "#008080", // Teal
      "#008B8B", // Dark Cyan
      "#00CED1", // Dark Turquoise
      "#00BFFF", // Deep Sky Blue
      "#1E90FF", // Dodger Blue
      "#40E0D0", // Turquoise
      "#7FFF00", // Chartreuse
      "#ADFF2F", // Green Yellow
      "#F0E68C" // Khaki
    ];

    // Shuffle colors array
    for (let i = colors.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [colors[i], colors[j]] = [colors[j], colors[i]];
    }

    log_charactors[1]((v) => {
      return v.map((char, index) => {
        return { ...char, color: colors[index % colors.length] };
      });
    });
  }
  
  return(
    <>
      <div className="text-[15px] danger_html hidden" dangerouslySetInnerHTML={{ __html: logHtml_string[0] }}></div>
      <div className=" h-[100%] w-[100%] gap-[5px]
      grid grid-cols-1 grid-rows-[100px_auto] @[600px]:grid-cols-[250px_auto] @[600px]:grid-rows-1">
        <div className="chat_log_viewer overflow-y-scroll h-[100%] w-[100%] flex flex-col gap-[5px] p-[5px] bg-[#333] rounded-[5px]">
          
          <Character_panel 
          log_charactors={log_charactors[0]} 
          char_update_color={char_update_color} 
          color_randomize={color_randomize} 
          cycleSortOption={cycleSortOption} 
          sortOption={sortOption} 
          sortedCharacters={sortedCharacters} 
          lang={lang} />

          <div className="locations_container">
            <div className="text-[15px]"><Tran text={'Locations'} lang={lang[0]} /></div>
            <div className="flex flex-col gap-[5px] p-[5px] rounded-[5px]">
              {

              }
            </div>
          </div>

          <div className="keywords_container">
            <div className="text-[15px]"><Tran text={'Keywords'} lang={lang[0]} /></div>
            <div className="flex flex-col gap-[5px] p-[5px] rounded-[5px]">
              {
                
              }
            </div>
          </div>

          <div className="chapter_container">
            <div className="text-[15px]"><Tran text={'Chapter'} lang={lang[0]} /></div>
          </div>
          
        </div>
        
        <div className="flex flex-col gap-[5px] overflow-y-scroll">
          <Timeline_controler timeline={timeline} setTimeline={setTimeline} lang={lang[0]} log_file_name={log_file_name} logHtml_string={logHtml_string[0]} />
          <Chat_log_viewer log_json={log_json[0]} log_charactors={log_charactors[0]} scrollPos={timeline} setTimeline={setTimeline} lang={lang[0]} />
        </div>
        

      </div>
      
    </>
  )
}


export default function log_player() {
  const { log_file_name } = useRouter().query;
  const router = useRouter();
  const lang = useContext(LangContext);
  const log_file_state = useState({key: '', value: ''});
  const share_link = useState('');

  const share_link_key = log_file_name + '_share_link';
  useEffect(() => {
    console.log('log_file_name', log_file_name);
    console.log('log_file_state', log_file_state);
  }, [log_file_name,log_file_state]);

  useEffect(() => {
    if(log_file_name === undefined){return}
    console.log('localStorage.getItem(share_link_key)', localStorage.getItem(share_link_key));
    share_link[1](localStorage.getItem(share_link_key));
  }, [log_file_name])

  useEffect(() => {
    console.log('share_link', share_link[0]);
  },[share_link[0]])

  useEffect(() => {
    //listen local storage change
    window.addEventListener('storage', (e) => {
      console.log('storage change', e);
      if (e.key === share_link_key) {
        share_link[1](e.newValue);
      }
    });
  },[])

  return (
    <>
      <Head>
        <title>{`${log_file_name ?? ''} - TRPG Replayer`}</title>
        <meta name="description" content="A simple tool to replay your TRPG sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#333] text-[#eee] flex flex-col h-[100vh] w-[100%]">

        <div className="flex flex-col text-center justify-center items-center p-[5px_5px_0px_5px] gap-[5px]">
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[5px_10px] text-[20px] flex justify-between items-center gap-[5px]">
            <Link className=" cursor-pointer select-none flex gap-[5px] px-[5px] rounded-[5px] items-center hover:bg-[#666] duration-[0.25s]" href={'/logs'} >
              <div className="g_i">keyboard_arrow_left</div>
              <div className=" text-[20px]">{log_file_name}</div>
            </Link>
            <div className=" cursor-pointer select-none flex gap-[5px] items-center" >
              <div className="flex gap-[5px] px-[5px] rounded-[5px] items-center hover:bg-[#666] duration-[0.25s]">
                {share_link[0] != null ? 
                <><div className=" text-[12px]"><Tran text={'ONLINE LOG'} lang={lang[0]}></Tran></div>
                    <div className="g_i">cloud</div></>:
                <><div className=" text-[12px]"><Tran text={'LOCAL LOG'} lang={lang[0]}></Tran></div>
                <div className="g_i">cloud_off</div></>}
              </div>
              <Log_file.Provider value={log_file_state}>
                {share_link[0] === null ?
                  <div className="flex gap-[5px] px-[5px] rounded-[5px] items-center hover:bg-[#666] duration-[0.25s]"
                    onClick={async () => {
                      const log_id = await log_upload(log_file_state[0], log_file_name);
                      share_link[1](log_id);
                    }}>
                    <div className=" text-[12px]"><Tran text={'SHARE'} lang={lang[0]}></Tran></div>
                    <div className="g_i">share</div>
                  </div>:
                  <div className="flex gap-[5px] px-[5px] rounded-[5px] items-center bg-[#333] hover:bg-[#333] duration-[0.25s]"
                    onClick={() => {
                      //copyToClipboard(share_link[0]);
                      const host = window.location.origin;
                      const link = `${host}/logs/${share_link[0]}`;
                      navigator.clipboard.writeText(link).then(() => {
                        console.log('Link copied to clipboard');
                        alert('Link copied to clipboard');
                      });
                    }}>
                    <div className=" text-[12px]"><Tran text={'COPY LINK'} lang={lang[0]}></Tran></div>
                    <div className="g_i">content_copy</div>
                    <div className="text-[12px]">{share_link[0]}</div>
                  </div>
                }
              </Log_file.Provider>
            </div>
          </div>
        </div>

        <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px] flex-grow overflow-hidden">
          <div className=" @container bg-[#555] h-[100%] w-[100%] rounded-[5px] p-[5px] text-[25px] flex justify-between items-center gap-[5px] overflow-hidden">
            <Log_file.Provider value={log_file_state}>
              <Log_reader log_file_name={log_file_name} />
            </Log_file.Provider>
          </div>
        </div>

      </div>
    </>
  );
}
