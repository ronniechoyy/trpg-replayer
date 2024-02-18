import { createContext, useContext, useEffect, useRef, useState } from "react";

const Text_appear_state_context = createContext(0)
const Text_auto_play_context = createContext(1)
const Log_json_context = createContext([])
const Text_index = createContext(0)
const Text_appear_speed = createContext(50)

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

function Text_box({ /*text_appear_state,*/ texts, channel, character, color, onClick, onKeyDown }) {
  const text_state = useState('');
  const text_appear_state = useContext(Text_appear_state_context)
  const text_auto_play = useContext(Text_auto_play_context)
  const log_json = useContext(Log_json_context)
  const text_index = useContext(Text_index)
  const skip_text = useState(false)
  let text_appear_speed = useContext(Text_appear_speed)

  const skip_text_ref = useRef(skip_text[0]); // Create a ref for skip_text
 
  useEffect(() => {
    console.log('skip_text', skip_text[0])
    skip_text_ref.current = skip_text[0]; // Update the ref whenever skip_text changes
  }, [skip_text]);

  useEffect(() => {
    if (texts == undefined) { return }

    console.log('Text_box mounted\n', (texts ?? '').replace(/\s/g, ''))

    async function text_flowout() {
      for (let i = 0; i < texts.length; i++) {
        if (skip_text_ref.current) { // Check the ref instead of the state
          text_state[1](texts)
          skip_text[1](false)
          break
        }
        await delay({ time: text_appear_speed })
        //text_appear_speed = 250;
        text_state[1](texts.slice(0, i + 1))
      }
    }

    text_flowout()

  }, [texts, skip_text_ref]); 

  useEffect(() => {
    if (texts == undefined) { return }
    if(text_state[0].length == texts.length){
      console.log('reached', text_state[0].length , texts.length)
      text_appear_state[1](1)
    }else{
      text_appear_state[1](0)
    }
  }, [text_state[0]])

  function onclick_handler(){
    if(text_auto_play[0] == 1){
      text_auto_play[1](0)
      return
    }
    if(text_appear_state[0] == 0){
      skip_text[1](true)
      return
    }
    text_appear({ log_json, text_index, text_appear_state, text_auto_play })
  }

  return(
    <div className="Text_box absolute bottom-[70px] left-[50%] flex flex-col gap-[15px] overflow-hidden select-none
        translate-x-[-50%] bg-[#222] p-[20px] rounded-[5px] shadow-lg min-h-[150px] w-[90%]" onClick={onclick_handler} onKeyDown={onKeyDown}>

      <div className="Chat_type_logo absolute g_i text-[220px] text-[#333] z-[0] right-0 bottom-[-150px] rotate-[20deg]">article</div>

      <div className="Name text-[15px] flex gap-[15px] items-center z-[1]">
        <div className=" text-[12px] bg-[#333] p-[5px] rounded-[5px]">{channel}</div>
        <div className="text-[20px] font-[900] " style={{ color: color }}>{character}</div>
      </div>
      <div className="Text text-[15px] z-[1] mb-[15px]">
        {text_state[0]}
      </div>
      {text_auto_play[0] == 0 ?
        (text_appear_state[0] == 1 ?
          <div className=" absolute bottom-[0px] right-[35px]  text-[30px] animate-bounce">
            <div className="rotate-180 g_i">arrow_drop_up</div>
          </div> :
          <div className=" absolute bottom-[10px] right-[35px]  text-[20px] animate-spin">
            <div className="g_i">hourglass_top</div>
          </div>):
        <div className=" absolute bottom-[10px] right-[35px]  text-[20px] animate-spin">
          <div className="g_i">progress_activity</div>
        </div>
        }


    </div>
  )
}

function Chat_container({ /*text_appear_state_change,*/ text_auto_play, texts, channel, character, color }) {
  //const text_appear_state = useState(0)
  //const text_appear_state = useContext(Text_appear_state_context)
  //const skip_text = useState(false)
  // useEffect(() => {
  //   if (text_auto_play[0] == 0) { return }
  //   if (text_appear_state[0] == 0) { return }
  //   //text_appear_state_change(text_appear_state[0])
  // }, [text_appear_state[0]])

  // useEffect(()=>{
  //   const handleKeyDown = (event) => {
  //     if (text_appear_state[0] == 1) { return }
  //     if (event.code !== 'Space' || event.code !== 'Enter') { return }
  //     text_appear_state_change(1)
  //   };
  //   window.addEventListener('keydown', handleKeyDown);
  //   return () => { window.removeEventListener('keydown', handleKeyDown); };
  // },[text_auto_play[0]])

  return (
    <div className="Chat_container w-[90%] flex flex-col justify-center">
      <Img_box img_src={'/000776 shinomiya runa trpg jk graduration ver v0.4.png'} />
      <Text_box /*text_appear_state={text_appear_state}*/ texts={texts} channel={channel} character={character} color={color}
      onClick={()=>{
        // console.log('Text_box\n onClick')
        // if (text_auto_play[0] == 1) {return}
        // if (text_appear_state[0] == 0) { return }
        // text_appear_state_change(1)  
        
      }}
        />
    </div>
    
  );
}

async function text_appear({log_json, text_index, text_appear_state, text_auto_play}) {
  console.log('RPG_player text_appear function \n', (log_json[text_index[0]]?.message ?? '').replace(/\s/g, ''))
  if (text_auto_play[0] == 1) {
    const delayTime = log_json[text_index[0]].message.length * 50; // Adjust the multiplier as needed
    console.log('wait ', delayTime)
    await delay({ time: delayTime })
  }
  const nextIndex = text_index[0] + 1;
  text_index[1](nextIndex);
  text_appear_state[1](0)
}

function RPG_player({log_json = [], current_index, onClose}) {
  const text_appear_state = useState(0)
  const text_index = useState(current_index)
  const text_auto_play = useState(1)
  //const texts = useState(test_log_json[current_index].message)
  //'「おはようございます、皆さん。私は紫宮るなです。」\n「今日は、皆さんと一緒にTRPGをプレイすることを楽しみにしています。」'

  useEffect(() => {
    if (text_appear_state[0] === 0) { return }
    if (text_auto_play[0] === 0) { return }
    console.log('RPG_player useEffect \n', (log_json[text_index[0]]?.message ?? '').replace(/\s/g, ''))
    text_appear({log_json, text_index, text_appear_state, text_auto_play})
  }, [text_appear_state[0]]);

  return (
    <div className="RPG_player absolute w-[100%] h-[100%] flex flex-col items-center">
      <Text_appear_speed.Provider value={50}>
        <Text_index.Provider value={text_index}>
          <Log_json_context.Provider value={log_json}>
            <Text_auto_play_context.Provider value={text_auto_play}>
              <Text_appear_state_context.Provider value={text_appear_state}>
                <Chat_container 
                  texts={log_json[text_index[0]]?.message??''}
                  channel={log_json[text_index[0]]?.channel.split('[')[1].split(']')[0]??''} 
                  character={log_json[text_index[0]]?.character??''}
                  color={log_json[text_index[0]]?.color??''}
                  text_auto_play={text_auto_play}
                  // text_appear_state_change={(v)=>{
                  //   if(v==1){
                  //     //text_appear_state[1](1)
                  //     // console.log('Chat_container\n text_appear_state changed to 1')
                  //   }else{
                      
                  //     console.log('Chat_container\n text_appear_state changed to 0')
                  //   }
                  // }} 
                  />
                <div className="Close_button absolute top-[5px] right-[5px] p-[5px] 
                w-[40px] h-[40px] flex justify-center items-center rounded-[5px] cursor-pointer g_i"
                  onClick={onClose}>close</div>
              </Text_appear_state_context.Provider>
            </Text_auto_play_context.Provider>
          </Log_json_context.Provider>
        </Text_index.Provider>
      </Text_appear_speed.Provider>
    </div>
  );
}


export default RPG_player;