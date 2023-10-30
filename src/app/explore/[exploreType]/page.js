"use client";
import { fetchExploreData } from "@/api";
import React, { memo, useState, useEffect } from "react";
import styles from "./explore.module.css";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import Link from "next/link";
import { exploreStockType } from "@/constants";
import { useSelector, useDispatch } from "react-redux";
import { setProductInformation } from "@/Redux/features/productSlice";
import Loader from "@/Components/loader/Loader";
import Error from "@/Components/Error/Error";

const ExploreStocks = ({ params }) => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const setProductQuery = async () => {
    const { queryData, error } = await fetchExploreData(
      params.exploreType,
      setLoading
    );
    console.log(queryData, error);
    if (error) {
      setError(error.message);
      return;
    }
    setProducts(queryData);
  };

  useEffect(() => {
    setProductQuery();
  }, []);

  if (loading)
    return (
      <div
        className={`${styles.loading_container} flex justify-center align-center`}
      >
        <Loader loadingText={"Hang Tight : loading your data"} />
      </div>
    );

  if (error !== "")
    return (
      // <div className={` ${styles.error} flex justify-center align-center`}>
      <Error errorText={"no data : API limit reached"} />
      // </div>
    );

  // const products = await fetchExploreData(params.exploreType);

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
  //  const dispatch = useDispatch();
  return (
    <Link
      // onClick={() => {
      //   dispatch(setProductInformation({ key: "somekey" }));
      // }}
      href={{
        pathname: `/product/${productData.ticker}`,
        query: {
          price: `${productData.price}`,
          change: `${productData.change_percentage}`,
        },
      }}
      className={`${styles.product_card}`}
    >
      <div className={`${styles.product__ticker_image}`}>
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

export default memo(ExploreStocks);
