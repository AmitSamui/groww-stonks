import React from "react";
import styles from "./Error.module.css";
import Image from "next/image";
import errorSvg from "../../../public/error.svg";

const Error = ({ errorText }) => {
  return (
    <div className={`${styles.error} flex-column justify-center align-center`}>
      <Image
        className={`${styles.error_image}`}
        src={errorSvg}
        alt="error"
      />
      <p className={`${styles.error_text}`}>{errorText}</p>
    </div>
  );
};

export default Error;
