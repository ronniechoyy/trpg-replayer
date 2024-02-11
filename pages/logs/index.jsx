import Butthole from "@/components/Butthole";
import Tran from "@/lib/translater";
import translateApiCall from "@/lib/translater";
import Link from "next/link";
import { useRouter } from "next/router";
import { createRef, useState, useEffect, useContext } from "react";
import { LangContext } from "../_app";
import Head from "next/head";


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
          const storedTimeline = localStorage.getItem(`${log_name}_replayReadingProgress`);
          return (<Replay_block key={index} title={log_name} description={file} progress={Math.round(storedTimeline * 100)} url={`/logs/${log_name}`} />)
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
        multiple
        style={{ display: 'none' }}
        accept=".json,.html,.txt"
        onChange={(e) => handleFiles(e.target.files)}
      />
      <div
        className={`fixed max-w-[90%] max-h-[90%] w-[500px] h-[500px] bg-[#555] rounded-[5px] left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]
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
          <div className="text-[18px] text-[#bbb] mt-[20px]">
            ( <Tran text={'At the moment only support'} lang={lang[0]} /> CCFOLIA's logs )
          </div>
          
        </div>
      </div>
    </>
  );
}

function Replay_block({ title = 'Title', description = "Description", progress ="0", url=''}){
  const lang = useContext(LangContext);
  return(
    <div className="bg-[#555] hover:bg-[#5f5f5f] rounded-[5px] items-center text-left gap-[15px] px-[25px] py-[10px] grid @[800px]:grid-cols-[auto_200px]">

      <div className="flex gap-[5px] items-center @container">
        <div className="g_i text-[30px] @[400px]:text-[80px]">movie</div>
        <div>
          <div className="text-[15px] @[400px]:text-[25px] font-[600]">{title}</div>
          <div className="text-[12px] @[400px]:text-[15px]">{description}</div>
        </div>
      </div>

      <div className="flex gap-[15px] items-center justify-end">
        <div className=" ">
          <div className="text-[15px]"><Tran text={'Progresstion'} lang={lang[0]} /></div>
          <div className="text-[35px]">{progress} %</div>
        </div>
        <div className="flex flex-col gap-[5px]">
          <Link href={url}>
            <Butthole theme={'dark'} className={'p-[12px] h-[50px] flex items-center justify-center'} onClick={() => { }}>
              <div className="g_i">play_arrow</div>
            </Butthole>
          </Link>
          <Butthole theme={'dark'} className={'p-[12px] h-[15px] flex items-center justify-center'} onClick={() => {
            confirm('Are you sure to delete this log?') &&
              localStorage.removeItem(description);
            window.dispatchEvent(new Event('localStorageChange'));
          }}>
            <div className="g_i text-[15px]">delete</div>
          </Butthole>

        </div>
        
        

      </div>

    </div>
  )
}

export default function Logs() {
  const router = useRouter();
  const uploader_state = useState(false);
  const lang = useContext(LangContext);
  return (
    <>
      <Head>
        <title>Logs - TRPG Replayer</title>
        <meta name="description" content="A simple tool to replay your TRPG sessions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className=" absolute inset-0 bg-[#333] text-[#eee]">
        <div className="flex flex-col text-center justify-center items-center p-[5px] gap-[5px]">
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[5px_10px] text-[15px] @[400px]:text-[20px] flex justify-between items-center gap-[5px] @container">

            <div className="flex flex-col @[400px]:flex-row gap-[15px]">
              <Link className=" cursor-pointer select-none" href={'/'} >TRPG Replayer Beta v0.0.1</Link>
              <Link className=" cursor-pointer select-none flex items-center gap-[5px]" href={'https://github.com/ronniechoyy/trpg-replayer'} >
                <div className="text-[15px]">by RONI</div>
                <img className="w-[20px] object-contain invert" src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="RONI GIT" /></Link>
            </div>
            
            <div className=" flex flex-col-reverse @[400px]:flex-row gap-[15px]">
              <select className="text-[15px] text-right bg-[#00000000] [&>*]:bg-[#00000000] focus:bg-[#555]" name="lang" id="" 
              value={lang[0]} onChange={(v) => { lang[1](v.target.value) }}>
                <option value="zh-TW"><Tran text={'Traditional Chinese'} lang={lang[0]} /></option>
                <option value="en"><Tran text={'English'} lang={lang[0]} /></option>
                <option value="ja"><Tran text={'Japanese'} lang={lang[0]} /></option>
                <option value="es"><Tran text={'Spanish'} lang={lang[0]} /></option>
                <option value="fr"><Tran text={'French'} lang={lang[0]} /></option>
                <option value="de"><Tran text={'German'} lang={lang[0]} /></option>
                <option value="it"><Tran text={'Italian'} lang={lang[0]} /></option>
                <option value="pt"><Tran text={'Portuguese'} lang={lang[0]} /></option>
                <option value="ru"><Tran text={'Russian'} lang={lang[0]} /></option>
                <option value="ar"><Tran text={'Arabic'} lang={lang[0]} /></option>
                <option value="hi"><Tran text={'Hindi'} lang={lang[0]} /></option>
              </select>
              <div className="text-[18px] text-right"><Tran text={'My logs'} lang={lang[0]} /></div>
            </div>
            
          </div>
          <div className="bg-[#555] w-[100%] rounded-[5px] p-[10px] text-[25px] flex flex-col gap-[5px]">

            <div className="flex gap-[5px] text-[15px]">
              <Butthole theme={'dark'} className={'p-[12px] flex justify-center gap-[5px] w-[100%]'} onClick={() => { uploader_state[1](true) }}>
                <div className="g_i">upload</div>
                
                <Tran text={'Open logs'} lang={lang[0]} />
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
