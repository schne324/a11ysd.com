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
  </div>
);

Events.displayName = 'Events';
export default Events;
