import React from 'react';
import { TextInput, Group } from '@mantine/core';
import { DatePicker } from '@mantine/dates';
import { useTranslation } from 'react-i18next';

const Filters = () => {
  const { t } = useTranslation();

  return (
    <Group position="apart" my="md">
      <TextInput label={t('Machine Name')} placeholder="e.g. CNC-01" />
      <DatePicker label={t('Date Range')} placeholder="Select date" />
    </Group>
  );
};

export default Filters;
