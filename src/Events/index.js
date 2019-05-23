import React from 'react';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import meetup from '../img/meetup.jpeg';
import './index.css';

const Events = () => (
  <div className="Events">
    <Helmet>
      <title>Events</title>
    </Helmet>
    <Card
      heading="Events"
      footer={
        <a
          href="https://www.meetup.com/a11ySD/events/"
          target="_blank"
          rel="noopener noreferrer"
        >
          View events
        </a>
      }
    >
      <div className="Events--content">
        <p>
          {`Whether you're an accessibility guru or are just curious about what exactly web accessibility and inclusive design are, this meetup is for you. This group is for designers, developers, project managers, execs... really anyone involved in building and supporting IT products. Let's get together, network, collaborate and learn from one another!`}
        </p>
        <p>
          We try to have meetups every 1 - 2 months. To ensure we have the right
          amount of food and drink please RSVP to the meetup. Let us know if you
          have any needs we can accommodate.
        </p>
      </div>
      <div className="Home__content--image">
        <img alt="" role="presentation" src={meetup} />
      </div>
    </Card>
    <h3>Slides / Resources</h3>
    <h4>05/16/2019 (GAAD)</h4>
    <ul className="Home__wrapper--links">
      <li>
        <a
          href="https://drive.google.com/open?id=0B34IqjCwmShCZmhiVW1VN1ZZbE5pOExnV2owWmdwek9halhR"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accessibility Tips and Tricks - Ricardo Rodriguez
        </a>
      </li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/1deyTc9Od_ovEG1JYPdZ7DuxTC50qhd7YyM6x5wAi9yI/edit#slide=id.p"
          target="_blank"
          rel="noopener noreferrer"
        >
          Automate Accessibility Testing for Your Website - Wei-En Wong
        </a>
      </li>
      <li>
        <a
          href="https://docs.google.com/presentation/d/e/2PACX-1vT52tJkJUPtt4FyopeFt74gDEp_qOYlL_wV2c7uLERDWB9k6dAhKMERhzZWipCjhrzpg_ysHp10uByN/pub"
          target="_blank"
          rel="noopener noreferrer"
        >
          Web Accessibility By The Numbers - Dan Payne
        </a>
      </li>
      <li>
        <a
          href="https://schne324.github.io/dragon-drop/demo/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Accessible list reordering with Dragon Drop - Harris Schneiderman
        </a>
      </li>
    </ul>
  </div>
);

Events.displayName = 'Events';
export default Events;
