import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../Shared/Components/Title/SectionTitle";
import card1 from "../../assets/images/secure.png";
import rob from "../../assets/images/rob.png";
import card3 from "../../assets/icons/Capital.png";

const UtilsPage = () => {
  const buttonVariants = {
    hover: { scale: 1.08, boxShadow: "0px 0px 20px rgba(255,255,255,0.3)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="utils-page">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle
          title="Vypex"
          strong="Utility"
          subtitle="Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac nisl sed varius"
        />
      </motion.div>

      <motion.div className="cards-container">
        {[
          {
            img: card1,
            title: "AI Powered Predictive Analytics",
            alt: "AI Analytics",
          },
          {
            img: rob,
            title: "Financial Market Modelling",
            alt: "Market Modelling",
            middle: true,
          },
          { img: card3, title: "Capital Growth Engine", alt: "Capital Growth" },
        ].map((card, index) => (
          <motion.div
            key={index}
            className="upgrade-card"
            custom={index}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 80, scale: 0.9 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className={`card-image ${card.middle ? "middle" : ""}`}>
              <motion.img
                src={card.img}
                alt={card.alt}
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
                style={{ borderRadius: "12px" }}
              />
            </div>
            <motion.h3
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + index * 0.2 }}
            >
              {card.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 + index * 0.2 }}
            >
              Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices
              ac nisl sed varius
            </motion.p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        className="utils-btn"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.8 }}
        viewport={{ once: true }}
      >
        {[
          "Data Vault Access",
          "Portfolio Tracker",
          "Risk Analyzer",
          "Smart Alerts",
          "Tax Optimizer",
        ].map((text, i) => (
          <motion.button
            key={i}
            className="util-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 + 0.7 }}
            viewport={{ once: true }}
          >
            {text}
          </motion.button>
        ))}
      </motion.div>
    </div>
  );
};

export default UtilsPage;
