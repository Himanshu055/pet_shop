import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./pages/Navbar/NavBar";
import PetList from "./pages/PetList/PetList";
import Home from "./pages/home/Home";
import Footer from "./pages/footer/Footer";
import React, { useState } from 'react';

import Dashboard from './Dashboard/Dashboard';
import LoginForm from "./Dashboard/Login/LoginForm";
import RegistrationForm from "./Dashboard/Registration/RegistrationForm";
import NotFound from "./404Page/notFound";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/petlist" element={<PetList />} />
          <Route path="/registrationform" element={<RegistrationForm />} />
          <Route path="/loginform" element={<LoginForm onLogin={handleLogin} />} />
          <Route
            path="/dashboard"
            element={isLoggedIn ? <Dashboard /> : <Navigate to="/loginform" />}
          />
          {/* Add a route for '/login' */}
          <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
