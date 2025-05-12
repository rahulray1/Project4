import React from "react";
import { useNavigate } from "react-router-dom";
import { useContact } from "../context/ContactContext";

export default function Checkout() {
  const { contactDetails } = useContact();
  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (!contactDetails) {
      // Redirect to contact form if details are not filled
      navigate("/contact");
    } else {
      // Proceed to payment logic
      alert("Proceeding to payment...");
    }
  };

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      {contactDetails ? (
        <div>
          <p><strong>Name:</strong> {contactDetails.name}</p>
          <p><strong>Email:</strong> {contactDetails.email}</p>
          <p><strong>Phone:</strong> {contactDetails.phone}</p>
        </div>
      ) : (
        <p>Please fill in your contact details to proceed.</p>
      )}
      <button className="btn btn-success" onClick={handleProceedToPayment}>
        Proceed to Payment
      </button>
    </div>
  );
}