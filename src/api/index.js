export const fetchExploreData = async (exploreType, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      "https://www.alphavantage.co/query?function=TOP_GAINERS_LOSERS&apikey=3GKJK51ZJL8WP1WA"
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

export const fetchDailyData = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=3GKJK51ZJL8WP1WA`
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

export const fetchDailyFullData = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&outputsize=full&apikey=3GKJK51ZJL8WP1WA`
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

export const fetchCompanyOverview = async (symbol, setLoading) => {
  setLoading(true);
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=3GKJK51ZJL8WP1WA`
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
