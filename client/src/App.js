import React from 'react';
import 'materialize-css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useRoutes } from './hooks/useRoutes';
import { useAuth } from './hooks/useAuth';
import { AuthContext } from './context/AuthContext';
import { Navbar } from './components/Navbar';
import { Loader } from './components/Loader';

const App = () => {
  const { login, logout, token, userId, authReady } = useAuth();
  // User registered or not
  const isAuthenticated = !!token;
  const routes = useRoutes(isAuthenticated);

  if (!authReady) {
    return <Loader />;
  }

  return (
    <AuthContext.Provider
      value={{
        login,
        logout,
        token,
        userId,
        isAuthenticated,
      }}
    >
      <Router>
        {isAuthenticated && <Navbar />}
        <div className='container'>{routes}</div>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
