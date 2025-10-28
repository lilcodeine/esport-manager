import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCards from './components/StatsCards';
import CustomerTable from './components/CustomerTable';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <StatsCards />
        <CustomerTable />
      </div>
    </div>
  );
}

export default App;