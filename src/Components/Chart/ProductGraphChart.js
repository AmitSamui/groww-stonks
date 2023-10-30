"use client";

import { options } from "@/Helpers/graphConfig";
import { graphSelectorOptions } from "@/Helpers/constants";
import React, { useState, memo } from "react";
import { useFetchGraphData } from "@/hooks/fetchData";
import styles from "./ProductGraph.module.css";

import { Line } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

import Loader from "../loader/Loader";
import Error from "../Error/Error";

Chart.register(CategoryScale);

const ProductGraphChart = ({ productName }) => {
  const [selectedGraphInterval, setSelectedGraphInterval] = useState("1D");

  const { formattedGraphData, loading, error } = useFetchGraphData(
    selectedGraphInterval,
    productName
  );

  const dataGraph = {
    labels: formattedGraphData.map((data, index) => data.x),

    datasets: [
      {
        label: "Stock Price",
        data: formattedGraphData.map((data, index) => data.y),
        fill: false,
        borderColor: "#25d7aa",
        tension: 0.1,
        borderWidth: 2,
      },
    ],
  };

  if (loading)
    return (
      <div className={`${styles.loading_container}`}>
        <Loader loadingText={"Hang Tight : loading your graph"} />
      </div>
    );

  if (error)
    return (
      <div className={` ${styles.error} flex justify-center align-center`}>
        <Error errorText={"no data : API Limit reached"} />
      </div>
    );

  return (
    <div className={`${styles.line_graph_container} `}>
      <Line datasetIdKey="key" data={dataGraph} options={options}></Line>
      <div
        className={`${styles.graph_selector_containter} flex justify-center align-center`}
      >
        <div
          className={`${styles.graph_selectors} flex justify-center align-center`}
        >
          {graphSelectorOptions.map((selector, index) => {
            return (
              <GraphSelector
                key={index}
                selected={selectedGraphInterval === selector ? true : false}
                selectorName={selector}
                setSelector={setSelectedGraphInterval}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

const GraphSelector = ({ selectorName, selected = false, setSelector }) => {
  return (
    <div
      onClick={() => setSelector(selectorName)}
      className={`${styles.selector} ${selected ? styles.selected : null}`}
    >
      {selectorName}
    </div>
  );
};

export default memo(ProductGraphChart);
