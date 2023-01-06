import { Outlet } from "react-router-dom";
import Header from "./components/Header";

import "./App.scss";

const App = () => {
  return (
    <div className="app">
      <Header />

      <div className="app-content">
        <Outlet />
      </div>
    </div>
  );
};

export default App;
