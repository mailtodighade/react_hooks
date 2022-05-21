import axios from "axios";
import React, { useState, useEffect } from "react";
import wikipedia from "../api/wikipedia";

const Search = () => {
  const [term, setTerm] = useState("computer");
  const [results, setResults] = useState([]);

  //[term]
  //initial phase and whenever my components re-renders and whenver i cahnge some data(state)
  useEffect(() => {
    const search = async () => {
      const response = await wikipedia.get("/w/api.php", {
        params: {
          srsearch: term,
        },
      });
      setResults(response.data.query.search);
    };
    const clearID = setTimeout(() => {
      if (term) {
        search();
      }
    }, 500);

    return () => {
      clearTimeout(clearID);
    };
  }, [term]);

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
