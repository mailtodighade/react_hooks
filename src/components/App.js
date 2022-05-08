import React from "react";

import { items } from "../database/data";
import Search from "./Search";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Search />
    </div>
  );
};

export default App;
