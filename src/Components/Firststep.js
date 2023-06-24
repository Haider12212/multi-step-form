import React, { useState } from 'react';
import './firstStep.css';

const Firststep = ({ handleNextClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  const { name, email, phone } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if required fields are filled
    if (name.trim() === '' || email.trim() === '' || phone.trim() === '') {
      alert('Please fill in all required fields.');
      return;
    }

    // Proceed to the next step
    handleNextClick();
  };

  return (
    <div className="container-first">
      <div className="card">
        <div className="card-body">
          <h1 className="card-title">Personal info</h1>
          <p>Please provide your name, email, and phone number.</p>
          <form className="form-group" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              placeholder="e.g. John Doe"
              value={name}
              onChange={handleChange}
            />
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              placeholder="e.g. johndoe@something.com"
              value={email}
              onChange={handleChange}
            />
            <label htmlFor="phone">Phone</label>
            <input
              type="tel"
              className="form-control"
              id="phone"
              name="phone"
              minLength={11}
              maxLength={11}
              placeholder="e.g. +1 234 567 89 10"
              value={phone}
              onChange={handleChange}
            />
            <button className="btn-primary" type="submit">Next Step</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Firststep;
