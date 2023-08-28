import React from "react";
import Header from "../Layout/Header";
import ShowCase from "../Component/ShowCase/ShowCase";
import MiniCard from "../Component/MiniCard/MiniCard";
import Main2 from "../Layout/Main";

const HomePage = () => {
  return (
    <div>
      <Header />
      <ShowCase />
      <MiniCard />
      <Main2 />
    </div>
  );
};

export default HomePage;
