import { forwardRef } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import DropdownListItem from "../DropdownListItem";

import "./DropdownList.scss";

const DropdownList = forwardRef((props, ref) => {
  const { list, selected, open, onSelect } = props;

  return (
    <ul
      className={classNames("dropdown-list", {
        "dropdown-list--open": open,
      })}
      ref={ref}
    >
      {list.map((item) => (
        <DropdownListItem
          key={item.id}
          listItem={item}
          selected={item.id === selected}
          onSelect={onSelect}
        />
      ))}
    </ul>
  );
});

DropdownList.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      label: PropTypes.string.isRequired,
      icon: PropTypes.string,
    })
  ),
  selected: PropTypes.number,
  onSelect: PropTypes.func,
  open: PropTypes.bool,
};

export default DropdownList;
