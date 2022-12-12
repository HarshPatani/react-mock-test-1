import React from "react";
import SingleCard from "../components/SingleCard";
import logo from "../assets/schedule.png";

const Home = ({ data, setSingleCardData }) => {
  return (
    <div className="home">
      <h1>
        <img
          src={logo}
          alt={logo}
          style={{ width: "3rem", margin: "0 1rem 0 0" }}
        />
        Coding Contest Calender
      </h1>
      <main>
        {data.map((item, idx) => {
          return (
            <SingleCard
              key={idx}
              setSingleCardData={setSingleCardData}
              item={item}
            />
          );
        })}
      </main>
    </div>
  );
};

export default Home;
