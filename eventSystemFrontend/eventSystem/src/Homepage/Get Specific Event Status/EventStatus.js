import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function EventStatus() {
  const [eventStatus, setEventStatus] = useState('');
  const navigate = useNavigate(); // Import useNavigate

  const handleInputChange = (event) => {
    setEventStatus(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted event status:', eventStatus);

    // Redirect to the desired path with eventStatus as a URL parameter
    navigate(`/status/${eventStatus}`); // Adjust the path to include the event ID
  };

  return (
    <div className="container" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '2rem' }}>Event Status</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group" style={{ marginBottom: '2rem' }}>
          <label htmlFor="eventNumber" style={{ fontSize: '1.5rem' }}>Event ID:</label>
          <input
            type="text"
            className="form-control"
            id="eventNumber"
            value={eventStatus}
            onChange={handleInputChange}
            style={{ fontSize: '1.5rem', padding: '1rem' }}
          />
        </div>
        <button type="submit" className="btn btn-primary" style={{ fontSize: '1.5rem', padding: '1em' }}>
          Check Status
        </button>
      </form>
    </div>
  );
}


export default EventStatus;
