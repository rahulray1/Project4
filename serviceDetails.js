import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const servicesData = [
  {
    id: 1,
    title: "Responsive Design",
    details: `
      At TechieBoom, we specialize in creating responsive designs that ensure your website looks stunning and functions flawlessly on any device. 
      Whether it's a desktop, tablet, or smartphone, our designs adapt seamlessly to provide an optimal user experience.
    `,
    features: [
      "Mobile-first development to prioritize smaller screens.",
      "Cross-browser compatibility to ensure consistency across all major browsers.",
      "Optimized layouts for fast loading and smooth navigation.",
      "Custom solutions tailored to your business needs.",
    ],
    whyChooseUs: `
      Our team of experienced designers and developers is dedicated to delivering high-quality, responsive designs that not only look great but also perform exceptionally well. 
      We use the latest technologies and best practices to ensure your website stands out in a competitive market.
    `,
    image: "/assets/images/Responsive Design.jpg",
  },
  {
    id: 2,
    title: "Creative Design",
    details: `
      Our creative design services are crafted to make your brand stand out in a competitive market. 
      At TechieBoom, we believe that great design is more than just aesthetics—it's about creating a visual identity that resonates with your audience and communicates your brand's values.
    `,
    features: [
      "Unique and innovative design concepts.",
      "Tailored solutions to match your brand identity.",
      "High-quality graphics and visuals.",
      "User-friendly and intuitive interfaces.",
    ],
    whyChooseUs: `
      We combine creativity with strategy to deliver designs that not only look amazing but also drive results. 
      Our team works closely with you to understand your vision and bring it to life.
    `,
    image: "/assets/images/creative-design.jpg",
  },
  {
    id: 3,
    title: "SEO Optimization",
    details: `
      In today's digital landscape, visibility is everything. At TechieBoom, we offer comprehensive SEO optimization services to ensure your website ranks high on search engines and attracts the right audience.
    `,
    features: [
      "Keyword research and analysis.",
      "On-page and off-page SEO strategies.",
      "Content optimization for better rankings.",
      "Regular performance tracking and reporting.",
    ],
    whyChooseUs: `
      Our SEO experts use proven techniques and tools to improve your website's visibility and drive organic traffic. 
      We stay updated with the latest search engine algorithms to ensure your website stays ahead of the competition.
    `,
    image: "/assets/images/seo-optimization.jpg",
  },
];

export default function ServiceDetails() {
  const { id } = useParams();
  const service = servicesData.find((service) => service.id === parseInt(id));

  if (!service) {
    return <h2>Service not found</h2>;
  }

  return (
    <Container className="service-details mt-5">
      <div className="service-header">
        <h2 className="service-title">{service.title}</h2>
        <Image src={service.image} alt={service.title} fluid className="service-image" />
      </div>
      <p className="service-description">{service.details}</p>

      <h3 className="section-title">Key Features</h3>
      <ul className="features-list">
        {service.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>

      <h3 className="section-title">Why Choose Us?</h3>
      <p className="why-choose-us">{service.whyChooseUs}</p>
    </Container>
  );
}