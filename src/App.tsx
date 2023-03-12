import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateUserScreen from './Components/Screens/CreateUsers/CreateUserScreen';
import LoginScreen from './Components/Screens/Login/LoginScreen';
import WelcomeScreen from './Components/Screens/Welcome/WelcomeScreen';
import ProfileScreen from './Components/Screens/Profile/ProfileScreen';
import CategoriesScreen from './Components/Screens/Categories/CategoriesScreen';
import SettingsScreen from './Components/Screens/Settings/SettingsScreen';
import OverViewScreen from './Components/Screens/OverView/OverViewScreen';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
