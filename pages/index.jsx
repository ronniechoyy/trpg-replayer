import Butthole from "@/components/Butthole";
import Tran from "@/lib/translater";
import { useRouter } from "next/router";
import { LangContext } from "./_app";
import { useContext } from "react";

export default function Home() {
  const lang = useContext(LangContext);
  const router = useRouter();
  return (
    <>
      <div className=" absolute inset-0 flex text-center justify-center items-center bg-[#333] text-[#eee]">
        <div>
          <div className=" font-[600] text-[30px]">
            Welcome to TRPG Replayer
          </div>
          <div className=" font-[300] text-[20px]">
            <Tran text={'A simple tool to replay your TRPG sessions'} lang={lang[0]} />
          </div>
          <Butthole theme={'light'} className={`mt-[20px] p-[20px] text-[#333] text-[20px]`}
            onClick={() => { router.push('/logs') }}><Tran text={'Get started'} lang={lang[0]} /></Butthole>
        </div>
      </div>
    </>
  );
}
