const skills = [
  {
    title: 'Javascript',
    competency: 4,
    category: ['Web Development', 'Programming Language', 'Blockchain'],
  },
  {
    title: 'Node.JS',
    competency: 5,
    category: ['Web Development', 'Frameworks', 'Blockchain'],
  },
  {
    title: 'MongoDB',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'PostgreSQL/MySQL',
    competency: 4,
    category: ['Web Development', 'Databases'],
  },
  {
    title: 'ReactJS',
    competency: 4,
    category: ['Web Development', 'Blockchain'],
  },
  {
    title: 'Redux',
    competency: 3,
    category: ['Web Development', 'Blockchain'],
  },
  {
    title: 'Bash',
    competency: 2,
    category: ['Tools', 'Programming Language'],
  },
  {
    title: 'Express.JS',
    competency: 5,
    category: ['Web Development', 'Frameworks'],
  },
  {
    title: 'Ethereum',
    competency: 5,
    category: ['Blockchain'],
  },
  {
    title: 'Solidity',
    competency: 4,
    category: ['Blockchain', 'Programming Language'],
  },
  {
    title: 'Git',
    competency: 5,
    category: ['Tools'],
  },
  {
    title: 'Kubernetes',
    competency: 2,
    category: ['Tools'],
  },
  {
    title: 'Azure',
    competency: 5,
    category: ['Cloud'],
  },
  {
    title: 'Amazon Web Services',
    competency: 4,
    category: ['Cloud'],
  },
  {
    title: 'Docker',
    competency: 3,
    category: ['Tools'],
  },
  {
    title: 'Typescript',
    competency: 5,
    category: ['Web Development', 'Programming Language'],
  },
  {
    title: 'HTML + SASS/SCSS/CSS',
    competency: 4,
    category: ['Web Development'],
  },
  {
    title: 'Python',
    competency: 3,
    category: ['Programming Language'],
  },
  {
    title: 'Go',
    competency: 2,
    category: ['Programming Language'],
  },
  {
    title: 'C/C++',
    competency: 1,
    category: ['Programming Language'],
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be === to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.flatMap(({ category }) => category)),
].sort().map((category, index) => ({
  name: category,
  color: colors[index],
}));

export { categories, skills };
