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
        <RPG_player current_index={0} log_json={[]} log_charactors={[]}  />
      </div>
      
    </>
  );
}

const test_log_json = [
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        2月28日，畢業典禮前一天。 \n      ",
    "first_message": true
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        剛過下午三點，放完學教室裡人也已經零零散散的，時不時能聽見其他人在把握著這高中的最後一個日子般在玩鬧、談笑著。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        至於你們，現在正把幾張課桌併在一起，與青一起打牌。現在玩的是抽鬼牌。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        CHOICE 路卡 露娜 瑪琳 (choice 路卡 露娜 瑪琳) ＞ 露娜\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「來，抽吧！」他將手牌背面朝前對著露娜，其中一張牌明顯比其他張還要突出。 \n      ",
    "first_message": true
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (這....太明顯了吧~) \n      ",
    "first_message": true
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        特意避開突出的那張伸手拉出最左面那張（ \n      ",
    "first_message": true
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請露娜骰個幸運～ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=65 【幸運】 (1D100<=65) ＞ 76 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        露娜從青手中抽了一張牌，看你抽的不是突出的那張他吐了吐舌頭露出「真可惜」的表情。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        這張牌雖然不是鬼牌，不過也跟你手上的湊不成對。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        CHOICE 路卡 瑪琳 (choice 路卡 瑪琳) ＞ 瑪琳\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （露出可惜的表情 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        接下來請瑪琳抽露娜一張牌，骰個幸運～ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=90 【幸運】 (1D100<=90) ＞ 100 ＞ 致命性失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瑪琳戰戰兢兢地抽了一張牌，然而很可惜地這張……是鬼牌。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你不禁覺得奇怪，原來鬼牌在露娜手上嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (甚麼？？？？？) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （暗暗微笑 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (瞪) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (燦笑) \n      ",
    "first_message": true
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「喔喔，怎麼了是不是抽到鬼牌？咦？可是……？」突然燒腦又突然算了放棄思考的表情 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        再來請路卡從瑪琳手中抽一張牌。請骰個幸運～ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=70 【幸運】 (1D100<=70) ＞ 52 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你從瑪琳手中抽了一張牌，剛好湊成對棄掉，現在看起來大概手牌最少的是路卡吧。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「Luck！～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        可惡~~~ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        路卡今天很幸運啊 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊～～～不要以為這樣就贏了喔！換我抽了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「日常運轉啦～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青抽了一張牌，看到之後馬上就鼓起了嘴來。看起來也是運氣背的一天。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        沒事的 青 我也差不多... \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「換妳了露娜，來吧！打倒路卡！」再次將牌對向露娜，裡面依舊有一張看起來就是一臉叫你抽它的那張牌。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （先把手放在那張牌上） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （然後都是拿第一張（） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (露娜？!) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊～～～！？心理戰！？可惡！怎麼這樣玩弄我的心！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請露娜骰個幸運～ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=65 【幸運】 (1D100<=65) ＞ 84 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        雖然是沒有鬼牌，但妳的手牌還是純粹地增加了沒有湊成對。手牌在牌多的人之間流轉的難過情景。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （難過（（ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        接著請瑪琳抽露娜一張牌吧～ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (緊張...) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (抽中間) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        來吧！ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請瑪琳來個幸運！ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=90 【幸運】 (1D100<=90) ＞ 74 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （驚 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        大概是因為剛才抽了鬼牌的運氣平衡回來了，妳湊成對棄了一副牌。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嘻嘻~ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (把一張牌很突出放在中間) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        （等等這不是我剛才的招數嗎） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （望著突出中間的牌思考了幾秒） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        路卡小心阿！ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        來!路卡! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        瑪琳樣子怪怪的 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「怎麼樣，路卡，下好離手（？）喔！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「放馬過來！！」抽掉最右邊的卡牌 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        選中間!相信我! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        啊! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        草　請路卡來個幸運-20 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=70 【幸運】 (1D100<=70) ＞ 86 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        路卡被心理戰（？）所蠱惑抽了邊邊的牌，不過還好也是沒抽到鬼牌。牌沒湊成對就是了。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈 你中計了路卡! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「What！？」一臉哀傷表情 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來路卡你今天運氣真的不怎麼樣」表示同情 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「等等，什麼，瑪琳利用了我的招數又拿去進化嗎？太奸詐了吧～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈這叫戰術啊! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        瑪琳太壞了（ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哦哦……！」發出了感覺很像很厲害但其實不明所以的感嘆。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「唔嗚嗚......下次我不會上當的。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        露娜也很壞啦~壞女人~ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們又如此抽了幾輪，每個人手上的牌也跟著越來越少。請各位骰個1d100吧。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [メイン]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D100 (1D100) ＞ 9\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1D100 (1D100) ＞ 27\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1D100  (1D100) ＞ 17\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        首先第一位將手牌清空的是瑪琳。在她的心理戰翻弄之下鬼牌終究是被脫手到別人手上了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而從瑪琳手中獲得鬼牌的路卡也是很快地將鬼牌讓給了衰小的下家，奪得第二名。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而最後兩位水深火熱……可能沒有很水深火熱的對決之下，露娜成功迴避了最後一名的下場。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊～～可惡，輸了～！！再來一次，等著瞧吧這次我一定會贏～～！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        他大喊一聲碰地趴到桌上，很不甘心地扭來扭去。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來露娜我今天把運氣都用在遊戲裡了，不過青還是比較倒霉。。哈」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈 這不好說呢~>青 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「明明抽卡的時候我也有歐洲過幾次……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        來 青 作為最後一名請大家喝果汁! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「可能下次會更好的呢」拍拍青的肩膀 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好啦，等一下回去再去超商買果汁請你們嘛。暑假也再約來玩吧～～～市區好像也有新開的桌遊店可以去！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        桌遊店? \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「下次就是我贏了，等著瞧吧！！」抓著路卡拍到肩上的手。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「噢，對啊，我聽商店街的阿姨說的，聽說暑假就會開了喔。」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「卓遊店好像很有趣的樣子，先預我一份」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好像很不錯嘛！你們要去玩我也一起去」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        瑪琳我也要去~!瑪琳我也要去~! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好耶！說好囉～啊、瑪琳要不要之後挑戰約兔田去看看啊？搞不好會成喔？」輕輕肘擊了一下瑪琳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這這這...!兔田她很社恐 感覺會很難呢...(害羞 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嘿嘿嘿船長這次是機會喔......」(燦笑) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「這不是正好嗎？就說只有你們兩個而已，就不用怕有其他人了～之類的！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「兔田肯定會來吧，為了見瑪琳你」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        而且兔田比較喜歡自己一個人在家裏玩...(不好意思) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        紫宮<甚麼？!她會嗎~~~(開心自戀中) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        約不約好呢....但免田應該想自己一個...啊不 但她想見我話....(纠結 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「放心，我們不會出現的，約起來，約起來」（笑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎呦，問看看不就知道了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        不管了!我去約約看! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (用手机問問) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (在旁邊為船長做打氣手勢) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （在瑪琳身邊偷聽 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        青也在旁邊一邊做打氣的手勢一邊小聲碎碎唸「加油！加油！」。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「加油！加油！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瑪琳在彷彿被全世界祝福（以及圍觀）的氛圍之下點開了與兔田的交友軟體介面。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        妳要傳什麼樣的訊息給她？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        \"佩克拉~市區好像有新開的桌遊店 你要來玩嗎？\" \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "兔田佩克拉",
    "message": "\n        \"桌遊店？感覺好有趣!\" \n      ",
    "first_message": true
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "兔田佩克拉",
    "message": "\n        \"但今日有想玩的遊戲想玩 抱歉了瑪琳淋\" \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "兔田佩克拉",
    "message": "\n        \"下次再約吧!\" \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ........... \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「哎呀，有點冷漠的感覺」瞪 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        \"沒問題 那下次吧~\" \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「這應該提前約的話就成了吧！瑪琳瑪琳，趕快問那她什麼時候有空！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (放個飛吻的表情包) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嘛......今天沒空那就下次吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "免田",
    "message": "\n        \"好惡心wwwww\" \n      ",
    "first_message": true
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        紫宮<沒事的 免田是注意個人空間的人 至少沒有被用! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        上一秒還在鼓舞瑪琳的青拍了拍她的背，露出了「Oh...不要氣餒……」的表情。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        你甚麼表情!先說好我可是有攻略免田百科全書的達人啦!>青 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不要灰心......船長還有我們在。」一臉傷心的表情 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來今次沒戲呢」稍為扁嘴 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎，那個什麼百科全書是什麼東西？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        就是....我是最了解兔田的人!只要有關免田我都懂! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哦哦～的確班上跟兔田最熟的好像就是妳了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「免田百科全書...真像船長會做的方式嘛......」略為沉思 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「呵呵，看瑪琳一臉得意的樣子，一說起兔田就停不下來」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        沒錯 佩克拉只是忙住玩幻獸帕魯才不來! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們歷經了一齣青春的戲碼（？）拌著嘴，不知不覺間其他同學都已經回家了，教室裡只剩你們幾個人而已。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        突然間，你們的班導從門外探了進來。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "班導",
    "message": "\n        「喂！你們幾個！已經四點半了快點離開學校！」 \n      ",
    "first_message": true
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "班導",
    "message": "\n        「早上不是說過明天畢業典禮，今天提早放學嗎？再怎麼喜歡學校也該回家了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        看看時間，現在的確是剛過四點半。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        啊!都忘記時間了! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「今天玩的有點上頭了，都忘了時間 哈」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「WHAT ！？都這時間了啊POOOOOG」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「吼～那個光頭，真夠小氣的。」等班導離開了之後翹起嘴說著。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        明天就是畢業典禮呢... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n         \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好啦好啦。小光頭都很小氣，我們都回去吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們一邊收拾書包，一邊踏出學校。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊～等暑假過後我們就很難像這樣隨便聚在一起玩了吧？突然感覺有點難過。」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「過了明天之後，大家都不會再見了。。吧？」失落地說 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「假如可以一直當高中生就好了～開玩笑的啦。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        是呢...這樣就可以一直和兔田同班~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「月初我們還是可以約出來啊！可是再晚點我就要去租房子那邊住了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        租房子？你哪裏住？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「喔～就學校附近那邊。」他報了個幾個縣市遠的位置。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們要不要兜路去便利店買冰條吃？畢業後沒機會再一起吃了 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「畢業了也無阻我們的友情，住在哪也好約出來不就行了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好像不太遠，那我們還有機會可以到青的新家參觀吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「贊成瑪琳！還有青的果汁哈哈」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好耶，那整頓完以後我就招待你們來我的新家！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊對喔我都忘了，可惡～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們繞到了附近的超商。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        很期待青的新家! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗚嗚我的零用錢……來吧！你們要喝什麼果汁挑吧！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        他也理所當然地買了自己的冰棒跟飲料。蘇打冰跟可樂。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我要白桃味! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「等你們到時候來我家記得帶點拌手禮過來喔！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「檸檬味汽水！還有雪糕！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「橙味的那款！只有學校附近才有，以後都沒什麼機會喝到了」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青哭喪著臉買單了大家的飲料。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青<會的會的 我會準備很多工口本當拌手禮的! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎～～可是瑪琳你的本有點太重口味了……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        甚麼啊~你嫌棄我的本不要嗎~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎，幹什麼幹什麼！不要偷偷把雪糕放進籃子裡！」抓包了路卡偷渡的雪糕。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那沒辦法 只好準備合你口味的本吧~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「雪糕我想吃來著，我自己來付款吧～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好耶……讚嘆瑪琳大人……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哼哼哼 崇拜我吧~ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們結完帳到了附近的公園，看著逐漸下沉的夕陽坐著吃吃喝喝。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (用好色情的方式吃冰條) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （旁邊大口大口的吃著雪糕） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳又發情了」一臉厭惡，正在喝完果汁 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「該不會是因為剛才被兔田拒絕所以才……！？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯~~~好好吃~~~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「約不到兔田的確很令人可惜......」喝著檸檬汽水 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來他們2個單獨在一起會發生很多事」正認真地思考同時把喝完的果汁盒子壓扁投向垃圾桶 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        露娜要嚐嚐嗎？(指冰條) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎，但我看你們這對應該蠻有戲的啊～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        會 會嗎 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「搞不好只是兔田在吊你胃口？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        其實我在想明天要不要向兔田告白... \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不了」感到噁心 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哦哦～～好浪漫！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        吊胃口？!你說兔田嗎？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好期待！！！！ＰＯＧ」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「對啊，哎～～不過我也不確定啦我又和她沒有說過幾次話。可是剛才訊息不覺得很像有機會嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        兔田 吊我胃口...(花痴) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「要不要我們明天乾脆躲在哪裡幫你們灑花瓣！超有氣氛的吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「班導肯定會把我們打死」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這.....如果我被用怎麼辦？>青 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊～～可惡，怎麼問題都在那個光頭身上，都畢業了不能包容一點嗎——」＞露娜 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我可不想掃地板QQ」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「不會啦！……不會吧？？」望其他兩人 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我也不會幫忙哦」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        你們...TAT \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好吧，不會清潔，可是撒花瓣倒是可以」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        如果被用會很尴尬... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        而且我們還住得近 畢業後會撞見吧... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        到底....船長怎麼辦好~~~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不用太擔心啦，總有機會的」把手上的汽水喝清光 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯～～～好難喔……」他想得整張臉皺在一起。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (边說邊暴食) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        結果瑪琳的告白作戰似乎在這倉促的討論階段是得不到什麼詳細的計畫的，你們便就接著閒聊起別的話題，吃完之後踏上了歸路。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        很快地到了要和青分別的路口，每次一起回家時都是他第一個分開的，今天也不例外。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊、我家是走這邊，那掰啦！明天見喔！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青說著朝你們揮手。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        明天見~ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「明天見～～」慵懶地揮手 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「明天見囉！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而你們如此互相道別說「明天見」的日子也即將在今天劃下句點，至今為止理所當然的一切都一一結束。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        當你們心底閃過些許的寂寥時，一腳跨出大馬路的青回過頭來。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊！對了！！畢業典禮的時候，來比誰被叫到名字時回應得最大聲吧！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「剛才打牌的時候我一場都沒贏啊！就這麼輸到最後太不甘心了！這次我一定要扳回一成！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「要比嗓門大的話我肯定不會輸的！！贏家獎品是哈根達斯！就這麼決定了喔～！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        真不認輸呢...(傻眼 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （只管慢慢地揮手，一邊慢慢離開） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「隨便你說～這次肯定會是我贏了！！哼哼～準備好請客的錢吧！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青以著他自豪的大嗓門笑著，爾後又再次道了別，背對你們踏上回家的路。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「可惡！！是哈根達斯！」吶喊著 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們也準備離開。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        就在此時。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        龐大的卡車伴隨著震耳欲聾的煞車聲自眼前閃過。青驚愕的臉孔染上整片血色般的夕陽餘暉。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        下個瞬間，唰的一聲青的身體拋飛了出去、落在地上。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        近乎浸染整個四周的大量鮮血、損毀得慘不忍睹的軀體，他明顯瞬間遭到斃命。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        日常的景色霎那間便化為一片地獄，方才為止還活著的生命、自己的親友、才剛約定過明日再見的存在，如今卻以如此淒慘的模樣倒在眼前。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        周遭一陣喧嘩，尖叫與怒號此起彼落，但這一切都未能佔據你們思考的一隅一角。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        目擊親友淒慘的死狀，請進行1d3/1d6+1的SAN值檢定。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (臉色青白) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        ！？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=90 【正気度ロール】 (1D100<=90) ＞ 88 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=70 【正気度ロール】 (1D100<=70) ＞ 18 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=75 【正気度ロール】 (1D100<=75) ＞ 11 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D3 (1D3) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 90 → 87 \n      ",
    "first_message": true
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d3 (1D3) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 70 → 69 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1D3 (1D3) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 75 → 73 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        畢竟是在大馬路上發生的事故，周遭也有不少大人。可見他們紛紛聯絡警消與救護車的模樣。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        有什麼想做的事情嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡!快叫急救車! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （先跑去青身邊） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (過去青身邊) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「！！！好的 我馬上打電話！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (邊跑到青身邊) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們奔至青的身旁，他殘破的身軀看來明顯早已回天乏術。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而他勉強保持原狀的臉龐上，時間停留在前一瞬間那驚愕的神情。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!青! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        救護專線似乎已經接收幾通類似的通報，路卡報過路段與狀況後，對方便告訴你很快救護車便會抵達。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        不要啊 這不是真的...青！！！！！！ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來青沒有反應」一邊露出驚恐的表情 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (痛哭) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青......怎麼會這樣....！！說好的....！！」痛哭 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        各位有餘裕的話可以來個目星。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 68 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 91 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 58 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　路卡在恍惚的視野中，你們瞥見一角有個不顯眼的、染血而歪扭的東西。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        仔細一看是冰棒棍。剛才青和你們還在公園吃著的。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        木紋的小板子上諷刺般地刻著「中獎」二字。/ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        警笛聲自遠方傳來，很快地警察與救護人員一一來到現場，你們被帶去稍微問過話之後，沒有多久便被送了回家。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        遭遇親友事故身亡的現場，驚駭、悲慟與衝擊在你們的腦中不斷縱橫交錯。然而時間是無情的，懷著這份難以出口的情緒，不知不覺便到了隔天。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        3月1日，畢業典禮當天。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        典禮在體育館內盛大而莊嚴地執行，在你們坐著的椅子附近當然也有屬於青的座位。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        然而坐落其上的，就只有笑得燦爛的，青的照片而已。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        胸口揪痛之中，典禮依舊進行，來到頒發畢業證書的階段了。聽著同級生們一個個被唱名上台的聲音，你們不禁想起青昨天所留下的賭約。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        終於，下一位輪到青領取畢業證書。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        班導朗聲唸到青的名字，但理所當然地，沒有任何人回應。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瞬間，整個空間陷入一片刺骨的寂靜。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請各位骰個聞き耳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=61 【聞き耳】 (1D100<=61) ＞ 45 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【聞き耳】 (1D100<=70) ＞ 27 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50 【聞き耳】 (1D100<=50) ＞ 55 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ........？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在下個瞬間，你們便如斷線一般失去了意識。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ---你們猛地睜開眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        自己似乎不知不覺間趴在課桌上睡著了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        一起身便與同樣神情困惑的朋友對上了眼，緊接著一同倒抽了一口氣。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        眼前那依舊趴伏在桌上呼呼大睡的少年，毫無疑問是理應已在昨日過世的青。SAN 1d2/1d4 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=87 【正気度ロール】 (1D100<=87) ＞ 85 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=73 【正気度ロール】 (1D100<=73) ＞ 1 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D2 (1D2) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=69 【正気度ロール】 (1D100<=69) ＞ 42 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 87 → 85 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1D2 (1D2) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 73 → 71 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 69 → 68 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ......! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        眼前的景象看來就像昨天你們打牌時一樣，幾個人的桌子併在一塊，桌上是凌亂的撲克牌。青手上還捉著那張鬼牌睡著。/ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「......！？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青 是青嗎」看看路卡和馬琳 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「你們也看見青嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        但青明明昨天已經....! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (觀察四處) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我們現在在哪裡，怎麼有種回到過去的感覺」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳看看四周，時間已經過了下午三點，黑板上的日期則是2月28日。昨天的這個時間點應該教室裡還有幾位同學，而現在周遭確實也可見他們談笑的模樣。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (打開手機查看日子) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「看來很像跟昨天時間一模一樣......」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳你檢查了一下身上的東西，手機雖然帶著，但打不開，畫面一片黑。其餘什麼東西也沒帶，倒是胸前別著一個胸章。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        上頭是一塊寫著「畢業快樂」的緞帶，以及一朵別緻的白色假花。是畢業典禮開始前發給全體畢業生的胸章。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這個胸章是？! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ——對了，自己原本應該是在畢業典禮上才對。自己並沒有帶什麼多餘的東西，就是穿著整齊別著胸章，如此進了典禮會場。/ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「對了！我們剛才還在畢業典禮當中，怎麼會」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我也不清楚為什麼會這樣......我想先去看看青......」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青 醒醒....(搖一搖他) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (走到青旁邊觀察) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （跟在luca身後走到青旁邊） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯？嗚哎……？」他慢慢醒了過來，不是很理解狀況似地左右看了看。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我睡著了？哇～～怎麼會打牌打到睡著啊！糗死了！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        甚麼....？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「這張鬼牌不是你們趁機塞給我的吧？？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青？你...沒有不舒服嗎？？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青 你還記得最後的記憶是甚麼嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯……？沒有啊？」狐疑地摸了摸自己身上，「怎麼了，我其實睡到地上了嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「怎麼突然問這麼奇怪的事情……不就剛才在打牌打到一半……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青，今天是什麼日子！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不不不......你剛剛睡得很沉呢！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (果然沒有那時的記憶嗎....) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「欸～～明天畢業典禮三月一號，所以今天是二月二十八號！我可沒有糊塗到弄不清楚日子喔！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「真的假的……？我昨天沒有偷偷熬夜打電動喔……？」＞路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （走到窗戶旁邊看看） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (也去窗戶旁邊看看） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=85 【正気度ロール】 (1D100<=85) ＞ 56 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 85 → 84 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=71 【正気度ロール】 (1D100<=71) ＞ 83 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 71 → 70 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這是...! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「？怎麼了？有什麼東西嗎？UFO？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「天空感覺怪怪的，不過請青和luca不要看」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青 你別看! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「喔、喔喔……怎麼了啊，你們突然好奇怪喔？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「你們怎麼突然走去看窗啦～」見他們一言難盡，心知不妙便好好的站在原地 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        各位聽我說 雖然听起來像小說 但這裏不是現實 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們入了異空間 這裏不是我們熟知的學校! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「雖然聽上去很異常......但我相信你」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        剛剛窗外是一片黑 我手機也打不開!(給其他看) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「什麼！？所以外面是有什麼龍之類的在飛嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (光是看見青站在我們面前對話，已經有夠異常) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「走吧！外面沒有什麼好看，與其呆在這裡，不如我們一下我們不如在學校裏走走？」示意瑪琳 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊、不是喔……那我們要怎麼回去？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們先去四處走走 看有沒有回去的方法吧! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我們先離開學校吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        離開學校恐怕很難吧 外面一片黑... \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好！雖然不知道是怎樣，不過看你們這樣應該不是整人吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不如先在學校走一圈，對了，不如找班導」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「沒錯，這時候找班導沒錯。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        當然不是啦 船長該認真時會認真啦!>青 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「也許班導知道些什麼」托著下巴 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「說的也是，老師就是這種時候要派上用場才對嘛～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……咦？話說，這是什麼？」他指了指你們身上別著的胸章，「什麼時候發的，該不會只有我沒拿到吧！？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「阿，我們都是現在才看到，一起去找班導問問吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        (先走到門口探頭看一下班房之外) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「叫光頭給我們一個交代～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「所以去找班導沒錯了」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ....對啊 差你還沒拿 所以我們問老師還有沒有吧>青 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜你看了看教室門外，看起來是平常的走廊沒有什麼分別。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （跟著走到教室外） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們離開教室來到走廊。走廊外邊是扇扇連綿的窗，從這裡能清楚地看見操場。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (躲在路卡身後) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        （跟著躲在瑪琳後面） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        來到走廊的孩子們可以來個目星。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 24 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 79 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 57 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　露娜你發覺操場上突兀地長著一棵沒見過的樹。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        操場上長著一棵沒見過的樹...？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「沒見過的樹？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「那棵樹在操場中間到底是什麼時候在哪裡的」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「樹……？」跟著探出頭看操場。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們要先去操場看看嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我...看不太清楚」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「同意瑪琳」點頭 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「可能走下去看好一點」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「贊成～如果是異世界的話，搞不好是什麼存檔點之類的！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好 那就出航! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「Let's GOOOO!!!」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好的船長！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「出航！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們便如準備踏上航道的水手一般往操場前進。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        到了操場，明顯可以見圍欄外頭、出了校園之外就像是被硬生生劈開一樣，全都是一片漆黑。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡　SAN1/1d2 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=68 【正気度ロール】 (1D100<=68) ＞ 31 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 68 → 67 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而在操場的正中央，就種著你們剛才從走廊窗戶看見的，印象中原來所沒有的樹。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (觀察樹的樣子) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳遠遠看上去是很高大的樹，深綠色的葉子上開著許多小白花。/ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （遠遠的看樹） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        學校原本有這樣的樹來着...？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (走過去樹旁邊觀察) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青你还好嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡靠近看它的葉片呈細長狀，花的形狀則像蝴蝶一樣，看起來挺可愛的。要判斷是什麼樹，可以骰個植物相關的技能（生物學/博物學etc.）或是知識/4 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「讓我看看樹長怎樣子的～......」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青能幫忙看看樹葉嗎?」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「遠處看那棵大樹總有點熟悉的感覺，青有什麼頭緒嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡在看甚麼？(走過去看) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        意外地，青並沒有回應你們的聲音。回頭一看，他站在你們的背後，距離那棵大樹比任何人都遠，僵硬的臉龐上浮現膽怯的神情。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　也看到樹詳細的樣子（？） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青？你怎樣了？(摸摸青的背) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青有什麼頭緒嗎......」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！你還好嗎」遮擋著青看向大樹的視線 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (看青的狀態不太好似的) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我……我不知道，那棵樹，感覺很恐怖。」他臉色發青地搖搖頭，自己也不是很明白的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        恐怖...？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯，就，不知道為什麼，就有一種討厭的感覺。」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50/4 【知識】 (1D100<=12) ＞ 63 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=55/4 【知識】 (1D100<=13) ＞ 23 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=45 【知識】 (1D100<=45) ＞ 50 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來這棵大樹也沒甚麼特別」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青我記得你很懂植物 你知道這是甚麼樹嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「真的.....不就是棵普通大樹而已」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        看起來一瞬間有點猶豫，但還是深呼吸用顫抖的聲音說，「真拿你們沒辦法！我、我看看喔……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (難道這樹和青有甚麼關係....) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        CCB<=50 【博物学】 (1D100<=50) ＞ 32 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯～～～好像是叫槐樹？是夏天開花的樹的樣子？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「既然沒什麼特別我們就趕快去下個地方吧！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「夏天?」正想抱著青的腰上去看 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯...好吧 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們去體育館看看？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好吧....去別的地方好了」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請路卡跟瑪琳骰個幸運。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=90 【幸運】 (1D100<=90) ＞ 83 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=70 【幸運】 (1D100<=70) ＞ 61 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們掉頭準備離開的同時，啪、的一聲，一根尖銳的樹枝掉了下來。所幸並沒有砸到離樹木較近的路卡和瑪琳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗚哇？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「唔哇！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哇！！！？？？？什麼東西！？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「哇，危險！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好險！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （看看掉下來的樹枝） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        這根樹枝末端非常尖銳，要是隨便亂揮大概會受傷吧。上頭沒有花葉，也沒有旁枝，是一根筆直的樹枝。可以骰個目星或是IDE。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （看樹枝） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 76 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 92 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 46 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡這根樹枝以自然折斷來說看起來太過粗壯了，不如說要徒手硬折下來都有困難吧。如此堅固的樹枝突然折斷感覺很不可思議。/ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來貿然到體育館感覺會很危險，不如我們先回到校舍看看？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們快離開這裏吧 感覺再待下會會生出觸手... \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「這棵樹好好的怎麼會突然掉樹枝......」走回到青旁邊 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「別說這麼恐怖的話啊……」＞觸手 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳這個時候還在想色色的事」嘆氣 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那我們要先去哪裡好？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        體育館？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不如先回到校舍，到2樓的職員室看看？還是找大人說一下比較好的感覺」感到擔憂 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「就校舍吧。」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青覺得如何」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎我嗎？我覺得大家在一起的話去哪裡都可以……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯....那就去校舍吧! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們便留下那根不自然的樹枝，回頭往校舍前進。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        夕陽的餘暉在背後閃耀，在你們的眼前拉出長長的影子——然後，視野漸漸地，像是被影子吞沒一般、像是暈眩一般，又像是眼皮蓋上一般，被黑暗所吞沒。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們猛地睜開眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        回過神來，自己似乎不知不覺間趴在課桌上睡著了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        一起身，便與同樣神情困惑的朋友對上了眼。沒錯，正如同你們一開始在教室醒來時一樣。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請各位進行POW*5。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=18*5 【POW × 5】 (1D100<=90) ＞ 52 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=14*5 【POW × 5】 (1D100<=70) ＞ 77 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=13*5 【POW × 5】 (1D100<=65) ＞ 76 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        為甚麼又回到這裏...?? \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=70 【正気度ロール】 (1D100<=70) ＞ 12 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=67 【正気度ロール】 (1D100<=67) ＞ 72 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 70 → 69 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d2 (1D2) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 67 → 65 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        甚麼？？？這是輪迴設定的劇本嗎？？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        往四周一看，時間已經過了下午三點，黑板上的日期則是2月28日。同學們也依舊談笑著。乍看都和上次剛醒來時是一樣的情景，而青則看起來有些呆然的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!你还好嗎! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        要摸摸我胸部看嗎？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「.......」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳又來了」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        聽見瑪琳的聲音才突然回過神來一樣，「哇、哎？？怎麼到教室裡了？　啊這個就不用了謝謝。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡你也要摸嗎？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青覺得怎樣？？」撲到青身邊 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗚嗚嗚不要無視船長TAT \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我胸部可是很大的哦! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        接住路卡倒退了兩步，「這個，雖然剛才已經覺得很奇怪了但這裡果然像瑪琳說的是異世界還是什麼恐怖遊戲的世界對不對？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「如果要穿越的話我還比較想去那種隨地都是蛋糕之類的地方！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        蛋糕...噗 青果然是小孩子呢~ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「蛋糕倒是沒有，可是青你還記得剛才在做什麼嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「什麼！？！？反正妳一定是想要去那種到處都是色情陷阱的世界吧！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗯......要不我們繼續走走看？可能會遇上哈利波特！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青<你怎麼知道的？! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「Luca是到了霍格華茲吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「剛才～～？剛才我記得我們在操場那邊，然後看過不知道為什麼很恐怖的樹，有樹枝莫名其妙掉下來……要回來的時候就突然跑到這裡了？」青扳著手指回想。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青你還記得明天是什麼日子嗎？」驚恐 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        接我看漫畫的套路 校舍應該是禁止過去吧 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「的確沒錯.....那樹枝一定有什麼關鍵。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「如果是霍格華茲的話我們是不是應該先找魔杖？？不要剛才那棵樹的話應該也有別的可以用吧！去去武器走～」在空中亂揮手指 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        話說各位可以來個目星或IDE～ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 22 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 20 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 29 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「先去第二層看看？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞你們聊著，總感覺有什麼地方不太對勁。教室似乎比方才還要暗上一些。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        仔細觀察周遭，你們便馬上發覺理由為何——校舍開始劣化了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        牆壁出現黃斑、地板龜裂，窗戶則朦朧得教人詭譎。SAN 1/1d2 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=84 【正気度ロール】 (1D100<=84) ＞ 61 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=69 【正気度ロール】 (1D100<=69) ＞ 48 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=65 【正気度ロール】 (1D100<=65) ＞ 79 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 69 → 68 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 84 → 83 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 65 → 64 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （看一下在課室裏的其他學生） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=68 【正気度ロール】 (1D100<=68) ＞ 84 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 68 → 66 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我們不要待在這裡了！感覺這個課室裏有點奇怪」很驚恐 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「怎、怎麼了！？你發現什麼東西了嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        露娜不要怕~~有船長在~~~(抱住) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【アイデア】 (1D100<=70) ＞ 54 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=66 【正気度ロール】 (1D100<=66) ＞ 95 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d (1D6) ＞ 6\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d4 (1D4) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 66 → 65 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「一會兒我們去別的教室走走看吧～」拍拍青的肩膀 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「感覺這裡很可怕，有人可以安慰一下我嗎」驚恐 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「一直待在這裡也沒有出去的線索嘛！」＞路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        船長在安慰你~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「喔哦～～不要怕，我們都在這裡！！」跟著抱過去露娜那邊 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 7 ＞ 特殊\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「因為這裡已經沒什麼好查看了......露娜是不是不舒服......」>青 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在瑪琳柔軟的身軀跟溫柔的聲音安撫之下，露娜感覺稍微放鬆下來了一些。SAN+1d3 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「還是我們去哪裡比較可以坐下來或躺下的地方讓露娜休息？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d3 (1D3) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 65 → 68 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳！嗚嗚」迴避胸部抱上去 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「哈哈哈哈回復到之前的樣子了呢！露娜！～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們先去保健室看看？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好啊，總之先離開這裡吧」擔憂 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好啊！就在隔壁而已！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「可以啊」讚成 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好 出航~! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「出航～GOGOGO！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「Let's GOOOOOO!!」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「出航。。！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        雖然說是出航不過畢竟就在隔壁而已，你們偉大的航行只持續了短短幾分鐘就結束了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        保健室裡看來比印象中還要昏暗、老舊了些，不過床看起來還算是可以躺臥的狀態。校醫似乎不在的樣子，加上前不久的經歷總給人一股詭異的感覺。/ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (查看保健室) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯....好像沒甚麼特別~ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （走到並坐在床邊） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡撇除氛圍的話應該是能在這裡休息沒錯，不過反過來說也沒什麼其他特別值得留意的東西了的樣子。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (找有沒有繃帶和消毒酒精) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「看來沒什麼特別東西在這裡。」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳你在附近翻了翻，繃帶與酒精都有，看來都能用。（急救成功率+10）/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        以防萬一 先帶走吧 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們要去事務室看看？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……嗯，露娜有感覺好一點嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「露娜我好一點了，可以到事務室看一下」微笑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那就好！有什麼狀況不要硬撐喔，儘管拜託我們吧！！我們是朋友嘛～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「那就好了！出發事務室囉！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        出航~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「Let's GOOOOOO!!」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「出航～！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「謝謝你青！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「出航！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們歡樂地越過重重波浪（走廊），來到了事務室。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        雖然平常不太有到這裡的需求，不過看過去似乎也沒有特別的東西。最多就是趁這個家裡沒大人的狀態亂翻辦公桌也說不定。可以骰個目星。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 63 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 50 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 16 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞你們發現在角落有個揉成一團的紙團。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (查看紙團) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        將紙團撿起來攤開來看，上頭機械地影印著一排排的文字。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (查看文字) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看起來是一首詩的感覺」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這是甚麼意思...？這是離開的線索嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎～不是很懂，總之就是不可以全都要？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ..........(沉思) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「都是中文字但看不太懂了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        是呢~ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        看來這裡沒有甚麼了 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        去理化教室看看？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「去吧去吧～」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好哦，這裡都沒什麼的感覺」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好！走吧～」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        三位可以再來個目星（一個成功就行） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 49 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 40 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        「小心蟲子」...？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「當心蚊蟲之類的那個？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        感覺事情不單純. . \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「紅黑色的字...好醜的字！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        但我好討厭蟲子.... \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我也很討厭，希望不要遇到吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「會有澳洲的蟲子那麼大嗎？....」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「對喔，以前約你們去抓獨角仙都只有路卡肯陪我。嗚嗚～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「獨角仙棒棒！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不過哪裡會有蟲子......」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        總之你們一邊聊著一邊走到理化教室前。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        從外面看去，燈沒有開，門也是關著的。請骰個聞き耳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=61 【聞き耳】 (1D100<=61) ＞ 55 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50 【聞き耳】 (1D100<=50) ＞ 57 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「蟲子應該到處都有吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【聞き耳】 (1D100<=70) ＞ 53 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　露娜你們聽見從理化教室內似乎傳來了像是有什麼東西在動一般的沙沙聲。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        噓! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        各位小心!裏面有甚麼在...! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我聽到裡面。。。有些奇怪，我們不如先繞路迴避吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「是、是不是有什麼東西？蟑螂？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗯嗯嗯？有什麼東西＞＜」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (從窗戶往裡面看) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=83 【正気度ロール】 (1D100<=83) ＞ 69 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ？! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這是7大怪談嗎.... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        .......有一具人體骨骼模型在徘徊著。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        各位 怎麼辦... \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「！？！？！？我們不要待在這裡了快點跑吧！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「！？人體模型動起來了」驚 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不用怕......」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「只要不打開門.....」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們快走走走走 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我也同意青，不如我們走吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「可可可是如果它發現我們怎麼辦……」＞路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「GOGOGOGO」跟著船長走 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (拉住三人去倉庫) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們一行人咚咚咚地手拉手逃離了理化教室前方，奔入倉庫。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        倉庫裡頭擺滿了沒有人用的桌椅，看過去是沒有特別的東西，不過也沒有放什麼會追你們的奇怪人偶之類的恐怖遊戲要素。至少是還算能讓人放心。/ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （查看鐵架） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「呼、呼……你說的骨頭模型應該沒追過來吧……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (找找有沒有驅蟲劑) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        應該沒有吧...他也沒有發現我們>青 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「沒有吧？沒有腳步聲啊」＜青 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「還好沒有追來呢」》青 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡你翻看鐵架，裡面擺著好幾年以來的各種宣傳海報。其中也包含了你們社團的招募廣告，或是你們參加過的活動海報，看著總讓人有點懷念。/ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳看起來這裡沒有驅蟲劑的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (觀察四周) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「這裡到底是放什麼的倉庫呢」（看看整個倉庫） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那就好……哇～～還好我們沒有跑進去教室裡面！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「唔...好多塵！都是一些舊活動海報」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        沒想到會親眼看見七大不可思議怪淡呢 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        環顧整個倉庫，看上去是沒有什麼對你們接下來的冒險有助益的道具，不過要挖掘的話或許可以找出不少令人懷念這段高中生活的東西也說不定。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們去輔導室？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好啊！這裡看起來都沒有什麼特別」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (過去輔導室中途看一眼中庭) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （跟著看中庭） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這是...甚麼？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳有看到什麼嗎」擔憂 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我只看見黑色人影 但看不清是甚麼>露娜 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「呃（（」害怕 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 64 → 62 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡有看到甚麼？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 62 → 59 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「路卡看起來很不對勁」擔憂 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……哎、哇，路卡你還好嗎？需要呼呼嗎？（？）」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「......」掩臉 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡!要胸部還是抱抱？! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「不要怕不要怕，痛痛飛走！！」雖然你應該沒有哪裡在痛但總之還是先念個知道的咒語的那種感覺。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「唔嘔嘔我想抱抱QAQ」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (抱)不要怕~不要怕~ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 89 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「船長也見到吧？！？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        路卡被擁抱在瑪琳的懷抱裡，使你不禁想起那段自己不小心看了瑪琳的私藏重口本本而大受打擊的那一天，突然覺得好像這個擁抱並不是那麼令人安心的存在。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我沒看得很清楚啊 你到底見到甚麼>路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （只在旁邊靜靜看著抱抱的露娜） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「OMG!!!」馬上後退兩步 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        你後退甚麼啦？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「Sorry.....胸部....」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        啊...是因為胸部嗎... \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「說不定是想到被瑪琳精神打擊的時光了，可憐的路卡……來我懷裡吧……（？）」他模仿不知道哪個動畫看來的治癒系角色的語氣向路卡招手。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        抱歉 都是胸部太大的錯 嘻嘻~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青QWQ」抱緊緊 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哦哦～～不要哭～～都是她壞壞！」亂揉路卡的頭髮。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 32 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        胸部有甚麼錯？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青最最最溫柔了！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳的胸部。。很可怕」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        這個彷彿在哄小孩的語氣給了路卡無比的勇氣（？），感覺又可以繼續戰鬥了。＞路卡　SAN+1d3 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d3 (1D3) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 59 → 62 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好啦！我們下一個地方去輔導室？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「既然你們都看到些奇怪的東西，繼續在走廊停留也不是太好，好吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        對 那安慰完就出航吧~ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們一邊如此打鬧著，一邊往輔導室前進。夕陽的刺眼色彩透過窗灑在身上，整個視界分割成了一片橘紅及濃重的黑。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        眼前一陣目眩。黑暗的比例愈發增加。然後，就只剩下整片的幽冥。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們猛地睜開眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        回過神來，自己似乎不知不覺間趴在課桌上睡著了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        一起身，便與身旁的朋友對上了眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        又來？？？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請　瑪琳　進行POW*5路卡、露娜　進行POW*4 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=18*5 【POW × 5】 (1D100<=90) ＞ 14 ＞ 特殊\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=13*4 【POW × 】 (1D100<=52) ＞ 27 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=14*4【POW × 5】 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=14*4 【POW × 5】 (1D100<=56) ＞ 99 ＞ 致命性失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「呃。。。頭很痛，我們都睡著了嗎？」剛睡醒的樣子 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!你還好嗎？! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請瑪琳跟露娜來個聞き耳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=61 【聞き耳】 (1D100<=61) ＞ 60 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【聞き耳】 (1D100<=70) ＞ 93 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        .......! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎……啊、啊啊，我們又回到這裡了……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青.... \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 62 → 60 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        他看起來聽見瑪琳剛才的呼喚，才慢慢回過神來的樣子。但也還是有一些茫然的色彩在。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青....你還好嗎... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        要抱抱嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青....！沒事吧」剛從不詳的情緒回復過來 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯？？嗯～～好、好啊……？」有點躊躇地跟瑪琳抱抱，隱約可以看到他有點臉紅。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        不要怕~不要怕~一切會好起來的~(抱) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「哎唷唷~~~」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「怎、怎樣啦，路卡你剛才還不是抱了！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嘛~ 也是啦~」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青害羞了吧」微笑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「只有沒有跟瑪琳抱抱過的人才可以扔我石頭！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈 我的抱抱好貴哦 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 31 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D3 (1D3) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        雖然看起來還沒有恢復到平常的狀態，但可以感覺得到青平復了許多。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        回到正題 我們先去輔導室看看吧 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好啊～出發！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「出發～」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好吧～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (過去輔導室時略看其他課室) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (看一下3D) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=83 【正気度ロール】 (1D100<=83) ＞ 99 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 83 → 82 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這是.... \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「船長這反應...有種不詳預感啊....」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        各位 之後不要調查課室 如果你心理承受能力強的話 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們還是先去輔導室吧 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳又看到了些奇怪的東西對吧」害怕 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        露娜>嗯.... \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗯...又是奇怪的東西嗎.....」掩臉 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……嗯、嗯嗯……這樣的話還是不要太認真到處看比較好嗎……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「那我們快到輔導室吧，說不定還有大人在呢？雖然機會很少。。。」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「輔導室GOGOGO...」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們緊接著來到輔導室。這裡不愧對輔導室之名佈置得很舒適，但現況看來是比原來的樣子還要老舊、腐朽了不少。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        或許前不久你們才一一來過這裡，接受關於未來規劃的討論也說不定。不過看來似乎沒什麼特別值得留意的東西。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        看來沒特別呢 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來這裡也沒有什麼特別，不過至少沒有奇怪的地方」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯 我們去圖書館？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯，好啊……」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗯，我同意」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ？青怎樣了？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「同意」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎？嗯～～只是，就……可能是一下子跑了整層樓的關係感覺有點累吧……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        他搔了搔臉，「不過沒事啦！我很好！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這樣啊 累了不要勉強啊 我的胸部隨時為你服務! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「要不要吃芝士薯片！很好吃的喔～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「這個……還是不要吧……」＞胸部 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好欸～～謝謝～～！！」抱住路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「耶～～～」抱抱青，遞上薯片 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我的胸部輸給了薯片...(打擊) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青愉快地嚼著薯片，還演了一下那個把兩片薯片叼在嘴裡的鴨子貌。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        話說我也要吃薯片! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青鴨子～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「大家一起吃嘛～」遞給大家 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        把鴨子嘴（？）吃了下去，「路卡要不要也來鴨子一下，你一定也很搭喔（？）」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (吃薯片) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （扮鴨子嘴） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青會想找個地方休息一下嗎，其實我也有點累」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡看著大家津津有味地吃著你帶來的芝士味薯片，使你感覺到了分享的愉快，同時又更加深刻體會到果然車打芝士薯片是世界上最偉大的零食了。SAN+1 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 60 → 61 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好啊，如果露娜也累了的話。不過我真的還好啦！說不定還可以跑百米（？）」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那去圖書館休息一下？那裏比較安靜可以坐 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好哦，那繼續到圖書館吧～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那出航~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「圖書館GOGOGO~」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「出航～」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「出航～」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        圖書館的門關著。雖然燈是亮的，不過裡頭沒有人。打開門進去，果然裡頭也是呈現有些崩壞、老化的樣子，但還不至於影響你們找東西。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        可以骰個図書館。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=25 【図書館】 (1D100<=25) ＞ 39 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=65 【図書館】 (1D100<=65) ＞ 71 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【図書館】 (1D100<=70) ＞ 32 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜你發現了植物圖鑑以及一本和風的，感覺可信度很低的靈異科普書。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        露娜找到甚麼？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「露娜見到什麼書?」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看！這裡有些感覺有用的圖書，一本植物的圖鑑和一本。。靈異的科普書？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我先把他們拿出來，大家一起看吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯~？(打開看靈異的科普書) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「會不會查到跟操場的大樹有關的資訊?」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (跟著看) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯……大家一起……」小聲地呢喃，跟著湊近瑪琳的旁邊看。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……？……？？」不是很懂 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「感覺沒有很懂」一臉懷疑 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (看植物圖鑑) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不太懂啦......」望著文字一臉迷茫 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳有什麼想查的嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (查關於操場的樹) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來操場的樹有著趨吉避凶的效用呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那我們要回操場看看吧？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「這樣聽起來好像很帥的樣子。」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「贊成！這裡的教室。。。感覺有需要帶槐樹的樹木呢？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「槐樹的樹枝好神秘喔！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        可以做成哈利波特的魔杖! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯……大家比較想回去看看的話，那就去操場看看吧……」揪著路卡的衣袖顯得有些不安的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那個以魔杖來說太大了吧？呃～……EX巨無霸魔杖？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        Ex咖哩棒！！！！ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「拾兩枝來看看吧？做成魔杖！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們抱著書又從三樓跑回操場。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        現在，操場地面龜裂，周遭的草木也都已然枯萎。——這裡也受到劣化的影響了嗎。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        正當你們想到這裡，忽地發現，只有那棵樹與周遭成對比，搖曳著青綠盎然的枝葉。看來那棵樹並沒有受到學校老朽化的影響。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而那根尖銳的樹枝，不可思議地仍留在那時掉落的位置。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (拿走樹枝) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ▼瑪琳　獲得了　槐樹的樹枝（粗）！ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (跟著拿走樹枝) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        既然都到操場了 要不要去社團大樓看看？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「不、不要朝我這邊揮喔……？不對，不要亂揮喔那個，看起來刺到會超痛的。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        放心啦~不會亂揮啦~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那就好……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯 路卡想要嗎？那給你？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好啊，我先拿著吧」接過樹枝收好它 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        對我來說太重了~ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        要去社團大樓看看嗎？記得青是田徑社 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好啊。我們社團教室在一樓，很近。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那出航~ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「出航～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「出航～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「LET'S GOOO~!!」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們來到田徑社的社團教室，桌上一團混亂。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        大概是學弟妹們準備幫畢業生做什麼禮物吧，桌上隨意地擺著文具與美勞用具、假花等等的。可以骰個目星。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 59 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 92 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 26 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡　露娜桌上散亂著各式各樣的東西，不過能看得出來裡頭有一堆特別擺在一起的，是油性筆、緞帶、別針跟大概六種不同的假花。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        姑且是能認出假花裡有黃色跟橘色的玫瑰花，但其他的花光看也叫不出名字。/ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        在進入社團教室時，呢喃一般地輕輕說了聲「啊……真不想畢業啊……」。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「那個到底是什麼花朵呢？」（打開植物圖鑑看看） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜你查出假花裡放著的是「勿忘我」、「滿天星」、「玫瑰」、「天竺葵」、「洋丁香」跟「櫻草」。上面也有寫花語。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青你还好？(搖搖他) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎……哎、啊？怎麼了嗎？」像是突然回過神一樣，有點不安地望向瑪琳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        感覺你精神不好 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「花語......」看著露娜的植物圖鑑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯～嗯……我也不知道為什麼會這樣……會不會是昨天熬夜打電動的關係……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青不想畢業嗎，還以為你對未來的想法已經很透徹的感覺」感到疑惑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「不想畢業……嗯……怎麼說，就突然感覺有點寂寞吧。因為我們不是每天都在一起嗎……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「可是……」他低頭，有些茫然的樣子陷入沉默。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我們的確每天都在一起耶」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「畢業只是人生的其中一個階段嘛～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我們一起幫青做一個胸章吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好主意! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那就用這個花吧(用勿忘做胸章) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎、真的嗎！！？？那我來幫你們的做裝飾～！！」雖然看起來還是有點有氣無力的樣子，但能感覺到青稍稍打起精神來了。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好哦」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        那麼你們要三個人合做一個還是要進行胸章大賽（？） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不如我們進行一個胸章大賽吧？感覺很有趣的樣子，況且材料多的是」有點高興的樣子 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「來吧！！！讓我來做一個超超超級漂亮的胸章！」燦笑開始動手 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好耶～哼哼！那我這個評審會好好給你們的作品打分數！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好!船長我可會第一名的!我可是美術社! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=12*5 【DEX × 5】 (1D100<=60) ＞ 6 ＞ 特殊\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=7*5 【DEX × 5】 (1D100<=35) ＞ 14 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        6+2d6 (6+2D6) ＞ 6+4[3,1] ＞ 10\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=8*5 【DEX × 5】 (1D100<=40) ＞ 88 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        6+2d6 (6+2D6) ＞ 6+7[3,4] ＞ 13\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        3d (3D6) ＞ 6[2,2,2] ＞ 6\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我的作品可是用了叫勿忘我的花!花語是「不要忘記我」「真實的愛」「真正的友情」!就算畢業我也不會忘記你們的! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        而我們的友情 是真的！！！！ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        航長愛你們！！！ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        看!是不是很浪漫!哈哈哈 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「這我的胸章使用了橘色的花！！代表「天真無邪」「羈絆」「信頼」！！我們友誼永存！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「那個，我選擇的是橙色的玫瑰，我們是值得信賴的夥伴對吧，而且還是從小認識，這朵花感覺很適合呢。不過看來我做得不太好，沒有什麼美術細胞（」感到失望 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「瑪琳選手的作品～～！！選用了很多勿忘我，充分表現了我們友情的存在感跟強烈的不要忘了我喔的心情！！同時也發揮了身為美術社員的實力，假花拼得很……哎～～總之很藝術的感覺！！一百萬分～～！！！」一手抓著紙捲當成麥克風一樣地說著。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「接著是路卡選手的作品！同樣也是以花語決勝負！這邊則是用了和路卡頭髮顏色比較近～欸大概吧？比較近的橘色玫瑰～～大朵大朵的花看起來很有氣勢！一次表現了我們青春的高中生涯跟我們強烈的羈絆！！欸～五百萬分！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「最後一位壓軸出場的是露娜選手的作品！雖然玫瑰擺得比較歪但也有個詞說是什麼……呃～不對稱風格之類的～？隨便啦總之就是那種！加上露娜灌注在裡面的心意！！一千萬分～！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        唉~為甚麼我是最低分~？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「哈哈哈，我們做的胸章青喜歡嗎」燦笑 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        語畢青將手高舉到頭頂上鼓掌，接著把三人做的胸章一個別在右胸，一個別在左胸，另一個猶豫了一下要放哪裡好之後別在了連帽衣的中間。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「哈哈哈哈哈來選一個吧！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯～～～可能是態度扣分！沒關係，一樣進入了優秀作品賞的範圍內！（？）」＞瑪琳 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        結果是全都要？! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「哈哈哈哈青全都要嗎？！果然很難抉擇ＸＤ」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青很貪心哦，說笑，都是為了你做的，全都拿去吧！」微笑 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而在你們幫青做胸章的同時，青也替你們的胸章做好了裝飾。很豪華地將這裡有的假花都至少各放了一點上去，其中或許正如其名喜歡藍色的關係也說不定，看上去小小朵的藍花用得特別多。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「因為是你們幫我做的啊～當然是全部別上來！一打三！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈 真像你 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「太棒了！！最喜歡青了！！我的兄弟！」感動的環抱著青 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我也最喜歡你了～～」抱回去 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青做的胸章超美的，一億萬點！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我也同意 一兆萬分! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「謝謝！！！嘿嘿～你們拿去當每天出門的配件也可以喔！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那我們去美術教室？我有點想看看 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「讚成！船長想畫圖吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        沒錯! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哦哦～你想畫什麼？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        啊啦 說出來會很害羞啦~>青 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎哎……」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來又是些色色的」鄙視 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嘿嘿嘿」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        總之出航吧~! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「那出航～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「出航～～！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「Let's GOOOO!!」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們身上別著高達一億萬分跟一兆萬分的胸章，興沖沖地回到校舍，爬到二樓的美術教室。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        然而一進入教室，用不著刻意觀察便可見足以澆熄你們這份歡樂的異狀。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在黑板上，潦草的紅色字跡大喇喇地寫著： \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        「那真的是你的朋友嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        感覺胸口掃過一陣寒意。SAN 0/1d2。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=82 【正気度ロール】 (1D100<=82) ＞ 96 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=68 【正気度ロール】 (1D100<=68) ＞ 69 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=61 【正気度ロール】 (1D100<=61) ＞ 76 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 68 → 67 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 82 → 81 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1D2 (1D2) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 61 → 60 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「什、什麼啊這個……」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「誰寫的醜字啦......」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        .......... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        剛剛太歡樂 都忘了這裏是異空間... \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「大家看著自己胸口，我們是真正的朋友啊！看看我們互相給對方用心做的胸章」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「黑板上寫醜字會被老師罵吧......」苦惱 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「對、對啊……！才不會被這種奇怪的東西破壞我們的友情！友情forever！」聽得出聲音很有努力鼓起力氣的味道。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (找找有沒有油漆) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （拍拍青） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「對嘛！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳你發現了幾罐黑色與深綠色的油漆。※請勿食用與潑人 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (用一罐油漆潑在黑板上) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        真是的 這字太破壞別人心情了! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「對啊，到底是誰寫這些破壞心情的東西」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哇！！！？？」嚇了一跳之後意識到瑪琳做的事之後拍拍手，「做得好！不愧是我們的船長！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (後退一點給船長弄油漆) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我們還是別在這裡吧……還是瑪琳想拿畫布畫什麼嗎？不要色色的喔。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哼哼哼 听了可不要吓一跳哦 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我要畫的...是你!青! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        來!擺個pose來! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎、我？？？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青來當模特兒了～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯……？嗯～～好喔……？那就這樣？？」他迷迷糊糊地擺了個姿勢，雖然看起來不是什麼很帥氣的姿勢也說不上很有元氣的樣子，但搭上青那有一點虛弱不安的臉色，反倒有種平常所見不到的病弱感或是引人庇護的味道。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哦哦哦產生保護欲的美少年！！！這就是...母性!!!! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (快速畫畫) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「OMG！青的姿勢是在引人犯罪嗎～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「？？？？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=80 【芸術（繪畫）】 (1D100<=80) ＞ 40 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「你們都太奇怪了吧」覺得疑惑 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瑪琳在強烈的興奮下振筆疾書完成了一幅楚楚可憐的日下青肖像畫。如果被看到了視情況可能會被抓走也說不定，但對瑪琳而言可以說是完成了一項巨作。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……我是這樣子的嗎……？？？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈....神作 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳的表情有夠可怕，就像個大叔一樣」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        可惜如果不是異空間的話 真想拿來提交比賽 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「船長認真起來真不能少看！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哼哼哼 是吧~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「？？這個拿出去（指交去比賽）沒問題嗎……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這叫藝術! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們看著巨作你一言我一語地聊著，終究將畫好好收了起來。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        餘暉自背後的窗外灑入，不知不覺間潔白的畫布染上一片橘紅。你們意識到這個熟悉的景象，與接下來將要發生的事——很快地，如同預料，世界陷入一片黑暗。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們猛地睜開眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        回過神來，自己似乎不知不覺間趴在課桌上睡著了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        一起身，便與一直以來的朋友對上了眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請　瑪琳　進行POW*5露娜　進行POW*4路卡　進行POW*3 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=18*5 【POW × 5】 (1D100<=90) ＞ 89 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=13*3 【POW × 3】 (1D100<=39) ＞ 33 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=14*3 【POW × 3】 (1D100<=42) ＞ 25 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        如此反覆發生的異常狀況，使你們感到更加焦躁。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        環顧四周，整間教室已經宛如廢墟一般破舊。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        身旁那些原本在教室裡的同學們，也已像是穿著制服的乾屍一般分不清面貌，乾澀地發出收音機雜訊般的聲音。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青？你還好嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……」聽聞妳的叫喚，青仍像是什麼也沒聽見一般茫然地望著前方，雙眼沒有焦點。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        可以進行精神分析。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 14 ＞ 特殊\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (抱住青)青!醒醒! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青......沒事吧......」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊、啊，我……呃，啊……又回來了……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青！你變回來了！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「剛剛你的狀態...很不妙」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!你还好嗎？!是哪裏不舒服嗎？! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我……」看起來還是有點心神不在這裡的樣子，「我不知道……就是……集中不了的感覺……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        可以看得出來他試圖讓自己像平常那樣打起精神，但完全力不從心，似乎已經沒有什麼餘裕做什麼來讓你們放心的樣子了。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (心疼)..... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們不能再浪費時間了 我們快再調查其他地方吧! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「那麼......我們繼續探索吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「雖然感覺情況很壞，我們沒有什麼時間可以消耗了，青還可以行動嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「可、可以……不要把我一個人丟在這裡……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (握住青的手)不會留下你的! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我們出發去鞋櫃看看吧」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不會啦，我們永遠在一起行動」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯>路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青也一起來」拉著青的手 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        青緊緊地回握住了你們的手，「嗯、嗯……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「在一起…………」對話的途中也能察覺他時不時眼神空洞、在稍顯不適的狀態與雙眼無神的狀態之間反覆變動。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們來到校舍出入口，可見校門口是開著的，但在校門之外，卻是一片無止境的黑暗。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而望見身旁一排排的沒有名字的鞋櫃，使你們想起在不久前早自習時，作為畢業準備的一環去撕了鞋櫃的姓名貼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        看著它們，總給人一股失去了容身之處的感覺。/ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (查看鞋櫃) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (找找青的鞋櫃) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （找找看我們鞋櫃的位置） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        找到自己與青的鞋櫃打開，裡面一片空蕩蕩的。/ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （看看自己穿着的鞋） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        看來沒東西了.... \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜你的腳上仍是畢業典禮時穿著的皮鞋。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們去職員室？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （看看其他鞋櫃） \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=65 【幸運】 (1D100<=65) ＞ 67 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        露娜打開一個又一個的鞋櫃。在看過一個個空蕩的鞋櫃正打算停下時，發現了其中一個鞋櫃內是有鞋子的。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        那雙鞋子裡擺滿了圖釘。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        露娜~~~再不走就扔下你啦~~ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「大家，發現這裡有雙留下的鞋，裡面佈滿了圖釘，不過還是不要拿了」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「來了～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好像沒東西可以查了......接下來去職員室囉」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哇喔……怎麼會有人做這種惡作劇……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        真呢 女人的妒忌真可怕 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (聽見有圖釘心有點寒) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        不知是無意識還是察覺路卡的神情，青抓著路卡的手似乎更緊了一些。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        爬上二樓來到職員室。燈開著，門也開著。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        從門口便能瞧見有幾位應該是老師的，穿著熟悉的服裝的乾癟人類們在裡頭，有的像是在談天，有的則坐在位置上像是在辦公的樣子。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (觀察四周) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　來個目星吧～ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 20 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你注意到職員室中有個紙箱裡放著畢業紀念冊。畢業典禮結束後才會在教室發下來，所以你們也還沒看過裡面的內容。/ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……？怎麼了嗎……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (悄悄聲去拿畢業紀念冊) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳發現了什麼嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (不要發現我不要發現我不要發現我) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「是什麼來著？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳你悄悄地湊近放著畢業紀念冊的箱子，所幸沒有被發現的樣子。順道可以來個聞き耳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=61 【聞き耳】 (1D100<=61) ＞ 81 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        大概是太緊張了所以你沒留意到師長（？）們在說什麼。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (向路卡他們揮揮手 展示畢業紀念冊) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (跟著走到船長身邊) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「原來是畢業紀念冊嗎」鬆一口氣 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （和青一起留在門口） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青看起來不是很懂你們在偷偷摸摸什麼的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        路卡大搖大擺地也跟了進去，各位先來個IDE好了 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「要我幫你拿一點嗎?」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=60 【アイデア】 (1D100<=60) ＞ 7 ＞ 特殊\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【アイデア】 (1D100<=60) ＞ 82 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【アイデア】 (1D100<=70) ＞ 24 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好的拜託你了 我拿不了這麼多~>路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (幫忙拿著) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　露娜老師們似乎都沒有注意到路卡的樣子，或者說看起來就是維持著一樣的姿態待在原處，要形容的話，比起活物更像是被固定在一個行為模式內的機器人一樣。雖然外表像是木乃伊就是了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        可以來個聞き耳。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【聞き耳】 (1D100<=70) ＞ 46 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜從師長們的方向傳來了「學生們都要畢業了啊，真讓人感嘆。」「說起來體育館的鑰匙不見了，是誰拿走了啊？」的對話，像是壞掉的人偶一般不停重複著。SAN 1/1d2 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=67 【正気度ロール】 (1D100<=67) ＞ 97 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d2 (1D2) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 67 → 65 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (回到門口和看他們會合) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「剛剛不小心想到，我們中途有遇到鎖匙之類的物件嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        沒有吧 怎樣了 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (跟著回到門口) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (打開畢業紀念冊看) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「如果我們之後要到體育館的話，以我所知那裡需要鎖匙進入呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「剛剛一路搜索也沒有鎖匙的物品....還要繼續找找看」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「瑪琳要先靜靜回來嗎？感覺那些老師有點可怕」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        為甚麼這樣說？鎖匙不在職員室嗎？>露娜 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        翻開畢業紀念冊，裡面看過去都蠻普通的。能搶先看到內容是感覺挺新鮮的沒錯，不過並沒有什麼特別奇怪的地方。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        上頭印滿了教學時的景象、社團活動或是下課時的樣子，充滿了各式各樣的照片。當然，其中也包含了你們和青一同歡笑的照片。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……」默默地看著照片，有點懷念又有點寂寞的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        》瑪琳 「好像不在呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        不在是？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯~~~總之沒有體育館的鎖匙對吧？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那我們去找找看？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我也不是很清楚，總之好像不在這裡就是」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗯......唯有四處搜索了」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青還記得照片是在哪裡影的嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……？哎？嗯……這張應該是在……去年運動會結束的時候，我們自己在教室騎馬打仗的照片？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我還記得那時候瑪琳一邊舉著露娜一邊發出奇怪的喘氣聲……」小小笑了一下 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「哈哈哈哈青記性真好」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青 我想問你 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青還記得呢哈哈」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        身上有沒有像鎖匙的東西嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嘿嘿～」頭挨在路卡跟露娜肩上。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「鎖匙……？」愣了一下之後在自己身上摸了摸，「嗯……？沒有……啊、我家的鑰匙也不見了……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「該不會我們現在只能住學校裡了？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯...... \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們去校長室看看？說不定校長拿走了 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「這.....我們要去校長室嗎?在二樓」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不會吧，不過要到體育館的話，我們要先找到鎖匙呢」嘆氣「還是我們到其他地點看看？」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        》luca 同意 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯、嗯……好啊。」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        校長室的燈沒亮，門也是關著的。不過裡頭似乎沒有人的樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        打開門一看，房裡擺著接客用的沙發與桌子。在桌上凌亂地擺著紙張和書堆。可以骰個目星。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 20 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 98 ＞ 致命性失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 13 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞瑪琳　路卡在桌上散亂的紙堆中，你注意到一枚印刷紙與一張筆記。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (拾起印刷紙和筆記) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (查看印刷紙和筆記) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        露娜盯睛到處尋找，夕陽透過校長室氣派的落地窗直直投入你的雙眼無比刺痛，趕緊別過頭去之後雖然勉強能看到東西了，但還是有點不太舒服。下一次技能成功值-20。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嘩，陽光很刺眼，什麼都看不到，你們有發現什麼嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        筆記則看來是畢業典禮時，校長致詞的講稿。裡頭羅列著給畢業生的鼓勵等等，但實在太長了讓人不是很想讀。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        可以骰個母國語。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=55 【知識】 (1D100<=55) ＞ 83 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=45 【知識】這裡應該是失敗，因為debuff －20 41》20 (1D100<=45) ＞ 41 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50 【知識】 (1D100<=50) ＞ 8 ＞ 特殊\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在瑪琳眼花撩亂地被校長的冗言贅字所蠱惑的同時，身旁的露娜與路卡則像是猜對題的考生一般成功地抓到了重點。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        啊~~~~看不懂~~~~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「はなむけ...原來如此。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「？？？？？」同樣看不懂的表情 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗯嗯，似乎是一段關於『餞』的解說」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這筆記路卡要帶住嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「為畢業生送上祈福吧...」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「畢業……對喔……雖然在這裡晃了這麼久，說起來我們明天，就要畢業了啊……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「真不想跟大家分開……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (用力握住青的手)..... \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「至少我們現在不會分開喔」》青 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我不會忘記你們的! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「筆記本也給我先拿住吧」<瑪琳 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        船長我可是很怕寂寞! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好~>路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯、嗯……也是啦。」抱著你們的手臂把四個人弄成了一整團的狀態。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (用力抱) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青！」抱緊緊 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「很擠哦」（用力抱） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嘿嘿嘿～」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        來到旁邊的家政教室，崩毀得看來不適合料理的檯面以及爐具在教室內排著。即使化作近似於廢墟的狀態，仍是令你們不禁想起過去在這裡烹飪、互相試吃與打鬧的情景。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        不過看來似乎是沒有什麼特別的東西。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        看來沒特別呢 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來這裡只有頹垣敗瓦呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「頹……什麼……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「像去了廢墟似的......」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們去會議室？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青你还好嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (擔憂握一握青的手) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊、唉……就跟剛剛差不多……？」露出有點勉強的微笑 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青看到我這裏有多少手指嗎？(舉出2指) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「只是……」用力思考的樣子，感覺有點不安，「呃～……什麼廢墟……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「兩隻，我、我還沒有那麼嚴重啦！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ........這樣啊 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青覺得肚子餓了嗎?......我有薯片喔！」轉移話題之術 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (青....所看到的風景....難道青已經快....) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「阿，沒什麼，感覺沒人家政室有點空虛的感覺，有點失望」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯、好啊，謝謝……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        ......我們快去會議室吧 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好啊」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好噠~」邊走邊給青薯片 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        來到會議室，整排長桌與旁邊的桌椅看上去很有氣勢，但加上整棟建物老化的狀態則散發出了一股莫名的陰森感。看過去似乎也是沒有什麼特別的東西。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青接過路卡的薯片，像小鳥一樣慢慢地啄著。/ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「這裡感覺也是沒什麼特別呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯 接下來去哪裡？ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (順手摸走一些路卡的薯片) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青吃得很可愛啦~」燦笑望著 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「你們吃太多了啦」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (四處查看) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「路卡不吃一點嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「你吃多點吧～我也吃了不少了啊」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡放眼望去……整間會議室牆面斑駁，地板龜裂，桌椅都搖搖欲墜的，不知道學校五百年後會不會是這個樣子。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好哦……？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗯......這裡也沒什麼可以看。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「如果你自己餓了的話不要藏著不說喔……」塞了一片薯片到路卡的嘴邊。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「芝士味很好吃呢～」咬住青給我的一塊薯片細細品嚐。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們邊吃著邊下樓離開校舍，走向體育館。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        朝著體育館前進，總感覺體育館似乎特別漂亮。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        不對，並不是體育館特別漂亮，而是因為校舍劣化的關係，就算只是維持原來的樣子也看起來特別漂亮。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        雖然不知道理由為何，不過體育館並沒有像校舍那般劣化、腐朽。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在體育館的大門上，貼著一張影印紙。/ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (看影印紙) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        影印紙上頭以「入場前檢查！」為題，寫著畢業典禮時的服裝儀容事項。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        感覺有股既視感。仔細想想，在畢業典禮當天進入體育館前自己也看過這張紙。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        雖然上面都是熟悉的文章，但最後的那一行印象中原來應該沒有寫的。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「到底是誰寫這些東西的」疑惑 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (看看門有沒有鎖上) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你上前推動體育館的門，以這個感覺來說，確實是鎖著的。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        站在你們背後的青，以十分茫然若失的神情盯著紙張，失落一般、又像是恍然一般呢喃。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊、啊啊——對了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「是啊……是這樣啊。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「為什麼，就我一個——」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瞬間，你們便失了意識。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        一睜開眼，你們便發現自己趴伏在課桌上。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        和至今為止一樣的狀況，卻四處都找不到青的身影，同學們也都不見了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        這已劣化至幾乎下一秒就會崩毀一般的昏暗教室之中，就只有你們寥寥幾人坐在這裡。/ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！」驚慌 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我們好像又再次醒來了，可是。。。青？到了哪裡」害怕 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青呢？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        無論如何在四周探尋，這間教室之中都只有你們三人的身影。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （先到窗邊看看操場） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        往操場看去，那棵雄偉的槐樹依舊座落其中，青翠的綠葉搖擺著，在嚴重劣化的操場中央對比之下顯得格外突兀。至少從這裡看來，青似乎不在那附近。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        按我看的套路 找不到關鍵道具就逃不出來的感覺... \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「去體育館的方法只有不停找鎖匙了吧。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        總之先探索這層有沒有鎖匙吧 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        己經沒有時間了... \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不如我們邊去找青和鎖匙吧，感覺體育館藏了些什麼東西」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們起身，在一樓內奔走，到處尋找，但看來這層樓內並沒有像是鑰匙的東西，也沒有發現青。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「一樓好像沒甚麼東西呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        鳴.....(焦慮) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「不如我們到2樓看看？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好.... \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們奔向二樓，便在職員室的入口發現了青的身影。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青捉著那時拿著的畢業紀念冊，呆呆地站著，接著很快地紀念冊自他的手中滑落地面、幽幽地坐了下來，低垂著頭。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而青看來無論如何喊他都沒有反應的樣子。▼要查看畢業紀念冊嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （過去查看） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (查看) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        撿起青所落下的紀念冊翻閱，很快便可察覺到其中的異樣。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        教學風景的照片、社團活動的照片、文化祭與運動會的照片、下課時間的照片、與你們一同歡笑的照片。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        都是你們方才才看過的沒錯。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        然而上頭，全部都只有青一個人變成了滿佈鮮血的模樣。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        裡頭也有你們畢業前一天一起打牌的照片。畢竟是昨天的事，這張照片不可能會出現在畢業紀念冊裡才對。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        混亂的情緒之下，頁面如同自己有了意識一般持續翻動。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        卡車撞上青時的模樣、青撞擊而扭曲的身軀、濺滿鮮血的四周。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青停留在驚愕神情的臉龐、你們因衝擊而呆愣、求救，卻仍無果而終的模樣，那副慘況全都大大地印在照片之中。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        SAN 1d2/1d4 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=65 【正気度ロール】 (1D100<=65) ＞ 86 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=81 【正気度ロール】 (1D100<=81) ＞ 79 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d4 (1D4) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d2 (1D2) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 65 → 61 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=60 【正気度ロール】 (1D100<=60) ＞ 92 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1D4 (1D4) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 60 → 59 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 81 → 79 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        頁面繼續翻動。青葬禮時的情景、你們各自就業、出了社會後一同聚餐、談論著各自生活的模樣，宛如描繪了未來景象的照片映入眼簾。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        但是，這些照片裡都不再有青的身影了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        眼前的照片彷彿正殘酷地向你們訴說青的死、在這些未來之中不存在青這個事實。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        頁面不停翻動。在畢業紀念冊的最後，理應一片空白的筆記頁上，密密麻麻地印滿了手寫的字。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        到畢業典禮會場一看，他們幾個都一臉難看的低著頭。雖然我拍了幾下他們的背叫他們打起精神來，但他們好像聽不見的樣子，手也是直接穿過去了。 \n      ",
    "first_message": true
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        典禮上喊到我的名字之後整個體育館都靜下來了，畢竟我都不在了沒人回話也是當然的啦…… \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        可是，明明知道這是理所當然的，腦袋感覺都要炸開了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        為什麼就我一個？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        為什麼就我一個死了？ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        為什麼？為什麼？為什麼、為什麼、為什麼、為什麼、為什麼、為什麼、為什麼、為什麼？我也、好想和大家一起、 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        回過神來就到學校了。說是要讓我實現我的遺憾，只要待在這裡就能永遠繼續當高中生，和大家一直在一起不用畢業。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        這種事真有可能嗎？怎麼能把他們牽扯進來好孤單 不對、不行 不可以這麼作我不想自己一個人，讓他們也一起、不是的，不行、不行、啊啊、有聲音 為什麼就我一個、 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "紀念冊",
    "message": "\n        那個蟲子、 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        而在最後的一頁，雜亂無章的紅黑色墨水像是胡亂砸在書面上一般印滿了「為什麼」「我不要」「想和大家繼續在一起」「為什麼就只有我」「好難受」「好不甘心」「可惡」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        見到由青平時開朗的模樣所難以想像的狂亂文書，SAN 1/1d3。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1d100<=79 【正気度ロール】 (1D100<=79) ＞ 16 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d100<=59 【正気度ロール】 (1D100<=59) ＞ 21 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d100<=61 【正気度ロール】 (1D100<=61) ＞ 97 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 79 → 78 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d3 (1D3) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 59 → 58 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 61 → 58 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請來個目星。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 70 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【目星】 (1D100<=60) ＞ 48 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 45 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在那些雜亂的文字之間，你發現一行微小的字跡顫抖地寫著「快點逃」。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ……翻完紀念冊，還未自衝擊之中恢復過來時，不知不覺間青已站起身來。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        他依舊低垂著頭，嘶吼般地開口。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瞬間，感覺聽見了人體不該有的「噼嘰」的聲響。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我想起來了。全部、全都想起來了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我死了。就我一個死了。明明都約好了，明明少了我一個，大家還是畢業了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「之後大家也會丟下我一個一個長大成人吧？為什麼。為什麼啊！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        看得出來慟哭的青的身體，自指尖開始逐漸染上黑色。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「吶，留下來吧。只要大家都在一起就不孤單了吧？」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我們再來一起打牌、一起幹些蠢事一起玩嘛。只要待在這裡，我就不用死了。大家也可以不用畢業了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「拜託你們，」他流著淚，將染得漆黑的手伸向你們，「不要丟下我一個人。」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜　請骰個IDE。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【アイデア】 (1D100<=70) ＞ 90 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在這異樣的空間發生的種種疊加至此使你一陣壓迫，但在這個狀態之下，也已經無暇思考其他事情了。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ▼你們要接過青的手嗎？ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （雖然看到剛才的景象有點噁心，可是我還挺的下去的） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n         \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        看著你們不打算回應的模樣，那伸向前卻沒能得到回覆的手緩緩收回，覆上青的臉。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        接著，彷彿發狂似地大笑起來。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哈哈、啊哈哈！是嗎、這樣啊！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那只要大家也死了，我們就能在一起了吧？等著吧，我馬上就讓你們變得跟我一樣。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「畢竟、」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我們是朋友嘛？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青的身體隨著噼嘰、噼嘰的聲響開始扭曲、膨脹。在慟哭之中，青將覆在臉上的、長出尖銳勾爪的手朝向你們。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「吶、大家不是說好要永遠在一起的嗎……！」他一瞬間彷彿奮力甩開什麼東西一般，將鉤爪伸向露娜。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        CCB<=50　【鉤爪】 (1D100<=50) ＞ 82 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        攻擊猛地偏移，落在一邊。輪到瑪琳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!你醒醒!就算我們畢業都不會忘記你!你看看我們給你胸章! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 41 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 58 → 53 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        聽聞你的話，青咬牙反覆著粗喘的氣息，雖不做回應，但感覺得到他似是在耐著什麼。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞路卡　先來個IDE吧 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=60 【アイデア】 (1D100<=60) ＞ 27 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請來個1d3決定症狀，1d10+4決定持續回合。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d3 (1D3) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d10+4 (1D10+4) ＞ 10[10]+4 ＞ 14\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        見到好友化為眼前的模樣，感覺心中有什麼東西破碎了。但身邊還有你應該守護的人，恐懼的氣息不斷噴湧而上，若他們受傷了、死了、甚至也成了這個樣子，這次你恐怕是無法承受。＞若同伴受傷，將其治療成為你的優先選項。你不願意見到身邊有任何人受傷。持續14回合 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請露娜決定行動。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【目星】 (1D100<=70) ＞ 1 ＞ 決定性的成功/特殊\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        輪到路卡進行行動。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青他其實沒有想殺了我們，我看到他的眼神各種不情願，我們的話語打動到青呢！照這個勢頭還是可以說服青的！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50 【こぶし（パンチ）】 (1D100<=50) ＞ 5 ＞ 決定性的成功/特殊\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青你是我們最好的朋友喔......請相信我......你只是被後腦的奇異東西操控著而已！......」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        果然青是被蟲子操控了嗎...! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        路卡筆直的拳頭迅雷不及掩耳地擊向青的後腦。請骰拳頭傷害～1d4+DB \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n         \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d4 (1D4) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d4 (1D4) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嘎哈、！哈、哈哈……路卡你真手下不留情……」他搖搖晃晃地退後了幾步，「你要讓我再死一次嗎？真的嗎？」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ KP ] 回合 : 1 → 2 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青一隻手抓著自己的另一隻手臂，又被自己狠狠地揮開。流著黑淚的雙眼直直盯著你們。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！！！不要被吞噬阿，要相信自己阿！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「明明、明明只要大家都能留下來陪我不就好了嗎！為什麼要這樣妨礙我！」他的鉤爪再次揮向露娜。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「......抱歉啊青。我想幫你打走怪物......」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        CCB<=50　【鉤爪】 (1D100<=50) ＞ 92 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        或許是自己也控制不住方向，又或者是真的如你們所說的壓制住了自己，攻擊仍舊沒有擦過你們任何一人。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        輪到瑪琳。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！我知道的，你沒有想殺了們的對吧！，我們也沒有這個意思」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哈、哈……我才……不對、只要、只要大家快點死掉我們就能一起……」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗚嗚」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!清醒些!不要被他操控了你的意志! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 28 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        感覺得到青的眼神不斷地閃爍，雙手緊緊地握著不停顫抖。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        輪到露娜。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=70 【聞き耳】 (1D100<=70) ＞ 53 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請路卡決定行動。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青你不是這樣想的對吧，快停手吧嗚嗚」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        他的雙唇顫抖，微微地敞開，很快又畫成一弧線咬緊牙關。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50 【こぶし（パンチ）】 (1D100<=50) ＞ 73 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (拿樹枝用拳頭攻擊怪物) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        樹枝唰地滑過青的頸邊，而未能擊中你所欲瞄準的位置。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ KP ] 回合 : 2 → 3 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        CCB<=50　【鉤爪】 (1D100<=50) ＞ 50 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「說這麼多你們還不是！還不是一樣只是想殺了我！明明我就只能待在這裡了，明明我們只有在這裡才可以在一起了……！」青的鉤爪再次往露娜的方向揮下。請露娜進行迴避。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=16 【回避】 (1D100<=16) ＞ 36 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        2d4　【鉤爪傷害】 (2D4) ＞ 3[1,2] ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        尖銳的鉤爪劃破露娜的肩膀，滲出血來。瞬間，青彷彿回過神來一般，呆愣地喊了一聲「露娜……！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ＞露娜　HP-3 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] HP : 10 → 7 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「呃，青。。。很痛」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青....!你......! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「我、我——不對……哈、哈—－很快、很快我們就……」他的一隻手掩上臉，一隻手則緊緊掐著自己的腹部。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        輪到瑪琳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=70 【精神分析】 (1D100<=70) ＞ 3 ＞ 決定性的成功/特殊\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡振作些!你可是黑社會 平時的威風去哪! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「謝謝船長......幸好有你的相助！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        瑪琳的喝斥之下，路卡忽地感覺方才見到露娜受傷時猛地蓋過自己腦海一切思緒的衝動漸漸消退。＞發狂解除　SAN+2d3 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        2d3 (2D3) ＞ 5[2,3] ＞ 5\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 53 → 58 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        輪到露娜。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「看來我需要先急救一下自己，肩膀流血了」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=65 【応急手当】 (1D100<=65) ＞ 3 ＞ 決定性的成功/特殊\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你緊急撕下自己身上的制服包紮，HP+1d3。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d3 (1D3) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] HP : 7 → 10 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        輪到路卡行動。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        CCB<=50 【こぶし（パンチ）】 (1D100<=50) ＞ 59 ＞ 失敗\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （用樹枝攻擊後腦的怪物） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請路卡骰1d8+DB的傷害。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d8 (1D8) ＞ 8\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d4 (1D4) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        尖銳的樹枝猛地刺向青的後腦，彷彿碾碎果實一般厭耳的破碎聲清晰地傳入你們每個人的耳邊。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        然後，青便彷彿斷了線一般瞬間失去了意識倒下。他染黑的雙手以及膨脹而扭曲的部分也一一剝落，漸漸恢復到了青原來的姿態。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青...! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        請露娜與瑪琳先骰個幸運。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        CCB<=65 【幸運】 (1D100<=65) ＞ 23 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        CCB<=90 【幸運】 (1D100<=90) ＞ 80 ＞ 成功\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        方才戰鬥時的壓迫感一銷而散，只留你們以及躺在地上的青。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青發出微弱的呻吟，緩緩睜開了眼。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!(跑向青) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青!你還好嗎! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「青！！！沒事了沒事了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青！！你醒吧！！沒事了！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        他掩著腦袋，瞬間眼淚掉了出來，抱著你們顫抖，「啊、啊……我、我怎麼會……！對不起、對不起……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「露娜你沒有事吧？都是我害的……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        沒事了....已經沒事了...!(痛哭抱住青) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「沒有事阿！不要怪責自己了 嗚嗚」（緊緊抱著青） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青沒事就好了......雖然剛剛好像用過力了」（抱緊處理） \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們抱在一起好一陣子，感覺彼此都黏在一起了一般。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        終於平復下來之後，青突然張開了他握緊的拳頭。在他的手裡是一支鑰匙，上頭掛著寫有「體育館」的吊牌。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        這是「體育館」的吊牌....! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊……原來，就像瑪琳說的一樣，是在我的身上……是我藏起來了啊。就因為不想看到大家畢業的樣子……我真是個糟糕的傢伙……」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「真的很對不起，就因為我的任性讓你們受到這麼多的危險。明明我們一直都在一起的。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        他低下頭，看著手裡的鑰匙，「就算因為被奇怪的蟲操控……覺得自己一個人很孤單、忌妒你們活著的，都是我的問題。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        傻瓜...!我就知道是你...!但我只是裝着不知道...!(边哭边抱緊青) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我也不想和青分開....!嗚嗚嗚嗚 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗚嗚我們明白的，我們也很想念你啊，缺了一個的畢業誰想面對」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「不是的！青永遠是最棒的好朋友！」痛哭淚流 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗚嗚……你們、明明我也知道你們一定也不好受的……」抽抽噎噎地說著，又把臉埋到你們身上。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        然後仰頭，深呼吸了好幾次，「真的、真的很謝謝大家。我已經做好覺悟了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「這裡……雖然不是很懂是怎樣變成這樣的，但還是以我的遺憾構成的世界。」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「既然大家幫我淨化了，很快這裡就會連同我一起消失。這樣大家也都能回去了。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青~~~~~~~(哭到臉都花) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗚嗚」（繼續抱緊青） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗚哇！！！」淚流滿面,鼻涕也出來了 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        等一下!(站起來) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        然後他勾起笑容，哭得紅紅的雙眼微彎看著你們，「可以在無法挽回之前恢復理智，真的是太好了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「怎、怎麼了？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們還有事情未幫青做的! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        畢業典禮! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「對呢！我們趕過去看看？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我們要和青一起辦畢業典禮! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「對啊！」突然醒覺 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        現在還有時間!我們一起吧!青! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎！？可、可是我都讓你們遇到這種奇怪的事情了……」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡來做校長! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「體育館Let's GOOOOO」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「出航～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        傻瓜!有甚麼不可以!>青 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        怎可能扔下你辦畢業典禮啦! \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        就算你被操控 青还是青!我們的朋友! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「要辦的總要辦～我們幫青完成畢業典禮～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好!不要廢話了!強制出航~!(拉住青) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        他呆愣了一陣，然後像是終於理解了這是真的一樣，抓著你們的手大大地笑了，「嗯！好耶！！我也很想和大家一起辦畢業典禮！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「耶～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈對吧!>青 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        於是你們一邊大喊著出航，一邊奔向體育館。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        用上青所拿出的鑰匙打開體育館大門，裡頭充滿了莊嚴的氣息。感覺得到這個場所在這個世界之中的份量。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        館內布著紅白的布條，鋼椅密密麻麻地排著。在台上則裝飾著豪華的花束，放著畢業證書的塗漆盒子放在一邊。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎～剛才是不是說路卡要當校長？那我就負責那個……致詞來賓好了！！總不會說只有我當領畢業證書的那個吧～」他很快地衝上了台，拍了拍講台走到旁邊向你們揮手。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        靠你啦青~要努力幹哦~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「當然啦！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「那我先去把畢業證書拿給各位吧～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「耶我是校長！！我負責交畢業證書啦～」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好，把我們證書選出來了，給你，校長路卡」笑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好欸～～加油喔校長！」拍了拍路卡的背。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        喂喂你這校長行不行啦~>路卡 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「啊可是校長自己領畢業證書的時候要怎麼辦？」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青來做校長囉～～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        路卡校長下台!讓青做校長~! \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「對耶」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好～那我就是光榮的第九十九代校長！鑒於路卡校長的勇敢精神來為校長頒發畢業證書！（？？？）」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈好耶 青校長好帥哦~! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哼哼～～對吧！」然後他從露娜手中接過屬於路卡的畢業證書，清了清喉嚨。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「三年C班！路卡‧卡涅西羅！！我們光榮的第九十八代（？）校長～！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「感謝各位多年來的關照！！校長順利畢業了！～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        前校長~記得拿證書啊~! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        （拿走青手上的畢業證書，順便抱了青一下） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「路卡同學，感謝你這十幾年來的陪伴，路卡同學是非常熱情有義氣的人，不只在補修時一起跟我哭著看那些看不懂的東西，還總是在校長我寂寞的時候給我抱抱跟薯片，遇到危險時也奮不顧身挺身而出，你一定會是往後稱霸黑手黨界的超級新星！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        然後他把手舉到頭上大力地拍了拍，「哎～～～恭喜畢業！！！嘿嘿～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「嗚嗚嗚好感動！」眼睛水汪汪 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗚嗚嗚嗚嗚 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「來！校長請吧！！」抱抱完之後把自己的位置換到了旁邊。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗚嗚嗚」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        那麼路卡校長要先頒給誰（？） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        等下!青先繼續做校長頒給我們! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哎真的嗎？我篡位成功了！？好耶那請各位同學坐好就定位喔！」又回到講台前，雙手撐在講台上看挺出上半身看著你們。 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (馬上回座位乖乖坐著) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好哦」（筆直地坐好） \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (坐直) \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        シークレットダイス ???\n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那麼下一位～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「三年C班！寶鐘瑪琳！本校美術社的異星！扭曲了全世界性癖的船長～！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        係~~~~~~~!(極大音量站起身) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「母語都出來了哈哈」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「中氣十足嘛！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「瑪琳同學，謝謝妳一直以來的陪伴，也謝謝妳讓我床底下的收藏變多了！但也讓我更多不敢給我媽看到的東西！！雖然妳常常開黃腔搞笑，但其實非常體貼人心，我們都看在眼裡！披著狼皮的治癒系！謝謝妳冷靜地帶著我們越過重重的波浪來到這裡！祝妳和兔田有情人終成眷屬喔～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        接著他將畢業證書遞給了妳。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗚嗚嗚嗚嗚謝謝你啊青 我會拿合你口味的工口本上貢的!(边哭边拿畢業證書) \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (抱一下+親青的臉)這是福利哦~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哇謝謝～～！！！可以的話順便先把我床底下那些幫我燒一燒就更好了！！畢業快樂～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哇！！！？？？？？」瞬間滿臉通紅摀住自己的臉頰 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        哈哈哈青真純情~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「咳咳、請瑪琳同學不要捉弄校長！罰妳接下來唱校歌時要當起音的那個！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        好~~ \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「那麼接下來！三年C班！夜宮露娜！！歸宅部之花！！我們最強的連勝不敗狙擊手～～！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「是！！！」超大聲 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「夜宮同學，感謝妳這些年來的支持，也感謝妳在重要的時刻永遠不放棄地鼓舞我們！雖然從不熟的人看起來可能會覺得你冷漠，但相處過後大家都知道妳潛藏著的心比任何人都還要火熱～～相信妳一定會成為最強的實況主打敗天下無敵手（？）！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        然後大概是因為講完了三個人的感言，他有點掩藏自己害羞似地略顯用力地將畢業證書遞到妳的眼前。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「謝謝青嗚嗚嗚，雖然以後的未來也沒能看見你的身影，但是你還是我永遠的好朋友。我會成為最強的實況主的，走著看吧！！！」（手中接過畢業證書後輕輕抱了一下青） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「嗯！！！妳可以的！畢業快樂～～～！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「好耶那接下來換我了！」然後他便咚咚咚地跑下了台，坐在座位上挺直腰桿。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        那麼接下來！三年C班！日下青！！田徑部之星！！我們最好的好朋友～～！！！ \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「哈哈青很期待嘛」微笑 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「是！！！」很大聲的回應 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「路卡我們也一起來頒發畢業證書給青吧！」（慢慢走到瑪琳身邊） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「好啊！」（走到船長身邊） \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「喔喔、三個校長！？超級VIP待遇了耶！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「對啊，重要的朋友應有的待遇呢」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「日下青同學，感謝您一直以來的陪伴！接下來請收下三倍的畢業祝福吧！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青同學，謝謝妳一直以來的陪伴，也謝謝妳一直給我和兔田同學助攻讓我們關係變好,雖然你很純真很純情,讓我欺負你變得有趣起來......即是說....你也是船長重要的存在之一!放心吧!我是很花心的!雖然我第一位是兔田,第二位一定是青你哦~!我會努力向免田告白的！！！ \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        祝你畢業快樂哦!青! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……謝謝！！！你們也是，畢業快樂～！！」他抽了抽鼻子，很有氣勢地接過了畢業證書，「最喜歡你們了！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「青！畢業快樂POG！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「畢業快樂～～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        還有噪門大比賽 祝青贏下第一位! \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哼哼！！這我當然是不會輸的！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我們總算能夠一起畢業了嗚嗚」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        回去貢哈根達斯給你~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「哈根達斯想要多少有多少～」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「耶！！我要巧克力的！！」緊緊地抱住了你們。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        (用力抱) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        （緊緊抱在一起） \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        (抱緊緊) \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們緊緊地抱在一起，不知道過了多久，青抬起頭，露出非常清爽的笑容。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「哈～這樣我也沒有遺憾了！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「雖然之後就只有你們要變成大人了感覺還是有點寂寞，不過我也會在哪裡守望你們的啦～～大概吧！」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「謝謝大家！！能和你們當朋友真是太好了！」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青我不會忘記你這個朋友的! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「那就當然！」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「務必看著我們哦！有青當朋友也實在太好了嗚嗚，我不會忘記你的」 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「記得我會在看，可不要做壞事了哦～～」 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「我會記住的哈哈」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        一直被看我會很害羞啦~~~ \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「我會做個善良的黑手黨的！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們如釋重負般地伴著嘴，忽地，啪嚓的聲音傳入耳邊。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        往源頭一看，彷彿玻璃藝品碎裂一般，體育館開始緩緩地崩壞，從窗外也能看見校舍同樣漸漸崩毀的模樣。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們聽著青說待在這裡很危險、快點去操場的指示快步跑起。到了操場一看，那棵槐樹的花葉也正逐漸散落。 \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……看來時間已經到了呢。」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青寂寞似地呢喃道，他的身體從指尖開始變得透明，能清楚看見身後的槐樹。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青.....(難過) \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「嗚嗚，再會了青」 \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「時間過得真快......青要保重。」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        嗯....再會了 青 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        我不會忘記你的... \n      ",
    "first_message": false
  },
  {
    "color": "#2196f3",
    "channel": " [主頻道]",
    "character": "日下青",
    "message": "\n        「……還是很對不起把你們扯進來。可是，最後還能跟你們說話真是太好了！要連著我的份，好好活下去啊！！！再見了！！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        強風颳起。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在風吹之下，槐樹的葉片與花瓣一股氣散去。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        青的身軀為溫煦的暖光所包覆、逐漸消失的模樣在淚水之中顯得朦朧。光芒刺眼得雙眼幾乎睜不開來，你們緊緊閉上眼、 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ……回過神來，你們已坐在體育館內的鋼椅上。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        一抬頭看，便是校長一一朗聲點名畢業生、遞送畢業證書的模樣，四周則是挺胸坐姿端正的同學們。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        然後，在附近的鋼椅上，則立著青的照片。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        你們發現，在那照片一旁，放著失去意識前理應所沒有，卻印象深刻的花。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        是你們為青做的胸章，上頭一朵又一朵的假花。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在感受到自己終於回到現實的同時，也再度體感他已經不在的事實。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        接著，校長點名日下青的聲音在整個館內迴盪。 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        「好好保重啊日下青！！！！！」有點唐突，又衝動地忍不住叫了出來 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        到!!!!!!!(痛哭代青大叫) \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「日下青同學你是我們超POOOOOOOOOOOG的好朋友！！！！！」大聲叫喊 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在你們三人不約而同卻又完全相異的大喊之中，彷彿聽見了一聲響亮的「有！！！！！！！」的聲音。 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        .......! \n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        「！？」 \n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        青......! \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        在一旁的師長同學們因你們三人的叫喊而騷動的同時，似乎傳來了那熟悉的嗓音笑著說，「雖然每個人講的都不一樣，不過我們這樣四個人的聲音，果然還是我贏了對吧！！」 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        ------ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        畢業典禮結束，在回教室的途中，同學向你們出聲問道： \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "同學",
    "message": "\n        「咦？這是怎麼了，你們一起加了裝飾嗎？好可愛哦。」 \n      ",
    "first_message": true
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        他指著你們的胸前。在胸口上的，應該是已恢復原貌的胸章才是。 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n        拆下胸章一看，才發現在自己看不見的位置上，別著一朵小小的勿忘我。/ \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "●報酬（+SAN）",
    "message": "\n        生還　1d6淨化了青　1d10與青進行了畢業典禮　1d6 \n      ",
    "first_message": true
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D6 (1D6) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D10 (1D10) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#e91e63",
    "channel": " [主頻道]",
    "character": "寶鐘瑪琳",
    "message": "\n        1D6 (1D6) ＞ 4\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d6 (1D6) ＞ 1\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d10 (1D10) ＞ 6\n      ",
    "first_message": false
  },
  {
    "color": "#ff9800",
    "channel": " [主頻道]",
    "character": "ルカ・カネシロ (Luca)",
    "message": "\n        1d6 (1D6) ＞ 3\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 寶鐘瑪琳 ] SAN : 78 → 90 \n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d6 (1D6) ＞ 5\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d10 (1D10) ＞ 8\n      ",
    "first_message": false
  },
  {
    "color": "#da00ff",
    "channel": " [主頻道]",
    "character": "紫宮るな ( LUNA／露娜 )",
    "message": "\n        1d6 (1D6) ＞ 2\n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ ルカ・カネシロ (Luca) ] SAN : 58 → 68 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "system",
    "message": "\n        [ 紫宮るな ( LUNA／露娜 ) ] SAN : 58 → 73 \n      ",
    "first_message": false
  },
  {
    "color": "#888888",
    "channel": " [主頻道]",
    "character": "KP",
    "message": "\n          —END1—餞　- 贈花 - \n      ",
    "first_message": false
  }
]