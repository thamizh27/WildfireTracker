import React from "react";

const LocationInfo = ({ info }) => {
  return (
    <div className="location-info">
      <h1>Location Info</h1>
      <ul>
        <li>ID : {info.id}</li>
        <li>TITLE : {info.title}</li>
      </ul>
    </div>
  );
};

export default LocationInfo;
