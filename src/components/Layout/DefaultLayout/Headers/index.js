import './index.css';
import logo from '../../../../assets/images/logo.png';

function Headers() {
  return (
    <div className="header">
      <a href="/">
        <img alt="logo" className="img" src={logo} />
      </a>
      <p className="info">
        Vinh Nguyen <br />
        emailkhongco@mailg.com
      </p>
    </div>
  );
}

export default Headers;
