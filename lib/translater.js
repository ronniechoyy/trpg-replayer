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

// Save a translation in localStorage
function saveTranslation(originalText, translatedText, lang) {
  const translations = JSON.parse(localStorage.getItem('translations')) || {};
  translations[`${originalText}-${lang}`] = translatedText;
  localStorage.setItem('translations', JSON.stringify(translations));
}

// Get a translation from localStorage
function getTranslation(originalText, lang) {
  const translations = JSON.parse(localStorage.getItem('translations')) || {};
  return translations[`${originalText}-${lang}`];
}

// Modify translateApiCall to use getTranslation and saveTranslation
async function translateApiCall(text, lang) {
  // If the language is English, return the original text
  if (lang === 'en') {
    return text;
  }

  // Check if the translation is saved in localStorage
  const savedTranslation = getTranslation(text, lang);
  if (savedTranslation) {
    return savedTranslation;
  }

  // If the translation is not saved, make the API call
  const sourceLang = 'en';
  const targetLang = lang;
  const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURI(text)}`;
  const response = await fetch(url);
  const data = await response.json();
  const text_out = data[0][0][0];

  // Save the translation in localStorage
  saveTranslation(text, text_out, lang);

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