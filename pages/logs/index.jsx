import Butthole from "@/components/Butthole";
import Tran from "@/lib/translater";
import translateApiCall from "@/lib/translater";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState, useEffect, useContext } from "react";
import { LangContext } from "../_app";


function Replay_handler() {
  const lang = useContext(LangContext);
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const updateFiles = () => {
      const fileNames = [];
      for (let i = 0; i < localStorage.length; i++) {
        fileNames.push(localStorage.key(i));
      }
      setFiles(fileNames);
    };

    window.addEventListener('localStorageChange', updateFiles);

    // Initial update
    updateFiles();

    // Cleanup
    return () => {
      window.removeEventListener('localStorageChange', updateFiles);
    };
  }, []);

  return (
    <div className="replay_container @container flex-grow bg-[#333]  rounded-[5px] flex flex-col gap-[10px] p-[10px]">
      {files.map((file, index) => {
        if(file.split('.').pop() == 'json' || file.split('.').pop() == 'html' || file.split('.').pop() == 'txt' ){
          let log_name = file.split('.').shift();
          if(file.split('[').length > 1){
            log_name = file.split('[').shift();
          }
          return (<Replay_block key={index} title={log_name} description={file} progress={'0'} url={`/logs/${log_name}`} />)
        }
      })}
    </div>
  );
}

function Uploader({ onUploaded }) {
  const lang = useContext(LangContext);
  const [dragging, setDragging] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragIn = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.dataTransfer.items && e.dataTransfer.items.length > 0) {
      setDragging(true);
    }
  };

  const handleDragOut = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleFiles = (files) => {
    for (let i = 0; i < files.length; i++) {
      if (files[i].type === 'application/json' || files[i].type === 'text/html' || files[i].type === 'text/plain') {
        const reader = new FileReader();
        reader.onloadend = () => {
          localStorage.setItem(files[i].name, reader.result);
          window.dispatchEvent(new Event('localStorageChange'));
          onUploaded();
        };
        reader.readAsDataURL(files[i]);
      }
    }
  };

  const fileInput = createRef();
  

  const handleClick = () => {
    fileInput.current.click();
  };

  return (
    <>
      <input
        ref={fileInput}
        type="file"
        style={{ display: 'none' }}
        accept=".json,.html,.txt"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div
        className={`fixed max-w-[90%] w-[500px] h-[500px] bg-[#555] rounded-[5px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
        grid place-content-center`}
        
      >
        <div className={`absolute inset-0 bg-[#333] ${dragging ? 'bg-[#666]' : ''} m-[20px] rounded-[5px] flex flex-col justify-center items-center text-[#eee] text-[20px]`}
        
          onClick={handleClick}
          onDragOver={handleDrag}
          onDragEnter={handleDragIn}
          onDragLeave={handleDragOut}
          onDrop={handleDrop}>
            
            <div className=""><Tran text={'Click Here to upload'} lang={lang[0]} /></div>
            <div> <Tran text={'or'} lang={lang[0]} /></div>
            <div><Tran text={'Drag and Drop'} lang={lang[0]} /></div>
        </div>
      </div>
    </>
  );
}

function Replay_block({ title = 'Title', description = "Description", progress ="0", url=''}){
  const lang = useContext(LangContext);
  return(
    <div className="bg-[#555] hover:bg-[#5f5f5f] rounded-[5px] items-center text-left gap-[15px] px-[25px] grid @[800px]:grid-cols-[auto_200px]">

      <div className="flex gap-[5px] items-center">
        <div className="g_i text-[80px]">movie</div>
        <div>
          <div className="text-[25px] font-[600]">{title}</div>
          <div className="text-[15px]">{description}</div>
        </div>
      </div>

      <div className="flex gap-[15px] items-center justify-end">
        <div className=" ">
          <div className="text-[15px]"><Tran text={'Progresstion'} lang={lang[0]} /></div>
          <div className="text-[35px]">{progress} %</div>
        </div>
        <Link href={url}>
          <Butthole theme={'dark'} className={'p-[12px]'} onClick={() => { }}>
            <div className="g_i">play_arrow</div>
          </Butthole>
        </Link>
        

      </div>

    </div>
  )
}

export default function Home() {
  const router = useRouter();
  const uploader_state = useState(false);
  const lang = useContext(LangContext);
  return (
    <>
      <div className=" absolute inset-0 bg-[#333] text-[#eee]">
        <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px]">
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[10px] text-[25px] flex justify-between items-center gap-[5px]">
            <Link className=" cursor-pointer select-none" href={'/'} >TRPG Replayer Beta v0.0.1</Link>
            <div className="flex gap-[5px]">
              <select className="text-[15px] text-right bg-[#00000000] [&>*]:bg-[#00000000] focus:bg-[#555]" name="lang" id="" 
              value={lang[0]} onChange={(v) => { lang[1](v.target.value) }}>
                <option value="zh-TW">Chinese (Traditional)</option>
                <option value="en">English</option>
                <option value="ja">Japanese</option>
                <option value="es">Spanish</option>
                <option value="fr">French</option>
                <option value="de">German</option>
                <option value="it">Italian</option>
                <option value="pt">Portuguese</option>
                <option value="ru">Russian</option>
                <option value="ar">Arabic</option>
                <option value="hi">Hindi</option>
              </select>
              <div className=" text-[20px]"><Tran text={'My logs'} lang={lang[0]} /></div>
            </div>
            
          </div>
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[10px] text-[25px] flex flex-col gap-[5px]">

            <div className="flex gap-[5px] text-[15px]">
              <Butthole theme={'dark'} className={'p-[12px] flex gap-[5px]'} onClick={() => { uploader_state[1](true) }}>
                <div className="g_i">upload</div>
                
                <Tran text={'Upload logs'} lang={lang[0]} />
              </Butthole>
              <Butthole theme={'dark'} className={'p-[12px] flex gap-[5px]'} onClick={() => { }}>
                <div className="g_i">delete</div>
                <Tran text={'Delete'} lang={lang[0]} />
                </Butthole>
            </div>

            <Replay_handler />
          </div>

        </div>
      </div>

      {uploader_state[0]?
        <div className=" fixed inset-0 bg-[#02020285]" onClick={(e) => { 
          if (e.target === e.currentTarget) { uploader_state[1](false); }
        }}>
          <Uploader onUploaded={() => { uploader_state[1](false); }} />
        </div>:<></>}
      
    </>
  );
}
