import { useState } from "react";
import { Link } from "react-router-dom";

import Button from "../Button";
import Dropdown from "../Dropdown";

import { appRoutes } from "../../routes/appRoutes";
import { dropdownValues } from "../../mock";

import "./Navbar.scss";

const Navbar = () => {
  const [selectedItem, setSelectedItem] = useState();

  return (
    <div className="navbar">
      <Link to={appRoutes.PAGE_2}>
        <Button text="Page 2" fullWidth />
      </Link>
      <Link to={appRoutes.PAGE_1}>
        <Button text="Page 1" fullWidth />
      </Link>

      <Dropdown
        values={dropdownValues}
        selected={selectedItem}
        onSelect={setSelectedItem}
        fullWidth
      />
    </div>
  );
};

export default Navbar;
