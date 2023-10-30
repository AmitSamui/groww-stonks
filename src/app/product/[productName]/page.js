"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./product.module.css";
import dynamic from "next/dynamic";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import Loader from "@/Components/loader/Loader";
import Error from "@/Components/Error/Error";
import { useFetchCompanyData } from "@/hooks/fetchData";
import ProductInformation from "./ProductInformation";

/**
 * @returns lazily loded company graph
 */
const ProductGraphChart = dynamic(
  () => import("@/Components/Chart/ProductGraphChart"),
  { ssr: false }
);

/**
 * 
 * @returns ui for the company detail for the company assest selected by user
 */

const ProductDetail = () => {
  const path = usePathname();

  const queryParam = useSearchParams();
  const productName = path.split("/")[2];

  const [showGraph, setShowGraph] = useState(false);

  const { companyInformation, error, loading } =
    useFetchCompanyData(productName);

  if (loading) return <Loader loadingText={"Hang Tight : loading your data"} />;

  if (error) return <Error errorText={error} />;

  return (
    companyInformation && (
      <div className={`${styles.product_detail_container}`}>
        <ProductHeader
          name={companyInformation.Name}
          assetType={companyInformation.AssetType}
          symbol={companyInformation.Symbol}
          exchange={companyInformation.Exchange}
          price={queryParam.get("price")}
          changePercentage={queryParam.get("change")}
        />
        {showGraph && <ProductGraphChart productName={productName} />}
        {!showGraph && (
          <div className={`${styles.show_graph_button}`}>
            <button
              onClick={() => {
                setShowGraph((curr) => !curr);
              }}
            >
              Show Company Graph
            </button>
          </div>
        )}
        <ProductInformation
          companyinformation={companyInformation}
          currentPrice={queryParam.get("price")}
        />
      </div>
    )
  );
};

const ProductHeader = ({
  name,
  symbol,
  assetType,
  exchange,
  price,
  changePercentage,
}) => {
  return (
    <div className={`${styles.product_header_container}`}>
      <div className={`${styles.product_header__detail}`}>
        <div
          className={`${styles.product__header_image} flex justify-center align-center`}
        >
          {symbol && symbol.substring(0, 1)}
        </div>
        <div
          className={`${styles.header_company_detail} flex-column justify-start align-start`}
        >
          <p className={`${styles.header_company_name} `}>{name}</p>
          <p className={`${styles.header_company_stock} `}>
            {symbol} , {assetType}
          </p>
          <p className={`${styles.header_company_exchange} `}>{exchange}</p>
        </div>
      </div>
      {price && changePercentage && (
        <div className={`${styles.product_header__price}`}>
          <p className={`${styles.header_company_stock_price} `}>$ {price}</p>
          <div
            style={{
              color:
                changePercentage.charAt(0) === "-"
                  ? "red"
                  : "var(--accent-green)",
            }}
            className={`${styles.product__ticker_change} flex justify-start align-center`}
          >
            <p
              className={`${styles.product__ticker_change_percentage}`}
              style={{ marginRight: "0.5rem" }}
            >
              {changePercentage}
            </p>
            {changePercentage.charAt(0) === "-" ? (
              <BiCaretDown />
            ) : (
              <BiCaretUp />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetail;
