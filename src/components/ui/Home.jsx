"use client";

import React from "react";
import Image from "next/image";
import "@/components/style/home.css";
const Home = () => {
  return (
    <>
      <div className="main">
        <div className="profile">
          <Image
            src="/mohsin.png.png"
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
        <div className="title">
          <h5>Hello, </h5>
          <h4>I am </h4>

          <h1>Mohsin Khan</h1>
          <span>
            <h3>A Passionate Web Developer</h3>
          </span>

          <h3> IT Engineer</h3>

          <div className="social">
            <button>
            <a href="">My LinkDin</a>
            </button>
           
          <button>
          <a href="">My GitHub</a>
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
