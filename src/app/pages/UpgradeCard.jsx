import React from "react";
import "./page.css";
import card1 from "../../assets/images/card1.png";
import coin from "../../assets/images/coin-right.png";
import card3 from "../../assets/images/card3.png";
import view from "../../assets/images/view.png";
import solana from "../../assets/images/solana.svg";
import { BiSolidRightTopArrowCircle } from "react-icons/bi";
import SectionTitle from "../../Shared/Components/Title/SectionTitle";
import { motion } from "framer-motion";

const AnimatedLineChart = () => {
  return (
    <svg
      width="100%"
      height="120"
      viewBox="0 0 320 120"
      preserveAspectRatio="xMidYMid meet"
      className="line-chart-svg"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9AFF26" stopOpacity="1" />
          <stop offset="50%" stopColor="#74D550" stopOpacity="1" />
          <stop offset="100%" stopColor="#9AFF26" stopOpacity="1" />
        </linearGradient>

        <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#9AFF26" stopOpacity="0.25" />
          <stop offset="70%" stopColor="#9AFF26" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#9AFF26" stopOpacity="0" />
        </linearGradient>

        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <path
        d="M0,100 Q40,55 80,65 T160,45 Q240,25 320,55 L320,120 L0,120 Z"
        fill="url(#areaGradient)"
        opacity="0.6"
      >
        <animate
          attributeName="opacity"
          values="0;0.6"
          dur="0.8s"
          fill="freeze"
        />
      </path>
      <path
        d="M0,100 Q40,55 80,65 T160,45 Q240,25 320,55"
        fill="none"
        stroke="url(#lineGradient)"
        strokeWidth="4"
        strokeLinecap="round"
        filter="url(#glow)"
        opacity="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          from="600"
          to="0"
          dur="1.8s"
          fill="freeze"
        />
        <animate
          attributeName="opacity"
          values="0;1"
          dur="0.6s"
          begin="0.2s"
          fill="freeze"
        />
      </path>
      <path
        d="M0,100 Q40,55 80,65 T160,45 Q240,25 320,55"
        fill="none"
        stroke="#9AFF26"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0.8;0.8"
          dur="2s"
          begin="1s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};

const AnimatedPieChart = () => {
  // Umumiy aylana uzunligi: 2 * π * 94 ≈ 590
  const circumference = 590;

  const gap = 38;
  const totalGaps = gap * 4;

  const segments = [
    { color: "#74D550", percent: 22 },
    { color: "#FFC700", percent: 20 },
    { color: "#627EEA", percent: 18 },
    { color: "#888888", percent: 20 },
    { color: "#F7931A", percent: 10 },
  ];

  const dashArray = segments.map((seg) => {
    const length = Math.round(
      (seg.percent / 100) * (circumference - totalGaps)
    );
    return `${length} ${circumference - length}`;
  });

  let currentAngle = 0;
  const rotates = segments.map((seg, i) => {
    if (i === 0) {
      currentAngle = -90;
    } else {
      const prevLength = Math.round(
        (segments[i - 1].percent / 100) * (circumference - totalGaps)
      );
      currentAngle +=
        (prevLength / circumference) * 360 + (gap / circumference) * 360;
    }
    return currentAngle;
  });
  return (
    <div className="donut-perfect">
      <svg width="200" height="220" viewBox="0 0 240 240">
        {segments.map((seg, i) => (
          <circle
            key={i}
            cx="120"
            cy="120"
            r="94"
            fill="none"
            stroke={seg.color}
            strokeWidth="30"
            strokeDasharray={dashArray[i]}
            strokeDashoffset={circumference}
            strokeLinecap="round"
            transform={`rotate(${rotates[i]} 120 120)`}
            className="seg"
            style={{ animationDelay: `${0.3 + i * 0.3}s` }}
          />
        ))}
      </svg>

      <div className="donut-center">
        <div className="title">Portfolio value</div>
        <div className="amount">$14,521.30</div>
        <div className="profit">+53.15% in 24 hr</div>
      </div>
    </div>
  );
};

const UpgradeCards = () => {
  return (
    <section className="upgrade-cards-section">
      <SectionTitle
        title="Upgrade your tradings with"
        strong="Predictive AI"
        subtitle="Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac nisl sed varius"
      />

      <motion.div
        className="cards-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.25,
              delayChildren: 0.3,
            },
          },
        }}
      >
        <motion.div
          className="upgrade-card"
          variants={{
            hidden: { opacity: 0, y: 80, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <motion.div
            className="card-image"
            whileHover={{ scale: 1.15 }}
            transition={{ duration: 0.4 }}
          >
            <img src={card1} alt="AI Powered Predictive Analytics" />
          </motion.div>
          <h3>AI Powered Predictive Analytics</h3>
          <p>
            Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
            nisl sed varius
          </p>
        </motion.div>

        <motion.div
          className="upgrade-card"
          variants={{
            hidden: { opacity: 0, y: 100, scale: 0.85 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          transition={{ type: "spring", stiffness: 400, damping: 25 }}
          whileHover={{ scale: 1.1, y: -20 }}
        >
          <motion.div
            className="card-image middle"
            whileHover={{ scale: 1.25, rotate: 15 }}
          >
            <img src={coin} alt="Financial Market Modelling" />
          </motion.div>
          <h3>Financial Market Modelling</h3>
          <p>
            Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
            nisl sed varius
          </p>
        </motion.div>

        <motion.div
          className="upgrade-card"
          variants={{
            hidden: { opacity: 0, y: 80, scale: 0.9 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          whileHover={{ y: -12, boxShadow: "0 30px 60px rgba(0,0,0,0.5)" }}
        >
          <motion.div className="card-image" whileHover={{ scale: 1.15 }}>
            <img src={card3} alt="AI Powered Predictive Analytics" />
          </motion.div>
          <h3>AI Powered Predictive Analytics</h3>
          <p>
            Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac
            nisl sed varius
          </p>
        </motion.div>
      </motion.div>

      <motion.div
        className="upgrade-cta"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <motion.img
          src={view}
          alt="View"
          className="view-img"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        <motion.div
          className="upgrade-cta_card1"
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.1,
            type: "spring",
            stiffness: 200,
          }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px rgba(154, 255, 38, 0.3)",
          }}
        >
          <div className="card1-header">
            <img src={solana} alt="Solana" className="solana-logo" />
            <div>
              <h4>Solana Portfolio</h4>
              <span className="symbol">SOL</span>
            </div>
          </div>
          <div className="chart-container">
            <AnimatedLineChart />
          </div>
          <div className="card1-footer">
            <span className="price">$6,633.05</span>
            <span className="profit">
              +3.75% <BiSolidRightTopArrowCircle size={17} />
            </span>
          </div>
        </motion.div>

        <motion.div
          className="upgrade-cta_card2"
          initial={{ opacity: 0, x: 100, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, x: 0, scale: 1, rotate: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1.2,
            delay: 0.2,
            type: "spring",
            stiffness: 180,
          }}
          whileHover={{ scale: 1.06, rotate: 5 }}
        >
          <AnimatedPieChart />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default UpgradeCards;
