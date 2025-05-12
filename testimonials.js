import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";

var testimonialsData = [
  {
    id: 1,
    name: "John Wills",
    description:
      "TechieBoom transformed our online presence with their exceptional web design services. Their attention to detail and commitment to delivering a user-friendly experience exceeded our expectations. Highly recommended!",
    designation: "Marketing Manager, ABC Corp",
  },
  {
    id: 2,
    name: "Jasmine Perry",
    description:
      "The team at TechieBoom is incredibly talented and professional. They helped us achieve top rankings on search engines, which significantly boosted our website traffic and sales. Their SEO expertise is unmatched!",
    designation: "Digital Strategist, XYZ Ltd",
  },
  {
    id: 3,
    name: "Rocky Johnson",
    description:
      "Working with TechieBoom was a game-changer for our business. Their creative design solutions brought our vision to life, and their responsiveness throughout the project was outstanding. We couldn’t be happier!",
    designation: "CEO, Creative Minds Inc",
  },
  {
    id: 4,
    name: "Sophia Carter",
    description:
      "TechieBoom’s team is a pleasure to work with. They delivered a fully responsive and visually stunning website that perfectly represents our brand. Their dedication and expertise are truly commendable.",
    designation: "Founder, Elegant Interiors",
  },
  {
    id: 5,
    name: "Michael Brown",
    description:
      "I was impressed by TechieBoom’s ability to understand our business needs and translate them into a seamless digital experience. Their innovative approach and technical skills are second to none.",
    designation: "CTO, NextGen Solutions",
  },
];

export default function AppTestimonials() {
  return (
    <section id="testimonials" className="testimonials-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Client Testimonials</h2>
          <div className="subtitle">what client says about us</div>
        </div>

        <Carousel data-bs-theme="dark">
          {testimonialsData.map((testimonials) => {
            return (
              <Carousel.Item key={testimonials.id}>
                <blockquote>
                  <p>{testimonials.description}</p>
                  <cite>
                    <span className="name">{testimonials.name}</span>
                    <span className="designation">
                      {testimonials.designation}
                    </span>
                  </cite>
                </blockquote>
              </Carousel.Item>
            );
          })}
        </Carousel>
      </Container>
    </section>
  );
}
