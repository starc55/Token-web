import React from "react";
import SectionTitle from "../Title/SectionTitle";
import "./Herofooter.css";
import coin1 from "../../../assets/images/herofootercoin1.svg";
import coin2 from "../../../assets/images/herofootercoin2.svg";
import { motion } from "framer-motion";

const Herofooter = () => {
  return (
    <motion.section
      className="hero-footer"
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Asosiy karta */}
      <motion.div
        className="hero-footer-card"
        initial={{ scale: 0.95 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.3 }}
      >
        {/* Chap coin */}
        <motion.img
          src={coin1}
          alt="Decorative coin"
          className="hero-footer-icon icon1"
          initial={{ opacity: 0, x: -100, rotate: -30 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
        />

        {/* Sarlavha */}
        <SectionTitle
          title="Join to the Legendary"
          strong="$VYPEX Movements"
          subtitle="Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac nisl sed varius"
        />

        {/* Tugmalar */}
        <div className="hero-footer-btn">
          <motion.button
            className="waitlist-btn"
            whileHover={{ scale: 1.08, boxShadow: "0 0 30px rgba(0,212,255,0.6)" }}
            whileTap={{ scale: 0.95 }}
          >
            <p className="waitlist-text">Join Waitlist</p>
          </motion.button>

          <motion.button
            className="hero-footer_btn"
            whileHover={{
              scale: 1.08,
              background: "rgba(0, 212, 255, 0.1)",
              borderColor: "#00d4ff",
              boxShadow: "0 0 25px rgba(0,212,255,0.4)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            Refer Now
          </motion.button>
        </div>

        {/* O‘ng coin */}
        <motion.img
          src={coin2}
          alt="Decorative coin"
          className="hero-footer-icon icon2"
          initial={{ opacity: 0, x: 100, rotate: 30 }}
          whileInView={{ opacity: 1, x: 0, rotate: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.7 }}
        />
      </motion.div>
    </motion.section>
  );
};

export default Herofooter;