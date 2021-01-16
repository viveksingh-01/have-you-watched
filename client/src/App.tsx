import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <main className="container p-3">
        <LandingPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
