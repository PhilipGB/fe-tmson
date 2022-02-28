import React from "react";
import Carousel from "./Carousel";
import CreateJob from "./CreateJob";
import SearchBar from "./SearchBar";
import TaskList from "./TaskList"

const Home = () => {
  return (
    <div>
      <SearchBar />
      <Carousel />
    </div>
  );
};

export default Home;
