"use client";
import React, { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./product.module.css";
// import { companyInformation } from "@/constants";
import ProductInformation from "./ProductInformation";

import { BiCaretDown, BiCaretUp } from "react-icons/bi";
import ProductGraphChart from "@/Components/Chart/ProductGraphChart";

import Loader from "@/Components/loader/Loader";
import Error from "@/Components/Error/Error";
import { useFetchCompanyData } from "@/hooks/fetchData";

const ProductDetail = () => {
  const path = usePathname();

  const queryParam = useSearchParams();
  // console.log(queryParam.get("change"));
  // console.log(queryParam.get("price"));
  const productName = path.split("/")[2];
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
        <ProductGraphChart productName={productName} />
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
