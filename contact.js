import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import './contact.css';

export default function AppContact() {
  console.log("Rendering AppContact component");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const validatePhone = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; // Example: Validates a 10-digit phone number
    return phoneRegex.test(phone);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    // Validate phone number
    if (!validatePhone(formData.phone)) {
      setStatus({ type: "error", message: "Please enter a valid 10-digit phone number." });
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setStatus({ type: "error", message: "Message cannot be empty." });
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to submit the form");
      }

      const data = await response.json();
      setStatus({ type: "success", message: data.message });
      setFormData({ fullName: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Error during form submission:", error);
      setStatus({ type: "error", message: "There was an error submitting the form. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contact us</h2>
          <div className="subtitle">get connected with us</div>
        </div>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col sm={4}>
              <Form.Control
                type="text"
                name="fullName"
                placeholder="Enter your full name"
                aria-label="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="email"
                name="email"
                placeholder="Enter your email address"
                aria-label="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Col>
            <Col sm={4}>
              <Form.Control
                type="phone"
                name="phone"
                placeholder="Enter your contact number"
                aria-label="Phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control
                as="textarea"
                name="message"
                placeholder="Enter your message here..."
                aria-label="Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Col>
          </Row>
          {status.message && (
            <p className={status.type === "success" ? "text-success" : "text-danger"}>
              {status.message}
            </p>
          )}
          <div className="btn-holder">
            <Button type="submit" disabled={loading}>
              {loading ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </Form>
      </Container>
      <div className="google-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.2931143261576!2d85.24209577518083!3d25.694717477393986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed5dc4f6af5a73%3A0x9e694ba7a8bb3e33!2sNiper%20Rd%2C%20Hajipur%20Industrial%20Area%2C%20Bihar%20844102!5e0!3m2!1sen!2sin!4v1744695615391!5m2!1sen!2sin" allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="myoffice you"
        ></iframe>
          
      </div>
      <Container fluid>
        <div className="contact-info">
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              kumarrahul59051@gmail.com
            </li>
            <li>
              <i className="fas fa-phone"></i>
              9931485499
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Hajipur, Bihar, India
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
