import React from "react";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

const SingleCard = ({ item, setSingleCardData }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => {
        setSingleCardData(item);
        navigate("/detail");
      }}
      className="card"
    >
      <h3>{item.name}</h3>
      <p>
        <b>Start Time: </b>
        {moment(item.start_time).format("lll") === "Invalid date"
          ? item.start_time
          : moment(item.start_time).format("lll")}
      </p>
      <p>
        <b>End Time: </b>
        {moment(item.end_time).format("lll") === "Invalid date"
          ? item.end_time
          : moment(item.end_time).format("lll")}
      </p>
      <p>
        <b>Duration: </b>
        {Math.round(item.duration / 3600)} hrs
      </p>
      <div className="flex-container">
        <p>
          <b>Website: </b>
          <br />
          <a href={item.url} target="_blank" rel="noreferrer">
            {item.site}
          </a>
        </p>
        <p>
          <b>Status: </b>
          <br />
          {item.status}
        </p>
      </div>
    </div>
  );
};

export default SingleCard;
