import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Offscreen from 'react-offscreen';
import Card from '../Card';
import Deque from '../img/Deque';
import Evinced from '../img/Evinced';
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
      <a href="http://evinced.com/" target="_blank" rel="noopener noreferrer">
        <Offscreen>Evinced</Offscreen>
        <Evinced />
      </a>
    </div>
  </div>
);

Sponsors.displayName = 'Sponsors';
export default Sponsors;
