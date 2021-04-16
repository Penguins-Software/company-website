const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Penguins Software',
    heading: 'PENGUINS SOFTWARE',
  },
  {
    route: '/Services',
    title: 'Services | Penguins Software',
    heading: 'SERVICES',
  },
  {
    route: '/contact',
    title: 'Contact | Penguins Software',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
