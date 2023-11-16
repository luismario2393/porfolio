import { useState, useEffect } from "react";
import { Nav } from "./style";
import logo from "../../../public/la.svg";
import cvEng from "../../assets/CV-ENG.pdf";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const isScrolling = scrollY > 0;
      setIsScrolled(isScrolling);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Nav open={isOpen} scrolled={isScrolled}>
      <a href="#">
        <img src={logo} alt="logo" width={70} />
      </a>

      <div className="nav_items">
        <a href="#about">
          {" "}
          <span className="item">{t("about")}</span>
        </a>

        <a href="#experience">
          {" "}
          <span className="item">{t("experience")}</span>
        </a>

        <a href="#projects">
          {" "}
          <span className="item">{t("projects")}</span>
        </a>

        <a href="#contact">
          {" "}
          <span className="item">{t("contact")}</span>
        </a>

        <a href={cvEng} target="_blank" rel="noopener noreferrer">
          {" "}
          <button className="buttonNav">{t("resume")}</button>
        </a>
      </div>
      <div className={`nav_toggle`} onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Nav>
  );
};
