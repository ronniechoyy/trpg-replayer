import { use, useEffect, useState } from "react";

async function delay({time=1000}){
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

}

function Img_box({img_src}) {
  return(
    <div className="Image_frame max-w-[600px] aspect-square overflow-hidden flex items-start absolute w-[600px] bottom-[215px] left-[-100px]">
      <img className=" absolute scale-[1.75] top-[300px] aspect-square object-contain select-none pointer-events-none" src={img_src} alt="" />
    </div>
  )
}

function Text_box({ text_appear_state, texts, channel, character, color, onClick, onKeyDown, skip_text }) {
  const text_state = useState('');
  useEffect(() => {
    if (texts == undefined) { return }
    console.log('Text_box mounted\n', (texts ?? '').replace(/\s/g, '') )
    async function text_appear(){
      for (let i = 0; i < texts.length; i++) {
        await delay({ time: 50 })
        text_state[1](texts.slice(0, i + 1))
      }
    }
    
    text_appear()
  },[texts])

  useEffect(() => {
    if (texts == undefined) { return }
    if(text_state[0].length == texts.length){
      console.log('reached', text_state[0].length , texts.length)
      text_appear_state[1](1)
    }else{
      text_appear_state[1](0)
    }
  }, [text_state[0]])

  return(
    <div className="Text_box absolute bottom-[70px] left-[50%] flex flex-col gap-[15px] overflow-hidden
        translate-x-[-50%] bg-[#222] p-[20px] rounded-[5px] shadow-lg min-h-[150px] w-[90%]" onClick={onClick} onKeyDown={onKeyDown}>

      <div className="Chat_type_logo absolute g_i text-[220px] text-[#333] z-[0] right-0 bottom-[-150px] rotate-[20deg]">article</div>

      <div className="Name text-[15px] flex gap-[15px] items-center z-[1]">
        <div className=" text-[12px] bg-[#333] p-[5px] rounded-[5px]">{channel}</div>
        <div className="text-[20px] font-[900] " style={{ color: color }}>{character}</div>
      </div>
      <div className="Text text-[15px] z-[1] mb-[15px]">
        {text_state[0]}
      </div>

      {text_appear_state[0] == 1 ?
        <div className=" absolute bottom-[0px] right-[35px]  text-[30px] animate-bounce">
          <div className="rotate-180 g_i">arrow_drop_up</div>
        </div> :
        <div className=" absolute bottom-[10px] right-[35px]  text-[20px] animate-spin">
          <div className="g_i">hourglass_top</div>
        </div>}


    </div>
  )
}

function Chat_container({ text_appear_state_change, text_auto_play, texts, channel, character, color }) {
  const text_appear_state = useState(0)
  useEffect(() => {
    if (text_auto_play[0] == 0) { return }
    if (text_appear_state[0] == 0) { return }
    text_appear_state_change(text_appear_state[0])
  }, [text_appear_state[0]])

  useEffect(()=>{
    const handleKeyDown = (event) => {
      if (text_appear_state[0] == 1) { return }
      if (event.code !== 'Space' || event.code !== 'Enter') { return }
      text_appear_state_change(1)
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => { window.removeEventListener('keydown', handleKeyDown); };
  },[text_auto_play[0]])

  return (
    <div className="Chat_container w-[90%] flex flex-col justify-center">
      <Img_box img_src={'/000776 shinomiya runa trpg jk graduration ver v0.4.png'} />
      <Text_box text_appear_state={text_appear_state} texts={texts} channel={channel} character={character} color={color} 
      onClick={()=>{
        if (text_auto_play[0] == 1) {return}
        if (text_appear_state[0] == 0) { return }
        text_appear_state_change(1)  
        
      }}
        />
    </div>
    
  );
}

function RPG_player({log_json = [], current_index}) {
  const text_appear_state = useState(0)
  const text_index = useState(current_index)
  const text_auto_play = useState(0)
  //const texts = useState(test_log_json[current_index].message)
  //'「おはようございます、皆さん。私は紫宮るなです。」\n「今日は、皆さんと一緒にTRPGをプレイすることを楽しみにしています。」'
  useEffect(() => {
    if (text_appear_state[0] === 0) { return }
    console.log('RPG_player mounted\n', (log_json[text_index[0]]?.message ?? '').replace(/\s/g, ''))
    async function text_appear(){
        console.log('RPG_player text_appear\n', (log_json[text_index[0]]?.message ?? '').replace(/\s/g, ''))
        if (text_auto_play[0] == 1) {
          const delayTime = log_json[text_index[0]].message.length * 50; // Adjust the multiplier as needed
          console.log('wait ', delayTime)
          await delay({ time: delayTime })
        }
        const nextIndex = text_index[0] + 1;
        text_index[1](nextIndex);
        text_appear_state[1](0)
    }

    text_appear()

  }, [text_appear_state[0]]);

  return (
    <div className="RPG_player absolute w-[100%] h-[100%] flex flex-col items-center">
      <Chat_container 
        texts={log_json[text_index[0]]?.message??''}
        channel={log_json[text_index[0]]?.channel.split('[')[1].split(']')[0]??''} 
        character={log_json[text_index[0]]?.character??''}
        color={log_json[text_index[0]]?.color??''}
        text_auto_play={text_auto_play}
        text_appear_state_change={(v)=>{
          if(v==1){
            text_appear_state[1](1)
            // console.log('Chat_container\n text_appear_state changed to 1')
          }else{
            
            console.log('Chat_container\n text_appear_state changed to 0')
          }
        }} />
    </div>
  );
}


export default RPG_player;