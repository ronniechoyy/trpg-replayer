import Tran from '@/lib/translater';
import React, { useContext, useEffect, useState } from 'react';
import { LangContext } from '@/pages/_app';

function PWA_install_but() {
  const lang = useContext(LangContext);
  const [installPromptEvent, setInstallPromptEvent] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();
      setInstallPromptEvent(event);
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstall = () => {
    if (!installPromptEvent) return;
    installPromptEvent.prompt();
    installPromptEvent.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      setInstallPromptEvent(null);
    });
  };

  return (
    <div className="install-button-container flex items-center">
      <button onClick={handleInstall} disabled={!installPromptEvent} className="install-button flex items-center gap-[5px]">
        <span className='g_i'>install_desktop</span> <span><Tran text={'Install app'} lang={lang[0]} /></span>
      </button>
    </div>
  );
}

export default PWA_install_but;