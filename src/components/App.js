import React, { useState } from "react";

import { items } from "../database/data";
// import Search from "./Search";
import Dropdown from "./Dropdown";
import Translate from "./Translate";

const App = () => {
  const options = [
    { label: "India", value: "in" },
    { label: "Pakisthan", value: "pk" },
    { label: "Srilanka", value: "sr" },
  ];
  const [selected, setSelected] = useState(options[0]);

  console.log(selected, "selected...");
  return (
    <div className="ui container" style={{ marginTop: "30px" }}>
      {/* <Dropdown
        options={options}
        onSelectedChange={setSelected}
        selected={selected}
      />
      <h1>{selected.label}</h1> */}
      <Translate />
    </div>
  );
};

export default App;
