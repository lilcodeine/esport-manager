import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import './Sidebar.css';

const Sidebar = ({ onLogout, onMenuChange, activeMenu }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const menuItems = [
    { name: 'Dashboard', icon: '📊', id: 'dashboard' },
    { name: 'Players', icon: '👥', id: 'players' },
    { name: 'Schedule', icon: '📅', id: 'schedule' },
    { name: 'Practice', icon: '⚽', id: 'practice' },
    { name: 'Ranking', icon: '🥇', id: 'ranking' }
  ];

  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
          }
        } catch (error) {
          console.error('Błąd ładowania danych:', error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  if (loading) {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">Esport Manager</div>
          {/* <div className="user-title">Team Management</div> */}
        </div>
        <div className="loading-sidebar">Ładowanie...</div>
      </div>
    );
  }

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">Esport Manager</div>
        <div className="user-title">Team Management</div>
      </div>
      
      <nav className="sidebar-nav">
        {menuItems.map((item, index) => (
          <div 
            key={index} 
            className={`nav-item ${activeMenu === item.id ? 'active' : ''}`}
            onClick={() => onMenuChange(item.id)}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Sekcja użytkownika - NA DOLE */}
      <div className="user-section">
        <div className="user-info">
          <div className="user-details">
            <div className="user-name">
              {userData?.nickname || user?.email?.split('@')[0]}
            </div>
            <div className="user-team">
              🏆 {userData?.team || 'Brak drużyny'}
            </div>
          </div>
        </div>
        <button onClick={onLogout} className="logout-btn">
          Wyloguj
        </button>
      </div>
    </div>
  );
};

export default Sidebar;