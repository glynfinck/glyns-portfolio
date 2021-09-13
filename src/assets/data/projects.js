import { v4 as uuidv4 } from 'uuid';
import graphEdtiorImg from '../images/graph-editor-portfolio.png';
import glynsPortfolio from '../images/glyns-portfolio.png';

const projects = [
  {
    id: uuidv4(),
    name: 'Graph Editor Application',
    desc:
      'Written in React, this Front-End application allows the user to manipulate a graph (add/remove edges and nodes) and then write custom graph algorithms in python which are visualized in the graph. More information on usage can be found at the corresponding GitHub repository.',
    technologies: ['React', 'Firebase'],
    code: 'https://github.com/glynfinck/graph-editor',
    live: 'https://graph-editor-7e4ef.firebaseapp.com/',
    img: graphEdtiorImg,
  },
  {
    id: uuidv4(),
    name: 'My Personal Portfolio',
    desc:
      'This portfolio website is written in React and is full responsive to different device sizes. It highlights some of my personal projects as well as my previous work experience and contact information.',
    technologies: ['React', 'Firebase'],
    code: 'https://github.com/glynfinck/glyns-portfolio',
    live: 'https://www.glynfinck.ca',
    img: glynsPortfolio,
  },
];

// const projects = [
//   {
//     id: uuidv4(),
//     name: 'U Tracker',
//     desc:
//       'An application to track your all data from one place. I developed the website and the mobile app',
//     img: UTrackerImg,
//     technologies: ['React', 'Node', 'Firebase'],
//     live: 'https://www.google.com',
//     code: 'https://www.google.com',
//   },
//   {
//     id: uuidv4(),
//     name: 'Green CTG',
//     desc:
//       'An app to help people to get an overview of how they can make the city beautiful.',
//     img: GreenCtgImg,
//     technologies: ['React', 'Node', 'Firebase'],
//     live: 'https://www.google.com',
//     code: 'https://www.google.com',
//   },
//   {
//     id: uuidv4(),
//     name: 'Coin Tracker',
//     desc:
//       'Using this app you can track any e coin. Also you will get a good advise about investment form the professional',
//     img: CoinTrackerImg,
//     technologies: ['React', 'Node', 'Firebase'],
//     live: 'https://www.google.com',
//     code: 'https://www.google.com',
//   },
//   {
//     id: uuidv4(),
//     name: "Cavin's Portfolio",
//     desc:
//       'A portfolio for Cavin jr. A artist from New york city. The portfolio is made using ReactJs and GatsbyJs.',
//     img: CavinImg,
//     technologies: ['React', 'Node', 'Firebase'],
//     live: 'https://www.google.com',
//     code: 'https://www.google.com',
//   },
//   {
//     id: uuidv4(),
//     name: 'Tracking Soft',
//     desc:
//       'A tracking website that will show the performance of the website. Also you will get some useful advice to improve the performance.',
//     img: ProjectImg,
//     technologies: ['React', 'Node', 'Firebase'],
//     live: 'https://www.google.com',
//     code: 'https://www.google.com',
//   },
// ];

export default projects;
