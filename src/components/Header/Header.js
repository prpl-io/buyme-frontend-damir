import HeaderPopup from "../HeaderPopup";
import Navbar from "../Navbar";

import "./Header.scss";

const Header = () => {
  return (
    <div className="header">
      <HeaderPopup />
      <Navbar />
    </div>
  );
};

export default Header;
