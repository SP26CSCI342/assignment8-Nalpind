import React from 'react';
import Navigation from '../Navigation/Navigation.jsx';
import { Route, Routes } from 'react-router-dom';
import HomePage from '../../pages/HomePage.jsx';
import LoginForm from '../../forms/LoginForm.jsx';
import SignupForm from '../../forms/SignupForm.jsx';
import NotFoundPage from '../../pages/PageNotFound.jsx';
import Profile from '../../pages/Profile.jsx';
import './App.css';
import ProtectedRoute from '../ProtectedRoute.jsx'

function App() {

  return (
    <div className="App">
      <Navigation />
      <h1>PlateScout</h1>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/signup" element={<SignupForm />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>

  );
}

export default App;