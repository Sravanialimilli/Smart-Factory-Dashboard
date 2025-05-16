import React from 'react';
import { Table } from '@mantine/core';
import { useQuery } from '@tanstack/react-query';
import { fetchMockData } from '../api/mockData';
import { useTranslation } from 'react-i18next';

const DataTable = () => {
  const { data } = useQuery(['tableData'], fetchMockData);
  const { t } = useTranslation();

  const rows = data?.map((item, index) => (
    <tr key={index}>
      <td>{item.machine}</td>
      <td>{item.status}</td>
      <td>{item.output}</td>
      <td>{item.updated}</td>
    </tr>
  ));

  return (
    <Table striped highlightOnHover>
      <thead>
        <tr>
          <th>{t('Machine Name')}</th>
          <th>{t('Status')}</th>
          <th>{t('Output')}</th>
          <th>{t('Last Updated')}</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
};

export default DataTable;
