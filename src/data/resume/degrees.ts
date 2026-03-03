export interface DegreeEntry {
  school: string;
  degree: string;
  link: string;
  year: string;
  gpa?: string;
}

const degrees: DegreeEntry[] = [
  {
    school: 'Georgia Institute of Technology',
    degree: 'M.S. Computer Science',
    link: 'https://www.gatech.edu/',
    year: '2024 -- Present',
  },
  {
    school: 'University of Pune',
    degree: 'B.E. Information Technology',
    link: 'http://www.unipune.ac.in/',
    year: '2015 -- 2019',
    gpa: '9.23/10',
  },
];

export default degrees;

