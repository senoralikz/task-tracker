// importing PropTypes to be able to set type of prop
import PropTypes from "prop-types";

import Button from "./Button";

// destructure props with { } so that way you can type out the prop name only instead of prefacing it with props.
const Header = ({ title }) => {
  const onClick = () => {
    console.log("clicked");
  };

  return (
    // when adding a class attribute in React we must use 'className' instead of 'class'
    <header className="header">
      <h1
      // when setting inline style in React you must use {{}}
      // style={{
      //   color: "red",
      //   backgroundColor: "black",
      // }}
      >
        {title}
      </h1>
      <Button color="green" text="Add" onClick={onClick} />
    </header>
  );
};

// setting default props in case no props is passed into the component
Header.defaultProps = {
  title: "Task Tracker",
};

// using PropTypes to set type value of props
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS in JavaScript
// const headingStyle = {
//   color: "red",
//   backgroundColor: "black",
// };

export default Header;
