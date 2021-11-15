import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Select from 'react-select';

import { BackButton } from '../../components';
import { locales } from '../../i18n/locales';

const Settings: React.FC = () => {
  const { t, i18n } = useTranslation();

  const options = locales.map((locale) => ({ value: locale, label: locale }));

  const handleSelectLanguage = (language: any) => {
    i18n.changeLanguage(language.value);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="page-container"
    >
      <BackButton title={t('pages.settings.title')} />
      <div style={{ height: 30 }} />
      <h5>{t('pages.settings.languageSelect')}</h5>
      <Select onChange={handleSelectLanguage} options={options} />
    </motion.div>
  );
};

export default Settings;
