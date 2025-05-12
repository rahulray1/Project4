import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

const teamsData = [
  {
    id: 1,
    image: require("../assests/images/team1.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Gabriel Hart",
    designation: "CEO",
    description:
      "Gabriel is the visionary leader of TechieBoom, driving innovation and excellence. With over 15 years of experience in the tech industry, he ensures the company stays ahead of the curve.",
  },
  {
    id: 2,
    image: require("../assests/images/team2.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Antony",
    designation: "Manager",
    description:
      "David oversees project management and ensures seamless collaboration across teams. His strategic thinking and organizational skills are key to delivering successful projects.",
  },
  {
    id: 3,
    image: require("../assests/images/team3.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Nicholas Perry",
    designation: "UX Designer",
    description:
      "Nicholas specializes in creating user-centric designs that enhance user experiences. His creativity and attention to detail bring life to every project.",
  },
  {
    id: 4,
    image: require("../assests/images/team4.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sarah Wills",
    designation: "Developer",
    description:
      "Sarah is a full-stack developer with expertise in building scalable and efficient web applications. Her coding skills and problem-solving abilities are unmatched.",
  },
  {
    id: 5,
    image: require("../assests/images/team5.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Sophia Pitt",
    designation: "Developer",
    description:
      "Sophia is a passionate developer who excels in front-end technologies. She ensures that every website is visually stunning and highly functional.",
  },
  {
    id: 6,
    image: require("../assests/images/team6.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Taylor Lopez",
    designation: "Developer",
    description:
      "Taylor is a back-end developer with a knack for creating robust and secure server-side solutions. His expertise ensures the smooth functioning of all applications.",
  },
  {
    id: 7,
    image: require("../assests/images/team7.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "Ryan Giggs",
    designation: "Content Writer",
    description:
      "Ryan crafts compelling content that resonates with audiences. His storytelling skills and creativity are instrumental in building the company’s brand voice.",
  },
  {
    id: 8,
    image: require("../assests/images/team8.jpg"),
    fbLink: "https://www.facebook.com",
    twitterLink: "https://www.twitter.com",
    linkedinLink: "https://www.linkedin.com",
    name: "David Smith",
    designation: "SEO Expert",
    description:
      "David is an SEO expert who ensures that every project achieves maximum online visibility. His data-driven strategies drive traffic and boost search rankings.",
  },
];

export default function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Our Team</h2>
          <div className="subtitle">some of our experts</div>
        </div>
        <Row>
          {teamsData.map((teams) => {
            return (
              <Col sm={3} key={teams.id}>
                <div className="image">
                  <Image src={teams.image} />
                  <div className="overlay">
                    <div className="socials">
                      <ul>
                        <li>
                          <a href={teams.fbLink}>
                            <i className="fab fa-facebook-f"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.twitterLink}>
                            <i className="fab fa-twitter"></i>
                          </a>
                        </li>
                        <li>
                          <a href={teams.linkedinLink}>
                            <i className="fab fa-linkedin-in"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="content">
                  <h3>{teams.name}</h3>
                  <span className="designation">{teams.designation}</span>
                  <p>{teams.description}</p>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
