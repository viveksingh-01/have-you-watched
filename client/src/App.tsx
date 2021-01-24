import React from 'react';
import './App.css';
import './../node_modules/bootstrap/dist/css/bootstrap.min.css';
import LandingPage from './pages/LandingPage';
import NavigationBar from './components/NavigationBar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails';

function App() {
  return (
    <div className="app">
      <Router>
        <NavigationBar />
        <main className="container p-3">
          <Route path="/" exact component={LandingPage} />
          <Route path="/movies/:movieId" exact component={MovieDetails} />
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
