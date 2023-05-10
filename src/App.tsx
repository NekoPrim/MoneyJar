import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';

import CreateUserScreen from './Components/Screens/CreateUsers/CreateUserScreen';
import LoginScreen from './Components/Screens/Login/LoginScreen';
import WelcomeScreen from './Components/Screens/Welcome/WelcomeScreen';
import ProfileScreen from './Components/Screens/Profile/ProfileScreen';
import CategoriesScreen from './Components/Screens/Categories/CategoriesScreen';
import SettingsScreen from './Components/Screens/Settings/SettingsScreen';
import OverViewScreen from './Components/Screens/OverView/OverViewScreen';
import ForgotPasswordScreen from './Components/Screens/Login/ForgotPasswordScreen';

function App() {
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
      <Route path="/" element={ <CategoriesScreen /> } />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
