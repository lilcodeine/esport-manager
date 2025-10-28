import React, { useState, useEffect } from 'react';
import { auth } from '../firebase/config';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Header = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

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
      <div className="header">
        <h1 className="welcome-text">Witaj... 👋🏼,</h1>
      </div>
    );
  }

  return (
    <div className="header">
      <h1 className="welcome-text">
        Witaj {userData?.nickname || user?.email?.split('@')[0]} 👋🏼,
      </h1>
    </div>
  );
};

export default Header;