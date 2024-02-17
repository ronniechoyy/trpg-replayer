import Butthole from "@/components/Butthole";
import Head from "next/head";

async function test_upload() {
  const dataurl = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify({ test: 'test' }));

  // Convert the data URL to a Blob
  const responseToBlob = await fetch(dataurl);
  const blob = await responseToBlob.blob();

  // Create a FormData object and append the Blob to it
  const formData = new FormData();
  formData.append('file', blob, 'data.json');

  // Send the FormData object as the body of the POST request
  const response = await fetch('/api/log_upload', {
    method: 'POST',
    body: formData,
  });

  console.log(await response.json());
}

export default function Test1() {
  return (
    <>
      <Head>
        <title>Logs - TRPG Replayer</title>
        <meta name="description" content="A simple tool to replay your TRPG sessions" />
        <link rel="icon" href="/trpg_viewer.png" />
      </Head>
      <div className=" absolute inset-0 bg-[#333] text-[#eee] gap-[5px] flex flex-col p-[5px]">
        <Butthole theme={'light'} className={`p-[10px] text-[#333] text-[20px]`} onClick={async()=>{
          const r2_objects = await fetch('/api/log_upload?key=1707859855925_5504746123', { method: 'GET' });
          console.log(await r2_objects.json());
         }}>
          get haha.json
        </Butthole>
        <Butthole theme={'light'} className={`p-[10px] text-[#333] text-[20px]`} onClick={async () => {
          test_upload()
        }}>
          upload test
        </Butthole>
      </div>
    </>
  );
}