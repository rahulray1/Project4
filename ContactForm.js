import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContact } from "../context/ContactContext";

export default function ContactForm() {
  const { setContactDetails } = useContact(); // Context for saving contact details
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const apiUrl = `${process.env.REACT_APP_API_URL}/api/contact`;
      console.log("API URL:", apiUrl); // Debugging log

      const response = await fetch(apiUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ fullName: name, email, phone, message: "N/A" }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response:", errorData);
        throw new Error(`Failed to submit the form. Status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Response data:", data);

      // Save contact details in context
      setContactDetails({ name, email, phone });

      alert("Form submitted successfully!");
      navigate("/checkout");
    } catch (error) {
      console.error("Error during form submission:", error);
      alert("There was an error submitting the form. Please try again.");
    }
  };

  return (
    <div className="contact-form">
      <h1>Contact Details</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name:</label>
          <input
            id="name"
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            id="email"
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Phone:</label>
          <input
            id="phone"
            type="tel"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Save and Proceed
        </button>
      </form>
    </div>
  );
}