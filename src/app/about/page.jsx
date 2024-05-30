"use client"

import React from "react";
import Image from "next/image";
import "@/components/style/about.css"
import Link from "next/link";

const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="detail">
          <h3>Person behind pixels</h3>
          <div className="about_inner">
            <p>
              Hi, I'm Mohsin Khan, a creative and passionate web developer with
              6months+ of experience crafting beautiful and functional websites.
              My journey in web development began with a fascination for
              technology and a love for problem-solving. Over the year, I've
              honed my skills in both front-end and back-end development, making
              me a versatile asset in any project.
            </p>
            <div className="skills">
              <h3>My Skills</h3>
              <div className="skills_inner">
                <Image src={"/html.svg"} width={40} height={40} alt="Html" />
                <Image src={"/css.svg"} width={40} height={40} alt="css" />
                <Image src={"/js.svg"} width={40} height={40} alt="js" />
                <Image src={"/ts.svg"} width={40} height={40} alt="ts" />
                <Image src={"/react.svg"} width={40} height={40} alt="react" />
                <Image src={"/next.svg"} width={40} height={50} alt="next" />
                <Image src={"/node.svg"} width={40} height={40} alt="node" />
                <Image src={"/ex.svg"} width={40} height={40} alt="express" />
                <Image
                  src={"/github.svg"}
                  width={40}
                  height={40}
                  alt="github"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="Get-btn">
          <Link href="/contact">
            <button>Get in touch</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default About;
