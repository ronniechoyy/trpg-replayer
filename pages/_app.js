import { createContext, useEffect, useState } from 'react';
import "@/styles/globals.css";
import "/styles/app.css";
export const LangContext = createContext('en');

export default function App({ Component, pageProps }) {

  const lang_state = useState('zh-TW');
  const loaded = useState(false);

  useEffect(() => {
    loaded[1](true);
  }, [])

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
    lang_state[1](localStorage.getItem('lang'));
  }, []);

  useEffect(() => {
    if (lang_state[0] == 'en') {
      if (loaded[0]) {
        localStorage.setItem('lang', lang_state[0]);
        return;
      }
      return;
    }
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