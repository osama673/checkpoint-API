import React from "react";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-info">
        <h1>About Us</h1>
        <ul>
          <li>🚀 Our Mission</li>
          <li>✨ Our Essence</li>
          <li>🌟 Our Promise</li>
          <li>💖 Our Vibe</li>
        </ul>
      </div>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="email">✉️ Email address:</label>
          <input type="email" id="email" placeholder="name@example.com" />

          <label htmlFor="comments">📝 Comments:</label>
          <textarea
            id="comments"
            rows={3}
            placeholder="Share your thoughts..."
          ></textarea>

          <button>🚀 Submit</button>
        </form>
      </div>
    </div>
  );
};

export default About;
