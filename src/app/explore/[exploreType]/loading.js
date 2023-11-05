"use client";
import Loader from "@/Components/loader/Loader";
import styles from "./explore.module.css";

export default function Loading() {
  return (
    <div
      className={`${styles.loading_container} flex justify-center align-center`}
    >
      <Loader loadingText={"Hang Tight : loading your data"} />
    </div>
  );
}
