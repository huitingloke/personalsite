import './App.css';
import { Link } from "react-router-dom";

const headerStyle = "text-center montserrat text-5xl bold italic my-7 flex flex-col justify-center";

const SkillList = (props) => {
  console.log(props);
  const skillname = props.skillname;
  const skilllist = props.skilltype;
  const image = props.image;
  console.log(skilllist);
  return (
    <table className="m-5 w-1/3">
      <thead>
        <th className="text-lg">{skillname}</th>
      </thead>
      <tbody>
      {skilllist.map(item =>
        <tr>{item}</tr>
      )}
      <img 
        src={image} 
        alt="Clearly in her right mind"
        className="rounded-full h-full w-full my-4"
      />
      </tbody>
    </table>
    );
}

const AddOnTable = () => {
  
  const gamerList = {
    "Hobbies": [
      "Blockchain Development -- Solidity, Ethereum",
      "Sports -- Rock climbing, Muay Thai, Krav Maga",
      "3D modelling -- Blender",
      "Music -- instruments, singing, composing",
      "Visual arts"
    ],
    "Skills": [
      "Coding -- Python, Javascript, PHP", 
      "Databases -- MySQL, SQLLite, MongoDB",
      "Git, Node.js, Microsoft Suite",
      "Essay writing and research",
      "Web development -- HTML, CSS, Tailwind"
    ],
    "Education": [
      "Pei Hwa Presbyterian Primary School",
      "ACS International",
      "Singapore Management University"
    ]
  }

  return (
    <div className="flex flex-row">
      <SkillList skilltype={gamerList["Hobbies"]} skillname="Hobbies" 
        image={require('./sanity1.jpg')} />
      <SkillList skilltype={gamerList["Skills"]} skillname="Skills" 
        image={require('./sanity2.jpg')}
      />
      <SkillList skilltype={gamerList["Education"]} skillname="Education" 
        image={require('./sanity3.jpg')}
      />
    </div>
  );
}

const StatTable = () => {

  const STATS = {
    "Name": "Bethel Loke Hui Ting",
    "Nickname": "Beth",
    "Birthday": "2003-05-04",
    "Age": 20,
    "School": "Singapore Management University",
    "Course": "Computing & Law",
    "Year": 1
  }

  return (
    <table className="flex sm:flex-col justify-center align-center text-right">
      <div>
        <tbody>
          {Object.keys(STATS).map(key =>
            <tr>
              <td className="italic px-5">{key}</td>
              <td className="px-5">{STATS[key]}</td>
            </tr>
          )}
        </tbody>
      </div>
    </table>
  );
}

const NavBar = () => {
  const linkStyle = "m-3 font-sans text-m italic hover:text-indigo-900";
  return (
    <nav className="flex justify-center shadow-xl">
      <Link className={linkStyle} to="/">Home</Link>
      <Link className={linkStyle} to="/about">About</Link>
      <Link className={linkStyle} to="/contact">Contact</Link>
    </nav>
  );
}

const Footer = () => {
  return (
    <footer className="text-center text-xs mx-5 my-3">
      This website is property of Bethel Loke Hui Ting. Please do not steal things or she will be very upset and cry loudly enough to embarrass the thief. You have been warned.
    </footer>
  );
}

const Hovercards = (props) => { //choose 5 images for yourslef later, please ensure they are square
  let name = props.name, tag = props.tag, image = props.image, link = props.link;
  return (
    <a href={link} className="scale-100 hover:scale-110 hover:z-10 ease-in duration-200 rounded-lg bg-white shadow-lg m-4 p-5 w-64">
      <img src={image} alt="something" className="rounded-lg" /> 
      <div className="flex flex-col justify-center items-center">
        <h1 className="mt-4 text-xl">{name}</h1>
        <p className=""><i>{tag}</i></p>
      </div>
    </a>
    
  );
}

export const Contact = () => {
  return (
    <div>
      <NavBar />
      <h1 className={headerStyle}>Talk to me (please)</h1>
      <div className="flex flex-wrap justify-center">
        <Hovercards name="Discord" tag="> squiddy <#0771" image={require('./LOGOdiscord.png')} link="https://discord.com" />
        <Hovercards name="Telegram" tag="@dobesquiddy" image={require('./LOGOtelegram.png')} link="https://t.me/dobesquiddy" />
        <Hovercards name="Email" tag="huitingloke@gmail.com" image={require('./LOGOgmail.png')} link="mailto:huitingloke@gmail.com" />
        <Hovercards name="Github" tag="huitingloke" image={require('./LOGOgithub.png')} link="https://github.com/huitingloke" />
        <Hovercards name="LinkedIn" tag="bethloke" image={require('./LOGOlinkedin.png')} link="https://www.linkedin.com/in/bethloke/" />
      </div>
      <Footer />
    </div>
  );
}

export const About = () => {
  return (
    <div className="sm:flex sm:flex-col">
      <NavBar />
      <h1 className={headerStyle}>Who is this clown?</h1>
      <div className="md:flex md:justify-center md:items-center">
      <img className="w-1/5 h-auto rounded-3xl hue-rotate-180" src={require('./icecream.jpg')} alt="Me in my glory days" />
        <div>
          <h2 className='montserrat text-right text-3xl my-4 italic'>--- the roll i was given</h2>
          <StatTable />
        </div>
      </div>
      <AddOnTable />
      <Footer />
    </div>
  );
}

export function App() { //this functions as home
  return (
    <div className="width-full">
      <NavBar />
      <h1 className={headerStyle}>Welcome here, buddy.</h1>
      <div className='sm:flex-row flex-col flex items-center mx-8 justify-center my-10'>
        <img className="rounded-full w-1/4" alt="hi it do be beth" src="https://avatars.githubusercontent.com/u/96629569?v=4" />
        <div className="flex flex-col text-center w-3/5">
          <h2 className='montserrat text-3xl italic my-3'>quick synopsis</h2>
          <p className="px-5 raleway">
            Hi! My name is Beth and I have taken an interest in <b>full stack development</b>! I hope you enjoy navigating around this website.
            I am currently a student studying <b>Computing and Law</b> at Singapore Management University, in my first (going on second) year!
            Current interests of mine include coding, reading, writing, music, and <b>blockchain technologies</b>! 
            More importantly, I'm striving to improve myself everyday and would like to find like-minded people.
          </p>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
