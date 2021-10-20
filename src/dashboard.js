
import React, { useState } from 'react';
import './dashboard.css';
import Chart from 'react-google-charts';

function Dashboard() {
  const TITULO = 'Quantidade de cadastros primeiro semestre';
  const [dados, setDados] = useState([
    ['Mes', 'Quantidade'],
    ['Janeiro', 33],
    ['Fevereiro', 68],
    ['Março', 49],
    ['Abril', 15],
    ['Maio', 80],
    ['Junho', 27]
  ]);

  return (
    <div>

      <h1>Dashboard</h1>

      <Chart
        width={'400px'}
        height={'300px'}
        chartType={'PieChart'}
        data={dados}
        options={{
          title: TITULO,
        }} />
    </div>

  );
}

export default Dashboard;
