import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title }) => {
    const onMouseOver=()=>{
      console.log("Click")
    }

  return (
    <header className="header">
      <h1>{title}</h1>
      <Button color="green" text="Add" onMouseOver={onMouseOver} />
        </header>
  );
};
Header.defaultProps = {
  title: "Task Tracker",
};
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;