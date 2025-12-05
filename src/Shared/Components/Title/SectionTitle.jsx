import React from "react";
import "./section.css";
import { motion } from "framer-motion";

const SectionTitle = ({ title, subtitle, strong, center = true }) => {
  return (
    <motion.div
      className={`section-title-wrapper ${center ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.h2
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, delay: 0.2 }}
      >
        {title}{" "}
        <motion.span
          className="section-span"
          initial={{ opacity: 0, backgroundPosition: "0% 50%" }}
          whileInView={{ opacity: 1, backgroundPosition: "100% 50%" }}
          viewport={{ once: true }}
          transition={{
            duration: 2,
            delay: 0.5,
            ease: "easeInOut",
            backgroundPosition: {
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
        >
          {strong}
        </motion.span>
      </motion.h2>

      {subtitle && (
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {subtitle}
        </motion.p>
      )}

      <motion.div
        className="title-underline"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          delay: 1,
          ease: "easeOut",
        }}
      />
    </motion.div>
  );
};

export default SectionTitle;
