import { getNextDayCacheRevalidation } from "@/Helpers";

/**
 *
 * @param {*} exploreType
 * @param {*} setLoading
 * @returns stock name of different categories such as top gainer , top loser and most actively traded
 */

export const fetchExploreData = async (exploreType, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      // `https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`,
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=demo",
      { next: { revalidate: 2 * 3600 } } // revalidate cache every 2 hour
    );

    const data = await response.json();
    setLoading(false);

    if (data[exploreType]) {
      return { queryData: data[exploreType], error: null };
    } else {
      return {
        queryData: null,
        error: { message: "No data or API limit reached" },
      };
    }
  } catch (error) {
    setLoading(false);
    return {
      queryData: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};

/**
 *
 * @param {*} searchQuery
 * @returns stock data that matches search queries
 */

export const fetchSearchQuery = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`
    );

    const data = await response.json();

    if (data["bestMatches"]) {
      return { queryData: data["bestMatches"], error: null };
    } else {
      return {
        queryData: null,
        error: { message: "No data or API limit reached" },
      };
    }
  } catch (error) {
    return {
      queryData: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};

/**
 *
 * @param {*} symbol
 * @returns stock price data for today
 */

export const fetchIntraDayData = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`,
      // "https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo",
      { next: { revalidate: 15 * 60 } } // revalidate cache after every 15 min
    );

    const data = await response.json();

    if (data["Time Series (5min)"]) {
      return { queryData: data["Time Series (5min)"], error: null };
    } else {
      return {
        queryData: null,
        error: { message: "No data or API limit reached" },
      };
    }
  } catch (error) {
    return {
      queryData: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};

/**
 *
 * @param {*} symbol
 * @returns returns daily compact data starting from today
 */
export const fetchDailyData = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`,
      // "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&apikey=demo",
      { next: { revalidate: getNextDayCacheRevalidation() } }
    );

    const data = await response.json();

    if (data["Time Series (Daily)"]) {
      return { queryData: data["Time Series (Daily)"], error: null };
    } else {
      return {
        queryData: null,
        error: { message: "No data or API limit reached" },
      };
    }
  } catch (error) {
    return {
      queryData: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};

/**
 *
 * @param {*} symbol
 * @returns return full length time series stock price data
 */

export const fetchDailyFullData = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`,
      // "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=IBM&outputsize=full&apikey=demo",
      { next: { revalidate: getNextDayCacheRevalidation() } }
    );

    const data = await response.json();

    if (data["Time Series (Daily)"]) {
      return { queryData: data["Time Series (Daily)"], error: null };
    } else {
      return {
        queryData: null,
        error: { message: "No data or API limit reached" },
      };
    }
  } catch (error) {
    return {
      queryData: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};

/**
 *
 * @param {*} symbol
 * @param {*} setLoading
 * @returns return company details for the given symbol
 */
export const fetchCompanyOverview = async (symbol, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${process.env.NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY}`,
      // "https://www.alphavantage.co/query?function=OVERVIEW&symbol=IBM&apikey=demo",
      { next: { revalidate: getNextDayCacheRevalidation() } }
    );

    const data = await response.json();
    setLoading(false);

    console.log("data", data);

    if (data.Symbol) {
      return { queryData: data, error: null };
    } else {
      return {
        queryData: null,
        error: { message: "No data : API limit reached" },
      };
    }
  } catch (error) {
    setLoading(false);
    return {
      queryData: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};
