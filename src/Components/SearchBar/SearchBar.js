"use client";
import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { fetchSearchQuery } from "@/api";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [error, setError] = useState();

  // search filters
  const [all, setAll] = useState(true);
  const [ETF, setETF] = useState(false);
  const [stock, setStock] = useState(false);

  const handleSearchQueryInput = (event) => {
    setQuery(event.target.value);
  };

  useEffect(() => {
    let timeout;
    if (query !== "") {
      timeout = setTimeout(async () => {
        const { queryData: searchMatch, error } = await fetchSearchQuery(query);

        if (error) {
          setError(error.message);
          return;
        }

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
          onChange={handleSearchQueryInput}
        />
        <RxCross2
          onClick={() => setQuery("")}
          className={`${styles.searchbar__cross}`}
        />
      </div>

      {queryData.length !== 0 ? (
        <div className={`${styles.searchbar_input_results}`}>
          <div
            className={`${styles.searchbar_input__filters} flex justify-start align-center`}
          >
            <p
              onClick={() => {
                if (!ETF && !stock && all) return;
                setAll((prev) => !prev);
              }}
              className={`${styles.searchbar_input_filter} ${
                all ? styles.searchbar_input_filter_selected : null
              }`}
            >
              All
            </p>
            <p
              onClick={() => {
                if (!stock && ETF && !all) return;
                setETF((prev) => !prev);
              }}
              className={`${styles.searchbar_input_filter} ${
                ETF ? styles.searchbar_input_filter_selected : null
              }`}
            >
              ETF
            </p>
            <p
              onClick={() => {
                if (!ETF && stock && !all) return;
                setStock((prev) => !prev);
              }}
              className={`${styles.searchbar_input_filter} ${
                stock ? styles.searchbar_input_filter_selected : null
              }`}
            >
              Stocks / Equity
            </p>
          </div>

          <div className={`${styles.search_results}`}>
            {queryData && queryData.length > 0 ? (
              queryData?.map((data, index) => {
                return all ||
                  (ETF && data["3. type"] === "ETF") ||
                  (stock && data["3. type"] === "Equity") ? (
                  <SearchResult
                    key={index}
                    name={data["2. name"]}
                    symbol={data["1. symbol"]}
                    type={data["3. type"]}
                    setQuery={setQuery}
                  />
                ) : null;
              })
            ) : (
              <div> No search results </div>
            )}
          </div>
        </div>
      ) : (
        query !== "" && (
          <div className={`${styles.searchbar_input_results}`}>
            no search results
          </div>
        )
      )}
    </div>
  );
};

const SearchResult = ({ name, symbol, type, setQuery }) => {
  return (
    <Link
      onClick={() => setQuery("")}
      href={`/product/${symbol}`}
      className={`${styles.search_result_container} flex justify-between align-center`}
    >
      <div className={`${styles.search_result_detail}`}>
        <p className={`${styles.search_result_name}`}>{name}</p>
        <p className={`${styles.search_result_symbol}`}>{symbol}</p>
      </div>

      <p className={`${styles.search_result_type}`}>{type}</p>
    </Link>
  );
};

export default SearchBar;
