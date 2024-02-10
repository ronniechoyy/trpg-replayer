import Butthole from "@/components/Butthole";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState, useEffect } from "react";

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

function Log_reader({ log_file_name}){
  const logFile = useState({key: '', value: '123'})
  const logHtml_string = useState('')
  
  
  useEffect(() => {
    const logFile_raw = findItem((key) => log_file_name === key.split('.').shift().split('[').shift());
    if(logFile_raw.key === ''){return}
    logFile[1](logFile_raw)
    
  }, [log_file_name])

  useEffect(() => {
    console.log('logFile', logFile[0]);
    const htmlString = dataUrlToString(logFile[0].value);
    console.log('htmlString', htmlString);
    logHtml_string[1](htmlString)
  }, [logFile[0]])
  
  return(
    <>
      <div className="text-[15px] overflow-y-scroll" dangerouslySetInnerHTML={{ __html: logHtml_string[0] }}></div>
    </>
  )
}


export default function log_player() {
  const { log_file_name } = useRouter().query;
  console.log('log_file_name', log_file_name);
  const router = useRouter();

  return (
    <>
      <div className=" fixed inset-0 bg-[#333] text-[#eee]">
        <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px]">
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[20px] text-[25px] flex justify-between items-center gap-[5px]">
            <Link className=" cursor-pointer select-none flex gap-[5px] items-center" href={'/logs'} >
              <div className="g_i">keyboard_arrow_left</div>
              <div className=" text-[20px]">{log_file_name}</div>
            </Link>
            
          </div>

        </div>
        <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px]">
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[20px] text-[25px] flex justify-between items-center gap-[5px]">
            <Log_reader log_file_name={log_file_name} />
          </div>

        </div>
      </div>

    </>
  );
}
