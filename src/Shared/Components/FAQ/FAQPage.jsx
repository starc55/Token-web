import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqData } from "./faqData";
import SectionTitle from "../Title/SectionTitle";

const styles = {
  pageContainer: {
    maxWidth: "900px",
    margin: "50px auto",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },
  faqItem: {
    marginBottom: "15px",
    padding: "15px 20px",
    backgroundColor: "transparent",
    color: "white",
    borderRadius: "16px",
    cursor: "pointer",
    boxShadow: "inset 0 15px 55px -15px #FFF3FF0C",
    overflow: "hidden",
  },
  faqItemHeader: {
    color: "white",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon: {
    fontSize: "28px",
    fontWeight: "700",
    marginLeft: "10px",
    transition: "transform 0.4s ease",
  },
  question: {
    fontSize: "18px",
    fontWeight: "700",
    color: "#fff",
  },
  answer: {
    marginTop: "16px",
    fontSize: "16px",
    color: "#fff",
    lineHeight: "1.6",
    opacity: "0.7",
  },
};

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={styles.pageContainer}>
      {/* Sarlavha animatsiyasi */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <SectionTitle title="Your Questions," strong="Answered" />
      </motion.div>

      {/* FAQ elementlari */}
      {faqData.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <motion.div
            key={index}
            layout
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
            style={styles.faqItem}
            whileHover={{
              boxShadow: "inset 0 15px 65px -15px #FFF3FF1A",
              scale: 1.015,
            }}
            onClick={() => toggleAnswer(index)}
          >
            {/* Savol qismi */}
            <div style={styles.faqItemHeader}>
              <motion.div style={styles.question}>{item.question}</motion.div>

              {/* + / × ikonka animatsiyasi */}
              <motion.div
                style={styles.icon}
                animate={{ rotate: isActive ? 45 : 0 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                {isActive ? "×" : "+"}
              </motion.div>
            </div>

            {/* Javob animatsiyasi (AnimatePresence bilan) */}
            <AnimatePresence initial={false}>
              {isActive && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{
                    height: { duration: 0.4, ease: "easeInOut" },
                    opacity: { duration: 0.3 },
                  }}
                  style={{ overflow: "hidden" }}
                >
                  <div style={styles.answer}>{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
