import PropTypes from "prop-types";
import { isValidElement } from "react";
import { renderChildrenElement } from "../../utils/renderChildrenElement";

import "./Popup.scss";

const Popup = (props) => {
  const { open, activator, title, onClose, children } = props;

  return (
    <>
      {isValidElement(activator) && activator}
      {open && (
        <div className="popup__overlay">
          <div className="popup__content">
            <div className="popup-header">
              <h1 className="popup-header__title">{title}</h1>
              <button
                className="popup-header__close-button"
                onClick={onClose}
              />
            </div>

            <div className="popup-body">{renderChildrenElement(children)}</div>
          </div>
        </div>
      )}
    </>
  );
};

Popup.propTypes = {
  title: PropTypes.string,
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Popup;
