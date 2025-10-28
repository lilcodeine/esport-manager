import React from 'react';

const CustomerTable = () => {
  const players = [
    {
      name: 'Dan "apEX" Madesclaire',
      age: '32',
      role: 'In-game leader',
      form: 'Dobra',
      value: '€150,000'
    },
    {
      name: 'Robin "ropz" Kool',
      age: '25', 
      role: 'Rifler',
      form: 'Średnia',
      value: '€80,000'
    },
    {
      name: 'Mathieu "ZywOo" Herbaut',
      age: '24',
      role: 'AWPer',
      form: 'Bardzo dobra',
      value: '€200,000'
    },
    {
      name: 'Shahar "flameZ" Shushan',
      age: '22',
      role: 'Rifler',
      form: 'Słaba',
      value: '€60,000'
    },
    {
      name: 'William "mezii" Merriman',
      age: '27',
      role: 'Rifler',
      form: 'Dobra',
      value: '€90,000'
    }
  ];

  const getStatusClass = (form) => {
    if (form.toLowerCase().includes('bardzo dobra') || form.toLowerCase().includes('dobra')) return 'active';
    if (form.toLowerCase().includes('średnia')) return 'average';
    if (form.toLowerCase().includes('słaba')) return 'inactive';
    return '';
  };

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">Players</h2>
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
                <span className={`status ${getStatusClass(player.form)}`}>
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