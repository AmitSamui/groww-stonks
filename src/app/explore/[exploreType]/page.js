import React from "react";
import styles from "./explore.module.css";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import Link from "next/link";
import { exploreStockType } from "@/Helpers/constants";
import Error from "@/Components/Error/Error";
import { fetchExploreData } from "@/api";

/**
 *
 * @param {*} {params}
 * @returns the page ui for top gainer, top looser and most actively traded
 */

const ExploreStocks = async ({ params }) => {
  const products = await fetchExploreData(params.exploreType);

  if (!products) return <Error errorText={"no data : API limit reached"} />;

  return (
    <div
      className={`${styles.explore_container} flex-column justify-start align-center`}
    >
      <p className={`${styles.explore_stocks_type}`}>
        {exploreStockType[params.exploreType]}
      </p>

      <div className={`${styles.explore_stocks}`}>
        {products &&
          products.map((product, index) => {
            return <ProductCard key={index} productData={product} />;
          })}
      </div>
    </div>
  );
};

const ProductCard = ({ productData }) => {
  return (
    <Link
      href={{
        pathname: `/product/${productData.ticker}`,
        query: {
          price: `${productData.price}`,
          change: `${productData.change_percentage}`,
        },
      }}
      className={`${styles.product_card}`}
    >
      <div
        style={{
          backgroundColor: `var(--dim-color-${
            Math.floor(Math.random() * 6) + 1
          }`,
        }}
        className={`${styles.product__ticker_image}`}
      >
        {productData?.ticker.substring(0, 1)}
      </div>
      <p className={`${styles.product__ticker_name}`}>{productData.ticker}</p>
      <p className={`${styles.product__ticker_price}`}>$ {productData.price}</p>
      <div
        style={{
          color:
            productData.change_percentage.charAt(0) === "-"
              ? "red"
              : "var(--accent-green)",
        }}
        className={`${styles.product__ticker_change} flex justify-start align-center`}
      >
        <p
          className={`${styles.product__ticker_change_percentage}`}
          style={{ marginRight: "0.5rem" }}
        >
          {productData.change_percentage}
        </p>
        {productData.change_percentage.charAt(0) === "-" ? (
          <BiCaretDown />
        ) : (
          <BiCaretUp />
        )}
      </div>
    </Link>
  );
};

export default ExploreStocks;
