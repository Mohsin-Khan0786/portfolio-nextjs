// Mark this file as a client component
'use client';

import React, { useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import '@/components/style/navbar.css'; // Ensure this path is correct

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div>
      <nav>
        <h1>Portfolio</h1>
        <IoIosMenu className="menu-icon" onClick={handleMenu} />
        <ul className={`ul ${menu} open `}>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
