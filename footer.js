import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";

export default function AppFooter() {
  const [showTopBtn, setShowBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowBtn(true);
      } else {
        setShowBtn(false);
      }
    });
  }, []);

  function goTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <Container fluid>
      <footer id="footer" className="footer-section">
        <p>&copy; 2025 [TechiBoom]. All rights reserved.</p>
        <ul className="social-links">
          <li><a href="https://linkedin.com">LinkedIn</a></li>
          <li><a href="https://github.com">GitHub</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </footer>
      {showTopBtn && <div className="go-top" onClick={goTop}></div>}
    </Container>
  );
}
