import React, { useState } from "react";
import './App.css';
import LoginForm from './LoginForm';
import LoginAttemptList from './LoginAttemptList';

const App = () => {
  const [loginAttempts, setLoginAttempts] = useState([]);
  return (
    <div className="App">
      <LoginForm onSubmit={({ login, password }) => 
        {
          loginAttempts.push({ login, password });  //console.log({ login, password });
        }       
      } />
      <LoginAttemptList data={loginAttempts} />
    </div>
  );
};

export default App;
