import React, { useState } from "react";
import "../../../assets/styles/Navbar.css";
import logo from "../../../assets/images/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoPersonOutline, IoMenu } from "react-icons/io5";
import { useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [langOpen, setLangOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isInBuyFlow =
    location.pathname.startsWith("/buytoken") ||
    location.pathname === "/token" ||
    location.pathname === "/dashboard";

  const handleMainButtonClick = () => {
    if (!isInBuyFlow) {
      navigate("/buytoken");
    } else {
      navigate("/token");
    }
    setMobileMenuOpen(false);
  };

  const buttonText = isInBuyFlow ? "Buy $VYPEX" : "Join Waitlist";
  const buttonClass = isInBuyFlow ? "waitlist-btn buy-mode" : "waitlist-btn";

  const mobileMenuVariants = {
    closed: {
      x: "100%",
      opacity: 0,
      transition: { type: "spring", stiffness: 400, damping: 35 },
    },
    open: {
      x: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 400, damping: 35 },
    },
    exit: {
      x: "100%",
      opacity: 0,
      transition: { duration: 0.4, ease: "easeInOut" },
    },
  };

  const closeButtonVariants = {
    hidden: { opacity: 0, rotate: -180, scale: 0 },
    visible: {
      opacity: 1,
      rotate: 0,
      scale: 1,
      transition: { delay: 0.3, type: "spring", stiffness: 500 },
    },
    exit: { opacity: 0, rotate: 180, scale: 0 },
  };

  const navItems = [
    { name: "Token", href: "#token" },
    { name: "Presale", href: "#presale" },
    { name: "Blogs", href: "#blog" },
    { name: "Resources", submenu: ["Docs", "Whitepaper"] },
    { name: "Socials", submenu: ["Telegram", "X / Twitter", "Discord"] },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="navbar"
      >
        <div className="nav-left">
          <motion.img
            src={logo}
            alt="Vypex AI"
            className="logo"
            whileHover={{ scale: 1.12 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            Vypex AI
          </motion.p>
        </div>

        <div className="nav-center">
          {navItems.slice(0, 3).map((item, i) => (
            <motion.a
              key={item.name}
              href={item.href}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="main_title"
            >
              {item.name}
            </motion.a>
          ))}

          <div className="dropdown">
            <motion.div
              className="dropdown-trigger"
              whileHover={{ scale: 1.05 }}
            >
              Resources <IoIosArrowDown size={16} className="dropdown-arrow" />
            </motion.div>
            <div className="dropdown-menu">
              <a href="#docs">Docs</a>
              <a href="#whitepaper">Whitepaper</a>
            </div>
          </div>

          <div className="dropdown">
            <motion.div
              className="dropdown-trigger"
              whileHover={{ scale: 1.05 }}
            >
              Socials <IoIosArrowDown size={16} className="dropdown-arrow" />
            </motion.div>
            <div className="dropdown-menu">
              <a href="#tg">Telegram</a>
              <a href="#x">X / Twitter</a>
              <a href="#discord">Discord</a>
            </div>
          </div>
        </div>

        <div className="nav-right">
          <div className="lang-selector">
            <motion.button
              className="lang-btn"
              onClick={() => setLangOpen(!langOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              EN{" "}
              <IoIosArrowDown
                size={16}
                className={`lang-arrow ${langOpen ? "rotated" : ""}`}
              />
            </motion.button>

            <AnimatePresence>
              {langOpen && (
                <motion.div
                  className="lang-menu"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                >
                  {["English", "Spanish", "Deutsch", "Arabic"].map((lang) => (
                    <motion.div key={lang}>{lang}</motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <motion.button
            className="profile"
            whileHover={{ scale: 1.15, rotate: 360 }}
          >
            <IoPersonOutline size={20} />
          </motion.button>

          <motion.button
            className={buttonClass}
            onClick={handleMainButtonClick}
            whileTap={{ scale: 0.95 }}
          >
            <motion.p className="waitlist-text">{buttonText}</motion.p>
          </motion.button>
        </div>

        <motion.button
          className="hamburger"
          onClick={() => setMobileMenuOpen(true)}
          whileTap={{ scale: 0.85, rotate: 90 }}
          initial={{ opacity: 0.8 }}
          whileHover={{ opacity: 1, scale: 1.1 }}
        >
          <IoMenu size={28} />
        </motion.button>
      </motion.nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              className="mobile-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              onClick={() => setMobileMenuOpen(false)}
            />

            <motion.div
              className="mobile-menu"
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="exit"
            >
              <div className="mobile-header">
                <motion.img
                  src={logo}
                  alt="Vypex AI"
                  className="logo"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                />

                <motion.button
                  variants={closeButtonVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  whileTap={{ scale: 0.9, rotate: 180 }}
                  onClick={() => setMobileMenuOpen(false)}
                  className="close-button"
                >
                  <IoCloseCircleOutline size={36} className="navbar-close" />
                </motion.button>
              </div>

              <motion.div
                className="mobile-links"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, staggerChildren: 0.08 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="mobile-link-item"
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.08 }}
                  >
                    <a
                      href={item.href || "#"}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                    {item.submenu && (
                      <motion.div
                        className="mobile-submenu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        transition={{ delay: 0.7 + index * 0.1 }}
                      >
                        {item.submenu.map((sub) => (
                          <motion.a
                            key={sub}
                            href={`#${sub.toLowerCase().replace(/ /g, "")}`}
                            onClick={() => setMobileMenuOpen(false)}
                            whileHover={{ x: 10, color: "#00d4ff" }}
                          >
                            {sub}
                          </motion.a>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}

                <motion.div
                  className="mobile-actions"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <motion.button
                    className={buttonClass}
                    onClick={handleMainButtonClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {buttonText}
                  </motion.button>
                </motion.div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
