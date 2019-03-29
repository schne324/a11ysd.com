import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from '../Home';
import Events from '../Events';
import './index.css';

const App = () => (
  <Router>
    <div className="App">
      <header role="banner">
        <h1>a11ySD</h1>
        <h2>San Diego Accessibility & Inclusive Design</h2>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/events/">Events</Link>
          </li>
          <li>
            <Link to="/sponsors/">Sponsors</Link>
          </li>
          <li>
            <Link to="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
      <main>
        <Route path="/" exact component={Home} />
        <Route path="/events/" component={Events} />
      </main>
    </div>
  </Router>
);

App.displayName = 'App';
export default App;
