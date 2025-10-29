import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TeamRanking from './components/TeamRanking';
import './App.css';
import './components/Sidebar.css'; 
import './components/TeamRanking.css'; 

function App() {
  const [activeMenu, setActiveMenu] = useState('players');

  const renderContent = () => {
    switch(activeMenu) {
      case 'dashboard':
        return <div>Dashboard - Strona w budowie</div>;
      case 'players':
        return <div>Players - Strona w budowie</div>;
      case 'schedule':
        return <div>Schedule - Strona w budowie</div>;
      case 'practice':
        return <div>Practice - Strona w budowie</div>;
      case 'ranking':
        return <TeamRanking />;
      default:
        return <div>Players - Strona w budowie</div>;
    }
  };

  const handleLogout = () => {
    // Twoja istniejąca logika wylogowania
  };

  return (
    <div className="app">
      <Sidebar 
        onLogout={handleLogout} 
        onMenuChange={setActiveMenu}
        activeMenu={activeMenu}
      />
      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );
}

export default App;