"use client";
import React from "react";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./product.module.css";
import { companyInformation } from "@/constants";
import ProductInformation from "./ProductInformation";
import ProductGraph from "@/Components/Chart/ProductGraph";
import { BiCaretDown, BiCaretUp } from "react-icons/bi";

// import { useSelector } from "react-redux";

const ProductDetail = () => {
  const path = usePathname();
 console.log(path);
  const queryParam = useSearchParams();
  // console.log(queryParam.get("change"));
  // console.log(queryParam.get("price"));
  const productName = path.split("/")[2];

  // const productInfo = useSelector((state) => state.product.productInformation);
  // console.log(productInfo);

  return (
    <div className={`${styles.product_detail_container}`}>
      {/* this is the product */}
      <ProductHeader
        name={companyInformation.Name}
        assetType={companyInformation.AssetType}
        symbol={companyInformation.Symbol}
        exchange={companyInformation.Exchange}
        price={queryParam.get("price")}
        changePercentage={queryParam.get("change")}
      />
      <ProductGraph productName={productName} />
      <ProductInformation companyinformation={companyInformation} />
    </div>
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
    <div
      className={`${styles.product_header_container} flex justify-between align-start`}
    >
      <div className={`${styles.product_header__detail}`}>
        <div></div>
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
          {changePercentage.charAt(0) === "-" ? <BiCaretDown /> : <BiCaretUp />}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
