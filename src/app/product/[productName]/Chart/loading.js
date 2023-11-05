"use client";

import Loader from "@/Components/loader/Loader";

export default function Loading() {
  return (
    <div className={`${styles.loading_container}`}>
      <Loader loadingText={"Hang Tight : loading your graph"} />
    </div>
  );
}
