import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Home from '../Home';
import Events from '../Events';
import Sponsors from '../Sponsors';
import Contact from '../Contact';
import Error from '../Error';
import SkipLink from '../SkipLink';
import IconLink from '../IconLink';
import Nav from '../Nav';
import Upcoming from '../Upcoming';
import logo from '../img/logo300.png';
import './index.css';

const defaultTitle = 'a11ySD | San Diego Accessibility & Inclusive Design';

export default class App extends Component {
  constructor() {
    super();
    this.mainRef = React.createRef();
  }

  focusMain = () => {
    setTimeout(() => {
      const { current } = this.mainRef;
      if (current) {
        current.focus();
      }
    });
  };

  render() {
    return (
      <Router>
        <SkipLink focusMain={this.focusMain} />
        <div className="App">
          <Helmet
            defaultTitle={defaultTitle}
            titleTemplate={`%s | ${defaultTitle}`}
          />
          <header role="banner">
            <Upcoming />
            <h1>
              <Link to="/">
                <img src={logo} alt="a11ySD" />
              </Link>
            </h1>
            <h2>San Diego Accessibility &amp; Inclusive Design</h2>
          </header>
          <Nav focusMain={this.focusMain} />
          <main aria-labelledby="main-heading" tabIndex={-1} ref={this.mainRef}>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/events/" component={Events} />
              <Route path="/sponsors/" component={Sponsors} />
              <Route path="/contact/" component={Contact} />
              <Route component={Error} />
            </Switch>
          </main>
          <footer role="contentinfo">
            <ul className="Home__icons">
              <IconLink
                icon="fa-slack"
                label="Slack"
                href="https://web-a11y.slack.com/messages/a11ysd"
              >
                #a11ySD
              </IconLink>
              <IconLink
                icon="fa-twitter"
                label="Twitter"
                href="https://twitter.com/a11ysd"
              >
                @a11ySD
              </IconLink>
              <IconLink
                icon="fa-meetup"
                label="Meetup"
                href="https://www.meetup.com/a11ySD/"
              >
                a11ySD
              </IconLink>
              <IconLink
                icon="fab fa-linkedin-in"
                label="LinkedIn"
                href="https://www.linkedin.com/company/a11ysd/"
              >
                a11ySD
              </IconLink>
              <IconLink
                icon="fas fa-envelope"
                label="info@a11ysd.com"
                href="mailto:info@a11ysd.com"
              >
                email
              </IconLink>
            </ul>
          </footer>
        </div>
      </Router>
    );
  }
}
