import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import useWindowSize from "react-use/lib/useWindowSize";
import Confetti from "react-confetti";
function App() {
  function play_on_hover() {
    const audio = new Audio("/assets/audio/hover-sound.mp3");

    audio.volume = 0.1;
    audio.play();
  }
  const { width, height } = useWindowSize();
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossOrigin="anonymous"
      />
      <Confetti
        width={width}
        height={height}
        recycle={false}
        numberOfPieces={200}
        frictio={0}
      />
      <center>
        <img
          src="https://avatars.githubusercontent.com/u/65452005?s=400&u=15d2be77743d79ddd13b1eeedcbeb789e37b312a&v=4"
          alt="PFP!"
          className="img-fluid rounded-circle pfp"
        />
        <h1 className="name">SnowBit</h1>
        <br />
        <div className="connections">
          <a
            href="https://github.com/snowbit-coderboi"
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none"
            onMouseEnter={play_on_hover}
          >
            <i className="fab fa-github"></i>&nbsp; Github
          </a>{" "}
          <a
            href="https://twitter.com/snowbitCoderboi"
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none"
            onMouseEnter={play_on_hover}
          >
            <i className="fab fa-twitter"></i>&nbsp; Twitter
          </a>
          <a
            href="https://www.youtube.com/channel/UCNTKqF1vhFYX_v0ERnUa1RQ"
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none"
            onMouseEnter={play_on_hover}
          >
            <i class="fab fa-youtube"></i>&nbsp; Youtube
          </a>
        </div>
        <br />
        {/* <button className="btn btn-secondary">
          Woah! <i class="fas fa-long-arrow-alt-right"></i>
        </button> */}
      </center>
    </div>
  );
}
export default App;
