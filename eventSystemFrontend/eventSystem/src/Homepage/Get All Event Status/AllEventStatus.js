import React, { useState, useEffect } from 'react';
import axios from 'axios';
function AllEventStatus() {

  const [ event, setEvent] = useState ([])
  


  //Uncomment when testing complete
  useEffect(() => {
    axios.get('http://localhost:8080/api/events')
      .then(response => {
        setEvent(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h1>All Event Status</h1>
      <ul>
        {event.map((event, index) => (
          <li key={index}>
            <strong>Event ID:</strong> {event.eventId} <br />
            <strong>Title:</strong> {event.title} <br />
            <strong>Location</strong> {event.location} <br />
            <strong>Date</strong> {event.date} <br />
            <strong>Time</strong> {event.time} <br />
            <strong>Status:</strong> {event.status} <br />

            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AllEventStatus;
