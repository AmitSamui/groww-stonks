import { formatData } from "@/Helpers";
import {
  fetchCompanyOverview,
  fetchExploreData,
  fetchDailyData,
  fetchDailyFullData,
  fetchIntraDayData,
} from "@/api";
import { useEffect, useState, useMemo } from "react";

/**
 *
 * @param {*} exploreType
 * fetch top-gainer, top-loser, most actively traded data from api
 * @returns data , loading and error
 */

export const useFetchExploreData = (exploreType) => {
  const [products, setProducts] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const setProductQuery = async () => {
      const { queryData, error } = await fetchExploreData(
        exploreType,
        setLoading
      );

      if (error) {
        setError(error.message);
        return;
      }
      setProducts(queryData);
    };
    setProductQuery();
  }, [exploreType]);

  return { products, loading, error };
};

/**
 *
 * @param {*} selectedGraphInterval
 * @param {*} productName
 * fetches the graph data
 * format the data according to the interval
 * @returns graph data for given interval
 */
export const useFetchGraphData = (selectedGraphInterval, productName) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState();

  const formattedGraphData = useMemo(
    () => formatData(data, selectedGraphInterval),
    [data, selectedGraphInterval]
  );

  useEffect(() => {
    const graphEffect = async () => {
      setLoading(true);
      if (selectedGraphInterval === "1D") {
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
  }, [selectedGraphInterval ,productName]);

  return { formattedGraphData, error, loading };
};

/**
 *
 * @param {*} productName
 * fetch company data from the product name
 * @returns data , loading and error
 */
export const useFetchCompanyData = (productName) => {
  const [companyInformation, setCompanyInformation] = useState();
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchOverview = async () => {
      const { queryData: companyData, error } = await fetchCompanyOverview(
        productName,
        setLoading
      );
      if (error) {
        setError(error.message);
        return;
      }
      setCompanyInformation(companyData);
    };

    fetchOverview();
  }, [productName]);

  return { companyInformation, error, loading };
};
