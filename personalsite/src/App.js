import './App.css';
import { Link } from "react-router-dom";

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
    <table>
      <thead border="1">
        <tr>
          <th>Object</th>
          <th>Specification</th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(STATS).map(key =>
          <tr>
            <td>{key}</td>
            <td>{STATS[key]}</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/resume">Resume</Link>
    </nav>
  );
}

export const Resume = () => {
  return (
    <div>
      <NavBar />
      <h1>Resume</h1>
    </div>
  );
}

export const Contact = () => {
  return (
    <div>
      <NavBar />
      <h1>Contact</h1>
      
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
    </div>
  );
}

export function App() { //this functions as home
  return (
    <div className="App">
      <NavBar />
      <h1>beth</h1>
      <img alt="literally a dog" src="https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" />
      <p>Hi! My name is Beth and I have taken an interest in full stack development! I hope you enjoy navigating around this website.</p>
      <h2>stats</h2>
      <StatTable />
      
    </div>
  );
}

export default App();