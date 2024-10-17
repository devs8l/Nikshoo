import React from 'react';
import './Admin.css';

function Admin() {
  return (
    <div className="admin-container">
      {/* Sidebar */}
      <nav className="sidebar">
        <h2>Admin Dashboard</h2>
        <ul>
          <li><a href="#users">Users</a></li>
          <li><a href="#getintouch">Get In Touch Form Data</a></li>
          <li><a href="#partner">Partner Form Data</a></li>
          <li><a href="#contact">Contact Form Data</a></li>
        </ul>
      </nav>

      {/* Main Content */}
      <div className="main-content">
        <header className="topbar">
          <h2>Welcome, Admin</h2>
          <div className="admin-actions">
            {/* You can add log out or notifications here */}
            <button className="logout-btn">Log Out</button>
          </div>
        </header>

        <section className="content-section" id="users">
          <h3>Users</h3>
          <p>Display list of users here.</p>
        </section>

        <section className="content-section" id="getintouch">
          <h3>Get In Touch Form Data</h3>
          <p>Display "Get In Touch" form data here.</p>
        </section>

        <section className="content-section" id="partner">
          <h3>Partner Form Data</h3>
          <p>Display partner form data here.</p>
        </section>

        <section className="content-section" id="contact">
          <h3>Contact Form Data</h3>
          <p>Display contact form data here.</p>
        </section>
      </div>
    </div>
  );
}

export default Admin;
