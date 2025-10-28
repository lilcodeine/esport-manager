import React, { useState } from 'react';  

const CustomerTable = () => {
  const [customers] = useState([
    {
      name: 'Jane Cooper',
      company: 'Microsoft',
      phone: '(225) 555-0118',
      email: 'jane@microsoft.com',
      country: 'United States',
      status: 'Active'
    },
    {
      name: 'Floyd Miles',
      company: 'Yahoo',
      phone: '(205) 555-0100',
      email: 'floyd@yahoo.com',
      country: 'Kiribati',
      status: 'Inactive'
    },
    {
      name: 'Ronald Richards',
      company: 'Adobe',
      phone: '(302) 555-0107',
      email: 'ronald@adobe.com',
      country: 'Israel',
      status: 'Inactive'
    },
    {
      name: 'Marvin McKinney',
      company: 'Tesla',
      phone: '(252) 555-0126',
      email: 'marvin@tesla.com',
      country: 'Iran',
      status: 'Active'
    }
  ]);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2 className="table-title">All Customers</h2>
        <div className="table-controls">
          <div className="search-box">
            <span>🔍</span>
            <input type="text" placeholder="Search" />
          </div>
          <select className="sort-dropdown">
            <option>Short by: Newest</option>
          </select>
        </div>
      </div>

      <table className="customer-table">
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Company</th>
            <th>Phone Number</th>
            <th>Email</th>
            <th>Country</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer, index) => (
            <tr key={index}>
              <td>{customer.name}</td>
              <td>{customer.company}</td>
              <td>{customer.phone}</td>
              <td>{customer.email}</td>
              <td>{customer.country}</td>
              <td>
                <span className={`status ${customer.status.toLowerCase()}`}>
                  {customer.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <div className="pagination-info">
          Showing data 1 to 8 of 256K entries
        </div>
        <div className="pagination-controls">
          <div className="page-arrow">⟨</div>
          <div className="page-number active">1</div>
          <div className="page-number">2</div>
          <div className="page-number">3</div>
          <div className="page-number">4</div>
          <span>...</span>
          <div className="page-number">40</div>
          <div className="page-arrow">⟩</div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTable;