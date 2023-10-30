"use client";
import Image from "next/image";
import styles from "./page.module.css";
import SearchBar from "@/Components/SearchBar/SearchBar";
import { useState } from "react";

export default function Home() {
  return (

    <div className={`${styles.search_container} flex justify-center align-center`}>
      <div className={`${styles.search_sub_container} flex-column justify-start align-center`}>
      <div
        className={`${styles.search_guide_container} flex-column justify-start align-center`}
      >
        <p className={`${styles.search_guide_heading}`}>
          Search Stocks and EFT
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
