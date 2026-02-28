import { Helmet } from 'react-helmet';
import { useState } from 'react';
import BeforeFooter from '../components/common/BeforeFooter';

// Using placeholder images - replace with actual product images when available
import heroImg from '../assets/ProductPageimages/hero.png';
import product1Img from '../assets/home_images/blockchain.png';
import product2Img from '../assets/home_images/ai.png';
import product3Img from '../assets/home_images/smartcontract.png';
import product4Img from '../assets/home_images/smartcontractaudit.png';
import product5Img from '../assets/home_images/tokendev.png';
import product6Img from '../assets/home_images/cryptoexchangedev.png';
import product7Img from '../assets/home_images/defidev.png';
import product8Img from '../assets/home_images/nftmarketplacedev.png';
import product9Img from '../assets/home_images/dappdev.png';

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'blockchain', name: 'Blockchain' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'defi', name: 'DeFi' },
    { id: 'nft', name: 'NFT' },
  ];

  const products = [
    {
      id: 1,
      title: 'Blockchain Infrastructure Platform',
      category: 'blockchain',
      description: 'Enterprise-grade blockchain infrastructure for secure, scalable decentralized applications. Built with multi-chain support and advanced consensus mechanisms.',
      features: ['Multi-chain Support', 'Smart Contract Integration', 'Real-time Analytics', 'Enterprise Security'],
      image: product1Img,
    },
    {
      id: 2,
      title: 'AI-Powered Analytics Dashboard',
      category: 'ai',
      description: 'Intelligent analytics platform with machine learning capabilities for predictive insights and automated decision-making across business operations.',
      features: ['Predictive Analytics', 'Real-time Processing', 'Custom ML Models', 'Data Visualization'],
      image: product2Img,
    },
    {
      id: 3,
      title: 'Smart Contract Development Suite',
      category: 'blockchain',
      description: 'Comprehensive toolkit for developing, testing, and deploying secure smart contracts across multiple blockchain networks with automated auditing.',
      features: ['Multi-chain Deployment', 'Automated Testing', 'Security Auditing', 'Gas Optimization'],
      image: product3Img,
    },
    {
      id: 4,
      title: 'Smart Contract Audit Platform',
      category: 'blockchain',
      description: 'Automated security auditing platform that identifies vulnerabilities and provides detailed reports for smart contract safety and compliance.',
      features: ['Automated Scanning', 'Vulnerability Detection', 'Detailed Reports', 'Compliance Checking'],
      image: product4Img,
    },
    {
      id: 5,
      title: 'Token Development & Launch Platform',
      category: 'defi',
      description: 'Complete token creation and launch platform supporting ERC-20, BEP-20, and custom token standards with built-in tokenomics tools.',
      features: ['Multi-standard Support', 'Tokenomics Design', 'Launchpad Integration', 'Vesting Management'],
      image: product5Img,
    },
    {
      id: 6,
      title: 'Crypto Exchange Platform',
      category: 'defi',
      description: 'Full-featured cryptocurrency exchange with advanced trading features, liquidity management, and multi-chain wallet integration.',
      features: ['Spot & Futures Trading', 'Liquidity Pools', 'Multi-chain Wallets', 'KYC/AML Integration'],
      image: product6Img,
    },
    {
      id: 7,
      title: 'DeFi Protocol Suite',
      category: 'defi',
      description: 'Complete DeFi ecosystem with lending, borrowing, staking, and yield farming capabilities across multiple blockchain networks.',
      features: ['Lending & Borrowing', 'Yield Farming', 'Staking Pools', 'Governance Tokens'],
      image: product7Img,
    },
    {
      id: 8,
      title: 'NFT Marketplace Platform',
      category: 'nft',
      description: 'Feature-rich NFT marketplace with minting, trading, auctions, and royalty management for creators and collectors.',
      features: ['NFT Minting', 'Auction System', 'Royalty Management', 'Multi-chain Support'],
      image: product8Img,
    },
    {
      id: 9,
      title: 'DApp Development Framework',
      category: 'blockchain',
      description: 'Rapid DApp development framework with pre-built components, wallet integration, and seamless blockchain connectivity.',
      features: ['Pre-built Components', 'Wallet Integration', 'API Gateway', 'Scalable Architecture'],
      image: product9Img,
    },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <>
  <Helmet>
    <title>Blockchain & AI Products | Enterprise Solutions</title>
    <meta
      name="description"
      content="Explore enterprise blockchain and AI products including DeFi platforms, NFT marketplaces, smart contract tools, and AI-powered analytics solutions."
    />
    <meta
      name="keywords"
      content="blockchain products, AI products, DeFi platform, NFT marketplace, smart contract audit, crypto exchange development"
    />
    <link
      rel="canonical"
      href="https://yourdomain.com/products"
    />
  </Helmet>

    <div className="w-full bg-white transition-colors duration-300 dark:bg-black">
      {/* Hero Section */}
      <section className="relative w-full bg-white pt-4 pb-8 transition-colors duration-300 dark:bg-black sm:pb-16 md:pt-6 md:pb-18 lg:pt-8 lg:pb-18 xl:pt-10 xl:pb-18">
        <div className="mx-auto grid w-full grid-cols-1 items-start gap-0 lg:grid-cols-[65%_35%]">
          <div className="mx-2 md:mx-20 flex w-full flex-col justify-start gap-5 leading-[1.4]">
            <h1 className="font-heading font-bold uppercase tracking-tight text-black transition-colors duration-300 dark:text-white">
              <span className="block  leading-[1.2]  sm:leading-[1.50] text-[30px] sm:text-[48px] md:text-[56px] lg:text-[76px] lg:leading-[1.35]">
                BLOCKCHAIN &amp; AI
              </span>
              <span className="block  leading-[1.2]  sm:leading-[1.50] text-[30px] sm:text-[48px] md:text-[56px] lg:text-[76px] lg:leading-[1.35]">
                PRODUCTS |{' '}
                <span className="text-brand-blue dark:[-webkit-text-stroke:1px_#ffffff]">BlueFalcon Technologies</span>
              </span>
            </h1>

            <p className="max-w-[820px] font-sans text-base font-medium leading-[1.7] text-black/75 transition-colors duration-300 dark:text-white/75 text-[15px] sm:text-[17px] md:text-[19px]">
              Discover our comprehensive suite of blockchain and AI products designed to transform your business operations. From enterprise blockchain infrastructure to intelligent AI solutions, our products deliver measurable value, enhanced security, and scalable performance.
              <span className="mt-3 block">
                Each product combines <span className="font-semibold text-brand-blue dark:text-white">Innovation</span> —{' '}
                <span className="font-semibold text-brand-blue dark:text-white">Security</span> —{' '}
                <span className="font-semibold text-brand-blue dark:text-white">Scalability</span>, ensuring enterprise-grade solutions for modern businesses.
              </span>
            </p>
          </div>

          <div className="flex w-full items-center justify-center">
            <div className="w-full max-w-[380px]">
              <div className="overflow-hidden rounded-3xl transition-colors duration-300 dark:border-white/20 dark:bg-white/[0.04]">
                <img src={heroImg} alt="Products" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="w-full bg-white py-4 transition-colors duration-300 dark:bg-black sm:py-8">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="text-center">
            <h2 className="font-heading text-[40px] font-bold uppercase tracking-tight text-black dark:text-white sm:text-[54px] lg:text-[72px]">
              PRODUCT <span className="text-brand-blue">CATEGORIES</span>
            </h2>
            <p className="mx-auto mt-3 max-w-2xl font-sans text-[19px] text-black/65 dark:text-white/70">
              Browse products by category
            </p>
          </div>

          {/* Category Buttons */}
          <div className="mx-auto mt-12 flex max-w-[800px] flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                type="button"
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-xl border-2  font-heading text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] font-semibold uppercase transition-all duration-300 px-4 py-2 sm:px-6 sm:py-3 ${
                  selectedCategory === category.id
                    ? 'border-brand-blue bg-brand-blue text-white shadow-lg'
                    : 'border-black/20 bg-white text-black hover:border-brand-blue/50 dark:border-white/30 dark:bg-black dark:text-white dark:hover:border-brand-blue/50'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="w-full bg-white py-16 transition-colors duration-300 dark:bg-black">
        <div className="mx-auto max-w-layout px-6 sm:px-10 md:px-16 lg:px-[3rem]">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <div
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-2xl border border-black/10 bg-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-2 hover:border-brand-blue/50 hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)] dark:border-white/20 dark:bg-black/40 dark:hover:border-brand-blue/50"
              >
                {/* Product Image */}
                <div className="relative h-[180px] sm:h-[220px] md:h-[240px] w-full overflow-hidden bg-gradient-to-br from-brand-blue/10 to-transparent">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block rounded-full bg-brand-blue/90 px-3 py-1 text-[10px] sm:text-[11px] font-semibold uppercase text-white backdrop-blur-sm">
                      {product.category}
                    </span>
                  </div>
                </div>

                {/* Product Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-[18px] sm:text-[20px] md:text-[22px] font-bold text-black transition-colors duration-300 dark:text-white ">
                    {product.title}
                  </h3>
                  <p className="mt-3 flex-1 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed leading-[1.6] leading-relaxed text-black/70 transition-colors duration-300 dark:text-white/70 ">
                    {product.description}
                  </p>

                  {/* Features List */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="rounded-lg bg-brand-blue/10 px-3 py-1 text-[12px] sm:text-[13px] md:text-[14px] font-medium text-brand-blue dark:bg-brand-blue/20 dark:text-white"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  {/* <button className="mt-6 w-full rounded-lg border-2 border-brand-blue bg-transparent px-4 py-3 font-semibold text-brand-blue transition-all duration-300 hover:bg-brand-blue hover:text-white dark:border-brand-blue dark:text-white dark:hover:bg-brand-blue">
                    Learn More
                  </button> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <BeforeFooter
        title="Ready To Explore Our Products?"
        description="Get in touch with our team to learn more about our blockchain and AI solutions."
        buttonText="Contact Us"
        buttonLink="/contact"
      />
    </div>
    </>
  );
};

export default Products;

