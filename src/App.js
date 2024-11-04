import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ReactNotification from 'react-notifications-component';
import Festival from './components/Festival'; // Ensure this is the correct path
import Purchase from './components/Purchase'; // Ensure this is the correct path
import MyTickets from './components/MyTickets'; // Ensure this is the correct path
import SecondaryMarket from './components/SecondaryMarket' // Ensure this is the correct path
import './App.css';

const App = () => {
  return (
    <Router>
      <div>
        {/*<ReactNotification />*/}
        <nav style={{ padding: '0px 30px' }}>
          <div className="nav-wrapper">
            <Link to="/buyTickets" className="brand-logo left">Festival Marketplace</Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/createFestival">Add Festival</Link></li>
              <li><Link to="/buyTickets">Buy Tickets</Link></li>
              <li><Link to="/market">Secondary Market</Link></li>
              <li><Link to="/tickets">My Tickets</Link></li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/createFestival" element={<Festival />} />
          <Route path="/buyTickets" element={<Purchase />} />
          <Route path="/market" element={<SecondaryMarket />} />
          <Route path="/tickets" element={<MyTickets />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
