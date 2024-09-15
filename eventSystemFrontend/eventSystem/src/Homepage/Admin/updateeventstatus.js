import { useState } from 'react';

const EventForm = () => {
  const [formData, setFormData] = useState({
    eventId: '',
    title: '',
    location: '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Making an API call (replace the URL with your actual endpoint)
    fetch('http://localhost:8080/api/events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
      // You can also handle further logic here after a successful API call
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="eventId"
        value={formData.eventId}
        onChange={handleChange}
        placeholder='Event Id'
      />
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder='Title'
      />
      <input
        type="text"
        name="location"
        value={formData.location}
        onChange={handleChange}
        placeholder='Location'
      />
      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        placeholder='Date'
      />
      <input
        type="time"
        name="time"
        value={formData.time}
        onChange={handleChange}
        placeholder='Time'
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default EventForm;
