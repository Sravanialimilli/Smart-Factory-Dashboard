import React from 'react';
import Filters from '../components/Filters';
import Chart from '../components/Chart';
import DataTable from '../components/DataTable';
import LanguageSwitcher from '../components/LanguageSwitcher';

const Dashboard = () => {
  return (
    <>
      <LanguageSwitcher />
      <Filters />
      <Chart />
      <DataTable />
    </>
  );
};

export default Dashboard;
