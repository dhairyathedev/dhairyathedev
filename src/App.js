import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
        integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
        crossOrigin="anonymous"
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
          >
            <i className="fab fa-github"></i>&nbsp; Github
          </a>{" "}
          <a
            href="https://lu.ma/u/usr-f7m6AOf4Nu0bFCP"
            target="_blank"
            rel="noreferrer noopener"
            className="text-decoration-none"
          >
            <i className="fas fa-link"></i>&nbsp; Lu.ma
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
