import { createContext, useEffect, useState } from 'react';
import "@/styles/globals.css";
import "/styles/app.css";
export const LangContext = createContext('en');

export default function App({ Component, pageProps }) {
  
  const lang_state = useState('en');

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', function () {
        navigator.serviceWorker.register('/service-worker.js');
      });
    }
  }, []);
  return (
    <>
      <LangContext.Provider value={lang_state}>
        <Component {...pageProps} />
      </LangContext.Provider>
    </>
  );
}