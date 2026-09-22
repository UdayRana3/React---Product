
import { useState } from "react";

function Contact({ onBack }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(form);
    alert("Your message has been submitted!");

    setForm({
      name: "",
      email: "",
      mobile: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-card">
        <h1>Contact Us</h1>

        <form onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Mobile Number</label>
          <input
            name="mobile"
            type="tel"
            placeholder="Enter your mobile number"
            value={form.mobile}
            onChange={handleChange}
            required
          />

          <label>Message</label>
          <textarea
            name="message"
            placeholder="Enter your message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            required
          />

          <div className="contact-buttons">
            <button type="submit">Submit</button>
            <button type="button" onClick={onBack}>
              Back
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

