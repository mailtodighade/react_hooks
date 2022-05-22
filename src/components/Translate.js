import React, { useState } from "react";

import Dropdown from "./Dropdown";
import Convert from "./Convert";

const Translate = () => {
  const options = [
    { label: "afrikan", value: "af" },
    { label: "arabic", value: "ar" },
    { label: "hindi", value: "hi" },
  ];

  const [language, setLanguage] = useState(options[0]);
  const [term, setTerm] = useState("");

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label className="label">Enter Text: </label>
          <input
            value={term}
            onChange={(e) => {
              setTerm(e.target.value);
            }}
          />
        </div>
      </div>
      <Dropdown
        onSelectedChange={setLanguage}
        selected={language}
        options={options}
        label="Select Language"
      />
      <hr />
      <Convert term={term} language={language} />
    </div>
  );
};

export default Translate;
