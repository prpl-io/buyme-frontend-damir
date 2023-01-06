import { useEffect, useRef } from "react";
import PropTypes from "prop-types";

import "./TextField.scss";

const TextField = (props) => {
  const inputRef = useRef(null);
  const {
    value,
    onChange,
    placeholder,
    inputType = "text",
    autoFocus = false,
  } = props;

  useEffect(() => {
    if (autoFocus && inputRef.current) {
      inputRef.current.focus();
    }
  }, [autoFocus]);

  return (
    <input
      value={value}
      onChange={onChange}
      className="text-field"
      type={inputType}
      placeholder={placeholder}
      ref={inputRef}
    />
  );
};

TextField.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  inputType: PropTypes.oneOf(["text", "password", "email", "number"]),
  autoFocus: PropTypes.bool,
};

export default TextField;
