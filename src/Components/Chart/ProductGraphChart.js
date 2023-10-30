"use client";
import { changeDateStringToTime, formatData } from "@/Helpers";
import { graphOptions } from "@/Helpers/graphConfig";
import { graphSelectorOptions, intradayData } from "@/constants";
import React, { useMemo, useState, useEffect } from "react";
import ReactApexChart from "react-apexcharts";

import styles from "./ProductGraph.module.css";
import { weeklyData } from "@/DUMMY/weeklyData";
import { fullWeeklyData } from "@/DUMMY/fullWeeklyData";
import { fetchDailyData, fetchDailyFullData, fetchIntraDayData } from "@/api";

import { Line } from "react-chartjs-2";
import {
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import Chart from "chart.js/auto";
import { useTheme } from "next-themes";
import Loader from "../loader/Loader";
import Error from "../Error/Error";

Chart.register(CategoryScale);

// chart.register(LineElement, CategoryScale, LinearScale, PointElement);

const ProductGraphChart = ({ productName }) => {
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [selectedGraphInterval, setSelectedGraphInterval] = useState("1D");
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const formattedGraphData = useMemo(
    () => formatData(data, selectedGraphInterval),
    [data, selectedGraphInterval]
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

  const options = {
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          color: "gray",
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          color: "gray",
        },
      },
    },
  };

  useEffect(() => {
    const graphEffect = async () => {
      setLoading(true);
      if (selectedGraphInterval === "1D") {
        //   const dayData = formatData(
        //     intradayData["Time Series (5min)"],
        //     changeDateStringToTime
        //   );
        // graphData = intradayData["Time Series (5min)"];
        const { queryData, error } = await fetchIntraDayData(productName);

        if (error) {
          setLoading(false);
          setError(error.message);
          return;
        }

        setData(queryData);
      } else if (
        selectedGraphInterval === "1W" ||
        selectedGraphInterval === "1M" ||
        selectedGraphInterval === "3M"
      ) {
        const { queryData, error } = await fetchDailyData(productName);

        if (error) {
          setLoading(false);
          setError(error.message);
          return;
        }

        setData(queryData);
      } else if (selectedGraphInterval === "6M") {
        const { queryData, error } = await fetchDailyFullData(productName);

        if (error) {
          setLoading(false);
          setError(error.message);
          return;
        }

        setData(queryData);
      }

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
      {/* <p className={`${styles.graph_title}`}> price chart of stock</p> */}
      {/* <ReactApexChart
        options={graphOptions}
        series={state.series}
        type="line"
        height={550}
      /> */}
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

export default ProductGraphChart;
