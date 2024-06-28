import React, { useContext, useState } from 'react';
import { Line } from 'react-chartjs-2';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';
import { HMThemeContext, Theme } from '../provider/ThemeProvider.tsx';
import styled from 'styled-components';
import HMIconly, { IconlyIcons } from './HMIconly.tsx';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
);

interface ChartStylesProps {
  theme: Theme;
}

export const ChartStyles = styled.div<ChartStylesProps>`
  font-family: Inter, serif;
  padding: 0 25px;

  .dropdown-container {
    gap: 8px;
    display: flex;
    padding-bottom: 23px;
  }
  .title {
    font-size: 14px;
    font-weight: 600;
  }
  .icon {
    color: ${(props) => props.theme.color.active};
  }
  .legend {
    display: flex;
    justify-content: space-between;
    padding-right: 25px;
  }
  .dropdown {
    select {
      padding: 4px 0 4px 11px;
      font-size: 9px;
      font-weight: 400;
      border: 1px solid ${(props) => props.theme.color.alternate.primary};
      border-radius: 3px;
      cursor: pointer;
      background: ${(props) => props.theme.color.mute};
      transition: border-color 0.3s;
    }
    select:focus {
      outline: none;
    }
  }
`;

const Chart: React.FC = () => {
  const [selectedLabel, setSelectedLabel] = useState('Home Visits');
  const [selectedPeriod, setSelectedPeriod] = useState('Weekly');

  const data = {
    labels: {
      Weekly: ['15 June', '16 June', '17 June', '18 June', '19 June', '20 June', '21 June'],
      Monthly: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      Annually: ['2018', '2019', '2020', '2021', '2022', '2023', '2024'],
    },
    datasets: {
      'Home Visits': {
        Weekly: [5000, 7000, 6000, 8000, 12000, 15000, 20000],
        Monthly: [100000, 120000, 110000, 130000, 140000, 150000, 160000],
        Annually: [1000000, 1100000, 1200000, 1300000, 1400000, 1500000, 1600000],
      },
      'Video Calls': {
        Weekly: [3000, 4000, 5000, 2000, 3000, 4000, 5000],
        Monthly: [70000, 80000, 90000, 100000, 110000, 120000, 130000],
        Annually: [700000, 800000, 900000, 1000000, 1100000, 1200000, 1300000],
      },
    },
  };

  const filteredData = {
    labels: data.labels[selectedPeriod],
    datasets: [
      {
        label: selectedLabel,
        data: data.datasets[selectedLabel][selectedPeriod],

        borderColor:
          selectedLabel === 'Home Visits' ? 'rgb(44, 192, 123)' : 'rgb(44, 192, 123)',

        backgroundColor:
          selectedLabel === 'Home Visits'
            ? 'rgba(44, 192, 123, 0.2)'
            : 'rgba(44, 192, 123, 0.2)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
  };

  const handleLabelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedLabel(event.target.value);
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedPeriod(event.target.value);
  };

  const theme = useContext(HMThemeContext);
  return (
    <ChartStyles theme={theme}>
      <div className={'legend'}>
        <div className={'title'}>Recurring Revenue</div>
        <div className="dropdown-container">
          <div className={'dropdown'}>
            <select value={selectedLabel} onChange={handleLabelChange}>
              <option value="Home Visits">Home Visits</option>
              <option value="Video Calls">Video Calls</option>
            </select>
          </div>
          <div className={'dropdown'}>
            <select value={selectedPeriod} onChange={handlePeriodChange}>
              <option value="Weekly">Weekly</option>
              <option value="Monthly">Monthly</option>
              <option value="Annually">Annually</option>
            </select>
          </div>
          <div className={'icon'}>
            <HMIconly name={IconlyIcons.Calendar} size={'small'} set={'bold'} />
          </div>
        </div>
      </div>

      <div className="revenue-chart">
        <Line data={filteredData} options={options} />
      </div>
    </ChartStyles>
  );
};

export default Chart;
