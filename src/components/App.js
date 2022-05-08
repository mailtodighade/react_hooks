import React from "react";

import { items } from "../database/data";
import Accordion from "./Accordion";

const App = () => {
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      <Accordion items={items} />
    </div>
  );
};

export default App;
