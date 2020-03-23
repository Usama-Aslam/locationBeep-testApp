import React from "react";
import MarkerImg from "../../asset/marker.png";
import "./SecAvatar.css";

const SecAvatar = props => {
  return (
    <div className="markerDiv">
      <img
        src="https://graph.facebook.com/1303055116565692/picture?height=100"
        className="avatar"
      />
    </div>
  );
};

export default SecAvatar;
