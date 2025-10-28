import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Sidebar = ({ onLogout }) => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Players', icon: '👥', active: true },
    { name: 'Schedule', icon: '📅' },
    { name: 'Practice', icon: '⚽' },
    { name: 'Promote', icon: '📢' }
  ];

  const user = auth.currentUser;

  useEffect(() => {
    const fetchUserData = async () => {
      if (user) {
        try {
          const userDoc = await getDoc(doc(db, 'users', user.uid));
          if (userDoc.exists()) {
            setUserData(userDoc.data());
            console.log('Dane użytkownika:', userDoc.data()); // DEBUG
          }
        } catch (error) {
          console.error('Błąd ładowania danych:', error);
        }
      }
      setLoading(false);
    };

    fetchUserData();
  }, [user]);

  // Avatar - użyj nicku jeśli istnieje, inaczej email
  const getAvatarLetter = () => {
    if (userData?.nickname) {
      return userData.nickname.charAt(0).toUpperCase();
    }
    if (user?.email) {
      return user.email.charAt(0).toUpperCase();
    }
    return 'U';
  };

  if (loading) {
    return (
      <div className="sidebar">
        <div className="sidebar-header">
          <div className="logo">Esport Manager</div>
          <div className="user-title">Team Management</div>
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
            className={`nav-item ${item.active ? 'active' : ''}`}
          >
            <span className="nav-icon">{item.icon}</span>
            <span className="nav-text">{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Sekcja użytkownika */}
      <div className="user-section">
        <div className="user-info">
          <div className="user-avatar">
            {getAvatarLetter()}
          </div>
          <div className="user-details">
            <div className="user-name">
              {userData?.nickname || user?.email?.split('@')[0]}
            </div>
            <div className="user-team">
              🏆 {userData?.team || 'Brak drużyny'}
            </div>
            <div className="user-status">● Online</div>
          </div>
        </div>
        <button onClick={onLogout} className="logout-btn">
          🚪 Wyloguj się
        </button>
      </div>
    </div>
  );
};

export default Sidebar;