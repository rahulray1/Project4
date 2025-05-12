import React from "react";
import { useNavigate } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";

const pricingPlans = [
  {
    id: 1,
    name: "Basic Plan",
    price: "$19.99",
    features: ["Feature 1", "Feature 2", "Feature 3"],
  },
  {
    id: 2,
    name: "Standard Plan",
    price: "$49.99",
    features: ["Feature A", "Feature B", "Feature C"],
  },
  { id: 3, name: "Premium Plan", price: 99.99 },
];

export default function Pricing() {
  const navigate = useNavigate();

  const handleOrder = (planName, price) => {
    navigate("/checkout", { state: { planName, price } });
  };

  return (
    <section id="pricing" className="block pricing-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Pricing & Plans</h2>
          <div className="subtitle">check our pricing and plans</div>
        </div>
        <Row>
          {pricingPlans.map((plan) => {
            return (
              <Col sm={4} key={plan.id}>
                <div className="heading">
                  <h3>{plan.name}</h3>
                  <span className="price">{plan.price}</span>
                </div>
                <ListGroup>
                  {plan.features &&
                    plan.features.map((feature, index) => (
                      <ListGroup.Item key={index}>{feature}</ListGroup.Item>
                    ))}
                </ListGroup>
                <div className="btn-holder">
                  <button
                    className="btn btn-primary"
                    onClick={() => handleOrder(plan.name, plan.price)}
                  >
                    Order
                  </button>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
