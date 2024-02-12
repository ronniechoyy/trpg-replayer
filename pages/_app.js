import { createContext, useEffect, useRef, useState } from 'react';
import "@/styles/globals.css";
import "/styles/app.css";

const base_lang = 'en';
export const LangContext = createContext(base_lang);

export default function App({ Component, pageProps }) {

  const lang_state = useState(base_lang);
  const got = useState(false)

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }

    console.log('running', localStorage.getItem('lang'))
    lang_state[1](localStorage.getItem('lang'));
    got[1](true)
    
  }, []);

  useEffect(() => {
    if (!got[0]) { return }
    console.log('running2', lang_state[0])
    localStorage.setItem('lang', lang_state[0]);
    
    
  }, [lang_state[0]]);

  return (
    <>
      <LangContext.Provider value={lang_state}>
        <Component {...pageProps} />
      </LangContext.Provider>
    </>
  );
}