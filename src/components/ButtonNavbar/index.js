import "./button.scss";

// TODO: disabled style to be removed
const ButtonNavbar = ({ text, icon, disabled, onClick }) => <li onClick={ onClick } className={ "button-navbar" + (disabled ? " disabled" : "") }>
  <i className={ "fa fa-lg fa-" + icon }></i>{ text }
</li>;

export default ButtonNavbar;