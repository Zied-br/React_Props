import React from "react";
import Image from "./Image";
import PropTypes from "prop-types";
const Profile = ({ fullName, bio, profession, alert }) => {
  const imgSrc = "./imgZied.jpg";
  const nameStyle = {
    fontFamily: "Georgia, sans-serif",
    fontSize: "2em",
    letterSpacing: -2,
    color: "#008cba",
    textShadow: "1px 2px 4px #267e9c",
    opacity: `85%`,
  };
  const professionStyle = {
    fontFamily: `"Trebuchet MS", sans-serif`,
    letterSpacing: -1,
    color: `grey`,
    textTransform: `uppercase`,
    fontStyle: `italic`,
    borderBottom: `px solid`,
    BorderWidth: `50%`,
  };
  const bioStyle = {
    fontFamily: ` "Trebuchet MS", sans-serif`,
    fontSize: 18,
    backgroundColor: `rgb(232, 233, 235)`,
    color: `black`,
  };
  const buttonStyle = {
    backgroundColor: ` #008cba`,
    color: `White`,
    fontSize: 20,
    padding: 10,
    fontFamily: `Source Sans Pro, sans-serif`,
    borderRadius: 5,
    borderColor: `#267e9c`,
  };
  return (
    <div>
      <div className="stylings">
        <Image src={imgSrc} />
        <div>
          <h1 style={nameStyle}>{fullName} </h1>
          <h3 style={professionStyle}>{profession}</h3>
        </div>
      </div>
      <p style={bioStyle}>{bio}</p>
      <button onClick={alert} style={buttonStyle}>
        Greeting
      </button>
    </div>
  );
};
Profile.defaultProps = {
  fullName: `No One`,
  bio: `Nothing`,
  profession: `No Job`,
};
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default Profile;
