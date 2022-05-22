import React, { useEffect, useState } from "react";
import axios from "axios";
const Convert = ({ term, language }) => {
  const [translatedText, setTranslatedText] = useState("");
  console.log(translatedText, "lang...");
  useEffect(() => {
    //google translate api..
    const fetchData = async () => {
      const response = await axios.post(
        "https://translation.googleapis.com/language/translate/v2",
        {},
        {
          params: {
            q: term,
            target: language.value,
            key: "AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM",
          },
        }
      );
      setTranslatedText(response.data.data.translations[0].translatedText);
    };
    fetchData();
  }, [language, term]);

  return (
    <div>
      <h3>Output:</h3>
      <h4>{translatedText} </h4>
    </div>
  );
};

export default Convert;
