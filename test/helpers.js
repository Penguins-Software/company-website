const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Brian Dearing',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Brian Dearing',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Brian Dearing',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Brian Dearing',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Brian Dearing',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
