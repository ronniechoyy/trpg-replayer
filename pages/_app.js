import { createContext, useEffect, useState } from 'react';
import "@/styles/globals.css";
import "/styles/app.css";
export const LangContext = createContext('en');

export default function App({ Component, pageProps }) {

  const lang_state = useState('zh-TW');

  

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
    if (!localStorage.getItem('lang')) {
      localStorage.setItem('lang', 'en');
    }
  }, []);

  useEffect(() => {
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