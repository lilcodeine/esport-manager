import React, { useState } from 'react';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase/config';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [selectedTeam, setSelectedTeam] = useState('');

  const teams = [
    'Virtus.pro', 'NAVI', 'FaZe Clan', 'G2 Esports',
    'Team Spirit', 'FURIA', 'MOUZ', 'Complexity',
    'ENCE', 'Ninjas in Pyjamas', 'Cloud9', 'Team Liquid',
    'Astralis', 'BIG', 'Heroic', 'OG'
  ];

  const handleEmailAuth = async (e) => {
    e.preventDefault();
    try {
      let user;
      if (isLogin) {
        user = await signInWithEmailAndPassword(auth, email, password);
      } else {
        user = await createUserWithEmailAndPassword(auth, email, password);
        // Zapisz wybór drużyny dla nowego użytkownika
        if (selectedTeam) {
          await setDoc(doc(db, 'users', user.user.uid), {
            team: selectedTeam,
            email: user.user.email
          });
        }
      }
      console.log('Zalogowano:', user);
    } catch (error) {
      console.error('Błąd auth:', error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const user = await signInWithPopup(auth, provider);
      console.log('Google login:', user);
    } catch (error) {
      console.error('Błąd Google auth:', error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h2>{isLogin ? 'Zaloguj się' : 'Zarejestruj się'}</h2>
        
        <form onSubmit={handleEmailAuth}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Hasło"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          
          {!isLogin && (
            <select 
              value={selectedTeam} 
              onChange={(e) => setSelectedTeam(e.target.value)}
              required
            >
              <option value="">Wybierz drużynę</option>
              {teams.map(team => (
                <option key={team} value={team}>{team}</option>
              ))}
            </select>
          )}
          
          <button type="submit">
            {isLogin ? 'Zaloguj' : 'Zarejestruj'}
          </button>
        </form>

        <button onClick={handleGoogleLogin} className="google-btn">
          Zaloguj przez Google
        </button>

        <p onClick={() => setIsLogin(!isLogin)} className="toggle-auth">
          {isLogin ? 'Nie masz konta? Zarejestruj się' : 'Masz konto? Zaloguj się'}
        </p>
      </div>
    </div>
  );
};

export default Login;