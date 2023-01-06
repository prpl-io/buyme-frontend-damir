import { useState, useCallback } from "react";
import Popup from "../Popup";
import Button from "../Button";
import TextField from "../TextField";

import "./HeaderPopup.scss";

const HeaderPopup = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = useCallback(
    (e) => setInputValue(e.target.value),
    []
  );
  const openPopup = useCallback(() => setPopupOpen(true), []);
  const closePopup = useCallback(() => setPopupOpen(false), []);

  return (
    <Popup
      title="Popup title"
      open={popupOpen}
      onClose={closePopup}
      activator={
        <div className="header-popup__activator">
          <Button text="Open popup" onClick={openPopup} />
        </div>
      }
    >
      <TextField
        value={inputValue}
        placeholder="Input placeholder"
        inputType="text"
        onChange={handleInputChange}
        autoFocus
      />
    </Popup>
  );
};

export default HeaderPopup;
