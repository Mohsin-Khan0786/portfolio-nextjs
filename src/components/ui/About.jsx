import React from "react";
import Image from "next/image";
import "@/components/style/about.css";
const About = () => {
  return (
    <>
      <div className="about-main">
        <div className="detail">
          <h3>The Person Behind the Pixels</h3>
          <p>
            Hi, I'm Mohsin Khan, a creative and passionate web developer with
            6months+ of experience crafting beautiful and functional websites.
            My journey in web development began with a fascination for
            technology and a love for problem-solving. Over the year, I've honed
            my skills in both front-end and back-end development, making me a
            versatile asset in any project. My work is driven by a commitment to
            excellence, user-centric design, and a relentless pursuit of
            innovation. Whether it's building a sleek, responsive interface or
            designing a robust back-end system, I thrive on bringing ideas to
            life through code. Outside of coding, I'm an avid learner, always
            exploring new technologies and trends to stay ahead in this
            ever-evolving field. When I'm not immersed in a coding challenge,
            you can find me . Let's create something amazing together!
          </p>
        </div>
        
        <div className="about-pic">
          <Image
            src={"/mohsin.png.png"}
            width={500}
            height={500}
            alt="Picture of the author"
          />
        </div>
       
      </div>
      <div className="Get-btn">
          <button>Get in touch</button>
        </div>
    </>
  );
};

export default About;
