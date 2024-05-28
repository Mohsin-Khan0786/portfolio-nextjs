"use client";

import React from "react";
import { toast } from "react-hot-toast";

const Home = () => {
  function handleChange() {
    toast.success("Working");
  }
  return (
    <div>
      <button onClick={handleChange}>click</button>
    </div>
  );
};

export default Home;
