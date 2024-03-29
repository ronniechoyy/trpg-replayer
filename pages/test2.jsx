import Butthole from "@/components/Butthole";
import Head from "next/head";
import T_tooltip from "@/components/T_tooltip";

export default function Test2() {
  return (
    <>
      <Head>
        <title>Logs - TRPG Replayer</title>
        <meta name="description" content="A simple tool to replay your TRPG sessions" />
        <link rel="icon" href="/trpg_viewer.png" />
      </Head>
      <div className=" absolute inset-0 bg-[#333] text-[#eee] gap-[5px] flex flex-col p-[5px]">
        <T_tooltip title={'haha'}>
          <Butthole theme={'light'} className={`p-[10px] text-[#333] text-[20px]`}>
            Something
          </Butthole>
        </T_tooltip>
      </div>
    </>
  );
}