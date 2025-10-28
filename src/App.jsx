import React, { useState, useEffect } from 'react';
import { auth } from './firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import CustomerTable from './components/CustomerTable';
import Login from './components/Login';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
  };

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (!user) {
    return <Login />;
  }

  return (
    <div className="app">
      <Sidebar onLogout={handleLogout} />
      <div className="main-content">
        <Header user={user} />
        <CustomerTable />
      </div>
    </div>
  );
}

export default App;