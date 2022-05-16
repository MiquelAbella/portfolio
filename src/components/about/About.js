import React from "react";

export const About = ({ id }) => {
  return (
    <div className="about-section" id={id}>
      <h1>About me</h1>
      <div className="about-container">
        <p>
          I am Miquel, a software developer based in Lleida. I am 32 years old
          and I have been working as a teacher for several years. A few years
          ago I started studying web development and I really enjoy coding and
          make things work and happen. I'm very committed to teamwork and I
          enjoy learning a lot.
          <br></br>
          <br></br>I have made several projects and I feel comfortable with
          &nbsp;
          <strong>JAVASCRIPT, REACT, REDUX, EXPRESS</strong> and working with
          &nbsp;
          <strong>DATABASES</strong> as well as{" "}
          <strong>VANILLA JAVASCRIPT</strong>.<br></br>
          <br></br>I made a lot of projects including a card-based game, a
          discounts app, a ingredients calculator of recipes, a feminist dating
          app, a slack bot, a Netflix clone, an app where you can ask for
          someone to do a job for you, etc.
          <br></br>
          <br></br>
          But the project that made me feel more proud is based on elderly
          persons that start to lose cognitive skills. It's called Palmira, like
          me grandmother. She finds it very useful and made her feel more
          confident with her daily routines.
        </p>
      </div>
    </div>
  );
};
