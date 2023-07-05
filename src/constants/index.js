import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  nextjs,
  solidity,
  hardhat,
  graphql,
  moralis,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Web3 Developer",
    icon: web,
  },
  {
    title: "Front-End Web Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Next JS",
    icon: nextjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Solidity",
    icon: solidity,
  },
  {
    name: "Hardhat",
    icon: hardhat,
  },
  {
    name: "GraphQl",
    icon: graphql,
  },
  {
    name: "Moralis SDK",
    icon: moralis,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full stack Web3 Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Aug 2022 - Present",
    points: [
      "Developing and building full-stack Dapps.",
      "Building, testing, and auditing EVM compatible Blockchains smart contracts.",
      "Developing reliable, up-to-date, and user-friendly UIs connected to the Blockchain using frameworks like React and Next",
      "Fields covered: DeFi (Bonding curves, AMMs, DEXs, Real Estates, ... ), NFTs (Fractionalization, Marketplaces, ... ), Meta-Multisig Wallets",
    ],
  },
  {
    title: "Front End Web Developer",
    company_name: "Freelance",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Building React / Next Js based UIs for websites.",
      "Server-side and Client-side rendering",
      "Dealing with variuos types of packages to maintain a better UX, stable performance, and less complexity",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const webprojects = [
  {
    name: "Car Gallery",
    description:
      "A website UI that allows users to search for cars based on the manufacturer, model, fuel type, and year.",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "rapid API",
        color: "green-text-gradient",
      },
      {
        name: "tailwind CSS",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DiyaaDaoud/Car-Gallery",
  },
];
const web3projects = [
  {
    name: "Block Shake",
    description:
      "A decentralized social media app using Lens protocol on Mumbai testnet. it allows login and sign up to Lens, exploring, posting, commenting, sharing, and collectng publications",
    tags: [
      {
        name: "Next",
        color: "blue-text-gradient",
      },
      {
        name: "Lens",
        color: "green-text-gradient",
      },
      {
        name: "Chakra",
        color: "yellow-text-gradient",
      },
      {
        name: "ThirdWeb",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/DiyaaDaoud/Car-Gallery",
  },
];

export {
  services,
  technologies,
  experiences,
  testimonials,
  webprojects,
  web3projects,
};
