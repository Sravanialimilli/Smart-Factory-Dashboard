import React from 'react';
import { Select } from '@mantine/core';
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  return (
    <Select
      label="Language"
      placeholder="Pick one"
      data={[
        { value: 'en', label: 'English' },
        { value: 'ko', label: 'Korean' },
      ]}
      onChange={(value) => i18n.changeLanguage(value || 'en')}
    />
  );
};

export default LanguageSwitcher;
