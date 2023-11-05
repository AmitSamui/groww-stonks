// "use client";

import styles from "./page.module.css";
import SearchBar from "@/Components/SearchBar/SearchBar";

/**
 * 
 * @returns ui for searchi functionality
 */

export default function Home() {
  return (
    <div
      className={`${styles.search_container} flex justify-center align-start`}
    >
      <div
        className={`${styles.search_sub_container} flex-column justify-start align-center`}
      >
        <div
          className={`${styles.search_guide_container} flex-column justify-start align-center`}
        >
          <p className={`${styles.search_guide_heading}`}>
            Search Stocks and ETF
          </p>
          <p className={`${styles.search_guide_text}`}>
            Write ticker name or company name..
          </p>
        </div>
        <SearchBar />
      </div>
    </div>
  );
}

const QueryResponse = () => {
  return <div> query response</div>;
};
