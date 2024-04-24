import React from "react";

function Home(props) {
  return (
    <div id="home">
      <h1 style={{ color: props.theColor }}>
        {props.theName} is a Web Developer from {props.theCity}
      </h1>
    </div>
  );
}

export default Home;
