import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateUserScreen from './components/Screens/CreateUsers/CreateUserScreen';
import LoginScreen from './components/Screens/Login/LoginScreen';
import WelcomeScreen from './components/Screens/Welcome/WelcomeScreen';
import ProfileScreen from './components/Screens/Profile/ProfileScreen';
import CategoriesScreen from './components/Screens/Categories/CategoriesScreen';
import SettingsScreen from './components/Screens/Settings/SettingsScreen';
import OverViewScreen from './components/Screens/OverView/OverViewScreen';
import ForgotPasswordScreen from './components/Screens/Login/ForgotPasswordScreen';

function App() {
  // needs GET users Api logic
  // const api = useApi();
  return (
    <Routes>
      <Route path="/Login" element={ <LoginScreen key="login" /> } />
      <Route path="/ForgotPassword" element={ <ForgotPasswordScreen /> } />
      <Route path="/CreateUser" element={ <CreateUserScreen /> } />
        {/* {!api.isLoggedIn && <Route path="*" element={<Navigate to={"/login"} />}/>} */}
      {/* these routes will need to be protected */}
      <Route path="/Welcome" element={ <WelcomeScreen /> } />
      <Route path="/Profile" element={ <ProfileScreen /> } />
      <Route path="/OverView" element={ <OverViewScreen /> } />
      <Route path="/Settings" element={ <SettingsScreen /> } />
      <Route path="/" element={ <CategoriesScreen userId /> } />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
