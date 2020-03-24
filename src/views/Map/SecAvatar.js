import React from "react";
import MarkerImg from "../../asset/marker.png";
import "./SecAvatar.css";

const SecAvatar = props => {
  console.log("props==>", props);
  return (
    <div>
      <p className="markerInfo">{props.text}</p>
      <div className="markerDiv">
        <img
          src="https://graph.facebook.com/1303055116565692/picture?height=100"
          className="avatar"
        />
      </div>
    </div>
  );
};

export default SecAvatar;
