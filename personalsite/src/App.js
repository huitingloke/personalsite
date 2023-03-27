import './App.css';
import { Link } from "react-router-dom";

const headerStyle = "text-center montserrat text-5xl bold italic my-5 flex flex-col justify-center";

const Footer = () => {
  return (
    <footer className="text-center text-xs mx-5 my-3">
      This website is property of Bethel Loke Hui Ting. Please do not steal things or she will be very upset and cry loudly enough to embarrass the thief. You have been warned.
    </footer>
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
    <table className="flex justify-center align-center text-center">
      <div>
        <thead>
          <tr>
            <th className="italic">Object</th>
            <th className="italic">Specification</th>
          </tr>
        </thead>
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
      <Link className={linkStyle} to="/projects">Projects</Link>
    </nav>
  );
}

export const Projects = () => {
  return (
    <div>
      <NavBar />
      <h1 className={headerStyle}>Whatcha doin'?</h1>
      <Footer />
    </div>
  );
}

export const Contact = () => {
  return (
    <div>
      <NavBar />
      <h1 className={headerStyle}>Talk to me (please)</h1>
      <Footer />
    </div>
  );
}

export const About = () => {
  return (
    <div>
      <NavBar />
      <h1 className={headerStyle}>About me...?</h1>
      <img className="w-3/12 h-auto rounded-3xl" src={require('./icecream.jpg')} alt="Me in my glory days" />
      <h2 className='montserrat text-center text-3xl my-4 italic'>stats</h2>
      
      <StatTable />
      <Footer />
    </div>
  );
}

export function App() { //this functions as home
  return (
    <div className="width-full">
      <NavBar />
      <h1 className={headerStyle}>Welcome here, buddy.</h1>
      <div className='flex items-center mx-8 justify-center my-10'>
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
