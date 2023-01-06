import PropTypes from "prop-types";
import classNames from "classnames";

import "./DropdownListItem.scss";

const DropdownListItem = (props) => {
  const { listItem, selected, onSelect } = props;
  return (
    <li
      key={listItem.id}
      className={classNames("list-item", {
        "list-item--selected": selected,
      })}
    >
      <button onClick={onSelect(listItem.id)} className="list-item__button">
        {listItem.icon && (
          <img src={listItem.icon} alt="icon" className="list-item__icon" />
        )}
        <span className="list-item__label">{listItem.label}</span>
      </button>
    </li>
  );
};

DropdownListItem.propTypes = {
  listItem: PropTypes.exact({
    id: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    icon: PropTypes.string,
  }),
  selected: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default DropdownListItem;
