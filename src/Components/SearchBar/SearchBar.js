"use client";
import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { fetchSearchQuery } from "@/api";
import { searchMatch } from "@/constants";
import { RxCross2 } from "react-icons/rx";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [error, setError] = useState()

  const handleSearchQuery = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    let timeout;
    if (query !== "") {
      timeout = setTimeout(async () => {
        // const {queryData , error} = await fetchSearchQuery(query)
        // console.log(searchMatch);
        // if(error) {
        //   setError(error.message)
        //   return;
        // }
        setQueryData(searchMatch);
      }, 500);
    }

    return () => {
      setQueryData([]);
      clearTimeout(timeout);
    };
  }, [query]);

  return (
    <div className={`${styles.searchbar_container}`}>
      <div className={`${styles.searchbar_input__container}`}>
        <input
          className={`${styles.searchbar_input}`}
          type="text"
          placeholder="Search Stocks..."
          value={query}
          onChange={handleSearchQuery}
        />
        <RxCross2
          onClick={() => setQuery("")}
          className={`${styles.searchbar__cross}`}
        />
      </div>

      {queryData.length !== 0 && (
        <div className={`${styles.searchbar_input_results}`}>
          <div className={`${styles.searchbar_input__filters}`}></div>

          <div className={`${styles.search_results}`}>
            {queryData?.map((data, index) => {
              return (
                <SearchResult
                  key={index}
                  name={data["2. name"]}
                  symbol={data["1. symbol"]}
                  type={data["3. type"]}
                />
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

const SearchResult = ({ name, symbol, type }) => {
  return (
    <div
      className={`${styles.search_result_container} flex justify-between align-center`}
    >
      <div className={`${styles.search_result_detail}`}>
        <p className={`${styles.search_result_name}`}>{name}</p>
        <p className={`${styles.search_result_symbol}`}>{symbol}</p>
      </div>

      <p className={`${styles.search_result_type}`}>{type}</p>
    </div>
  );
};

export default SearchBar;
