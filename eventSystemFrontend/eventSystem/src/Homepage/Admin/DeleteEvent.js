import React, { useState } from 'react';




const DeleteEvent = () => {
  const [eventId, setEventId] = useState('');
  const [message, setMessage] = useState('');
  const [status, setStatus] = useState('');

  const handleChange = (event) => {
    setEventId(event.target.value);
  };

  const handleSelectChange = (event) => {
    setStatus(event.target.value);

  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:8080/api/event/${eventId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({status})
      });

      if (!response.ok) {
        throw new Error('Failed to delete event');
      }

      setMessage('Event Deleted!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div>
      <h2>Update Event Status</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Event Status:
          <br></br>
          <br></br>
          <input type="text" value={eventId} onChange={handleChange} placeholder='Event Id' />
        </label>
        <br></br>
        <br></br>
        <button type="submit">Delete</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default DeleteEvent;
