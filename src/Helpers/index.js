import { graphOptions } from "./graphConfig";

/**
 *
 * @param {*} labelValue
 * @returns string with suffix as standard number system
 */
export const convertToInternationalCurrencySystem = (labelValue) => {
  // twelve Zeroes for Billions
  return Math.abs(Number(labelValue)) >= 1.0e12
    ? (Math.abs(Number(labelValue)) / 1.0e12).toFixed(2) + "T"
    : // Nine Zeroes for Billions
    Math.abs(Number(labelValue)) >= 1.0e9
    ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B"
    : // Six Zeroes for Millions
    Math.abs(Number(labelValue)) >= 1.0e6
    ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M"
    : // Three Zeroes for Thousands
    Math.abs(Number(labelValue)) >= 1.0e3
    ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K"
    : Math.abs(Number(labelValue));
};

/**
 *
 * @param {*} high price
 * @param {*} low price
 * @param {*} current price
 * @returns the percentage in which the current price lies in between high and low price
 */
export const getCurrentRelativePercentage = (high, low, current) => {
  const totalValue = high - low;
  const currentValue = current - low;
  const percentage = (currentValue / totalValue) * 100;

  return percentage;
};

/**
 *
 * @param {*} data
 * @param {*} selectedGraphInterval
 * @returns data formatted in [{xlabel , ydata}] form for chart js graph
 */
export const formatData = (data, selectedGraphInterval) => {
  const entries = Object.entries(data).map(([key, value]) => [
    formatDate(key, selectedGraphInterval),
    parseFloat(value["2. high"]),
  ]);

  const formattedData = entries.map(([key, value]) => ({ x: key, y: value }));
  return selectedGraphInterval === "1W"
    ? formattedData.splice(0, 7)
    : selectedGraphInterval === "1M"
    ? formattedData.splice(0, 30)
    : selectedGraphInterval === "3M"
    ? formattedData.splice(0, 90)
    : selectedGraphInterval === "6M"
    ? formattedData.splice(0, 182)
    : formattedData;
};

/**
 *
 * @param {*} dateString
 * @param {*} type
 * @returns formatted date according to the graph interval
 */
export const formatDate = (dateString, type) => {
  const date = new Date(dateString);
  if (type === "1D") {
    return date.toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });
  } else {
    return date.getDate() + "-" + date.getMonth();
  }
};

/**
 *
 * @returns time (in seconds) left for next day to re-validate the cache
 */
export const getNextDayCacheRevalidation = () => {
  let actualTime = new Date(Date.now());

  let endOfDay = new Date(
    actualTime.getFullYear(),
    actualTime.getMonth(),
    actualTime.getDate() + 1,
    0,
    0,
    0
  );

  let timeRemaining = endOfDay.getTime() - actualTime.getTime();
  return timeRemaining;
};
