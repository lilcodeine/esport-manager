import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CustomerTable from './components/CustomerTable';

function App() {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Header />
        <CustomerTable />
      </div>
    </div>
  );
}

export default App;