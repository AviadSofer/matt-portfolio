interface Skill {
  id: number;
  iconSrc: string;
  alt: string;
  title: string;
  explain: string;
  skillsTitle: string;
  skills: string;
  toolsTitle: string;
  tools: string;
}

const skillsColumns: Skill[] = [
  {
    id: 1,

    iconSrc: 'https://res.cloudinary.com/dmjmaixrd/image/upload/v1667246536/designer_pwkcbs.png',
    alt: 'designer',

    title: 'Designer',
    explain:
      'I value simple content structure, clean design patterns, and thoughtful interactions.',

    skillsTitle: 'Things I enjoy designing:',
    skills: 'UX, UI, Web, Apps, Logos',

    toolsTitle: 'Design Tools:',
    tools: `Affinity Designer
    Figma
    Font Awesome
    Pen & Paper
    Sketch
    Webflow`,
  },
  {
    id: 2,

    iconSrc: 'https://res.cloudinary.com/dmjmaixrd/image/upload/v1667246536/developer_hgettf.png',
    alt: 'Frontend Developer',

    title: 'Frontend Developer',
    explain: 'I like to code things from scratch, and enjoy bringing ideas to life in the browser.',

    skillsTitle: 'Languages I speak:',
    skills: 'HTML, Pug, Slim, CSS, Sass, Git',

    toolsTitle: 'Dev Tools:',
    tools: `Atom
    Bitbucket
    Bootstrap
    Bulma
    Codekit
    Github
    Surge
    Terminal
    Vercel`,
  },
  {
    id: 3,

    iconSrc: 'https://res.cloudinary.com/dmjmaixrd/image/upload/v1667246536/mentor_uhk3wy.png',
    alt: 'designer',

    title: 'Mentor',
    explain:
      'I genuinely care about people, and love helping fellow designers work on their craft.',

    skillsTitle: 'Experiences I draw from:',
    skills: 'UX/UI, Product design, Freelancing',

    toolsTitle: 'Mentor Stats:',
    tools: `7 years experience
    26 short courses
    65 bootcamps
    200+ students
    2,350+ mentor sessions
    60+ group critiques
    16,500+ comments`,
  },
];

export default skillsColumns;
