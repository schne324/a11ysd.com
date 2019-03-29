import React from 'react';
import IconLink from '../IconLink';
import logo from '../img/a11ysd.jpeg';
import './index.css';

export default function Home() {
  return (
    <div className="Home">
      <div className="Home__wrapper">
        <h3>What is a11ySD?</h3>
        <div className="Home__content">
          <p>
            An accessibility meetup! Come hang out and talk accessibility. This
            meetup is for anyone interested in anything related to accessibility
            and inclusive design. We usually have lightning talks by
            accessibility experts and plenty of time to chat with speakers and
            fellow attendees.
          </p>
          <div className="Home__content--image">
            <img alt="" role="presentation" src={logo} />
          </div>
        </div>
        <div className="Home__wrapper--links">
          <a
            href="https://www.meetup.com/a11ySD/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Join the meetup
          </a>
          <a href="mailto:info@a11ysd.com?subject=a11ySD%20speaker%20volunteer">
            Volunteer to speak
          </a>
        </div>
      </div>
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
      </ul>
    </div>
  );
}
