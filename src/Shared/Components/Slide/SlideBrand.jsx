import React from "react";
import MultiRowLogoSlider from "./AutoMarqueeSlider.jsx";
import brand1 from "../../../assets/icons/BNBCHain.png";
import brand2 from "../../../assets/icons/CHatGPT.png";
import brand3 from "../../../assets/icons/Gemini.png";
import brand4 from "../../../assets/icons/Ethereum.png";
import brand5 from "../../../assets/icons/AppKit.png";
import brand6 from "../../../assets/icons/Foundry.png";
import brand7 from "../../../assets/icons/Prometheus.png";
import brand8 from "../../../assets/icons/Grafana.png";
import brand9 from "../../../assets/icons/Metamask.png";
import brand10 from "../../../assets/icons/Ponder.png";
import brand11 from "../../../assets/icons/Sloidity.png";
import brand12 from "../../../assets/icons/React.png";
import brand13 from "../../../assets/icons/Next.png";
import brand14 from "../../../assets/icons/Claude.png";
import brand15 from "../../../assets/icons/Docusaurus.png";
import brand16 from "../../../assets/icons/Cloudflare.png";
import brand17 from "../../../assets/icons/Cloud.png";
import brand18 from "../../../assets/icons/Viem.png";
import "./slide.css";
import { motion } from "framer-motion";

const brands = [
  { id: 1, img: brand1, label: "BNB Chain" },
  { id: 2, img: brand2, label: "ChatGPT" },
  { id: 3, img: brand3, label: "Google Gemini" },
  { id: 4, img: brand4, label: "Ethereum" },
  { id: 5, img: brand5, label: "AppKit" },
  { id: 6, img: brand6, label: "Foundry" },
  { id: 7, img: brand7, label: "Prometheus" },
  { id: 8, img: brand8, label: "Grafana" },
  { id: 9, img: brand9, label: "Metamask" },
  { id: 10, img: brand10, label: "Ponder" },
  { id: 11, img: brand11, label: "Solidity" },
  { id: 12, img: brand12, label: "React" },
  { id: 13, img: brand13, label: "Next.js" },
  { id: 14, img: brand14, label: "Claude" },
  { id: 15, img: brand15, label: "Docusaurus" },
  { id: 16, img: brand16, label: "Cloudflare" },
  { id: 17, img: brand17, label: "Google Cloud" },
  { id: 18, img: brand18, label: "Viem" },
];

export default function SlideBrand({ title, subtitle }) {
  return (
    <motion.div
      style={{ marginBottom: "80px" }}
      className="slide-container"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="section-title-wrapper"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <motion.h1
          className="section-title"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {title}
        </motion.h1>

        <motion.span
          className="section-span"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.5,
            type: "spring",
            stiffness: 300,
          }}
        >
          {subtitle}
        </motion.span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
      >
        <MultiRowLogoSlider items={brands} speed={40} />
      </motion.div>
    </motion.div>
  );
}
