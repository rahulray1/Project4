import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card"; // Removed Button import

const blogData = [
  {
    id: 1,
    image: require("../assests/images/blog1.jpg"),
    time: "15 Nov 2023",
    title: "The Future of Web Design: Trends to Watch in 2025",
    description:
      "Discover the latest trends shaping the future of web design, from AI-driven interfaces to immersive user experiences. Stay ahead of the curve with these insights.",
    link: "https://www.example.com/future-of-web-design",
  },
  {
    id: 2,
    image: require("../assests/images/blog2.jpg"),
    time: "10 Nov 2023",
    title: "10 Tips for Creating Stunning UI Designs",
    description:
      "Learn the secrets to crafting visually appealing and user-friendly interfaces. These 10 tips will help you elevate your UI design skills to the next level.",
    link: "https://www.example.com/ui-design-tips",
  },
  {
    id: 3,
    image: require("../assests/images/blog3.jpg"),
    time: "07 Nov 2023",
    title: "How SEO Can Transform Your Business in 2025",
    description:
      "SEO is more important than ever. Explore how optimizing your website for search engines can drive traffic, boost sales, and grow your business.",
    link: "https://www.example.com/seo-business-growth",
  },
  {
    id: 4,
    image: require("../assests/images/blog4.jpg"),
    time: "01 Nov 2023",
    title: "Responsive Design: Why It Matters in 2025",
    description:
      "In a mobile-first world, responsive design is no longer optional. Learn why it’s crucial for your website and how to implement it effectively.",
    link: "https://www.example.com/responsive-design",
  },
  {
    id: 5,
    image: require("../assests/images/blog5.jpg"),
    time: "25 Oct 2023",
    title: "The Role of Creativity in Digital Marketing",
    description:
      "Creativity is the heart of successful digital marketing campaigns. Discover how to harness creativity to captivate your audience and achieve your goals.",
    link: "https://www.example.com/creativity-in-marketing",
  },
];

export default function AppBlog() {
  return (
    <section id="blog" className="block blog-block">
      <Container fluid>
        <div className="title-holder">
          <h2>latest from blog</h2>
          <div className="subtitle"> get our latest news from blog</div>
        </div>

        <Row>
          {blogData.map((blog) => {
            return (
              <Col sm={4} key={blog.id}>
                <div className="holder">
                  <Card>
                    <Card.Img variant="top" src={blog.image} />
                    <Card.Body>
                      <time>{blog.time}</time>
                      <Card.Title>{blog.title}</Card.Title>
                      <Card.Text>{blog.description}</Card.Text>
                      <a href={`/blog/${blog.id}`} className="btn btn-primary">
                        Read More
                      </a>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
}
