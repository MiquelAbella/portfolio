import { useState } from "react";
import "./App.css";

import { About } from "./components/about/About";
import { Main } from "./components/main/Main";
import { Link } from "react-scroll";
import { Projects } from "./components/projects/Projects";
import { Video } from "./components/video/Video";

import downArrow from "./assets/downArrow.png";

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const [videoUrl, setVideoUrl] = useState("");

  const handleToggleVideo = () => {
    setIsVideoPlaying(!isVideoPlaying);
  };

  return (
    <>
      {isVideoPlaying && (
        <Video handleToggleVideo={handleToggleVideo} videoUrl={videoUrl} />
      )}
      <nav>
        <Link to="main" spy={true} smooth={true} offset={-70} duration={500}>
          <h1 className="section-title">MAIN</h1>
        </Link>
        <Link to="about" spy={true} smooth={true} offset={-70} duration={500}>
          <h1 className="section-title">ABOUT</h1>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <h1 className="section-title">PROJECTS</h1>
        </Link>
        <Link to="contact" spy={true} smooth={true} offset={-70} duration={500}>
          <h1 className="section-title">CONTACT</h1>
        </Link>
      </nav>
      <div className="App">
        <Link
          className="down-arrow"
          to="about"
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          <img src={downArrow} />
        </Link>
        <div className="components-container">
          <Main id="main" />
          <About id="about" />
          <Projects
            id="projects"
            setVideoUrl={setVideoUrl}
            handleToggleVideo={handleToggleVideo}
          />
        </div>
        <div className="contact-container" id="contact">
          <h1>abellagarciamiquel@gmail.com</h1>
        </div>
        <div className="divider">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M598.97 114.72L0 0 0 120 1200 120 1200 0 598.97 114.72z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </>
  );
}

export default App;
