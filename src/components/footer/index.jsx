import Logo from "../../images/logo.svg";
import LocationIcn from "../../images/icon-location.svg";
import PhoneIcn from "../../images/icon-phone.svg";
import EmailIcn from "../../images/icon-email.svg";

export default function footer() {
  return (
    <div className="footer-container">
      <img className="logo" src={Logo} alt="logo" />
      <div>
        <img src={LocationIcn} alt="location icon" />
        <p className="location-content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
      <div className="phone-email">
        <div className="phone-item">
          <img src={PhoneIcn} alt="location icon" />
          <p>+1-543-123-4567</p>
        </div>
        <div className="phone-item">
          <img src={EmailIcn} alt="location icon" />
          <p>example@fylo.com</p>
        </div>
      </div>
      <div className="other-links">
        <a href="#">About Us</a>
        <a href="#">Jobs</a>
        <a href="#">Press</a>
        <a href="#">Blog</a>
      </div>
      <div className="other-links">
        <a href="#">Contact Us</a>
        <a href="#">Term</a>
        <a href="#">Privacy</a>
      </div>
    </div>
  );
}
