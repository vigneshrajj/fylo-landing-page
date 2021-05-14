import Logo from "../../images/logo.svg";

export default function header() {
  return (
    <div className="header-container">
      <img src={Logo} alt="logo" />
      <ul>
        <li>Features</li>
        <li>Team</li>
        <li>Sign In</li>
      </ul>
    </div>
  );
}
