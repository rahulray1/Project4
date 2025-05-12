import React from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

const blogData = [
  {
    id: 1,
    image: require("../assests/images/blog1.jpg"),
    time: "15 Nov 2023",
    title: "The Future of Web Design: Trends to Watch in 2025",
    description:
      "Discover the latest trends shaping the future of web design, from AI-driven interfaces to immersive user experiences. Stay ahead of the curve with these insights.",
    content: `
      Web design is evolving rapidly, with new trends emerging every year. In 2025, we expect to see a greater focus on AI-driven interfaces, immersive user experiences, and sustainable design practices. 
      Businesses that embrace these trends will be better positioned to engage their audiences and stay ahead of the competition.

      Key trends include:
      - **AI-Driven Interfaces**: AI is transforming web design by enabling personalized user experiences and automating repetitive tasks.
      - **Immersive Experiences**: Technologies like AR and VR are creating more engaging and interactive websites.
      - **Sustainable Design**: Eco-friendly design practices are becoming a priority as businesses aim to reduce their environmental impact.

      Staying updated with these trends will help you create websites that are not only visually appealing but also highly functional and future-proof.
    `,
  },
  {
    id: 2,
    image: require("../assests/images/blog2.jpg"),
    time: "10 Nov 2023",
    title: "10 Tips for Creating Stunning UI Designs",
    description:
      "Learn the secrets to crafting visually appealing and user-friendly interfaces. These 10 tips will help you elevate your UI design skills to the next level.",
    content: `
      Creating stunning UI designs requires a combination of creativity, technical skills, and a deep understanding of user behavior. Here are 10 actionable tips to help you design interfaces that are both beautiful and functional:

      1. **Understand Your Audience**: Research your target users to create designs that meet their needs and preferences.
      2. **Focus on Simplicity**: Avoid clutter and prioritize clean, intuitive layouts.
      3. **Use Consistent Design Elements**: Maintain consistency in colors, fonts, and spacing across your interface.
      4. **Leverage White Space**: Use white space effectively to improve readability and visual appeal.
      5. **Prioritize Accessibility**: Ensure your designs are inclusive and accessible to all users.
      6. **Incorporate Visual Hierarchy**: Guide users' attention with strategic placement of elements.
      7. **Optimize for Mobile**: Design with a mobile-first approach to cater to the growing number of mobile users.
      8. **Test and Iterate**: Continuously test your designs and make improvements based on user feedback.
      9. **Use High-Quality Visuals**: Invest in professional images and graphics to enhance your design.
      10. **Stay Updated**: Keep up with the latest design trends and tools to stay ahead of the competition.

      By following these tips, you can create UI designs that not only look great but also deliver exceptional user experiences.
    `,
  },
  {
    id: 3,
    image: require("../assests/images/blog3.jpg"),
    time: "07 Nov 2023",
    title: "How SEO Can Transform Your Business in 2025",
    description:
      "SEO is more important than ever. Explore how optimizing your website for search engines can drive traffic, boost sales, and grow your business.",
    content: `
      Search Engine Optimization (SEO) is a powerful tool for businesses looking to increase their online visibility and attract more customers. In 2025, SEO will continue to play a critical role in digital marketing strategies.

      Benefits of SEO:
      - **Increased Website Traffic**: By ranking higher on search engine results pages (SERPs), you can attract more visitors to your website.
      - **Improved User Experience**: SEO involves optimizing your website's structure and content, leading to a better user experience.
      - **Higher Conversion Rates**: Targeted traffic from SEO efforts is more likely to convert into leads or sales.
      - **Cost-Effective Marketing**: Compared to paid advertising, SEO offers long-term benefits at a lower cost.

      To succeed in 2025, focus on:
      - Conducting thorough keyword research.
      - Creating high-quality, engaging content.
      - Building authoritative backlinks.
      - Optimizing for voice search and mobile devices.

      By implementing these strategies, you can transform your business and achieve sustainable growth.
    `,
  },
  {
    id: 4,
    image: require("../assests/images/blog4.jpg"),
    time: "01 Nov 2023",
    title: "Responsive Design: Why It Matters in 2025",
    description:
      "In a mobile-first world, responsive design is no longer optional. Learn why it’s crucial for your website and how to implement it effectively.",
    content: `
      Responsive design ensures that your website looks great and functions well on all devices, from desktops to smartphones. In 2025, responsive design will be more important than ever as mobile usage continues to rise.

      Why responsive design matters:
      - **Improved User Experience**: A responsive website adapts to different screen sizes, providing a seamless experience for users.
      - **Higher Search Rankings**: Search engines prioritize mobile-friendly websites, making responsive design essential for SEO.
      - **Increased Engagement**: Users are more likely to stay on your site and explore its content if it’s easy to navigate on any device.

      Tips for implementing responsive design:
      - Use flexible grid layouts and scalable images.
      - Test your website on multiple devices and screen sizes.
      - Optimize loading times for mobile users.
      - Prioritize touch-friendly navigation.

      By adopting responsive design, you can ensure your website remains relevant and accessible to all users in 2025 and beyond.
    `,
  },
  {
    id: 5,
    image: require("../assests/images/blog5.jpg"),
    time: "25 Oct 2023",
    title: "The Role of Creativity in Digital Marketing",
    description:
      "Creativity is the heart of successful digital marketing campaigns. Discover how to harness creativity to captivate your audience and achieve your goals.",
    content: `
      Creativity is what sets successful digital marketing campaigns apart. It helps brands stand out, connect with their audience, and drive meaningful engagement.

      How creativity impacts digital marketing:
      - **Captures Attention**: Unique and innovative campaigns grab the audience's attention in a crowded digital space.
      - **Builds Emotional Connections**: Creative storytelling helps brands connect with their audience on a deeper level.
      - **Drives Engagement**: Engaging visuals, videos, and interactive content encourage users to interact with your brand.

      Tips for harnessing creativity:
      - Experiment with different content formats, such as videos, infographics, and animations.
      - Use data-driven insights to create personalized campaigns.
      - Collaborate with creative professionals to bring fresh ideas to your marketing efforts.

      By embracing creativity, you can create digital marketing campaigns that leave a lasting impression and drive results.
    `,
  },
];

export default function BlogDetails() {
  const { id } = useParams();
  const blog = blogData.find((blog) => blog.id === parseInt(id));

  if (!blog) {
    return <h2>Blog not found</h2>;
  }

  return (
    <Container className="blog-details mt-5">
      <h2 className="blog-title">{blog.title}</h2>
      <Image src={blog.image} alt={blog.title} fluid className="blog-image mb-4" />
      <time className="blog-time">{blog.time}</time>
      <p className="blog-description">{blog.description}</p>
      <div className="blog-content">
        <p>{blog.content}</p>
      </div>
    </Container>
  );
}