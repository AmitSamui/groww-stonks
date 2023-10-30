"use client";
import React, { useState, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { fetchSearchQuery } from "@/api";
import { searchMatch } from "@/constants";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const [queryData, setQueryData] = useState([]);
  const [error, setError] = useState();

  // filters
  const [all, setAll] = useState(true);
  const [EFT, setEFT] = useState(false);
  const [stock, setStock] = useState(false);

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
        // const queryData = searchMatch.filter((match) => {
        //   return (
        //     (EFT && match["3. type"] === "EFT") ||
        //     (stock && match["3. type"] === "Equity") ||
        //     all
        //   );
        // });
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
          <div
            className={`${styles.searchbar_input__filters} flex justify-start align-center`}
          >
            <p
              onClick={() => {
                if (!EFT && !stock && all) return;
                setAll((prev) => !prev);
                // setEFT(false);
                // setStock(false);
              }}
              className={`${styles.searchbar_input_filter} ${
                all ? styles.searchbar_input_filter_selected : null
              }`}
            >
              All
            </p>
            <p
              onClick={() => {
                if (!stock && EFT && !all) return;
                setEFT((prev) => !prev);
                // if (EFT || stock) setAll(false);
                // if (!EFT && !stock) setAll(true);
              }}
              className={`${styles.searchbar_input_filter} ${
                EFT ? styles.searchbar_input_filter_selected : null
              }`}
            >
              EFT
            </p>
            <p
              onClick={() => {
                if (!EFT && stock && !all) return;
                setStock((prev) => !prev);
                // if (EFT || stock) setAll(false);
              }}
              className={`${styles.searchbar_input_filter} ${
                stock ? styles.searchbar_input_filter_selected : null
              }`}
            >
              Stocks / Equity
            </p>
          </div>

          <div className={`${styles.search_results}`}>
            {queryData?.map((data, index) => {
              return all ||
                (EFT && data["3. type"] === "EFT") ||
                (stock && data["3. type"] === "Equity") ? (
                <SearchResult
                  key={index}
                  name={data["2. name"]}
                  symbol={data["1. symbol"]}
                  type={data["3. type"]}
                  setQuery={setQuery}
                />
              ) : null;
            })}
          </div>
        </div>
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
