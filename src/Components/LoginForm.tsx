import React, { useState } from 'react';
import '../style/LoginForm.scss';
import { Error } from '../Types/Error';
import { useNavigate } from 'react-router-dom';

interface LoginFormProps {
  onLogin: (username: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<Error>(Error.NONE);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username === 'testuser' && password === 'testpassword123') {
      setError(Error.NONE);
      onLogin(username);
      navigate('/tabs');
    } else if (username === '') {
      setError(Error.LOGIN_EMPTY);
      setTimeout(() => {
        setError(Error.NONE);
      }, 3000);
    } else if (password === '') {
      setError(Error.PASSWORD_EMPTY);
      setTimeout(() => {
        setError(Error.NONE);
      }, 3000);
    } else {
      setError(Error.DOWNLOADING);
      setTimeout(() => {
        setError(Error.NONE);
      }, 3000);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleLogin();
    }
  };

  return (
    <div className="login-form-container">
      <h2 className="login-form-title">Log in</h2>
      <div className="login-form-input">
        <input 
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
      </div>
      <div className="login-form-input">
        <input 
          type="password" 
          placeholder="Password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          onKeyPress={handleKeyPress} 
        />
      </div>
      <button className="login-form-button" onClick={handleLogin}>
        Log in
      </button>
      {error !== Error.NONE && <div className="error-message">{Error.INVALID_CREDENTIALS}</div>}
    </div>
  );
};

export default LoginForm;
