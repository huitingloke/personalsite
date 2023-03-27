import './App.css';
import { Link } from "react-router-dom";

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
  return (
    <nav className="flex justify-center shadow-xl">
      <Link className="m-3 font-sans text-m italic hover:text-indigo-900" to="/">Home</Link>
      <Link className="m-3 font-sans text-m italic hover:text-indigo-900" to="/about">About</Link>
      <Link className="m-3 font-sans text-m italic hover:text-indigo-900" to="/contact">Contact</Link>
      <Link className="m-3 font-sans text-m italic hover:text-indigo-900" to="/projects">Projects</Link>
    </nav>
  );
}

export const Projects = () => {
  return (
    <div>
      <NavBar />
      <h1>Projects</h1>
      <Footer />
    </div>
  );
}

export const Contact = () => {
  return (
    <div>
      <NavBar />
      <h1>Contact</h1>
      <Footer />
    </div>
  );
}

export const About = () => {
  return (
    <div>
      <NavBar />
      <h1>About</h1>
      <h2>Happiness comes in many forms</h2>
      <p>BUT I HAVE NONE OF THESE</p>
      <Footer />
    </div>
  );
}

export function App() { //this functions as home
  return (
    <div className="bg-pink-900 text-pink-100">
      <NavBar />
      <h1 className="text-center text-5xl bold italic my-5">hi, welcome here buddy.</h1>
      <div className='flex items-center m-8'>
        <img className="rounded-full w-1/4" alt="hi it do be beth" src="https://avatars.githubusercontent.com/u/96629569?v=4" />
        <div className="flex flex-col text-center">
          <h2 className='text-3xl italic'>quick synopsis</h2>
          <p>
            Hi! My name is Beth and I have taken an interest in full stack development! I hope you enjoy navigating around this website.
            I am currently a student studying Computing and Law at Singapore Management University, in my first (going on second) year!
            Current interests of mine include coding, reading, writing, music, and blockchain technologies! 
            More importantly, I'm striving to improve myself everyday and would like to find like-minded people.
          </p>
        </div>
      </div>
      <h2 className='text-center text-3xl my-4 italic'>stats</h2>
      <StatTable />
      <Footer />
    </div>
  );
}
