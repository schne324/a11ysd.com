import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import data from './data';
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
    {Object.entries(data).map(([date, { talks, link }]) => (
      <Fragment key={date}>
        <h4>
          {date} {new Date(date) > Date.now() && '(upcoming)'}
        </h4>
        <ul className="Home__wrapper--links">
          {talks.map(({ title, link }) => (
            <li key={title}>
              {link ? (
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {title}
                </a>
              ) : (
                title
              )}
            </li>
          ))}
        </ul>
        <div className="Home__wrapper--links ita">
          <a target="_blank" rel="noopener noreferrer" href={link}>
            View {date} event on meetup
          </a>
        </div>
      </Fragment>
    ))}
  </div>
);

Events.displayName = 'Events';
export default Events;
