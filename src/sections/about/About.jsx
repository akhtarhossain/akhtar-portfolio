import AboutImage from "../../assets/about.jpg";
import data from "./data";
import Card from "../../components/Card";
import "./about.css";

const About = () => {
  return (
    <section id="about">
      <div className="container about__container" data-aos="fade-in">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects that solve real-world problems has always been my passion.
            With a strong foundation in Mathematics and a deep love for programming,
            I thrive on developing efficient, scalable, and high-performance web applications.
          </p>
          <p>
            Hi, my name is Akhtar Hussain, and I specialize in Frontend Development
            with expertise in React, Angular, JavaScript, TypeScript, Bootstrap 5, and WordPress.
            My goal is to craft seamless user experiences with clean, maintainable, and optimized code.
          </p>
          <p>
            I am always eager to tackle complex challenges, solve problems, and bring innovative ideas to life.
            Let's collaborate to build something impactful! 🚀
          </p>
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
