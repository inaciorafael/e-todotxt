import React from 'react';
import { useTranslation } from 'react-i18next';

const I18n: React.FC = () => {
  const { i18n } = useTranslation();

  function handleChangeLanguage(language: string) {
    i18n.changeLanguage(language);
  }

  return (
    <div>
      <button onClick={() => handleChangeLanguage('pt-BR')} type="button">
        pt
      </button>
      <button onClick={() => handleChangeLanguage('en-US')} type="button">
        en
      </button>
    </div>
  );
};

export default I18n;
