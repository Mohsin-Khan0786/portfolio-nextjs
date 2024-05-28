"use client";

import React from "react";
import { toast } from "react-hot-toast";

const Home = () => {
  function handleClick() {
    toast.success("Working");
  }

  return <button onClick={handleClick}>Click</button>;
};

export default Home;
