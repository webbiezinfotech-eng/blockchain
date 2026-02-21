import { useEffect, useRef, useState } from "react";
import  ServiceCard  from "../components/common/ServiceCard";
import ContactForm from "../components/common/ContactForm";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { sendContactEmail } from "../utils/emailService";

// Hero Images
import lightHeroImage from "../assets/home_images/hero_light.png";

// Service Section Images (from home_images)
import homeSec2_1 from "../assets/home_images/blockchain.png";
import homeSec2_2 from "../assets/home_images/ai.png";
import homeSec2_3 from "../assets/home_images/smartcontract.png";
import homeSec2_4 from "../assets/home_images/smartcontractaudit.png";
import homeSec2_5 from "../assets/home_images/tokendev.png";
import homeSec2_6 from "../assets/home_images/cryptoexchangedev.png";
import homeSec2_7 from "../assets/home_images/defidev.png";
import homeSec2_8 from "../assets/home_images/nftmarketplacedev.png";
import homeSec2_9 from "../assets/home_images/dappdev.png";
import homeSec2_10 from "../assets/home_images/walletdev.png";

// Why Trust Section Images (from home_images)
import homeSec3_1 from "../assets/home_images/blockchain+ai.png";
import homeSec3_2 from "../assets/home_images/enterprise-grade.png";
import homeSec3_3 from "../assets/home_images/transparent-collab.png";
import homeSec3_4 from "../assets/home_images/scalable-infras.png";
import homeSec3_5 from "../assets/home_images/launch-ready.png";
import homeSec3_6 from "../assets/home_images/multi-blockchain.png";

// Tech Stack Section Images (from home_images)
import frontendCap from "../assets/home_images/frontend-capability.png";
import smartContractImg from "../assets/home_images/smart-contract.png";
import airdropImg from "../assets/home_images/airdrop.png";
import layer2Img from "../assets/home_images/layer2.png";
import blockchainApiImg from "../assets/home_images/blockchain-api.png";
import web3Img from "../assets/home_images/web3-growth.png";
import walletImg from "../assets/home_images/wallets.png";
import backendImg from "../assets/home_images/backends.png";

// Industry Section Icons (from home_images/icons)
import bitcoinIcon from "../assets/home_images/icons/intelligence+ai.gif";
import protectionIcon from "../assets/home_images/icons/multi-layer.gif";
import eyeSettingIcon from "../assets/home_images/icons/transparent.gif";
import productivityIcon from "../assets/home_images/icons/high-performance.gif";
import gameIcon from "../assets/home_images/icons/multi-chain.gif";
import uploadIcon from "../assets/home_images/icons/end-support.gif";

import readyToBuildImg from "../assets/home_images/ready to build.png";

// what our client say images (from home_images/testimonials)
import profile1 from "../assets/home_images/profile1.jpg";
import profile2 from "../assets/home_images/profile2.jpg";
import profile3 from "../assets/home_images/profile3.jpg";

// Hero Images Object
const heroImages = {
  light: lightHeroImage,
};

