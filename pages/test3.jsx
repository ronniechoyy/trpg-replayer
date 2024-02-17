import Butthole from "@/components/Butthole";
import Head from "next/head";
import T_tooltip from "@/components/T_tooltip";
import RPG_player from "@/components/RPG_player";

export default function Test2() {
  return (
    <>
      <Head>
        <title>Logs - TRPG Replayer</title>
        <meta name="description" content="A simple tool to replay your TRPG sessions" />
        <link rel="icon" href="/trpg_viewer.png" />
      </Head>
      <div className=" fixed inset-0 bg-[#333] text-[#eee] gap-[5px] flex flex-col p-[5px]">
        <RPG_player current_index={1000}  />
      </div>
      
    </>
  );
}