import React from "react";
import { Link } from "react-router-dom";
import "./AppServices.css";

const servicesData = [
  { id: 1, title: "Responsive Design", description: "Ensure your website looks stunning and functions flawlessly on any device." },
  { id: 2, title: "Creative Design", description: "Stand out with a unique and creative design tailored to your brand." },
  { id: 3, title: "SEO Optimization", description: "Boost your website's visibility and attract the right audience." },
];

export default function AppServices() {
  return (
    <div className="services-section">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">Explore the wide range of services we offer to help your business grow.</p>
      <div className="services-list">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            <Link to={`/service/${service.id}`}>
              <button className="details-button">Details</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
