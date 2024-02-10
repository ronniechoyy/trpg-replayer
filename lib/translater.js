import { useEffect, useState } from "react";


async function tran(text, lang) {
  // Get the translated text from local storage
  let translatedText = localStorage.getItem('translation');

  // If the text is not translated yet
  if (translatedText !== text) {
    // Use a translation API to translate the text
    // This is a placeholder - replace it with a call to a real translation API
    translatedText = await translateApiCall(text);

    const translate_storage = localStorage.getItem('translation');

    // Save the translated text in local storage
    localStorage.setItem('translation', translatedText);
  }

  return translatedText;
}

// Placeholder for a call to a real translation API
async function translateApiCall(text, lang) {
  // Call the translation API and return the translated text
  // This is just a placeholder - replace it with a call to a real translation API

  // If the language is English, return the original text
  if (lang === 'en') {
    return text;
  }
  
  const sourceLang = 'en';
  const targetLang = lang;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(text)}`;
  const response = await fetch(url);
  const data = await response.json();
  const text_out = data[0][0][0];
  return text_out;
}

function Tran({text, lang}) {
  const trans_state = useState(text);
  useEffect(() => {
    async function translate() {
      trans_state[1](await translateApiCall(text, lang));
    }
    translate();
  }, [text, lang]);
  return (
    <>
      {trans_state[0]}
    </>
  )
}

export default Tran;