
import About from "@/components/ui/About";
import Home from "@/components/ui/Home";
import React from "react";
import page from '@/app/message/page'

const Main = () => {
  return (
    <>
    {/* <Navbar/> */}
      <Home />
      <About/>
      <page/> 
    </>
  );
};

export default Main;
