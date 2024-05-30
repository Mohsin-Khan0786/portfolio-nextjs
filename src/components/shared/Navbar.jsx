"use client";

import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import "@/components/style/navbar.css";
import Link from "next/link";

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
          <Link href="/">
            <li>Home</li>
          </Link>

          <Link href="/about">
            <li>About</li>
          </Link>
          <li>Portfolio</li>

          <Link href="/contact">
            <li>Contact</li>
          </Link>
        </ul>
        <IoIosMenu className="menu-icon" onClick={handleMenu} size={30} />
      </nav>
    </div>
  );
};

export default Navbar;
