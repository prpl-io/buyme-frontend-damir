import classNames from "classnames";
import PropTypes from "prop-types";

import "./Button.scss";

const Button = (props) => {
  const {
    text,
    onClick,
    fullWidth = false,
    icon = null,
    iconPosition = "left",
  } = props;

  return (
    <button
      onClick={onClick}
      className={classNames("button", { "button--fullWidth": fullWidth })}
    >
      {icon !== null && iconPosition === "left" && (
        <img src={icon} className="button__icon" alt="btn icon" />
      )}

      <span className="button__text">{text}</span>

      {icon !== null && iconPosition === "right" && (
        <img src={icon} className="button__icon" alt="btn icon" />
      )}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  fullWidth: PropTypes.bool,
  icon: PropTypes.string,
  iconPosition: PropTypes.oneOf(["left", "right"]),
};

export default Button;
