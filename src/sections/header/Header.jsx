import { useEffect } from "react";
import HeaderImage from "../../assets/header.jpg";
import data from "./data";
import AOS from "aos";
import "aos/dist/aos.css";
import { MdDesignServices, MdCode, MdVideoLibrary } from "react-icons/md";
import { HiServer } from "react-icons/hi";
import "./header.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container" data-aos="fade-down">
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <div className="info">
          <h1>Software Engineer & Frontend Developer</h1>
          <h3>Hi, I'm Akhtar Hussain</h3>
          <p>
            Passionate about building modern, responsive, and user-friendly web applications.
            Experienced in crafting seamless UI/UX experiences and developing scalable frontend solutions.
            Always eager to explore new technologies and enhance web performance.
          </p>
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
        </div>
        <div className="profile__area">
          <div className="outer__circle">
            <span>
              <MdDesignServices />
            </span>
            <span>
              <HiServer />
            </span>
            <span>
              <MdCode />
            </span>
            <span>
              <MdVideoLibrary />
            </span>
          </div>
          <div className="inner__circle">
            <img src={HeaderImage} alt="Header Portrait" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
