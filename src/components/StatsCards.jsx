import React from 'react';

const StatsCards = () => {
  const stats = [
    {
      title: 'Total Customers',
      value: '5,423',
      change: '16% this month',
      trend: 'up'
    },
    {
      title: 'Members',
      value: '1,893',
      change: '1% this month',
      trend: 'up'
    },
    {
      title: 'Active Now',
      value: '189',
      change: null
    }
  ];

  return (
    <div className="stats-container">
      {stats.map((stat, index) => (
        <div key={index} className="stat-card">
          <h3>{stat.title}</h3>
          <div className="number">{stat.value}</div>
          {stat.change && (
            <div className="stat-change">
              <span>{stat.change}</span>
              <span style={{ marginLeft: '5px' }}>📈</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default StatsCards;