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

function App() {
  // const api = useApi();
  return (
    <Routes>
      <Route path="/login" element={ <LoginScreen key="login" /> } />
      <Route path="/createUser" element={ <CreateUserScreen /> } />
        {/* {!api.isLoggedIn && <Route path="*" element={<Navigate to={"/login"} />}/>} */}
      {/* these routes will need to be protected */}
      <Route path="/welcome" element={ <WelcomeScreen /> } />
      <Route path="/profile" element={ <ProfileScreen /> } />
      <Route path="/overView" element={ <OverViewScreen /> } />
      <Route path="/settings" element={ <SettingsScreen /> } />
      <Route path="/" element={ <CategoriesScreen /> } />
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
}

export default App;
