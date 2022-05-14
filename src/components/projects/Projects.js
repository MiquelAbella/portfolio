import React from "react";

import palmira from "../../assets/palmira.png";
import rogImg from "../../assets/rogImg.png";
import guessImg from "../../assets/guessImg.png";
import kitchenMate from "../../assets/kitchenMate.png";
import mikeflix from "../../assets/mikeflix.png";
import taulell from "../../assets/taulell.png";
import descomptes from "../../assets/descomptes.png";

import guessVideo from "../../assets/guessVideo.mp4";
import rogVideo from "../../assets/rogVideo.mp4";
import smartVideo from "../../assets/smartVideo.mp4";
import palmiraVideo from "../../assets/palmiraVideo.mp4";
import mikeflixVideo from "../../assets/mikeflixVideo.mp4";
import loTaulellVideo from "../../assets/loTaulellVideo.mp4";
import dLleidaVideo from "../../assets/dLleidaVideo.mp4";

export const Projects = ({ id, handleToggleVideo, setVideoUrl }) => {
  const onMouseEnter = (e) => {
    let projectPic = document.getElementsByClassName("project-pic");
    let projectLink = document.getElementsByClassName("project-link");
    console.log(projectLink[e.target.getAttribute("index")]);
    projectLink[e.target.getAttribute("index")].style.opacity = "1";
    projectPic[e.target.getAttribute("index")].style.filter = "brightness(0.2)";
  };
  const onMouseLeave = (e) => {
    let projectPic = document.getElementsByClassName("project-pic");
    let projectLink = document.getElementsByClassName("project-link");
    console.log(projectLink[e.target.getAttribute("index")]);
    projectLink[e.target.getAttribute("index")].style.opacity = "0";
    projectPic[e.target.getAttribute("index")].style.filter = "brightness(1)";
  };

  return (
    <div className="projects-section ">
      <h1 className="projects-title" id={id}>
        Projects
      </h1>
      <p className="projects-msg">
        *I made videos of each app because most of the apps requires register
        and login and some of them are not deployed.
      </p>
      <div className="projects-container">
        <div className="project">
          <div className="project-description">
            <h1>Palmira</h1>
            <p>
              Palmira is an app that helps improving the quality of life of
              elderly people who had lost certain cognitive skills. A relative
              of the elderly person schedules the week for the, let's say,
              grandmother: Pills times and quantity, appointments, activities,
              visits, etc.
              <br></br>
              <br></br>
              It has to frontends: A caregiver person frontend where the user
              can schedule the week for the elderly person, who has a wpa
              installed in the smartphone.
              <br></br>
              <br></br>
              My grandma, just pushing a single button, recieves a voice message
              saying: Good morning, today is Monday, it's 12:34, remember that
              at 13:00 you have to go to memory classes. And I recieve the day,
              time, and location of the message.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE WPA</strong>
            </p>
          </div>

          <div
            className="project-img"
            index={0}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img className="project-pic" alt="" src={palmira} index={0} />
            <h1
              className="project-link"
              index={0}
              onClick={() => {
                setVideoUrl(palmiraVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Rise of Gods</h1>
            <p>
              Rise of Gods is a card-based game made with React. I'm looking for
              a game developer to improve the gaming experience. In this app you
              can earn gems, gems recharge after certain amount of time, you can
              upgrade gods using gems and god tokens that you earn fighting.
              <br></br>
              <br></br>
              Each god has it's own abilities &#40; Poison, increase attack,
              decrease enemie's attack, etc. &#41;.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE</strong>
            </p>
          </div>
          <div
            className="project-img"
            index={1}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img className="project-pic" alt="" src={rogImg} index={1} />
            <h1
              className="project-link"
              index={1}
              onClick={() => {
                setVideoUrl(rogVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>#GUESS</h1>
            <p>
              #GUESS is a different dating app. It is not based on appearance.
              When you register a user, the user has to write 3 abc questions
              and the options you want to be answered. When a user wants to
              contact you, he doesn't see any photo until he answers correctly
              at least 2 of the 3 questions.
              <br></br>
              <br></br>
              After that he or she can start a conversation with you.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE SOCKET.IO</strong>
            </p>
          </div>
          <div
            className="project-img"
            index={2}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img className="project-pic" alt="" src={guessImg} index={2} />
            <h1
              className="project-link"
              index={2}
              onClick={() => {
                setVideoUrl(guessVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Smart Cheff</h1>
            <p>
              Have you ever faced the problem that you have 375g of salmon and
              the recipe is based on a 1000g piece of salmon and you have to
              multiply and divide each ingredient? If you have faced that
              problem, Smart Cheff is the solution.
              <br></br>
              <br></br>
              You choose a recipe and then adjust the quantity you need. Smart
              Cheff does the numbers for you!
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE API</strong>
            </p>
          </div>
          <div
            className="project-img"
            index={3}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img
              className="project-pic"
              alt=""
              src={kitchenMate}
              onClick={() => {
                setVideoUrl(smartVideo);
                handleToggleVideo();
              }}
              index={3}
            />
            <h1
              className="project-link"
              index={3}
              onClick={() => {
                setVideoUrl(smartVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Mikeflix</h1>
            <p>
              It's a Netflix clone where instead of viewing movies, you can view
              trailers. You can vote for movies or TV serials and Mikeflix gives
              you a list of recommendations based on the movies or serials you
              voted at least with 3 stars.
              <br></br>
              <br></br>
              You can spend an afternoon watching trailers of the movies you can
              watch at night in netflix.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE API</strong>
            </p>
          </div>
          <div
            className="project-img"
            index={4}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img
              className="project-pic"
              alt=""
              src={mikeflix}
              onClick={() => {
                setVideoUrl(mikeflixVideo);
                handleToggleVideo();
              }}
              index={4}
            />
            <h1
              className="project-link"
              index={4}
              onClick={() => {
                setVideoUrl(mikeflixVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Lo Taulell</h1>
            <p>
              Lo Taulell is a web app where you can post a job you need to be
              done at certain time with a certain amount of money as a reward
              and people can accept the job.
              <br></br>
              <br></br>
              Imagine that you have to walk the dog. You post a message at a
              calendar saying you need someone to walk your dog for 5 euros.
              Users can call you to do that work for you.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE OTHER FRAMEWORKS</strong>
            </p>
          </div>
          <div
            className="project-img"
            index={5}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img
              className="project-pic"
              alt=""
              src={taulell}
              onClick={() => {
                setVideoUrl(loTaulellVideo);
                handleToggleVideo();
              }}
              index={5}
            />
            <h1
              className="project-link"
              index={5}
              onClick={() => {
                setVideoUrl(loTaulellVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
        <div className="project">
          <div className="project-description">
            <h1>Descomptes Lleida</h1>
            <p>
              Descomptes Lleida is a discounts app, users can exchange virtual
              discount cupons in cultural place, bars, restaurants, cinemas,
              etc.
              <br></br>
              <br></br>
              Users have to show a virtual cupon and exchange it in front of the
              person who serve them.
            </p>
            <br></br>
            <br></br>
            <p>
              <strong>REACT MONGODB EXPRESS NODE</strong>
            </p>
          </div>
          <div
            className="project-img"
            index={6}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
            <img
              id="descomptes"
              className="project-pic"
              alt=""
              src={descomptes}
              onClick={() => {
                setVideoUrl(dLleidaVideo);
                handleToggleVideo();
              }}
              index={6}
            />
            <h1
              className="project-link"
              index={6}
              onClick={() => {
                setVideoUrl(dLleidaVideo);
                handleToggleVideo();
              }}
            >
              See more
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};
