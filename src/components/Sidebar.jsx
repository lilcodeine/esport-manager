import React from 'react';

const Sidebar = () => {
  const menuItems = [
    { name: 'Dashboard', icon: '📊' },
    { name: 'Players', icon: '👥', active: true },
    { name: 'Schedule', icon: '📅' },
    { name: 'Practice', icon: '⚽' },
    { name: 'Promote', icon: '📢' }
  ];

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <div className="logo">Evano</div>
        <div className="user-title">Project Manager</div>
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
    </div>
  );
};

export default Sidebar;