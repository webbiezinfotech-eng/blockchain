import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';

const routes = [
  '/',
  '/about',
  '/services',

  // Services pages
  '/services/ai-development',
  '/services/blockchain-development',
  '/services/smart-contract-development',
  '/services/smart-contract-audit',
  '/services/token-development',
  '/services/crypto-exchange-development',
  '/services/custom-development',
  '/services/consulting',
  '/services/defi-development',
  '/services/nft-marketplace-development',
  '/services/dapp-development',
  '/services/wallet-development',
  '/services/website-development',
  '/services/mobile-application-development',

  // Other pages
  '/industries',
  '/products',
  '/faq',
  '/contact',
  '/privacy-policy',
  '/terms-conditions',
  '/sitemap'
];

const links = routes.map(route => ({
  url: route,
  changefreq: 'monthly',
  priority: route === '/' ? 1.0 : 0.8
}));

const stream = new SitemapStream({
  hostname: 'https://bluefalcon-technologies.com'
});

const writeStream = createWriteStream('./public/sitemap.xml');

streamToPromise(stream).then(data => writeStream.write(data.toString()));

links.forEach(link => stream.write(link));
stream.end();