import SearchImg from "../../../assets/images/Searchimg.png";

export const posts = [
  {
    id: 1,
    title: "Revolutionary AI Model Achieves Human-Level Reasoning",
    desc: "New breakthrough in large language models enables contextual understanding beyond pattern matching.",
    date: "December 04, 2025",
    company: "xAI Research",
    img: SearchImg,
    tag: "research",
  },
  {
    id: 2,
    title: "Grok-4 Now Available to Premium+ Users",
    desc: "The most powerful Grok yet with enhanced reasoning, code generation, and real-time knowledge.",
    date: "December 01, 2025",
    company: "xAI",
    img: SearchImg,
    tag: "announcement",
  },
  {
    id: 3,
    title: "Understanding the Universe: New Paper on Cosmic Truth-Seeking",
    desc: "Exploring fundamental questions with maximally truthful AI systems.",
    date: "November 28, 2025",
    company: "xAI Labs",
    img: SearchImg,
    tag: "research",
  },
  // Qo'shimcha postlar...
  ...Array.from({ length: 11 }, (_, i) => ({
    id: i + 4,
    title: "Advanced Techniques in Neural Network Optimization",
    desc: "Lorem ipsum nisi quis risus ullamcorper nisi eu lobortis nunc sollicitudin viverra semper ut netus.",
    date: "November 20, 2025",
    company: "xAI",
    img: SearchImg,
    tag: i % 3 === 0 ? "announcement" : "research",
  })),
];
