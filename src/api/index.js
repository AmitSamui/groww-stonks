export const fetchExploreData = async (exploreType) => {
  try {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=3GKJK51ZJL8WP1WA"
    );
    const data = await response.json();
    return data[exploreType];
  } catch (error) {
    console.log("error", error);
  }
};

export const fetchSearchQuery = async (searchQuery) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=${searchQuery}&apikey=3GKJK51ZJL8WP1WA`
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

export const fetchIntraDayData = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=3GKJK51ZJL8WP1WA`
    );

    const data = await response.json();

    if (data["Time Series (5min)"]) {
      return { query: data["Time Series (5min)"], error: null };
    } else {
      return {
        query: null,
        error: { message: "No data or API limit reached" },
      };
    }
  } catch (error) {
    return {
      query: null,
      error: { message: "There is a problem fetching data" },
    };
  }
};
