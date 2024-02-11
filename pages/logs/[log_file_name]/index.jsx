import Butthole from "@/components/Butthole";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState, useEffect, useContext } from "react";
import keywords from "@/lib/keywords";
import Tran from "@/lib/translater";
import { LangContext } from "@/pages/_app";
import Head from "next/head";

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

function Character_panel({log_charactors, char_update_color, color_randomize, cycleSortOption, sortOption, sortedCharacters, lang}){
  const panel_state = useState(true);
  const char_state = useState([
    { name: 'HP', value: null, max: null, min: 0 },
    { name: 'MP', value: null, max: null, min: 0 },
    { name: 'SAN', value: null, max: null, min: 0 },
  ])
  const char_ability = useState([
    { name: 'STR', value: null },
    { name: 'CON', value: null },
    { name: 'POW', value: null },
    { name: 'DEX', value: null },
    { name: 'SAP', value: null },
    { name: 'SIZ', value: null },
    { name: 'INT', value: null },
    { name: 'EDU', value: null },
  ])

  function Stat_block({name, value, max}){
    return(
      <div style={{
        backgroundImage: `linear-gradient(90deg, #666 ${value / max * 100}%, #333 ${value / max * 100}%)`
      }}>{`${name} ${value??'??'}/${max??'??'}`}</div>
    )
  }
  
  function Abliity_block({name, value}){
    return (
      <div className="flex flex-col">
        <div>{name}</div>
        <div>{value??'??'}</div>
      </div>
    )
  }

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
                  <a key={index} className="flex flex-col gap-[5px] bg-[#444] p-[2px] rounded-[5px]"
                    href={`#${char.character}`}>
                      <div className="flex gap-[5px] items-center">
                        <div className="color_circle w-[15px] rounded-[15px] aspect-square cursor-pointer"
                          style={{ backgroundColor: char.color }} onClick={(e) => e.currentTarget.children[0].click()}>
                          <input type="color" value={char.color} style={{ display: 'none' }} onChange={(e) => char_update_color(char.character, e.target.value)} />
                        </div>
                        <div className={`text-[14px] font-[700] `} style={{ color: char.color }}>{char.character}</div>
                        <div className="text-[12px] bg-[#555] p-[5px] rounded-[5px] h-[14px] flex items-center">{char.message.length}</div>
                      </div>
                    <div className="grid grid-cols-3 gap-[2px] [&>*]:bg-[#2e2e2e] text-[12px] [&>*]:rounded-[5px]">
                      {
                        char_state[0].map((stat, index) => {
                          return (
                            <Stat_block key={index} name={stat.name} value={stat.value} max={stat.max} />
                          )
                        })
                      }
                      
                    </div>
                    <div className="grid grid-cols-8 gap-[2px] [&>*]:bg-[#2e2e2e] text-[12px] [&>*]:rounded-[5px]">
                      {
                        char_ability[0].map((stat, index) => {
                          return (
                            <Abliity_block key={index} name={stat.name} value={stat.value} />
                          )
                        })
                      }
                    </div>

                  </a>
                )
              })
            }
          </div>
        </>
       : <></>}
      
    </div>
  )
}

function Chat_log_viewer({log_json, log_charactors, lang}){
  return(
    <div className="chat_log_viewer overflow-y-scroll h-[100%] w-[100%] flex flex-col gap-[5px] p-[5px] bg-[#333] rounded-[5px]">
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

function Log_reader({ log_file_name}){
  const lang = useContext(LangContext);

  const logFile = useState({key: '', value: '123'})
  const logHtml_string = useState('')
  const log_json = useState([])
  const log_charactors = useState([/*{ character: 'character', color: 'log_color', message: [] }*/])
  const log_locations = useState([])
  const log_keywords = useState([])

  const log_read_progress = useState(0)
  
  useEffect(() => {
    const logFile_raw = findItem((key) => log_file_name === key.split('.').shift().split('[').shift());
    if(logFile_raw.key === ''){return}
    logFile[1](logFile_raw)
    
  }, [log_file_name])

  useEffect(() => {
    //console.log('logFile', logFile[0]);
    if(logFile[0].key === ''){return}
    const htmlString = dataUrlToString(logFile[0].value);
    //console.log('htmlString', htmlString);
    logHtml_string[1](htmlString)
  }, [logFile[0]])

  useEffect(() => {
    const danger_html = document.querySelector('.danger_html')
    const chat_logs = danger_html.querySelectorAll('p');
    console.log('danger_html', danger_html.length);
    //danger_html.style.display = 'none';
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

        const foundLocation = locationDictionary.find(location => message.includes(location));
        if (foundLocation) {
          const updatedMessage = message.replace(foundLocation, `[[${foundLocation}]]`);
          console.log('Updated message', updatedMessage);
        }

        if (index !== -1) {
          // If the character exists, add the message to its message array
          const newChar = { ...v[index], message: [...v[index].message, message] };
          return [...v.slice(0, index), newChar, ...v.slice(index + 1)];
        } else {
          // If the character doesn't exist, add it to the array
          first_message = true;
          return [...v, {
            character: character, color: log_color, message: [message], 
            stat: [
              { name: 'HP', value: null, max: null, min: 0 },
              { name: 'MP', value: null, max: null, min: 0 },
              { name: 'SAN', value: null, max: null, min: 0 },
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
              { name: '目星', value: null },
              
              
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
        
        <Chat_log_viewer log_json={log_json[0]} log_charactors={log_charactors[0]} lang={lang[0]} />

      </div>
      
    </>
  )
}


export default function log_player() {
  const { log_file_name } = useRouter().query;
  console.log('log_file_name', log_file_name);
  const router = useRouter();

  return (
    <>
      <Head>
        <title>{log_file_name} - TRPG Replayer </title>
        <meta name="description" content="A simple tool to replay your TRPG sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-[#333] text-[#eee] flex flex-col h-[100vh] w-[100%]">

        <div className="flex flex-col text-center justify-center items-center p-[5px_5px_0px_5px] gap-[5px]">
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[5px] text-[20px] flex justify-between items-center gap-[5px]">
            <Link className=" cursor-pointer select-none flex gap-[5px] items-center" href={'/logs'} >
              <div className="g_i">keyboard_arrow_left</div>
              <div className=" text-[20px]">{log_file_name}</div>
            </Link>
          </div>
        </div>

        <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px] flex-grow overflow-hidden">
          <div className=" @container bg-[#555] h-[100%] w-[100%] rounded-[5px] p-[5px] text-[25px] flex justify-between items-center gap-[5px] overflow-hidden">
            <Log_reader log_file_name={log_file_name} />
          </div>
        </div>

      </div>
    </>
  );
}
