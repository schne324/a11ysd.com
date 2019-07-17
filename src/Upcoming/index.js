import React from 'react';
import data from '../Events/data';
import './index.css';

export default function Upcoming() {
  const [newest] = Object.keys(data);
  const d = newest.split(' ')[0];
  const isUpcoming = new Date(d) > Date.now();

  if (!isUpcoming) {
    return null;
  }

  return (
    <div className="Upcoming-notice">
      Upcoming meetup on {d}! &nbsp;
      <a target="_blank" rel="noopener noreferrer" href={data[newest].link}>
        RSVP to upcoming event
      </a>
    </div>
  );
}