const Home = () => {
  const [isServicesVisible, setIsServicesVisible] = useState(false);
  const [isTrustVisible, setIsTrustVisible] = useState(false);
  const [isIndustriesVisible, setIsIndustriesVisible] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentWorkSlide, setCurrentWorkSlide] = useState(0);
  const [selectedTechStack, setSelectedTechStack] = useState(0);
  const servicesRef = useRef(null);
  const trustRef = useRef(null);
  const industriesRef = useRef(null);
  const carouselRef = useRef(null);
  const workCarouselRef = useRef(null);

  // Form state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    whatsappNumber: "",
    telegramId: "",
    country: "us",
    budget: "Still Evaluating",
    projectDescription: "",
    privacyPolicy: false,
    recaptcha: false,
  });

  const [errors, setErrors] = useState({});
  const [whatsappCountryCode, setWhatsappCountryCode] = useState("+91");
  const [showWhatsappCountryDropdown, setShowWhatsappCountryDropdown] =
    useState(false);
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [showBudgetDropdown, setShowBudgetDropdown] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateWhatsApp = (number) => {
    const cleaned = number.replace(/\D/g, "");
    return cleaned.length === 10;
  };

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }

    // Real-time validation for email
    if (field === "email" && value && !validateEmail(value)) {
      setErrors((prev) => ({
        ...prev,
        email: "Please enter a valid email address",
      }));
    } else if (field === "email" && validateEmail(value)) {
      setErrors((prev) => ({ ...prev, email: "" }));
    }

    // Real-time validation for WhatsApp
    if (field === "whatsappNumber") {
      const cleaned = value.replace(/\D/g, "");
      if (cleaned && cleaned.length !== 10) {
        setErrors((prev) => ({
          ...prev,
          whatsappNumber: "WhatsApp number must be 10 digits",
        }));
      } else if (cleaned.length === 10) {
        setErrors((prev) => ({ ...prev, whatsappNumber: "" }));
      }
    }
  };

  // Format WhatsApp number with spaces
  const formatWhatsAppNumber = (value) => {
    const cleaned = value.replace(/\D/g, "").slice(0, 10);
    if (cleaned.length <= 2) return cleaned;
    if (cleaned.length <= 4)
      return `${cleaned.slice(0, 2)} ${cleaned.slice(2)}`;
    if (cleaned.length <= 6)
      return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4)}`;
    if (cleaned.length <= 8)
      return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6)}`;
    return `${cleaned.slice(0, 2)} ${cleaned.slice(2, 4)} ${cleaned.slice(4, 6)} ${cleaned.slice(6, 8)} ${cleaned.slice(8)}`;
  };

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown-container")) {
        setShowWhatsappCountryDropdown(false);
        setShowCountryDropdown(false);
        setShowBudgetDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim())
      newErrors.firstName = "First name is required";
    // if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.whatsappNumber.trim()) {
      newErrors.whatsappNumber = "WhatsApp number is required";
    } else if (!validateWhatsApp(formData.whatsappNumber)) {
      newErrors.whatsappNumber = "WhatsApp number must be 10 digits";
    }
    // Note: privacyPolicy and recaptcha fields don't exist in form, so validation removed

    setErrors(newErrors);

    // Show errors if any
    // if (Object.keys(newErrors).length > 0) {
    //   alert('Please fill all required fields correctly.');
    //   return;
    // }

    if (Object.keys(newErrors).length === 0) {
      setIsSubmitting(true);
      setSubmitMessage("");

      try {
        // Send email notification
        const result = await sendContactEmail(formData, "home");

        if (result.success) {
          setSubmitMessage(
            "Thank you! Your message has been sent successfully.",
          );
          // Show success alert
          alert(
            "✅ Form Submitted Successfully!\n\nThank you for contacting us. We will get back to you soon.",
          );
          // Reset form
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            whatsappNumber: "",
            telegramId: "",
            country: "us",
            budget: "Still Evaluating",
            projectDescription: "",
            privacyPolicy: false,
            recaptcha: false,
          });
        } else {
          setSubmitMessage(
            result.message || "Failed to send message. Please try again.",
          );
          alert("❌ Failed to send message. Please try again.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        setSubmitMessage("An error occurred. Please try again later.");
        alert("❌ An error occurred. Please try again later.");
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  const countries = [
    { code: "us", name: "United States", flag: "🇺🇸" },
    { code: "in", name: "India", flag: "🇮🇳" },
    { code: "uk", name: "United Kingdom", flag: "🇬🇧" },
    { code: "ca", name: "Canada", flag: "🇨🇦" },
    { code: "au", name: "Australia", flag: "🇦🇺" },
  ];

  const budgets = [
    "Still Evaluating",
    "Under $10,000",
    "$10,000 - $50,000",
    "$50,000 - $100,000",
    "Over $100,000",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (entry.target === servicesRef.current) {
              setIsServicesVisible(true);
            }
            if (entry.target === trustRef.current) {
              setIsTrustVisible(true);
            }
            if (entry.target === industriesRef.current) {
              setIsIndustriesVisible(true);
            }
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -50px 0px" },
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    if (trustRef.current) observer.observe(trustRef.current);
    if (industriesRef.current) observer.observe(industriesRef.current);

    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
      if (trustRef.current) observer.unobserve(trustRef.current);
      if (industriesRef.current) observer.unobserve(industriesRef.current);
    };
  }, []);

  const serviceCards = [
    {
      id: 1,
      title: "Blockchain Development",
      description:
        "We design and develop custom blockchain ecosystems tailored to your business model. From private blockchain networks to public-layer integrations, our solutions deliver transparency, automation, and security for modern digital operations.",
      image: homeSec2_1,
    },
    {
      id: 2,
      title: "AI Development",
      description:
        "Supercharge your platform with intelligent automation and advanced AI capabilities. We build AI engines, predictive models, automation bots, and data-driven systems that boost decision-making, efficiency, and user experience.",
      image: homeSec2_2,
    },
    {
      id: 3,
      title: "Smart Contract Development",
      description:
        "We create secure, gas-efficient, and audit-ready smart contracts for DeFi, NFTs, enterprises, and automated workflows. Every contract follows strict industry standards and undergoes multi-layer testing.",
      image: homeSec2_3,
    },
    {
      id: 4,
      title: "Smart Contract Audit",
      description:
        "Ensure your smart contracts are free from vulnerabilities and deployment risks. Our audit service includes automated scans, manual code review, logical testing, and a detailed final audit report with recommendations.",
      image: homeSec2_4,
    },
    {
      id: 5,
      title: "Token Development",
      description:
        "Launch your own cryptocurrency with complete tokenomics and technical execution. Whether you need ERC-20, BEP-20, governance tokens, stablecoins, or advanced RWA-backed models — we build fully compliant and scalable token solutions.",
      image: homeSec2_5,
    },
    {
      id: 6,
      title: "Crypto Exchange Development",
      description:
        "Build a powerful, secure trading platform with features like multi-chain support, wallets, liquidity modules, order matching, admin dashboards, KYC/AML, spot trading, futures, and more. We support centralized, decentralized, and hybrid exchange models.",
      image: homeSec2_6,
    },
    {
      id: 7,
      title: "DeFi Development",
      description:
        "From staking to lending protocols, liquidity farms to IDO launchpads, we develop decentralized finance platforms that deliver transparent, automated, and trustless financial services across multiple blockchains.",
      image: homeSec2_7,
    },
    {
      id: 8,
      title: "NFT Marketplace Development",
      description:
        "Create a high-performance marketplace for buying, selling, and minting digital assets. Our platforms support auctions, royalties, lazy minting, multi-chain integration, storefront customization, and creator analytics.",
      image: homeSec2_8,
    },
    {
      id: 9,
      title: "DApp Development",
      description:
        "We build user-friendly, secure, and scalable decentralized applications across industries. Each DApp is designed for seamless on-chain execution, robust architecture, and a smooth front-end experience.",
      image: homeSec2_9,
    },
    {
      id: 10,
      title: "Wallet Development",
      description:
        "Develop multi-currency, multi-chain crypto wallets with features like private key security, biometric login, portfolio tracking, swap features, and seamless integration with your Web3 platform.",
      image: homeSec2_10,
    },
  ];

  const getCardsPerView = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2; // md
      return 1; // mobile
    }
    return 3;
  };

  const [cardsPerView, setCardsPerView] = useState(getCardsPerView());
  // We advance the carousel by 1 card per click (not by a full "page"),
  // so the max slide index is (totalCards - cardsPerView).
  const maxServiceSlide = Math.max(0, serviceCards.length - cardsPerView);

  useEffect(() => {
    const handleResize = () => {
      const newCardsPerView = getCardsPerView();
      setCardsPerView(newCardsPerView);
      const newMaxServiceSlide = Math.max(
        0,
        serviceCards.length - newCardsPerView,
      );
      // Avoid stale closure by clamping via functional update.
      setCurrentSlide((prev) => Math.min(prev, newMaxServiceSlide));
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // const workCardsPerView = 3;

  const nextSlide = () => {
    setCurrentSlide((prev) => Math.min(prev + 1, maxServiceSlide));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => Math.max(prev - 1, 0));
  };

  const whyTrustCards = [
    {
      id: 1,
      title: "Specialized in Blockchain + AI Combined Solutions",
      description:
        "We uniquely blend decentralized systems with modern AI to create intelligent, next-gen architectures.",
      image: homeSec3_1,
    },
    {
      id: 2,
      title: "Enterprise-Grade Security Standards",
      description:
        "Our development follows industry-approved security protocols, multi-layer audits and best practices — ensuring zero vulnerabilities.",
      image: homeSec3_2,
    },
    {
      id: 3,
      title: "Transparent & Collaborative Development",
      description:
        "From weekly updates to milestone tracking, we maintain complete transparency with clients.",
      image: homeSec3_3,
    },
    {
      id: 4,
      title: "Scalable Infrastructure",
      description:
        "We build solutions that scale effortlessly with user-growth, transaction volume and extended features.",
      image: homeSec3_4,
    },
    {
      id: 5,
      title: "Launch-Ready, Market-Ready Execution",
      description:
        "Whether it's a token, application, or enterprise platform — we make sure it's robust and ready for real-world operations.",
      image: homeSec3_5,
    },
    {
      id: 6,
      title: "Multi-Blockchain Expertise",
      description:
        "Ethereum, BSC, Solana, Polygon, Avalanche, Bitcoin L2, Cosmos, Hyperledger — you name it, we build on it.",
      image: homeSec3_6,
    },
    {
      id: 7,
      title: "Dedicated Post-Launch Support",
      description:
        "Your product doesn't stop at deployment. We provide maintenance, upgrades, version improvements and ongoing assistance.",
      image: homeSec3_6,
    },
  ];

  const workCards = [
    {
      id: 1,
      title: "Decentralized Investment Protocol",
      description:
        "We built a trustless DeFi ecosystem enabling global investors to participate in automated, AI-driven yield strategies — handling millions in TVL.",
    },
    {
      id: 2,
      title: "AI-Powered Fraud Detection System for a Crypto Exchange",
      description:
        "Integrated AI bots that analyze threat patterns, transaction anomalies and malicious behaviors in real-time — reducing fraudulent activity by 90%.",
    },
    {
      id: 3,
      title: "Real-World Asset Tokenization Platform",
      description:
        "Created an RWA token marketplace allowing users to tokenize and trade physical assets — including real estate, art, and commodities.",
    },
    {
      id: 4,
      title: "Enterprise Blockchain Solution",
      description:
        "Developed a comprehensive blockchain infrastructure for enterprise clients, enabling secure transactions, transparent record-keeping, and automated compliance.",
    },
    {
      id: 5,
      title: "NFT Marketplace with Cross-Chain Support",
      description:
        "Built a multi-chain NFT marketplace supporting Ethereum, Polygon, and Solana networks, with seamless cross-chain trading capabilities.",
    },
    // Dummy cards (as requested)
    {
      id: 6,
      title: "Blockchain Gaming Platform",
      description:
        "Launched a play-to-earn gaming ecosystem with NFT assets, in-game marketplaces, and scalable on-chain reward mechanics across multiple networks.",
    },
    {
      id: 7,
      title: "Token Launchpad & Vesting System",
      description:
        "Built a secure IDO launchpad with investor tiers, whitelisting, automated vesting schedules, and analytics dashboards for token launches.",
    },
  ];

  // const maxWorkSlides = Math.max(0, workCards.length - workCardsPerView);

  // const maxWorkSlides = workCards.length - cardsPerView;
  const maxWorkSlides = Math.max(0, workCards.length - cardsPerView);

  // Auto carousel for work cards (based on real card count)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWorkSlide((prev) => (prev >= maxWorkSlides ? 0 : prev + 1));
    }, 3000);
    return () => clearInterval(interval);
  }, [maxWorkSlides]);

  const techStackItems = [
    {
      id: 0,
      name: "Frontend Capabilities",
      title: "Frontend Capabilities",
      description:
        "Delivering sleek, responsive, and high-performance user interfaces for every blockchain application.",
      techStack: [
        "React.js",
        "Next.js",
        "Web3.js",
        "Ethers.js",
        "Tailwind CSS",
      ],
      image: frontendCap,
    },
    {
      id: 1,
      name: "Smart Contract",
      title: "Smart Contract",
      description:
        "User-friendly interfaces designed to interact seamlessly with on-chain smart contract logic. Our frontend solutions enable intuitive contract deployment, interaction, and management with real-time transaction tracking and comprehensive error handling.\n\nWe build interfaces that simplify complex blockchain operations, allowing users to deploy contracts, execute functions, and monitor transactions effortlessly. Our smart contract interfaces support multiple networks, provide detailed gas estimation, and offer seamless integration with popular wallet providers for enhanced user experience and security.",
      techStack: [],
      image: smartContractImg,
    },
    {
      id: 2,
      name: "Airdrop",
      title: "Airdrop",
      description:
        "Frontend systems built to manage automated token/asset distributions across multiple wallets. We create streamlined interfaces for scheduling, tracking, and executing large-scale airdrop campaigns with detailed analytics and recipient management capabilities.\n\nOur airdrop platforms support batch processing, whitelist management, and real-time distribution tracking. Users can easily configure airdrop parameters, monitor campaign progress, and analyze distribution results through intuitive dashboards that provide comprehensive insights into token allocation and recipient engagement metrics.",
      techStack: [],
      image: airdropImg,
    },
    {
      id: 3,
      name: "Layer 2",
      title: "Layer 2",
      description:
        "Optimized UI flows for fast, low-cost transactions on Layer-2 chains. Our interfaces seamlessly integrate with scaling solutions like Polygon, Arbitrum, and Optimism, providing users with instant transaction confirmations and reduced gas fees while maintaining full blockchain security.\n\nWe design user experiences that abstract away the complexity of Layer-2 bridging, enabling smooth asset transfers between mainnet and Layer-2 networks. Our solutions include real-time bridge status monitoring, transaction history tracking, and intuitive fee comparison tools that help users make informed decisions about their blockchain transactions.",
      techStack: [],
      image: layer2Img,
    },
    {
      id: 4,
      name: "Blockchain APIs",
      title: "Blockchain APIs",
      description:
        "Integration-ready frontends powered by secure, scalable API connectivity. We build robust interfaces that connect with multiple blockchain networks through RESTful and GraphQL APIs, enabling real-time data fetching, transaction monitoring, and seamless cross-chain interactions.\n\nOur API-integrated solutions provide comprehensive blockchain data visualization, including transaction histories, token balances, NFT collections, and DeFi protocol interactions. We implement efficient caching strategies, rate limiting, and error handling to ensure reliable data access and optimal performance across various blockchain networks and protocols.",
      techStack: [],
      image: blockchainApiImg,
    },
    {
      id: 5,
      name: "Web3 Growth Tools",
      title: "Web3 Growth Tools",
      description:
        "Interface modules designed to support user onboarding, analytics, and ecosystem expansion. Our comprehensive toolkits include referral systems, staking dashboards, governance interfaces, and engagement tracking to drive user acquisition and retention in decentralized applications.\n\nWe develop custom analytics platforms that track user behavior, token distribution, and platform engagement metrics. Our growth tools feature gamification elements, reward systems, and social sharing capabilities that encourage community participation and platform growth while providing administrators with detailed insights into user activity and platform performance.",
      techStack: [],
      image: web3Img,
    },
    {
      id: 6,
      name: "Wallets",
      title: "Wallets",
      description:
        "Wallet-connect UI components supporting multi-chain access and authentication. We develop seamless wallet integration interfaces that support MetaMask, WalletConnect, and hardware wallets, enabling secure multi-chain transactions, portfolio management, and cross-platform synchronization.\n\nOur wallet interfaces provide comprehensive asset management features, including token swapping, transaction history, and portfolio analytics. We implement advanced security measures, transaction signing workflows, and network switching capabilities that allow users to manage their digital assets efficiently across multiple blockchain networks with a single, intuitive interface.",
      techStack: [],
      image: walletImg,
    },
    {
      id: 7,
      name: "Backend",
      title: "Backend",
      description:
        "Secure, reliable backend systems powering decentralized and hybrid blockchain applications. Our backend infrastructure includes node management, database optimization, API gateways, and microservices architecture to ensure high availability, scalability, and seamless integration with blockchain networks.\n\nWe implement comprehensive monitoring systems, automated scaling solutions, and robust security protocols that protect user data and ensure platform reliability. Our backend services handle complex blockchain interactions, transaction processing, and data synchronization while maintaining optimal performance and providing seamless integration with frontend applications and external services.",
      techStack: [],
      image: backendImg,
    },
  ];

  const industriesCards = [
    {
      id: 1,
      number: 1,
      title: "Fusion of Blockchain Intelligence + AI Automation",
      description:
        "We integrate decentralized architecture with advanced AI models to build systems that auto-optimize, self-analyze, and deliver smarter performance than traditional solutions.",
      icon: bitcoinIcon,
    },
    {
      id: 2,
      number: 2,
      title: "Military-Grade Security & Multi-Layer Audits",
      description:
        "Every product undergoes deep security screening – including automated scans, manual audits, penetration testing, and strict protocol review – ensuring zero exploitable gaps.",
      icon: protectionIcon,
    },
    {
      id: 3,
      number: 3,
      title: "Transparent Processes With Full Development Visibility",
      description:
        "From sprint planning to weekly progress demos and milestone reporting, clients stay fully informed at every stage of development – no surprises, no hidden elements.",
      icon: eyeSettingIcon,
    },
    {
      id: 4,
      number: 4,
      title: "High-Performance, Future-Ready Architecture",
      description:
        "Our solutions are engineered for massive scalability, ensuring your platform handles increasing transactions, growing user loads, and rapid feature expansion without performance drops.",
      icon: productivityIcon,
    },
    {
      id: 5,
      number: 5,
      title: "Multi-Chain Mastery & Cross-Platform Expertise",
      description:
        "We build seamlessly across top networks like Ethereum, BSC, Solana, Polygon, Avalanche, Cosmos, Hyperledger, Bitcoin L2, and more – selecting the ideal chain for your specific use case.",
      icon: gameIcon,
    },
    {
      id: 6,
      number: 6,
      title: "End-to-End Support From Launch to Growth",
      description:
        "Our commitment continues beyond deployment. We provide continuous monitoring, upgrades, optimizations, feature enhancements, and long-term technical support to ensure your product thrives.",
      icon: uploadIcon,
    },
  ];

  const wideRangeCards = [
    {
      id: 1,
      title: "Cryptocurrency",
      description:
        "Custom crypto-powered solutions, including token utilities, micro-payment systems, and digital asset integrations.",
      image: homeSec2_5,
    },
    {
      id: 2,
      title: "Marketing",
      description:
        "Strategic marketing solutions to promote your blockchain projects, increase visibility, and drive user adoption.",
      image: homeSec2_2,
    },
    {
      id: 3,
      title: "Fundraising",
      description:
        "Comprehensive fundraising strategies and token launch services to help you raise capital for your blockchain ventures.",
      image: homeSec2_6,
    },
    {
      id: 4,
      title: "Decentralized Finance",
      description:
        "Build powerful DeFi platforms with lending, staking, yield farming, and other decentralized financial services.",
      image: homeSec2_7,
    },
    {
      id: 5,
      title: "Smart Contract",
      description:
        "Secure, audited smart contracts for various use cases including DeFi, NFTs, governance, and automated workflows.",
      image: homeSec2_3,
    },
  ];

  const testimonials = [
    {
      id: 1,
      quote:
        "Blockcha  in App Advisor helped us design a scalable DeFi protocol from scratch. The smart contracts were flawless and the audit was incredibly detailed.",
      name: "Founder, FinTech Startup",
      profileImage: profile1,
    },
    {
      id: 2,
      quote:
        "Our NFT marketplace went live within weeks. Their architecture planning and integration support were exceptional.",
      name: "CEO, NFT Marketplace",
      profileImage: profile2,
    },
    {
      id: 3,
      quote:
        "They built an AI-powered fraud detection system for our exchange. Transaction monitoring accuracy improved drastically.",
      name: "CTO, Crypto Exchange",
      profileImage: profile3,
    },
  ];

  const [selectedFaq, setSelectedFaq] = useState(0);
  const faqRefs = useRef([]);
  const faqScrollContainerRef = useRef(null);
  const faqIndicatorTrackRef = useRef(null);
  const faqIndicatorThumbRef = useRef(null);
  const faqRafRef = useRef(null);
  const isFaqThumbDraggingRef = useRef(false);
  const [faqScrollRatio, setFaqScrollRatio] = useState(0);
  const [faqIndicatorTrackH, setFaqIndicatorTrackH] = useState(0);
  const [faqIndicatorThumbH, setFaqIndicatorThumbH] = useState(120);
  const [workCardWidth, setWorkCardWidth] = useState(0);

  useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3);
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2);
      } else {
        setCardsPerView(1);
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  useEffect(() => {
    const updateWidth = () => {
      if (workCarouselRef.current?.children[0]) {
        setWorkCardWidth(workCarouselRef.current.children[0].offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, [cardsPerView]);

  const faqs = [
    {
      id: 1,
      question: "What services does Blockchain App Advisor provide?",
      answer:
        "We offer a complete suite of blockchain and AI development services including smart contract development, smart contract audits, token creation, DeFi platforms, DApps, NFT marketplaces, crypto exchanges, AI automation, and custom blockchain architecture.",
    },
    {
      id: 2,
      question: "How long does it take to develop a blockchain application?",
      answer: "Development timelines depend on project complexity.",
      bulletPoints: [
        "Simple smart contracts: 5-10 days",
        "Tokens: 3-7 days",
        "DApps / NFT marketplaces: 3-6 weeks",
      ],
    },
    {
      id: 3,
      question: "Do you provide post-launch support?",
      answer:
        "Yes, we provide comprehensive post-launch support including maintenance, upgrades, bug fixes, feature enhancements, and ongoing technical assistance to ensure your product continues to perform optimally.",
    },
    {
      id: 4,
      question: "Can you audit my existing smart contracts?",
      answer:
        "Absolutely. We offer thorough smart contract audit services that include automated scans, manual code review, logical testing, and detailed audit reports with recommendations for security improvements.",
    },
    {
      id: 5,
      question: "Can you help with tokenomics along with token development?",
      answer:
        "Yes, we provide complete tokenomics consulting and design services along with token development. We help you create sustainable token models, distribution strategies, and economic structures that align with your project goals.",
    },
  ];

  const handleFaqClick = (index) => {
    setSelectedFaq(index);
    if (faqRefs.current[index]) {
      faqRefs.current[index].scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const updateFaqScrollRatio = () => {
    const el = faqScrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const ratio = maxScroll <= 0 ? 0 : el.scrollTop / maxScroll;
    setFaqScrollRatio(
      Number.isFinite(ratio) ? Math.min(1, Math.max(0, ratio)) : 0,
    );
  };

  const scrollFaqToRatio = (ratio) => {
    const el = faqScrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    el.scrollTop = Math.min(maxScroll, Math.max(0, ratio * maxScroll));
  };

  const handleFaqScroll = () => {
    if (faqRafRef.current) cancelAnimationFrame(faqRafRef.current);
    faqRafRef.current = requestAnimationFrame(() => {
      updateFaqScrollRatio();
    });
  };

  const getFaqRatioFromPointerEvent = (e) => {
    const track = faqIndicatorTrackRef.current;
    const thumb = faqIndicatorThumbRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const thumbH = thumb?.offsetHeight ?? 0;
    const usable = Math.max(1, rect.height - thumbH);
    const y = e.clientY - rect.top - thumbH / 2;
    return Math.min(1, Math.max(0, y / usable));
  };

  const handleFaqIndicatorPointerDown = (e) => {
    // Clicking the track jumps the scroll position.
    const ratio = getFaqRatioFromPointerEvent(e);
    scrollFaqToRatio(ratio);
    updateFaqScrollRatio();
  };

  const handleFaqThumbPointerDown = (e) => {
    e.preventDefault();
    isFaqThumbDraggingRef.current = true;
    e.currentTarget.setPointerCapture?.(e.pointerId);
  };

  const handleFaqThumbPointerMove = (e) => {
    if (!isFaqThumbDraggingRef.current) return;
    const ratio = getFaqRatioFromPointerEvent(e);
    scrollFaqToRatio(ratio);
    updateFaqScrollRatio();
  };

  const handleFaqThumbPointerUp = (e) => {
    isFaqThumbDraggingRef.current = false;
    e.currentTarget.releasePointerCapture?.(e.pointerId);
  };

  useEffect(() => {
    updateFaqScrollRatio();
    const trackEl = faqIndicatorTrackRef.current;
    const thumbEl = faqIndicatorThumbRef.current;
    if (!trackEl || !thumbEl) return;

    const ro = new ResizeObserver(() => {
      setFaqIndicatorTrackH(trackEl.getBoundingClientRect().height);
      setFaqIndicatorThumbH(thumbEl.getBoundingClientRect().height);
    });

    ro.observe(trackEl);
    ro.observe(thumbEl);

    return () => {
      if (faqRafRef.current) cancelAnimationFrame(faqRafRef.current);
      ro.disconnect();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Blockchain & AI Development Company | Web3 Experts | Blockchain App
          Advisor
        </title>

        <meta
          name="description"
          content="Blockchain App Advisor is a leading Blockchain & AI development company delivering smart contract development, token creation, DeFi platforms, NFT marketplaces, crypto exchanges, DApps, and enterprise-grade Web3 solutions."
        />

        <meta
          name="keywords"
          content="blockchain development company, AI development company, smart contract development, DeFi development, NFT marketplace development, crypto exchange development, token development, web3 development company"
        />

        <meta name="author" content="Blockchain App Advisor" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Build the Future with World-Class Blockchain & AI Development"
        />
        <meta
          property="og:description"
          content="Secure, scalable and intelligent blockchain ecosystems powered by smart contracts, AI automation and next-gen Web3 architecture."
        />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Blockchain App Advisor" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Blockchain & AI Development Company | Web3 Experts"
        />
        <meta
          name="twitter:description"
          content="Smart contracts, DeFi platforms, NFT marketplaces, token development and AI automation solutions."
        />

        {/* Canonical (IMPORTANT) */}
        <link rel="canonical" href="https://yourdomain.com/" />
      </Helmet>
      <div className="w-full bg-white transition-colors duration-300">
        {/* Hero Section */}
        <section className="relative w-full bg-white pt-4 pb-8 sm:pb-16 md:pt-6 md:pb-18 lg:pt-8 lg:pb-18 xl:pt-10 xl:pb-18">
          <div className="mx-auto grid w-full grid-cols-1 items-center gap-0 lg:grid-cols-[65%_35%]">
            {/* Left Side - Text Content */}
            <div className="mx-2 md:mx-20 flex w-full flex-col justify-start gap-5 leading-[1.4]">
              <h1 className="font-heading font-bold uppercase tracking-[0%] text-left">
                <div
                  className="block w-full  text-black text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]
"
                >
                  BUILD THE FUTURE WITH
                </div>
                <div
                  className="block w-full  text-brand-blue text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]
"
                >
                  WORLD-CLASS BLOCKCHAIN
                </div>
                <div
                  className="block w-full  text-brand-blue text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]
"
                >
                  & AI DEVELOPMENT
                </div>
              </h1>

              <p className="w-full max-w-[600px] leading-[1.6] text-black sm:leading-[1.65] text-xl md:text-2xl">
                We engineer secure, scalable and intelligent blockchain
                ecosystems –powered by advanced smart contracts, AI automation,
                token development, and next-gen decentralized applications.
              </p>
              <Link to="/contact">
                <button className="mt-2 flex w-fit items-center gap-2 rounded border border-[#4A9EFF] bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:border-brand-blue hover:bg-gradient-to-b hover:from-white hover:to-[#cfe6fb]  hover:text-brand-blue sm:mt-4 sm:px-5 sm:py-2.5 sm:text-xl leading-[1.6] md:px-6 md:py-3 md:text-base">
                  Get a Quote →
                </button>
              </Link>
            </div>

            {/* Right Side - Graphics Placeholder */}
            <div className="flex w-full items-center justify-center">
              <img
                src={heroImages.light}
                alt="Blockchain & AI Development"
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        </section>

        <div className="relative">
          {/* Core Services Section */}
          <div ref={servicesRef} className="relative ">
            <section
              className={`sticky top-0 z-[10] bg-white pb-4  transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 ${isServicesVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%]">
                  <div className="block text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                    <span className="text-black">OUR CORE </span>
                    <span className="text-brand-blue"> BLOCKCHAIN </span>
                    <span className="text-black">& </span>
                    <span className="text-brand-blue">
                      AI DEVELOPMENT SERVICES
                    </span>
                  </div>
                </h2>

                <p className="mx-auto mt-3 max-w-full text-center text-xs leading-[1.6] text-black/75 sm:mt-4 sm:text-xl leading-[1.6] sm:leading-[1.65] md:mt-6 md:max-w-[920px] md:text-base lg:text-xl">
                  We offer a fully specialized suite of blockchain and AI
                  solutions designed to help startups, enterprises, and
                  innovators build secure, scalable, and future-ready digital
                  products.
                </p>

                <div className="relative mt-6 sm:mt-8 lg:mt-10">
                  <div className="overflow-hidden" ref={carouselRef}>
                    <div
                      className="flex transition-transform duration-500 ease-in-out gap-4 sm:gap-6 lg:gap-8"
                      style={{
                        transform: `translateX(calc(-${currentSlide * (100 / cardsPerView)}% - ${currentSlide * (cardsPerView === 3 ? 1.33 : cardsPerView === 2 ? 1.5 : 1)}rem))`,
                      }}
                    >
                      {serviceCards.map((card) => (
                        <div
                          key={card.id}
                          className="flex-shrink-0 w-full sm:w-[90%] md:w-[48%] lg:w-[32%] min-h-[400px] sm:min-h-[450px] lg:min-h-[500px] overflow-hidden rounded-lg border border-transparent bg-black/[0.04] shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-transform duration-300 hover:-translate-y-1 sm:rounded-xl sm:shadow-[0_12px_40px_rgba(0,0,0,0.25)] md:rounded-2xl md:shadow-[0_18px_60px_rgba(0,0,0,0.35)]"
                        >
                          <div className="relative w-full h-full overflow-hidden">
                            <img
                              src={card.image}
                              alt={card.title || `Service ${card.id}`}
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_30%,rgba(0,0,0,0.7)_70%,rgba(0,0,0,0.9)_100%)]" />
                            {card.title && (
                              <div className="absolute inset-x-0 bottom-0">
                                <div className="backdrop-blur-sm bg-black/30 p-4">
                                  <div className="font-heading text-xl font-bold uppercase text-white sm:text-xl md:text-2xl lg:text-2xl mb-3 sm:mb-4 whitespace-nowrap">
                                    {card.title}
                                  </div>
                                  {card.description && (
                                    <div className="text-white text-xl leading-[1.6] :text-base md:text-xl leading-relaxed">
                                      {card.description}
                                    </div>
                                  )}
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Carousel Navigation Buttons */}
                  <div className="mt-6 flex items-center gap-3 sm:mt-8 lg:mt-10">
                    <button
                      onClick={prevSlide}
                      disabled={currentSlide === 0}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:bg-black hover:text-white  disabled:cursor-not-allowed sm:h-12 sm:w-12"
                      aria-label="Previous slide"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 19l-7-7 7-7"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={nextSlide}
                      disabled={currentSlide >= maxServiceSlide}
                      className="flex h-10 w-10 items-center justify-center rounded-full border border-black/20 bg-white transition-all duration-300 hover:bg-black hover:text-white  disabled:cursor-not-allowed sm:h-12 sm:w-12"
                      aria-label="Next slide"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Why Trust Section */}
          <div ref={trustRef} className="relative ">
            <section
              className={`sticky top-0 z-[20] bg-white pb-4 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-14 lg:pt-8`}
            >
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full px-2 text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px] sm:px-4 md:px-6 ">
                  <div className="block text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px] mb-2">
                    <span className="text-black">WHY </span>
                    <span className="text-brand-blue">BUSINESS </span>
                    <span className="text-black">TRUST </span>
                    <span className="text-brand-blue">
                      BLOCKCHAIN APP ADVISOR{" "}
                    </span>
                  </div>
                </h2>

                <div className="mt-6 flex flex-col gap-4 px-2 sm:mt-8 sm:gap-6 sm:px-4 md:mt-12 md:gap-8 md:px-6">
                  {whyTrustCards.map((card) => (
                    <div
                      key={card.id}
                      className="mx-auto w-full max-w-[1100px] rounded-lg border border-black/15 bg-black/[0.03] p-5 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:scale-[1.02] sm:rounded-xl sm:p-6 md:rounded-2xl md:p-7 md:shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:hover:shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
                    >
                      <div className="grid grid-cols-1 items-start gap-3 sm:gap-4 md:items-center md:grid-cols-[1fr_160px] lg:grid-cols-[1fr_220px] lg:gap-6 lg:grid-cols-[1fr_220px]">
                        <div className="w-full md:w-[600px] lg:w-[680px]">
                          <h3 className="font-heading text-xl font-bold text-black sm:text-xl md:text-2xl lg:text-2xl line-clamp-2">
                            {card.title}
                          </h3>
                          <p className="mt-2 min-h-[3.1em] overflow-hidden text-base leading-[1.55] text-black/75 sm:mt-3 sm:text-xl sm:leading-[1.6] md:text-xl [display:-webkit-box] [-webkit-box-orient:vertical] [-webkit-line-clamp:2]">
                            {card.description}
                          </p>
                        </div>
                        <div className="w-full">
                          <div className="overflow-hidden">
                            {card.image && (
                              <img
                                src={card.image}
                                alt={card.title}
                                className="w-full h-auto object-contain max-h-[140px] sm:max-h-[170px] md:max-h-[190px]"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Industries Section */}
          <div ref={industriesRef} className="relative ">
            <section
              className={`sticky top-0 z-[30] bg-white pb-4 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-14 lg:pt-8`}
            >
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px]">
                  <div className="block text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] xl:text-[72px]">
                    <span className="text-black">SERVING </span>
                    <span className="text-brand-blue">
                      MULTIPLE GLOBAL INDUSTRIES
                    </span>
                  </div>
                </h2>

                <div className="mt-6 flex flex-col gap-4 sm:mt-8 sm:gap-6 md:mt-12 md:gap-6 lg:gap-8">
                  {/* Card 1 - Centered */}
                  <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-3">
                    <div className="w-full rounded-lg border border-brand-blue/30 bg-black/[0.03] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:scale-[1.02] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-6 md:shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:hover:shadow-[0_24px_64px_rgba(0,0,0,0.3)] md:col-start-1 md:col-end-3 lg:col-start-2 lg:col-end-3">
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between gap-1">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-blue text-base font-bold text-white sm:h-12 sm:w-12 sm:text-xl md:h-10 md:w-10">
                            {industriesCards[0].number}
                          </div>
                          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded sm:h-20 sm:w-20 md:h-16 md:w-16">
                            <img
                              src={industriesCards[0].icon}
                              alt={industriesCards[0].title}
                              className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-16 md:w-16"
                            />
                          </div>
                        </div>
                        <div className="mt-2">
                          <h3 className="no-stroke text[32px] font-heading font-bold text-brand-blue sm:text-xl md:text-xl">
                            {industriesCards[0].title}
                          </h3>
                          <p className="mt-2 text-lg leading-[1.55] text-black/75 sm:mt-3 sm:text-xl leading-[1.6] sm:leading-[1.6] md:text-base">
                            {industriesCards[0].description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Cards 2-3 - In a row */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 md:gap-6 lg:flex lg:justify-center items-stretch lg:gap-8">
                    {industriesCards.slice(1, 3).map((card) => (
                      <div
                        key={card.id}
                        className="w-full rounded-lg border border-brand-blue/30 bg-black/[0.03] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:scale-[1.02] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-6 lg:w-[calc(33.333%-1.07rem)] md:shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:hover:shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-blue text-base font-bold text-white sm:h-12 sm:w-12 sm:text-xl md:h-10 md:w-10">
                              {card.number}
                            </div>
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded sm:h-20 sm:w-20 md:h-16 md:w-16">
                              <img
                                src={card.icon}
                                alt={card.title}
                                className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-10 md:w-10"
                              />
                            </div>
                          </div>
                          <div className="mt-2">
                            <h3 className="no-stroke font-heading text-base font-bold text-brand-blue sm:text-xl md:text-xl">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-xs leading-[1.55] text-black/75 sm:mt-3 sm:text-xl leading-[1.6] sm:leading-[1.6] md:text-base">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cards 4-5-6 - In a row */}
                  <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
                    {industriesCards.slice(3, 6).map((card) => (
                      <div
                        key={card.id}
                        className="w-full rounded-lg border border-brand-blue/30 bg-black/[0.03] p-4 shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition-all duration-300 hover:shadow-[0_16px_48px_rgba(0,0,0,0.25)] hover:-translate-y-2 hover:scale-[1.02] sm:rounded-xl sm:p-5 md:rounded-2xl md:p-6 md:shadow-[0_12px_32px_rgba(0,0,0,0.18)] md:hover:shadow-[0_24px_64px_rgba(0,0,0,0.3)]"
                      >
                        <div className="flex flex-col gap-4">
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded bg-brand-blue text-base font-bold text-white sm:h-12 sm:w-12 sm:text-xl md:h-10 md:w-10">
                              {card.number}
                            </div>
                            <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded sm:h-20 sm:w-20 md:h-16 md:w-16">
                              <img
                                src={card.icon}
                                alt={card.title}
                                className="h-10 w-10 object-contain sm:h-12 sm:w-12 md:h-10 md:w-10"
                              />
                            </div>
                          </div>
                          <div className="mt-2">
                            <h3 className="no-stroke font-heading text-base font-bold text-brand-blue sm:text-xl md:text-xl">
                              {card.title}
                            </h3>
                            <p className="mt-2 text-xs leading-[1.55] text-black/75 sm:mt-3 sm:text-xl leading-[1.6] sm:leading-[1.6] md:text-base">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Our Work Section */}
          <div className="relative ">
            <section className="sticky top-0 z-[25] bg-white pb-4  pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-10 lg:pt-8">
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px]">
                  <div className="block text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                    <span className="text-black">OUR </span>
                    <span className="text-brand-blue">WORK </span>
                    <span className="text-black">THAT </span>
                    <span className="text-brand-blue">DELIVERS IMPACT</span>
                  </div>
                  <div className="mx-auto mt-4 h-1 w-24 border-b-2 border-brand-blue sm:mt-5 md:mt-6"></div>
                </h2>

                <div className="mt-6 overflow-hidden sm:mt-8 md:mt-10 max-w-5xl mx-auto">
                  <div
                    className="flex transition-transform duration-500 ease-in-out gap-6 sm:gap-8"
                    ref={workCarouselRef}
                    style={{
                      // Keep the same visual style as testimonials cards; slide by 1 card (33.333%) + gap.
                      // transform: `translateX(-${currentWorkSlide * 100}%)`
                      // transform: `translateX(-${currentWorkSlide * (100 / cardsPerView)}%)`
                      // transform: `translateX(-${currentWorkSlide * (workCarouselRef.current?.offsetWidth / cardsPerView)}px)`
                      transform: `translateX(-${currentWorkSlide * workCardWidth}px)`,
                    }}
                  >
                    {workCards.map((card) => (
                      <div
                        key={card.id}
                        className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3"
                      >
                        <div className="mx-auto flex min-h-[250px] sm:min-h-[280px] lg:min-h-[300px]  w-full max-w-[360px] flex-col rounded-xl border border-black/25 bg-white p-6 shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:border-2  hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] hover:-translate-y-1 sm:p-7">
                          <h3 className="font-heading  text[20px] font-bold text-black sm:text-xl">
                            {card.title}
                          </h3>
                          <div className="mt-4 h-px w-full bg-brand-blue/70" />
                          <p
                            className="mt-5  text[20px]
                         leading-[1.65] text-black/80 sm:text-base"
                          >
                            {card.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* Navigation Buttons */}
                  <div className="mt-6 flex justify-center gap-4 sm:mt-8">
                    <button
                      onClick={() =>
                        // setCurrentWorkSlide((prev) => Math.max(prev - 1, 0))
                        setCurrentWorkSlide((prev) =>
                          prev === 0 ? maxWorkSlides : prev - 1,
                        )
                      }
                      disabled={currentWorkSlide === 0}
                      className="flex h-10 w-10 items-center justify-center rounded-full
      border border-black text-black transition-all duration-300
      hover:bg-black hover:text-white
      disabled:cursor-not-allowed disabled:opacity-40
     "
                      aria-label="Previous slide"
                    >
                      ←
                    </button>

                    <button
                      onClick={() =>
                        // setCurrentWorkSlide((prev) =>
                        //   Math.min(prev + 1, maxWorkSlides)
                        // )
                        setCurrentWorkSlide((prev) =>
                          prev === maxWorkSlides ? 0 : prev + 1,
                        )
                      }
                      disabled={currentWorkSlide === maxWorkSlides}
                      className="flex h-10 w-10 items-center justify-center rounded-full
      border border-black text-black transition-all duration-300
      hover:bg-black hover:text-white
      disabled:cursor-not-allowed disabled:opacity-40
     "
                      aria-label="Next slide"
                    >
                      →
                    </button>
                  </div>

                  {/* Pagination Dots */}
                  <div className="mt-6 flex justify-center gap-2 sm:mt-8">
                    {Array.from({ length: maxWorkSlides + 1 }).map(
                      (_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentWorkSlide(index)}
                          className={`h-2 w-2 rounded-full transition-all duration-300 ${
                            currentWorkSlide === index
                              ? "bg-brand-blue w-8"
                              : "bg-gray-300 hover:bg-gray-400"
                          }`}
                          aria-label={`Go to slide ${index + 1}`}
                        />
                      ),
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Tech Stack Section */}
          <div className="relative">
            <section className="sticky top-0 z-[35] bg-white pb-4 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-10 lg:pt-8">
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="ml-auto max-w-full text-right font-heading font-bold uppercase leading-[1.25] tracking-[0%] ">
                  <div className="block text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                    {/* Force exactly 2 lines */}
                    <div className="block whitespace-nowrap">
                      <span className="text-black">THE </span>
                      <span className="text-brand-blue">
                        ULTRA-STABLE TECH STACK
                      </span>
                    </div>
                    <div className="block whitespace-nowrap">
                      <span className="text-black">POWERING OUR </span>
                      <span className="text-brand-blue">WEB3 SOLUTIONS</span>
                    </div>
                  </div>
                </h2>

                <div className="mt-8 grid grid-cols-1 gap-6 sm:mt-10 md:mt-12 md:grid-cols-1 lg:grid-cols-[300px_1fr] lg:gap-8">
                  {/* Left Side - Buttons List */}
                  <div className="flex flex-col gap-3 sm:gap-4">
                    {techStackItems.map((item, index) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedTechStack(index)}
                        className={`rounded-lg border p-2 sm:p-2.5 text-left transition-all duration-300 ${
                          selectedTechStack === index
                            ? "border-brand-blue bg-brand-blue/10 text-brand-white"
                            : "border-black/20 bg-black/[0.03] text-black hover:border-brand-blue/50"
                        }`}
                      >
                        <span className="font-heading text-xs font-normal sm:text-xl leading-[1.6] md:text-base">
                          {item.name}
                        </span>
                      </button>
                    ))}
                  </div>

                  {/* Right Side - Content and Image */}
                  <div className="flex flex-col gap-6">
                    <div className="rounded-lg bg-black/[0.03] p-6 transition-all duration-500 sm:p-8 md:p-10">
                      <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_300px] md:gap-8 lg:grid-cols-[1fr_350px]">
                        {/* Content */}
                        <div
                          key={selectedTechStack}
                          className="flex flex-col gap-4 animate-fade-in"
                        >
                          <h3 className="font-heading text-xl font-bold text-brand-blue transition-all duration-500 ease-in-out sm:text-2xl md:text-3xl">
                            {techStackItems[selectedTechStack].title}
                          </h3>
                          <div className="flex flex-col gap-3">
                            {techStackItems[selectedTechStack].description
                              .split("\n\n")
                              .map((paragraph, idx) => (
                                <p
                                  key={idx}
                                  className="text-xl leading-[1.6] leading-relaxed text-black/80 transition-all duration-500 ease-in-out sm:text-base md:text-xl"
                                >
                                  {paragraph}
                                </p>
                              ))}
                          </div>
                          {techStackItems[selectedTechStack].techStack.length >
                            0 && (
                            <div className="mt-4">
                              <h4 className="mb-3 font-heading text-base font-semibold text-brand-blue transition-all duration-500 ease-in-out sm:text-xl">
                                Tech We Use:
                              </h4>
                              <ul className="flex flex-col gap-2">
                                {techStackItems[
                                  selectedTechStack
                                ].techStack.map((tech, idx) => (
                                  <li
                                    key={idx}
                                    className="text-xl leading-[1.6] text-black/80 transition-all duration-500 ease-in-out sm:text-base"
                                  >
                                    • {tech}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>

                        {/* Image */}
                        <div className="flex items-center justify-center rounded-lg">
                          <div
                            key={`img-${selectedTechStack}`}
                            className="w-full h-[250px] sm:h-[300px] md:h-[350px] flex items-center justify-center p-4 animate-fade-in"
                          >
                            {techStackItems[selectedTechStack].image && (
                              <img
                                src={techStackItems[selectedTechStack].image}
                                alt={techStackItems[selectedTechStack].title}
                                className="w-full h-full object-contain transition-all duration-500 ease-in-out"
                              />
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Wide Range Services Section */}
          <div className="relative ">
            <section className="sticky top-0 z-[40] bg-white pb-4 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-10 lg:pt-8">
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px] mb-8 sm:mb-12 lg:mb-16">
                  <div className="block text-[32px]  sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                    <span className="text-black">OUR </span>
                    <span className="text-brand-blue">WIDE RANGE </span>
                    <span className="text-black">OF </span>
                    <span className="text-brand-blue">WEB3 </span>
                    <span className="text-black">& </span>
                    <span className="text-brand-blue">BLOCKCHAIN </span>
                    <span className="text-brand-blue">DEVELOPMENT </span>
                    <span className="text-brand-blue">SERVICES</span>
                  </div>
                </h2>

                <div className="flex flex-col lg:flex-row gap-8 sm:gap-10 lg:gap-14 xl:gap-18 2xl:gap-24 items-center lg:items-end justify-center">
                  {wideRangeCards.map((card) => (
                    <ServiceCard
                      key={card.id}
                      title={card.title}
                      description={card.description}
                      image={card.image}
                      isExpanded={false}
                    />
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Testimonials Section */}
          <div className="relative">
            <section className="sticky top-0 z-[45] bg-white pb-4 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-10 lg:pt-8">
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px] mb-4 sm:mb-8 lg:mb-12">
                  <div className="block text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                    <span className="text-black">WHAT OUR </span>
                    <span className="text-brand-blue">CLIENTS SAY</span>
                  </div>
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-6 lg:gap-6 max-w-5xl mx-auto">
                  {testimonials.map((testimonial) => (
                    <div
                      key={testimonial.id}
                      className="flex flex-col h-full rounded-lg border border-gray-200 bg-white p-6 shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-all duration-300 hover:border-4 hover:shadow-[0_8px_24px_rgba(0,0,0,0.15)] hover:-translate-y-1 sm:p-8"
                    >
                      <p className="text-lg leading-[1.6] sm:text-base md:text-lg leading-relaxed text-black/80 mb-auto flex-grow">
                        "{testimonial.quote}"
                      </p>
                      {/* Blue Underline */}
                      <div className="w-full h-0.5 bg-brand-blue mb-4 mt-4"></div>
                      <div className="flex items-center gap-4">
                        <img
                          src={testimonial.profileImage}
                          alt="profile"
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <p className="no-stroke font-heading font-semibold text-brand-blue text-lg leading-[1.6] sm:text-base md:text-lg">
                          {testimonial.name}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>

          {/* Ready to Build Section */}
          <div className="relative ">
            <section className="sticky top-0 z-[50] bg-white pb-10 pt-2 transition-all duration-700 ">
              <div className="mx-auto max-w-layout px-4 ">
                <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 sm:gap-10 lg:gap-12 xl:gap-16 items-center">
                  {/* Left Side - Text Content */}
                  <div className="m-[30px] flex flex-col ">
                    <h2 className="font-heading font-bold uppercase leading-[1.05] tracking-[0%] text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                      <div className="block text-brand-blue">
                        READY TO BUILD THE
                      </div>
                      <div className="block text-brand-blue">FUTURE?</div>
                    </h2>

                    <p className="text-xl  mt-5 leading-[1.6] sm:text-base md:text-xl leading-[1.45] text-black/80 max-w-[600px]">
                      Whether you're launching a token, developing a DeFi
                      platform, designing an enterprise blockchain solution, or
                      integrating AI — we're here to bring your vision to life
                      with world-class engineering.
                    </p>

                    <Link to="/contact">
                      <button className="mt-2 flex w-fit items-center gap-2 rounded border border-[#4A9EFF] bg-white px-4 py-2 text-xs font-semibold text-black transition-all duration-300 hover:bg-[#4A9EFF] hover:text-white sm:mt-4 sm:px-5 sm:py-2.5 sm:text-xl leading-[1.6] md:px-6 md:py-3 md:text-base">
                        Get a Quote →
                      </button>
                    </Link>
                  </div>

                  {/* Right Side - Illustration/Image */}
                  <div className="flex items-center justify-center">
                    <div className="w-full max-w-[400px] overflow-hidden rounded-2xl border-black/10 bg-black/[0.03] transition-colors duration-300">
                      <img
                        src={readyToBuildImg}
                        alt="Ready to build"
                        className="h-auto w-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* FAQ Section */}
          <div className="relative ">
            <section className="sticky top-0 z-[55] bg-white pb-4 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-6 md:top-0 md:pb-8 md:pt-8 lg:pb-10 lg:pt-8">
              <div className="mx-auto max-w-layout px-4 sm:px-6 md:px-8 lg:px-12">
                <h2 className="mx-auto max-w-full text-center font-heading font-bold uppercase leading-[1.1] tracking-[0%] sm:max-w-[1200px] mb-8 sm:mb-12 lg:mb-16">
                  <div className="block  leading-[1] tracking-[0.02em] text-[32px] text-[28px] sm:text-[36px] md:text-[44px] lg:text-[56px] xl:text-[72px]">
                    <span className="text-brand-blue">
                      FREQUENTLY ASKED QUESTIONS
                    </span>
                  </div>
                </h2>

                <div className="grid grid-cols-1 lg:grid-cols-[320px_auto_1fr] gap-6 sm:gap-8 lg:gap-8">
                  {/* Left Side - Questions List */}
                  <div className="flex flex-col gap-2.5 sm:gap-3">
                    {faqs.map((faq, index) => (
                      <button
                        key={faq.id}
                        onClick={() => handleFaqClick(index)}
                        className={`text-left rounded-lg border p-0 transition-all duration-300 ${
                          selectedFaq === index
                            ? "border-brand-blue bg-brand-blue/10 text-brand-blue"
                            : "border-gray-200 bg-gray-50 text-black hover:border-brand-blue/50"
                        }`}
                      >
                        <div className="flex items-start gap-2.5 px-3 py-2 sm:px-4 sm:py-2.5">
                          <span className="font-normal text-sm sm:text-base md:text-xl flex-shrink-0">
                            {faq.id}.
                          </span>
                          <span className="text-xl leading-[1.6] sm:text-base md:text-xl font-normal leading-snug">
                            {faq.question}
                          </span>
                        </div>
                      </button>
                    ))}
                  </div>

                  {/* Vertical Line - Blue Scroll Indicator */}
                  <div className="hidden lg:flex items-start justify-center">
                    <div
                      ref={faqIndicatorTrackRef}
                      className="relative w-[6px] max-h-[360px] sm:max-h-[420px] lg:max-h-[440px]
 rounded-full bg-white/20 cursor-pointer"
                      onPointerDown={handleFaqIndicatorPointerDown}
                      role="scrollbar"
                      aria-orientation="vertical"
                      aria-controls="faq-answers-scroll"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={Math.round(faqScrollRatio * 100)}
                      tabIndex={0}
                    >
                      <div
                        ref={faqIndicatorThumbRef}
                        className="absolute left-0 right-0 top-0 h-[120px] rounded-full bg-brand-blue shadow-[0_0_18px_rgba(0,99,182,0.55)] cursor-grab active:cursor-grabbing"
                        style={{
                          transform: `translateY(${Math.max(0, faqScrollRatio * Math.max(0, faqIndicatorTrackH - faqIndicatorThumbH))}px)`,
                        }}
                        onPointerDown={handleFaqThumbPointerDown}
                        onPointerMove={handleFaqThumbPointerMove}
                        onPointerUp={handleFaqThumbPointerUp}
                        onPointerCancel={handleFaqThumbPointerUp}
                      />
                    </div>
                  </div>

                  {/* Right Side - Answers Section */}
                  <div
                    id="faq-answers-scroll"
                    ref={faqScrollContainerRef}
                    onScroll={handleFaqScroll}
                    className="max-h-[360px] sm:max-h-[420px] lg:max-h-[440px]
 overflow-y-auto pr-2 custom-scrollbar"
                  >
                    <div className="rounded-lg border border-gray-200 bg-white p-4 transition-all duration-300">
                      {faqs.map((faq, index) => (
                        <div
                          key={faq.id}
                          ref={(el) => (faqRefs.current[index] = el)}
                          className="py-6 first:pt-0 last:pb-0"
                        >
                          <h3 className="font-normal text-base sm:text-xl md:text-xl mb-3 text-black">
                            {faq.id}. {faq.question}
                          </h3>
                          <p className="text-xl leading-[1.6] sm:text-base md:text-xl leading-[1.5] text-black/80 mb-2">
                            {faq.answer}
                          </p>
                          {faq.bulletPoints && (
                            <ul className="mt-3 space-y-1.5">
                              {faq.bulletPoints.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="text-xl leading-[1.6] sm:text-base md:text-xl leading-[1.5] text-black/80 flex items-start gap-2"
                                >
                                  <span className="text-brand-blue mt-1.5">
                                    •
                                  </span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {index < faqs.length - 1 && (
                            <div className="mt-6 border-t border-gray-200" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>

          {/* Contact Form Section */}
          <div className="relative ">
            <h2 className="text-center font-heading font-bold uppercase mb-5 text-[34px] leading-[1] tracking-[0.02em] sm:text-[46px] md:text-[56px] lg:text-[68px] xl:text-[78px]">
              <span className="text-brand-blue">CONTACT US</span>
            </h2>
            <section className="sticky top-0 z-[60] bg-white pb-6 pt-4 transition-all duration-700 sm:top-0 sm:pb-4 sm:pt-4 md:top-0 md:pb-6 md:pt-6 lg:pb-8 lg:pt-6">
              <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-22">
                <ContactForm variant="compact" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
