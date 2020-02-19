import React from 'react';
import './App.css';
import ApolloGql from './apollogql';
import AuthProvider from './contextProvider/authProvider';
import AppRouter from './router/index';
function App() {
  return (
    <ApolloGql>
      <AuthProvider>
        <AppRouter/>
      </AuthProvider>
    </ApolloGql>
  );
}

export default App;
