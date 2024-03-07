import PropTypes from "prop-types";

const Button = ({ color, text, onMouseOver}) => {
  return (
    <button
    onMouseOver={onMouseOver}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
};
Button.defualtProps = {
  color: "steelblue",
};
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onMouseOver:PropTypes.func,
};
export default Button;
