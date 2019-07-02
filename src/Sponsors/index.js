import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Offscreen from 'react-offscreen';
import Card from '../Card';
import Deque from '../img/Deque';
import blinkLogo from '../img/blink.jpg';
import jsDesigns from '../img/JSDesignLogo_JetGrey.png';
import la from '../img/la.png';
import './index.css';

const Sponsors = () => (
  <div className="Sponsors">
    <Helmet>
      <title>Sponsors</title>
    </Helmet>
    <Card
      heading="Sponsors"
      footer={
        <Fragment>
          <a
            href="mailto:info@a11ysd.com?subject=a11ySD%20Sponsor"
            target="_blank"
            rel="noopener noreferrer"
          >
            Become a sponsor!
          </a>
        </Fragment>
      }
    >
      <div className="Events--content">
        <p>Big thanks to our sponsors, we really appreciate the support!</p>
      </div>
    </Card>
    <div className="Sponsors--links">
      <a
        href="https://deque.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="Sponsors--links-deque"
      >
        <Offscreen>Deque Systems</Offscreen>
        <Deque />
      </a>
      <a href="https://blinkux.com/" target="_blank" rel="noopener noreferrer">
        <img src={blinkLogo} alt="Blink" />
      </a>
      <a
        href="https://levelaccess.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="la"
      >
        <img src={la} alt="Level Access" />
      </a>
      <a
        href="http://josephsalerno.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="Sponsors--links-jsd"
      >
        <img src={jsDesigns} alt="JSDesign" />
      </a>
    </div>
  </div>
);

Sponsors.displayName = 'Sponsors';
export default Sponsors;
