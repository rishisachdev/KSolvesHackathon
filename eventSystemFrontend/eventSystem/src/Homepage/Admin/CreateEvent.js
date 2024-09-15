import React, { useState } from 'react';
import axios from 'axios';

const CreateEvent = ({ onClose }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [createdBy, setCreatedBy] = useState(1); // Default to an admin ID (e.g., 1)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setSuccess('');

    try {
      await axios.post('http://localhost:8080/api/events', {
        title,
        description,
        date,
        time,
        location,
        created_by: createdBy
      });
      setSuccess('Event added successfully!');
      // Clear form fields
      setTitle('');
      setDescription('');
      setDate('');
      setTime('');
      setLocation('');
    } catch (error) {
      setError('Failed to add event. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column' }}>
      <h2 style={{ marginBottom: '20px' }}>Add New Event</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Title:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Description:</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Date:</label>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Time:</label>
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Location:</label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
          />
        </div>
        <div style={{ marginBottom: '15px' }}>
          <label style={{ marginRight: '10px' }}>Created By (Admin ID):</label>
          <input
            type="number"
            value={createdBy}
            onChange={(e) => setCreatedBy(Number(e.target.value))}
            required
          />
        </div>
        <button style={{ padding: '10px 20px', marginBottom: '15px' }} type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Event'}
        </button>
        {success && <p className="success-message" style={{ marginBottom: '15px' }}>{success}</p>}
        {error && <p className="error-message" style={{ marginBottom: '15px' }}>{error}</p>}
      </form>
      <button onClick={onClose} className="close-button" style={{ padding: '10px 20px' }}>Close</button>
    </div>
  );
};

export default CreateEvent;
