import React from "react";
import moment from "moment/moment";

const Detail = ({ singleCardData }) => {
  return (
    <div className="detail-container">
      <div className="detail-card">
        <h1>{singleCardData.name}</h1>
        <p>
          <b>Start Time: </b>
          {moment(singleCardData.start_time).format("lll") === "Invalid date"
            ? singleCardData.start_time
            : moment(singleCardData.start_time).format("lll")}
        </p>
        <p>
          <b>End Time: </b>
          {moment(singleCardData.end_time).format("lll") === "Invalid date"
            ? singleCardData.end_time
            : moment(singleCardData.end_time).format("lll")}
        </p>
        <p>
          <b>Duration: </b>
          {Math.round(singleCardData.duration / 3600)} hrs
        </p>
        <p>
          <b>Website: </b>
          <a href={singleCardData.url} target="_blank" rel="noreferrer">
            {singleCardData.site}
          </a>
        </p>
        <p>
          <b>Status: </b>
          {singleCardData.status}
        </p>
      </div>
    </div>
  );
};

export default Detail;
