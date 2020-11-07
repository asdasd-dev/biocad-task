import './App.scss';
import React from 'react';
import FilterDevices from './components/FilterDevices';
import Unit from './components/Unit';
import DeviceInfo from './components/DeviceInfo';
import ReportFilters from './components/ReportFilters';
import Report from './components/Report'


function App() {
  const deviceDescription = [
    {name: 'Тип оборудования', value: 'Весы'},
    {name: 'Статуся', value: 'Готов к работе'},
    {name: 'Изготовитель', value: 'Ohaus'},
    {name: 'Модель', value: 'AX-123'},
    {name: 'Ответственное подразделение (ремонт)', value: 'Группа обслуживания лабораторного оборудования'},
    {name: 'Эксплуатирующее подразделение', value: 'Химико-аналитическая лаборатория 2.0'},
    {name: 'МОЛ', value: 'Иванов Иван Иванович'},
    {name: 'Территория', value: 'г. Санкт-Петербург (Нойдорф)'},
    {name: 'Серийный номер', value: 'B715976163'},
    {name: 'GUID', value: '508b2a71-662e-4983-ae0c-3cb0c1cd21c5', link: '#guid'},
    {name: 'Bims ID', value: '49db8db1-585f-4b9e-bbf0-8a59698edc8b', link: '#bimsid'},
    {name: 'Tam', value: 'А-001234', link: '#tam'},
  ];
  
  const reportData = [
    {
      date: '04.10.19',
      time: '10:23', 
      solutions: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01', 'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
      slope: '98.7',
      offset: '-0.3',
      user: 'Иванов Генадий Петрович',
    },
    {
      date: '04.10.19',
      time: '10:23', 
      solutions: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01', 'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
      slope: '98.7',
      offset: '-0.3',
      user: 'Иванов Генадий Петрович',
    },
    {
      date: '04.10.19',
      time: '10:23', 
      solutions: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01', 'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
      slope: '98.7',
      offset: '-0.3',
      user: 'Иванов Генадий Петрович',
    },
    {
      date: '04.10.19',
      time: '10:23', 
      solutions: ['В1: № 2000460789536: pH 1.09', 'В2: № 2000460789536: pH 2.00', 'В3: № 2000460789536: pH 4.01', 'В4: № 2000460789536: pH 7.00', 'В5: № 2000460789536: pH 9.21'],
      slope: '90.1',
      offset: '-0.3',
      user: 'Иванов Генадий Петрович',
    },
    
  ]

  return (
    <div className="App">
      <div className="row-flex">
        <div className="col-flex">
          <FilterDevices/>
          <Unit src='./images/scale.png'/>
          <ReportFilters/>
        </div>
        <DeviceInfo description={deviceDescription} />
      </div>
      <Report data={reportData}/>
    </div>
  );
}

export default App;