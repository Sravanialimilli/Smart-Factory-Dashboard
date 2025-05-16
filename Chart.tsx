import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { useQuery } from '@tanstack/react-query';
import { fetchMockData } from '../api/mockData';

const Chart = () => {
  const { data } = useQuery(['chartData'], fetchMockData);

  const series = [{ name: 'Production', data: data?.map(d => d.count) || [] }];
  const options = {
    xaxis: { categories: data?.map(d => d.date) || [] },
  };

  return (
    <div>
      <ReactApexChart options={options} series={series} type="line" height={300} />
    </div>
  );
};

export default Chart;
