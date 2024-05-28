import React from "react";
import '@/components/style/style.css'
const Navbar = () => {
  return (
    <>
    <nav>
      <h1>Portfolio</h1>
      <FontAwesomeIcon icon="fa-solid fa-bars" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>

    </nav>
    </>
  );
};

export default Navbar;
