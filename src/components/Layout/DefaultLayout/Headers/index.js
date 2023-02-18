import "./index.css";
import logo from "../../../../assets/media/images/logo.png";

function Headers() {
  return (
    <div class="header">
      <a href="/">
        <img class="img" src={logo} alt="logo" />
      </a>
      <p class="info">
        Vinh Nguyen <br />
        emailkhongco@mailg.com
      </p>
    </div>
  );
}

export default Headers;
