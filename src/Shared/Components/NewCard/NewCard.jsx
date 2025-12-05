// ResearchPage.jsx
import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { posts } from "../NewCard/post";
import "./newcard.css";

export default function ResearchPage() {
  const [tab, setTab] = useState("all");
  const [search, setSearch] = useState("");
  const [showAll, setShowAll] = useState(false); // Yangi state

  const filteredPosts = useMemo(() => {
    return posts
      .filter((p) => tab === "all" || p.tag === tab)
      .filter(
        (p) =>
          p.title.toLowerCase().includes(search.toLowerCase()) ||
          p.desc.toLowerCase().includes(search.toLowerCase()) ||
          p.company.toLowerCase().includes(search.toLowerCase())
      );
  }, [tab, search]);

  // Mobilda dastlab 4 ta ko‘rsatish
  const isMobile = window.innerWidth <= 768;
  const visiblePosts = showAll || !isMobile ? filteredPosts : filteredPosts.slice(0, 4);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  return (
    <div className="research-container">
      <div className="header">
        <div className="tabs">
          {["all", "research", "announcement"].map((t) => (
            <button
              key={t}
              onClick={() => {
                setTab(t);
                setShowAll(false); // Tab o‘zgarganda qayta yig‘ish
              }}
              className={`btn-nav ${tab === t ? "active" : ""}`}
            >
              {t === "all" ? "All News" : t.charAt(0).toUpperCase() + t.slice(1)}
            </button>
          ))}
        </div>

        <div className="search-wrapper">
          <input
            type="text"
            placeholder="Search posts, companies..."
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setShowAll(false);
            }}
          />
        </div>
      </div>

      <motion.div
        className="grid"
        variants={container}
        initial="hidden"
        animate="show"
      >
        <AnimatePresence mode="popLayout">
          {visiblePosts.map((post) => (
            <motion.div
              key={post.id}
              layout
              variants={item}
              initial="hidden"
              animate="show"
              exit="exit"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="card_new"
            >
              <img src={post.img} alt={post.title} />
              <div className="card-content">
                <div className="tag-badge">{post.tag}</div>
                <h3>{post.title}</h3>
                <p>{post.desc}</p>
                <div className="card-meta">
                  <img src={post.img} alt={post.company} />
                  <span>{post.company} • {post.date}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {/* No results */}
        {filteredPosts.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              gridColumn: "1 / -1",
              textAlign: "center",
              fontSize: "18px",
              color: "rgba(255,255,255,0.5)",
              marginTop: "60px",
            }}
          >
            No posts found matching your search.
          </motion.p>
        )}
      </motion.div>

      {/* Show More / Show Less tugmasi (faqat mobilda va 4 tadan ko‘p bo‘lsa) */}
      {isMobile && filteredPosts.length > 4 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            style={{
              background: showAll ? "transparent" : "#333842",
              color: "white",
              border: "1px solid #555",
              padding: "14px 32px",
              borderRadius: "30px",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
              boxShadow: showAll ? "none" : "0 8px 25px rgba(0,0,0,0.3)",
              transition: "all 0.3s ease",
            }}
          >
            {showAll ? "Show Less" : `Show More (${filteredPosts.length - 4} more)`}
          </motion.button>
        </motion.div>
      )}
    </div>
  );
}