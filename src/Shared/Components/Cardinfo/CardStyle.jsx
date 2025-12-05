import React, { useState } from "react";
import { cardData } from "./CardData";
import "../../../assets/styles/CardStyle.css";
import SectionTitle from "../Title/SectionTitle";
import { motion, AnimatePresence } from "framer-motion";

function CardStyle() {
  const [activeGroup, setActiveGroup] = useState("all");

  const handleGroupChange = (group) => {
    setActiveGroup(group);
  };

  const filteredCards =
    activeGroup === "all"
      ? cardData
      : cardData.filter((card) => card.group === activeGroup);

  // Kartalar uchun animatsiya variantlari
  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.7,
        ease: "easeOut",
      },
    }),
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -40,
      transition: { duration: 0.4 },
    },
  };

  // Tugmalar hover effekti
  const buttonVariants = {
    hover: { scale: 1.08, boxShadow: "0 0 25px rgba(0, 212, 255, 0.4)" },
    tap: { scale: 0.95 },
  };

  return (
    <div className="app">
      {/* Section Title – Motion bilan */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
      >
        <SectionTitle title="Fast & Scalable" strong="Infrastructure" />
      </motion.div>

      {/* FILTER TUGMALAR – PREMIUM HOVER */}
      <div className="button-group">
        {["all", "AI", "Signals", "Capital"].map((group) => (
          <motion.button
            key={group}
            onClick={() => handleGroupChange(group)}
            className={activeGroup === group ? "active" : ""}
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay:
                group === "all"
                  ? 0.1
                  : 0.1 + ["AI", "Signals", "Capital"].indexOf(group) * 0.1,
            }}
          >
            <span className="button-group-text">
              {group === "all"
                ? "All"
                : group === "AI"
                ? "For Individuals"
                : group === "Signals"
                ? "For Businesses"
                : "DePin"}
            </span>
          </motion.button>
        ))}
      </div>

      <motion.div className="card1-container" layout>
        <AnimatePresence mode="popLayout">
          {filteredCards.map((card, index) => (
            <motion.div
              key={card.id || index}
              className="card1"
              custom={index}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              layout
              whileHover={{
                y: -12,
                scale: 1.01,
                boxShadow: "0 25px 50px rgba(0, 212, 255, 0.25)",
                transition: { duration: 0.3 },
              }}
            >
              <motion.img
                src={card.imageUrl}
                alt={card.title}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.4 }}
              />
              <h2 className="title-h2">{card.title}</h2>
              <p className="title-p">{card.content}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default CardStyle;
