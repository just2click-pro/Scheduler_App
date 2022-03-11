import React from 'react'
import { Link } from 'react-router-dom';
import "./Navbar.css";

function Navbar() {
  return (
    <nav className='navbar bg-dark container'>
        <h4><Link to="/register">Registration Screen</Link></h4>
        <h4><Link to="/scheduler">Scheduler Screen</Link></h4>
    </nav>
  )
}

export default Navbar;

/*<h4><Link to="/gantt">Gantt Screen</Link></h4>*/