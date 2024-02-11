import Butthole from "@/components/Butthole";
import Tran from "@/lib/translater";
import { useRouter } from "next/router";
import { LangContext } from "./_app";
import { useContext } from "react";
import Head from "next/head";

export default function Home() {
  const lang = useContext(LangContext);
  const router = useRouter();
  return (
    <>
    <Head>
      <title>TRPG Replayer</title>
      <meta name="description" content="A simple tool to replay your TRPG sessions" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
      <div className=" absolute inset-0 flex text-center justify-center items-center bg-[#333] text-[#eee]">
        <div>
          <div className=" font-[600] text-[30px]">
            <Tran text={'Welcome to'} lang={lang[0]} /> TRPG Replayer
          </div>
          <div className=" font-[300] text-[20px]">
            <Tran text={'A simple tool to replay your TRPG logs'} lang={lang[0]} />
          </div>
          <div className="flex justify-center mt-[20px] ">
            <div className="text-[18px] g_i">language</div>
            <select className="text-[15px]  text-center bg-[#00000000] [&>*]:bg-[#00000000] focus:bg-[#555]" name="lang" id=""
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

          </div>
          
          <Butthole theme={'light'} className={`mt-[20px] p-[20px] text-[#333] text-[20px]`}
            onClick={() => { router.push('/logs') }}><Tran text={'Get started'} lang={lang[0]} /></Butthole>
        </div>
      </div>
    </>
  );
}
