import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import TeamRanking from './components/TeamRanking';
import Players from './components/Players'; // Twój istniejący komponent
// ... import innych komponentów

function App() {
  const [activeMenu, setActiveMenu] = useState('players'); // domyślnie Players

  const renderContent = () => {
    switch(activeMenu) {
      case 'dashboard':
        return <div>Dashboard - Strona w budowie</div>;
      case 'players':
        return <Players />; // Twój istniejący komponent z zawodnikami
      case 'schedule':
        return <div>Schedule - Strona w budowie</div>;
      case 'practice':
        return <div>Practice - Strona w budowie</div>;
      case 'ranking':
        return <TeamRanking />;
      default:
        return <Players />;
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