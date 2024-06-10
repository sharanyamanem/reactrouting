// src/components/Settings.js
import React from 'react';
import './Settings.css';

const Settings = () => {
  return (
    <div className="settings-container">
      <h1 className="settings-title">Settings Page</h1>
      <div className="settings-details">
        <div className="settings-option">
          <label htmlFor="notification">Enable Notifications</label>
          <input type="checkbox" id="notification" name="notification" />
        </div>
        <div className="settings-option">
          <label htmlFor="darkMode">Enable Dark Mode</label>
          <input type="checkbox" id="darkMode" name="darkMode" />
        </div>
        <div className="settings-option">
          <label htmlFor="language">Language</label>
          <select id="language" name="language">
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
          </select>
        </div>
        <div className="settings-option">
          <label htmlFor="timezone">Timezone</label>
          <select id="timezone" name="timezone">
            <option value="utc-12">UTC-12:00</option>
            <option value="utc-11">UTC-11:00</option>
            <option value="utc-10">UTC-10:00</option>
            {/* Add more timezone options as needed */}
          </select>
        </div>
        <div className="settings-option">
          <label htmlFor="theme">Theme Color</label>
          <input type="color" id="theme" name="theme" />
        </div>
      </div>
    </div>
  );
};

export default Settings;
