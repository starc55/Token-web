import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../../Shared/Components/Title/SectionTitle";
import sher from "../../assets/images/sher.png";
import cer from "../../assets/images/cer.png";
import { RxArrowTopRight } from "react-icons/rx";

const AuditPage = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 80 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  const buttonVariants = {
    hover: { scale: 1.05, x: 8 },
    tap: { scale: 0.95 },
  };

  return (
    <div className="audit-page">
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <SectionTitle
          title="Audited for"
          strong="Resilience"
          subtitle="Lorem ipsum nulla vestibulum imperdiet viverra habitant ultrices ac nisl sed varius"
        />
      </motion.div>

      <div className="audit-card-container">
        {[
          { img: sher, title: "Certik Security Audit" },
          { img: cer, title: "Certik Security Audit" },
        ].map((audit, index) => (
          <motion.div
            key={index}
            className={`audit-card${index + 1}`}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={cardVariants}
            whileHover={{ y: -12, transition: { duration: 0.4 } }}
          >
            <motion.div
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
              style={{ borderRadius: "16px", overflow: "hidden" }}
            >
              <img src={audit.img} alt={audit.title} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.5 + index * 0.3 }}
            >
              {audit.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.3 }}
            >
              We have been audited by Certik to enhance our smart contract
              security, ensuring Ozak AI is protected by Certik’s world class
              security.
            </motion.p>

            <motion.div
              className="audit-button"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + index * 0.3 }}
            >
              <button>Completed</button>
              <RxArrowTopRight className="audit-icon" />
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AuditPage;
