interface projectCard {
  key: number;
  imgSrc: string;
  alt: string;
  title: string;
  link: string;
  inDevelopment?: boolean;
}

const projectsCards: projectCard[] = [
  {
    key: 1,
    imgSrc: 'https://mattfarley.ca/img/logos/basin.svg',
    alt: 'basin',
    title: 'A powerful, easy-to-configure form backend for designers and developers.',
    link: 'usebasin.com',
  },
  {
    key: 2,
    imgSrc: 'https://mattfarley.ca/img/logos/shipable.svg',
    alt: 'shipable',
    title: 'Short, focused design and growth collabs for startup tech founders.',
    link: 'shipable.io',
  },
  {
    key: 3,
    imgSrc: 'https://mattfarley.ca/img/logos/junkbox.svg',
    alt: 'junkbox',
    title: 'Intelligent API solution for automatic spam protection without the manual work.',
    link: 'in development',
    inDevelopment: true,
  },
  {
    key: 4,
    imgSrc: 'https://mattfarley.ca/img/logos/postpal.svg',
    alt: 'postpal',
    title: 'A people-friendly content publishing platform that integrates with any tech stack.',
    link: 'in development',
    inDevelopment: true,
  },
  {
    key: 5,
    imgSrc: 'https://mattfarley.ca/img/logos/kybercore.svg',
    alt: 'kybercore',
    title: 'Next level plug and play chassis systems for custom DIY lightsaber builds.',
    link: 'in development',
    inDevelopment: true,
  },
  {
    key: 6,
    imgSrc: 'https://mattfarley.ca/img/logos/houston.svg',
    alt: 'houston',
    title: 'Simple feedback and engagement tools that help teams ship winning products.',
    link: 'in development',
    inDevelopment: true,
  },
  {
    key: 7,
    imgSrc: 'https://mattfarley.ca/img/logos/nanobrand.svg',
    alt: 'nanobrand',
    title: 'Human-crafted logos and brand assets for startups and indie hacker projects.',
    link: 'in development',
    inDevelopment: true,
  },
  {
    key: 8,
    imgSrc: 'https://mattfarley.ca/img/logos/dovetail.svg',
    alt: 'dovetail',
    title: 'A space and member management solution for coworking communities.',
    link: 'in development',
    inDevelopment: true,
  },
  {
    key: 9,
    imgSrc: 'https://mattfarley.ca/img/logos/userforge.svg',
    alt: 'userforge',
    title: 'A collaborative tool for creating simple, effective user personas.',
    link: 'in development',
    inDevelopment: true,
  },
];

export default projectsCards;
