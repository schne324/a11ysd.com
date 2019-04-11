import React from 'react';
import Card from '../Card';
import './index.css';

const Contact = () => (
  <div className="Contact">
    <Card heading="Contact a11ySD" footer={null}>
      <div className="Events--content">
        <p>There are many ways to get in contact with us!</p>
        <ul>
          <li>
            Email us at <a href="mailto:info@a11ySD.com">info@a11ySD.com</a>
          </li>
          <li>
            Message us on
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://meetup.com/a11ySD"
            >
              meetup.com/a11ySD
            </a>
          </li>
          <li>
            Tweet/DM
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/a11ysd"
            >
              @a11ySD on twitter
            </a>
          </li>
          <li>
            Hit us up on
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://web-a11y.slack.com/messages/a11ysd"
            >
              #a11ySD slack
            </a>
          </li>
        </ul>
        <p>Cheers!</p>
      </div>
    </Card>
  </div>
);

Contact.displayName = 'Contact';
export default Contact;
