import React from "react";
import "./SecAvatar.css";

const SecAvatar = props => {
  console.log("propsssss", props);
  const { displayName, photoURL } = props;
  return (
    <div className="mainMarker">
      <p className="markerInfo">{displayName}</p>
      <div className="markerDiv">
        <img src={`${photoURL}?height=100`} className="avatar" />
      </div>
    </div>
  );
};

export default SecAvatar;
