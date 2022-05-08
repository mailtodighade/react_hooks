import axios from "axios";
import React, { useState, useEffect } from "react";

const Search = () => {
  const [term, setTerm] = useState("");
  const [results, setResults] = useState([]);

  console.log("RUN AT EVERY RENDER");

  //[term]
  //initial phase and whenever my components re-renders and whenver i cahnge some data(state)
  useEffect(() => {
    // (async () => {
    //   const response = await axios.get("https://en.wikipedia.org/w/api.php", {
    //     params: {
    //       action: "query",
    //       list: "search",
    //       format: "json",
    //       srsearch: "birds",
    //       origin: "*",
    //     },
    //   });
    //   console.log(response);
    // })();

    const search = async () => {
      const response = await axios.get("https://en.wikipedia.org/w/api.php", {
        params: {
          action: "query",
          list: "search",
          format: "json",
          srsearch: term,
          origin: "*",
        },
      });
      setResults(response.data.query.search);
    };
    if (term) {
      search();
    }
  }, [term]);
  console.log(results);

  const renderResults = results.map((result) => {
    return (
      <div className="item" key={result.pageid}>
        <div className="content">
          <div className="right floated button">
            <a
              className="ui button"
              href={`http://en.wikipedia.org/wiki?curid=${result.pageid}`}
            >
              LINK
            </a>
          </div>
          <div className="header">{result.title}</div>
          <p dangerouslySetInnerHTML={{ __html: result.snippet }}></p>
        </div>
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="ui field">
        <label>SEARCH ON WIKIPEDIA</label>
        <input
          value={term}
          onChange={(event) => {
            setTerm(event.target.value);
          }}
        />
      </div>

      <div className="ui celled list">{renderResults}</div>
    </div>
  );
};

export default Search;
