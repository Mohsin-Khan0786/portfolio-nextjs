"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import "@/components/style/navbar.css";

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <nav>
        <h1>Mohsin</h1>
        <ul className={menu ? "menu active" : "menu"}>
          <li>Home</li>
          <li>About</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
        <IoIosMenu className="menu-icon" onClick={handleMenu} size={30}/>
      </nav>
    </div>
  );
};

export default Navbar;
