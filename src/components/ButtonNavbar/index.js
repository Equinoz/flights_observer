import "./button.scss";

const ButtonNavbar = ({ text, icon }) => <li className="button-navbar">
  <i className={ "fa fa-lg fa-" + icon }></i>{ text }
</li>;

export default ButtonNavbar;