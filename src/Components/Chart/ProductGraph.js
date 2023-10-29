"use client";
import { changeDateStringToTime, formatData } from "@/Helpers";
import { graphOptions } from "@/Helpers/graphConfig";
import { graphSelectorOptions, intradayData } from "@/constants";
import React, { useMemo, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import styles from "./ProductGraph.module.css";
import { weeklyData } from "@/DUMMY/weeklyData";
import { fullWeeklyData } from "@/DUMMY/fullWeeklyData";
import { fetchIntraDayData } from "@/api";

const ProductGraph = ({ productName }) => {
  const [loading, setLoading] = useState(false);
  const [selectedGraphInterval, setSelectedGraphInterval] = useState("1D");
  const [data, setData] = useState([]);
  const [error, setError] = useState("");

  const formattedGraphData = useMemo(
    () => formatData(data, selectedGraphInterval),
    [data, selectedGraphInterval]
  );
  console.log(formattedGraphData);

  useEffect(() => {
    const graphEffect = async () => {
      setLoading(true);
      let graphData;
      if (selectedGraphInterval === "1D") {
        //   const dayData = formatData(
        //     intradayData["Time Series (5min)"],
        //     changeDateStringToTime
        //   );
        graphData = intradayData["Time Series (5min)"];
        //   const { query, error } = await fetchIntraDayData(productName);
        //   console.log(query, error);
        //   if (error) {
        //     setError(error.message);
        //     return;
        //   }
        console.log(graphData);
          setData(graphData);
      } else if (
        selectedGraphInterval === "1W" ||
        selectedGraphInterval === "1M" ||
        selectedGraphInterval === "3M"
      ) {
        graphData = weeklyData["Time Series (Daily)"];
      } else if (selectedGraphInterval === "6M") {
        graphData = fullWeeklyData["Time Series (Daily)"];
      }
    //   setData(graphData);
    //   setData(graphData);
      setLoading(false);
    };

    graphEffect();
  }, [selectedGraphInterval]);

  const state = {
    series: [
      {
        name: "Stock price",
        data: formattedGraphData,
      },
    ],
  };

  if (loading) return <div> loading </div>;

  return (
    <div className={`${styles.line_graph_container} `}>
      {/* <p className={`${styles.graph_title}`}> price chart of stock</p> */}
      <ReactApexChart
        options={graphOptions}
        series={state.series}
        type="line"
        height={550}
      />
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

export default ProductGraph;
