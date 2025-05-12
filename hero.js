import Carousel from "react-bootstrap/Carousel";

var heroData = [
  {
    id: 1,
    image: require("../assests/images/img-hero1.jpg"),

    title: "Innovative IT Solutions for Your Business",
    description:
      "We provide cutting-edge IT services to help businesses thrive in the digital age. From software development to cloud solutions, we have you covered.",
    target: "services", // Target section
  },
  {
    id: 2,
    image: require("../assests/images/img-hero2.jpg"),
    title: "Empowering Businesses with Technology",
    description:
      "Our team of experts specializes in delivering scalable and secure IT solutions tailored to your business needs.",
    target: "about", // Target section
  },
  {
    id: 3,
    image: require("../assests/images/img-hero3.jpg"),
    title: "Your Trusted IT Partner",
    description:
      "Partner with us to transform your business with innovative IT strategies and solutions.",
    target: "contact", // Target section
  },
];

export default function AppHero({ scrollToSection, aboutRef, servicesRef, contactRef }) {
  const getTargetRef = (target) => {
    if (target === "about") return aboutRef;
    if (target === "services") return servicesRef;
    if (target === "contact") return contactRef;
  };

  return (
    <section id="home" className="hero-block">
      <Carousel data-bs-theme="dark">
        {heroData.map((hero) => {
          return (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption>
                <h5>{hero.title}</h5>
                <p>{hero.description}</p>
                <button
                  className="btn btn-primary"
                  onClick={() => scrollToSection(getTargetRef(hero.target))}
                >
                  Learn More <i className="fas fa-chevron-right"></i>
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </section>
  );
}
