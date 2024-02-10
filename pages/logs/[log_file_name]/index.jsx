import Butthole from "@/components/Butthole";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState, useEffect, use } from "react";

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

function Log_reader({ log_file_name}){
  const logFile = useState({key: '', value: '123'})
  const logHtml_string = useState('')
  const log_json = useState([])
  const log_charactors = useState([])
  
  
  useEffect(() => {
    const logFile_raw = findItem((key) => log_file_name === key.split('.').shift().split('[').shift());
    if(logFile_raw.key === ''){return}
    logFile[1](logFile_raw)
    
  }, [log_file_name])

  useEffect(() => {
    //console.log('logFile', logFile[0]);
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

        if (index !== -1) {
          // If the character exists, add the message to its message array
          const newChar = { ...v[index], message: [...v[index].message, message] };
          return [...v.slice(0, index), newChar, ...v.slice(index + 1)];
        } else {
          // If the character doesn't exist, add it to the array
          first_message = true;
          return [...v, { character: character, color: log_color, message: [message] }];
        }
      });
      log_json[1]((v) => [...v, { color: log_color, channel: channel, character: character, message: message, first_message: first_message }])
    }
    
  }, [logHtml_string[0]])

  useEffect(() => {
    console.log('log_json', log_json[0]);
    console.log('log_charactors', log_charactors[0]);
  }, [log_json[0]])
  
  return(
    <>
      <div className="text-[15px] danger_html hidden" dangerouslySetInnerHTML={{ __html: logHtml_string[0] }}></div>
      <div className=" h-[100%] w-[100%] gap-[5px]
      grid grid-cols-1 grid-rows-[200px_auto] @[600px]:grid-cols-[250px_auto] @[600px]:grid-rows-1">
        <div className="chat_log_viewer overflow-y-scroll h-[100%] w-[100%] flex flex-col gap-[5px] p-[5px] bg-[#333] rounded-[5px]">
          <div className="char_container">
            <div className="text-[15px]">Charactors</div>
            <div className="flex flex-col gap-[5px] p-[5px] rounded-[5px]">
              {
                log_charactors[0].map((char, index) => {
                  return (
                    <a key={index} className="flex gap-[5px] bg-[#444] p-[2px] rounded-[5px] items-center" 
                    href={`#${char.character}`}>
                      <div className={`text-[14px] font-[700] `} style={{ color: char.color }}>{char.character}</div>
                      <div className="text-[12px] bg-[#555] p-[5px] rounded-[5px] h-[14px] flex items-center">{char.message.length}</div>
                    </a>
                  )
                })
              }
            </div>
          </div>
          <div className="chapter_container">
            <div className="text-[15px]">Chapter</div>
          </div>
          
        </div>
        <div className="chat_log_viewer overflow-y-scroll h-[100%] w-[100%] flex flex-col gap-[5px] p-[5px] bg-[#333] rounded-[5px]">
          {
            log_json[0].map((log, index) => {
              return (
                <div key={index} id={log.character} className={`flex flex-col gap-[2px]  justify-center 
                text-left shadow-[0px_0px_3px_#555] rounded-[5px] p-[5px] hover:bg-[#444] duration-[0.25s]`}>
                  <div className="flex gap-[5px] items-center">
                    <div className=" text-[12px] bg-[#555] p-[5px] rounded-[5px]">{log.channel.split('[')[1].split(']')[0]}</div>
                    <div className={`text-[15px] font-[900] `} style={{ color: log.color }}>{log.character}</div>
                  </div>
                  <div className=" text-[15px]">{log.message}</div>
                </div>
              )
            })
          }
        </div>

      </div>
      
    </>
  )
}


export default function log_player() {
  const { log_file_name } = useRouter().query;
  console.log('log_file_name', log_file_name);
  const router = useRouter();

  return (
    <div className="bg-[#333] text-[#eee] flex flex-col h-[100vh] w-[100%]">

      <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px]">
        <div className="bg-[#555] w-[100%] rounded-[5px] p-[10px] text-[25px] flex justify-between items-center gap-[5px]">
          <Link className=" cursor-pointer select-none flex gap-[5px] items-center" href={'/logs'} >
            <div className="g_i">keyboard_arrow_left</div>
            <div className=" text-[20px]">{log_file_name}</div>
          </Link>
        </div>
      </div>

      <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px] flex-grow overflow-hidden">
        <div className=" @container bg-[#555] h-[100%] w-[100%] rounded-[5px] p-[10px] text-[25px] flex justify-between items-center gap-[5px] overflow-hidden">
          <Log_reader log_file_name={log_file_name} />
        </div>
      </div>

    </div>
  );
}
