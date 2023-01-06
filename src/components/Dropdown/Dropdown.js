import { useCallback, useState, useMemo, useRef } from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import { useClickOutside } from "../../hooks/useClickOutside";

import DropdownList from "../DropdownList";
import Button from "../Button";

import arrow from "../../assets/chevron-down-svgrepo-com.svg";

import "./Dropdown.scss";

const Dropdown = (props) => {
  const { values = [], selected = null, onSelect, fullWidth = false } = props;

  const listRef = useRef(null);

  const [isDropdownOpen, setIsDropDownOpen] = useState(false);

  const openDropdown = useCallback(() => setIsDropDownOpen(true), []);
  const closeDropdown = useCallback(() => setIsDropDownOpen(false), []);

  const onListItemClick = useCallback(
    (id) => () => {
      closeDropdown();
      onSelect(id);
    },
    [onSelect, closeDropdown]
  );

  useClickOutside({
    target: listRef,
    callback: closeDropdown,
    open: isDropdownOpen,
  });

  const activatorText = useMemo(
    () => (selected ? values.find((v) => v.id === selected).label : "Dropdown"),
    [values, selected]
  );

  return (
    <div
      className={classNames("dropdown", { "dropdown--fullWidth": fullWidth })}
    >
      <Button
        text={activatorText}
        onClick={openDropdown}
        fullWidth={fullWidth}
        icon={arrow}
        iconPosition="right"
      />
      <DropdownList
        list={values}
        selected={selected}
        open={isDropdownOpen}
        onSelect={onListItemClick}
        ref={listRef}
      />
    </div>
  );
};

Dropdown.propTypes = {
  values: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  fullWidth: PropTypes.bool,
};

export default Dropdown;
