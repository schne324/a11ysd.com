import React, { Fragment } from 'react';
import { Helmet } from 'react-helmet';
import Card from '../Card';
import data from './data';
import meetup from '../img/meetup.jpeg';
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import './index.css';

const Events = () => (
  <div className="Events">
    <Helmet>
      <title>Events</title>
    </Helmet>
    <Card
      heading="Events"
      footer={
        <Fragment>
          <a
            href="https://www.meetup.com/a11ySD/events/"
            target="_blank"
            rel="noopener noreferrer"
          >
            View events
          </a>
          <a
            href="https://photos.app.goo.gl/Z7qy2m6Su8fg9L2M7"
            target="_blank"
            rel="noopener noreferrer"
          >
            View photos
          </a>
        </Fragment>
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
    <Accordion
      allowZeroExpanded
      allowMultipleExpanded
      preExpanded={['event-0']}
      className="Sect"
    >
      {Object.entries(data).map(([date, { talks, link, liveStream }], i) => (
        <AccordionItem key={date} uuid={`event-${i}`}>
          <AccordionItemHeading aria-level="4">
            <AccordionItemButton>{date}</AccordionItemButton>
          </AccordionItemHeading>
          <AccordionItemPanel>
            {liveStream && (
              <iframe
                width="560"
                title={`a11ySD live stream ${date}`}
                height="315"
                src={liveStream}
                frameBorder="0"
                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
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
          </AccordionItemPanel>
        </AccordionItem>
      ))}
    </Accordion>
  </div>
);

Events.displayName = 'Events';
export default Events;
