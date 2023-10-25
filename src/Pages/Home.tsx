import React, { useState } from 'react';
import LoginForm from '../Components/LoginForm';
import '../style/Home.scss';

const HomePage: React.FC = () => {
  const [username, setUsername] = useState('');

  return (
    <div>
      <h1 className="title">WELCOME!</h1>
      <LoginForm onLogin={(username) => setUsername(username)} />
    </div>
  );
};

export default HomePage;
