import React from 'react';

const CustomerTable = () => {
  const players = [
    {
      name: 'Jan Kowalski',
      age: '22',
      role: 'Carry',
      form: 'Dobra',
      value: '€150,000'
    },
    {
      name: 'Adam Nowak',
      age: '24', 
      role: 'Support',
      form: 'Średnia',
      value: '€80,000'
    },
    {
      name: 'Piotr Wiśniewski',
      age: '20',
      role: 'Mid',
      form: 'Bardzo dobra',
      value: '€200,000'
    },
    {
      name: 'Michał Lewandowski',
      age: '25',
      role: 'Offlane',
      form: 'Słaba',
      value: '€60,000'
    },
    {
      name: 'Krzysztof Wójcik',
      age: '21',
      role: 'Coach',
      form: 'Dobra',
      value: '€90,000'
    }
  ];

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">Zarządzanie Graczami</h2>
        <div className="table-controls">
          <div className="search-box">
            <span>🔍</span>
            <input type="text" placeholder="Szukaj gracza..." />
          </div>
          <select className="sort-dropdown">
            <option>Sortuj: Najnowsi</option>
            <option>Sortuj: Wartość</option>
            <option>Sortuj: Forma</option>
          </select>
        </div>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Zawodnik</th>
            <th>Wiek</th>
            <th>Rola</th>
            <th>Forma</th>
            <th>Wartość</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={index}>
              <td>{player.name}</td>
              <td>{player.age}</td>
              <td>{player.role}</td>
              <td>
                <span className={`status ${player.form.toLowerCase().includes('dobra') ? 'active' : player.form.toLowerCase().includes('słaba') ? 'inactive' : ''}`}>
                  {player.form}
                </span>
              </td>
              <td>{player.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerTable;