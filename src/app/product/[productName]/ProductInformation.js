import React from "react";
import styles from "./product.module.css";
import { BiCaretDown } from "react-icons/bi";
import {
  convertToInternationalCurrencySystem,
  getCurrentRelativePercentage,
} from "@/Helpers";

/**
 *
 * @param {*} param0
 * @returns component for company overview including slider of current price and other details
 */
const ProductInformation = ({ companyinformation, currentPrice }) => {
  return (
    <div className={`${styles.product_information_container}`}>
      <div className={`${styles.product_information_header}`}>
        <p>About {companyinformation.Name}</p>
      </div>
      <div className={`${styles.product_information_body}`}>
        <p className={`${styles.product_information__description}`}>
          {companyinformation.Description !== "none"
            ? companyinformation.Description
            : "No Description provided"}
        </p>
        <div className={`${styles.product_information__company_tags} `}>
          <p className={`${styles.product_information__tag} `}>
            Industry : {companyinformation.Industry}
          </p>
          <p className={`${styles.product_information__tag} `}>
            Sector : {companyinformation.Sector}
          </p>
        </div>
        {currentPrice && (
          <PriceVisualiser
            low={parseInt(companyinformation["52WeekLow"])}
            high={parseInt(companyinformation["52WeekHigh"])}
            current={currentPrice}
          />
        )}

        <div className={`${styles.product_information__company_labels} `}>
          <LabeledData
            data={`$ ${convertToInternationalCurrencySystem(
              parseInt(companyinformation.MarketCapitalization)
            )}`}
            label={"Market Cap"}
          />
          <LabeledData data={companyinformation.PERatio} label={"P/E Ratio"} />
          <LabeledData data={companyinformation.Beta} label={"Beta"} />
          <LabeledData
            data={companyinformation.DividendYield}
            label={"Dividend Yield"}
          />
          <LabeledData
            data={companyinformation.ProfitMargin}
            label={"Profit Margin"}
          />
        </div>
      </div>
    </div>
  );
};

const PriceVisualiser = ({ low, high, current }) => {
  const currentPricePercentage = getCurrentRelativePercentage(
    high,
    low,
    current
  );

  return (
    <div className={`${styles.price_visualiser_container}`}>
      <LabeledData label={"52-Week Low"} data={`$ ${low}`} />
      <div className={`${styles.slider_container} ${styles.grid_wide}`}>
        <div className={`${styles.slider__bar}`}>
          <span
            style={{
              width: `${currentPricePercentage}%`,
            }}
            className={`${styles.slider__fill}`}
          ></span>
        </div>
        <div
          style={{
            left: `${currentPricePercentage}%`,
          }}
          className={`${styles.slider__bar_marker}`}
        >
          <p>Current Price $ {current}</p>
          <BiCaretDown color="var(--secondary-300)" />
        </div>
      </div>
      <LabeledData label={"52-Week High"} data={`$ ${high}`} />
    </div>
  );
};

const LabeledData = ({ label, data }) => {
  return (
    <div className={`${styles.label_data}`}>
      <p className={`${styles.label}`}>{label}</p>
      <p className={`${styles.data}`}>{data}</p>
    </div>
  );
};

export default ProductInformation;
