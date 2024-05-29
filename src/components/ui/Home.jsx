"use client";

import React from "react";
import Image from "next/image";
import "@/components/style/home.css";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="title">
          <h5>Hello 👋, I an </h5>
          <h1>Mohsin Khan</h1>
          <h3>A Passionate Web Developer</h3>
          <p>
            I'm a Full-Stack Developer with 6 months of hands-on experience in
            designing, developing, and implementing applications and solutions
            using a range of technologies and programming languages.
          </p>
          <div className="social">
            <button>My Resume</button>

            <button>My GitHub</button>
          </div>
        </div>

        <div className="profile">
          <Image
            src="https://syedhashir-portfolio.netlify.app/assets/about-Pg4MNHWI.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
      </div>
    </>
  );
};

export default Home;
