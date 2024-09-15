import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [showAdminDropdown, setShowAdminDropdown] = useState(false);
  const [ showEventSatusDropdown, setShowEventDropDown ] = useState(false)
  const navigate = useNavigate();

  const handleEventDropdownClick = () => {
    setShowEventDropDown(prevState => !prevState);
  };

  const handleAdminDropdownClick = () => {
    setShowAdminDropdown(prevState => !prevState);
  };

  const handleOptionClick = (option) => {
    if (option === 'Get All Event Status') {
      navigate('/allevent'); // Correct path to match App.js routes
    } else if (option === 'Get Specific Event Status') {
      navigate('/eventstatus'); // Correct path to match App.js routes
    } else if (option === 'Create') {
      navigate('/homepage/Admin/Create'); // Correct path to match App.js routes
    } else if (option === 'Delete') {
      navigate('/homepage/Admin/Delete'); // Correct path to match App.js routes
    } else if (option === 'updateEvent') {
      navigate('/homepage/Admin/updateeventstatus'); // Correct path to match App.js routes
    }
    setShowEventDropDown(false);
  };

  return (
    <div className="container">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <a href="/">Home</a>
          </li>
          <li className="nav-item">
            <h3>
            <button onClick={handleEventDropdownClick}>Event Status</button>
            </h3>
            {showEventSatusDropdown && (
              <ul className="dropdown">
                <li onClick={() => handleOptionClick('Get All Event Status')}>
                  Get All Event Status
                </li>
                <li onClick={() => handleOptionClick('Get Specific Event Status')}>
                  Get Specific Event Status
                </li>
              </ul>
            )}
          </li>

          <li className="nav-item">
            <h3>
            <button onClick={handleAdminDropdownClick}>Admin</button>
            </h3>
            {showAdminDropdown && (
              <ul className="dropdown">
                <li onClick={() => handleOptionClick('Create')}>
                  Create Event
                </li>
                <li onClick={() => handleOptionClick('Delete')}>
                  Delete Event
                </li>
                <li onClick={() => handleOptionClick('updateEvent')}>
                  Update Event 
                </li>
              </ul>
            )}
          </li>

        </ul>
      </nav>
      <h1 className="title">WELCOME TO EVENT.com</h1>
      <p>
        For any queries
        <br />
        Contact us at 0123456789
        <br />
        Email at customer@event.com
      </p>
    </div>
  );
}

export default HomePage;
