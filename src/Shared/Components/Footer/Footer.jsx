import React from "react";
import "./footer.css";
import logo from "../../../assets/images/logo.svg";
import { RxArrowTopRight } from "react-icons/rx";
import { FaXTwitter } from "react-icons/fa6";
import { RiTelegram2Fill } from "react-icons/ri";
import { FaInstagram } from "react-icons/fa";
import { PiBrainLight } from "react-icons/pi";
import { SiLinktree } from "react-icons/si";
import { FaGlobeEurope } from "react-icons/fa";
import { SiCoinmarketcap } from "react-icons/si";
import { BiSolidArrowToTop } from "react-icons/bi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <footer className="vypex-footer">
      <div className="footer-container">
        <div className="footer-col">
          <div className="footer-logo">
            <img src={logo} alt="" />
            <h3>Vypex AI</h3>
          </div>

          <p className="footer-desc">
            Subscribe to our newsletter to get the latest updates on everything
            Vypex
          </p>

          <div className="newsletter">
            <input
              type="email"
              placeholder="Email address"
              className="newsletter-input"
            />
            <button className="newsletter-btn">
              <RxArrowTopRight className="footer-icon" size={20} />
            </button>
          </div>

          <div className="social-links">
            <a href="#">
              <i>
                <FaXTwitter size={25} />
              </i>
            </a>
            <a href="#">
              <i>
                <RiTelegram2Fill size={25} />
              </i>
            </a>
            <a href="#">
              <i>
                <FaInstagram size={25} />
              </i>
            </a>
            <a href="#">
              <i>
                <SiCoinmarketcap size={25} />
              </i>
            </a>
            <a href="#">
              <i>
                <FaGlobeEurope size={25} />
              </i>
            </a>
            <a href="#">
              <i>
                <PiBrainLight size={25} />
              </i>
            </a>
            <a href="#">
              <i>
                <SiLinktree size={25} />
              </i>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="#">Presale</a>
            </li>
            <li>
              <a href="#">Predictive AI</a>
            </li>
            <li>
              <a href="#">Buy Token</a>
            </li>
            <li>
              <a href="#">Whitepaper</a>
            </li>
            <li>
              <a href="#">Tokenomics</a>
            </li>
            <li>
              <a href="#">Roadmap</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>AI Agents</h4>
          <ul>
            <li>
              <a href="#">For Individuals</a>
            </li>
            <li>
              <a href="#">For Business</a>
            </li>
            <li>
              <a href="#">DoPIN</a>
            </li>
            <li>
              <a href="#">Join Waitlist</a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Extras</h4>
          <ul>
            <li>
              <a href="#">Media Kit</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Documentation</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>Copyright © 2025 Vypex AI</p>

        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Disclaimers</a>
          <a href="#">Privacy</a>
        </div>

        <button className="back-to-top-btn" onClick={scrollToTop}>
          <p className="back-to-top-text">
            <BiSolidArrowToTop size={20} />
            Back to Top
          </p>

          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <linearGradient
                id="textGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="0%"
              >
                <stop offset="0%" stopColor="#011636" />
                <stop offset="100%" stopColor="#167BFF" />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
