import React, { Fragment } from 'react';
import Card from '../Card';
import logo from '../img/a11ysd.jpeg';
import harris from '../img/harris.jpeg';
import chris from '../img/chris.jpg';
import './index.css';

export default function Home() {
  return (
    <div className="Home">
      <Card
        heading="What is a11ySD?"
        footer={
          <Fragment>
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
          </Fragment>
        }
      >
        <Fragment>
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
        </Fragment>
      </Card>
      <div className="Home__cards">
        <div className="Home__card">
          <h4>Lightning talks</h4>
          <i aria-hidden="true" className="fas fa-bolt" />
          <p>Meetups often have several 5-10 minute lightning talks.</p>
        </div>
        <div className="Home__card">
          <h4>Networking</h4>
          <i aria-hidden="true" className="fas fa-handshake" />
          <p>{`Come network with San Diego's accessibility community!`}</p>
        </div>
        <div className="Home__card">
          <h4>Food / Drink</h4>
          <i aria-hidden="true" className="fas fa-pizza-slice" />
          <p>Our meetups will always have food and drink!</p>
        </div>
      </div>
      <div className="Home__organizers">
        <h3>Meet the organizers</h3>
        <div className="Home__cards">
          <div className="Home__card">
            <h4>Harris Schneiderman</h4>
            <img src={harris} alt="" role="presentation" />
            <p>
              Harris is a software developer with a strong passion for
              accessibility. He is a member of the W3C ARIA Working Group and
              works for Deque Systems. He spends his free time playing guitar,
              cooking, hiking, fishing and working on open source projects
              trying to make the web a better place for everyone!
            </p>
            <div className="Home__wrapper--links">
              <a
                href="https://twitter.com/theHarrisius"
                target="_blank"
                rel="noopener noreferrer"
              >
                @theHarrius twitter
              </a>
              <a
                href="https://github.com/schne324"
                target="_blank"
                rel="noopener noreferrer"
              >
                @schne324 github
              </a>
              <a
                href="https://www.harris-schneiderman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {`Harris' personal website`}
              </a>
              <a
                href="https://games.harris-schneiderman.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                a11y games
              </a>
            </div>
          </div>
          <div className="Home__card">
            <h4>Chris Land</h4>
            <img src={chris} alt="" role="presentation" />
            <p>
              Chris is an accessibility consultant with experience in coding,
              design, ux and enterprise systems. He considers web accessibility
              to be an integral part of inclusive user interface design and
              development, providing people with disabilities an unprecedented
              level of independence.
            </p>
            <div className="Home__wrapper--links">
              <a
                href="https://twitter.com/cwinfieldLand"
                target="_blank"
                rel="noopener noreferrer"
              >
                @cwinfieldLand twitter
              </a>
              <a
                href="https://www.linkedin.com/in/christopher-w-land/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chris on LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
