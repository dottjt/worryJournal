import React from 'react';
import './EventList.css';

export function Event(props) {
 const { event } = props;

  return (
    <div>
      <p>{event.eventTitle}</p>
			<p>{event.date}</p>
    </div>
  );
}

export function EventList(props) {
  const { events } = props;

  return (
    <ul className="eventlist">
    <h1> Event List</h1>
      {events.map(e => (
        <li className="eventlist__event" key={e.get('id')}>
          <Event event={e.toJS()} />
        </li>
      ))}
    </ul>
  );
}
