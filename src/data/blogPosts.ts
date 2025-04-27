
import { BlogPost } from '../components/BlogCard';

export const blogPosts: BlogPost[] = [
  {
    id: "ai-revolutionizing-healthcare",
    title: "AI is Revolutionizing Healthcare: Here's How",
    excerpt: "Artificial intelligence is transforming medical diagnoses, treatment plans, and patient care. Learn how cutting-edge AI systems are saving lives and reducing healthcare costs.",
    category: "AI",
    date: "Apr 24, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Alex Johnson",
      avatar: "https://i.pravatar.cc/150?img=11"
    },
  },
  {
    id: "quantum-computing-breakthrough",
    title: "Major Quantum Computing Breakthrough Could Transform Industries",
    excerpt: "Scientists have achieved quantum supremacy with a new 1000-qubit processor. This milestone could revolutionize cryptography, drug discovery, and complex system modeling.",
    category: "Quantum",
    date: "Apr 22, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Samantha Wu",
      avatar: "https://i.pravatar.cc/150?img=20"
    },
  },
  {
    id: "web3-social-networks",
    title: "Web3 Social Networks: The Future of Digital Communities",
    excerpt: "Decentralized social platforms are challenging traditional networks with user-owned data, token incentives, and community governance. Are they the future of online interaction?",
    category: "Web3",
    date: "Apr 20, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80",
    author: {
      name: "Malik Johnson",
      avatar: "https://i.pravatar.cc/150?img=32"
    },
  },
  {
    id: "augmented-reality-workplace",
    title: "How Augmented Reality is Reshaping the Modern Workplace",
    excerpt: "From remote collaboration to immersive training, AR is transforming how we work. Discover the companies pioneering this technology and its impact on productivity.",
    category: "AR/VR",
    date: "Apr 18, 2025",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1478432780021-b8d273730d8c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Priya Sharma",
      avatar: "https://i.pravatar.cc/150?img=25"
    },
  },
  {
    id: "green-tech-innovations",
    title: "Green Tech Innovations Addressing Climate Change",
    excerpt: "From carbon capture breakthroughs to renewable energy solutions, tech companies are leading the charge against climate change with innovative approaches.",
    category: "Green Tech",
    date: "Apr 15, 2025",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Carlos Rodriguez",
      avatar: "https://i.pravatar.cc/150?img=12"
    },
  },
  {
    id: "cybersecurity-threats-2025",
    title: "The Biggest Cybersecurity Threats of 2025",
    excerpt: "As technology evolves, so do cyber threats. From AI-powered attacks to quantum encryption breaking, here are the security challenges businesses and individuals face this year.",
    category: "Cybersecurity",
    date: "Apr 12, 2025",
    readTime: "9 min read",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Emma Chen",
      avatar: "https://i.pravatar.cc/150?img=23"
    },
  },
  {
    id: "startup-funding-trends",
    title: "Tech Startup Funding Trends to Watch in 2025",
    excerpt: "From angel investing democratization to specialized micro VCs, the funding landscape is evolving. Learn what founders need to know to secure investment in today's market.",
    category: "Startups",
    date: "Apr 10, 2025",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    author: {
      name: "Daniel Park",
      avatar: "https://i.pravatar.cc/150?img=15"
    },
  },
  {
    id: "homomorphic-encryption",
    title: "Homomorphic Encryption: Computing on Encrypted Data",
    excerpt: "This groundbreaking technology allows computation on encrypted data without decryption. We explore its applications in healthcare, finance, and secure cloud computing.",
    category: "Privacy",
    date: "Apr 8, 2025",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1034&q=80",
    author: {
      name: "Sophia Martinez",
      avatar: "https://i.pravatar.cc/150?img=27"
    },
  }
];

export const categories = [
  "All",
  "AI",
  "Web3",
  "Startups",
  "Cybersecurity",
  "AR/VR",
  "Green Tech",
  "Privacy",
  "Quantum"
];

export const featuredPost = blogPosts[0];
