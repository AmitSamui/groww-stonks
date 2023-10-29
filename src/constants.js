export const sidebarMenuOptions = {
  search: "search",
  top_gainer: "top_gainer",
  top_loser: "top_loser",
  most_active_trader: "most_active_trader",
};

export const exploreStockType = {
  most_actively_traded: "Most Actively Traded",
  top_gainers: "Top Gainers",
  top_losers: "Top Losers",
};

export const sidebarExploreMenuOptions = [
  {
    title: "Top Gainers",
    link: "/explore/top_gainers",
  },
  {
    title: "Top Losers",
    link: "/explore/top_losers",
  },
  {
    title: "Actively Traded",
    link: "/explore/most_actively_traded",
  },
];

export const graphSelectorOptions = ["1D", "1W", "1M", "3M", "6M"];

// dummy data
export const companyInformation = {
  Symbol: "IBM",
  AssetType: "Common Stock",
  Name: "International Business Machines",
  Description:
    "International Business Machines Corporation (IBM) is an American multinational technology company headquartered in Armonk, New York, with operations in over 170 countries. The company began in 1911, founded in Endicott, New York, as the Computing-Tabulating-Recording Company (CTR) and was renamed International Business Machines in 1924. IBM is incorporated in New York. IBM produces and sells computer hardware, middleware and software, and provides hosting and consulting services in areas ranging from mainframe computers to nanotechnology. IBM is also a major research organization, holding the record for most annual U.S. patents generated by a business (as of 2020) for 28 consecutive years. Inventions by IBM include the automated teller machine (ATM), the floppy disk, the hard disk drive, the magnetic stripe card, the relational database, the SQL programming language, the UPC barcode, and dynamic random-access memory (DRAM). The IBM mainframe, exemplified by the System/360, was the dominant computing platform during the 1960s and 1970s.",
  CIK: "51143",
  Exchange: "NYSE",
  Currency: "USD",
  Country: "USA",
  Sector: "TECHNOLOGY",
  Industry: "COMPUTER & OFFICE EQUIPMENT",
  Address: "1 NEW ORCHARD ROAD, ARMONK, NY, US",
  FiscalYearEnd: "December",
  LatestQuarter: "2023-09-30",
  MarketCapitalization: "130966217000",
  EBITDA: "12692000000",
  PERatio: "18.55",
  PEGRatio: "1.276",
  BookValue: "25.29",
  DividendPerShare: "1.65",
  DividendYield: "0.0462",
  EPS: "7.75",
  RevenuePerShareTTM: "67.29",
  ProfitMargin: "0.113",
  OperatingMarginTTM: "0.14",
  ReturnOnAssetsTTM: "0.0407",
  ReturnOnEquityTTM: "0.328",
  RevenueTTM: "61168001000",
  GrossProfitTTM: "32688000000",
  DilutedEPSTTM: "7.75",
  QuarterlyEarningsGrowthYOY: "0.126",
  QuarterlyRevenueGrowthYOY: "0.046",
  AnalystTargetPrice: "137.35",
  TrailingPE: "18.55",
  ForwardPE: "15.55",
  PriceToSalesRatioTTM: "2.108",
  PriceToBookRatio: "6.75",
  EVToRevenue: "2.969",
  EVToEBITDA: "25.81",
  Beta: "0.771",
  "52WeekHigh": "151.93",
  "52WeekLow": "118.71",
  "50DayMovingAverage": "143.43",
  "200DayMovingAverage": "135.33",
  SharesOutstanding: "911006000",
  DividendDate: "2023-09-09",
  ExDividendDate: "2023-08-09",
};

export const searchMatch = [
  {
    "1. symbol": "NNND.FRK",
    "2. name": "Tencent Holdings Ltd",
    "3. type": "Equity",
    "4. region": "Frankfurt",
    "5. marketOpen": "08:00",
    "6. marketClose": "20:00",
    "7. timezone": "UTC+02",
    "8. currency": "EUR",
    "9. matchScore": "0.5185",
  },
  {
    "1. symbol": "TCEHY",
    "2. name": "Tencent Holdings Ltd",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.5185",
  },
  {
    "1. symbol": "TCTZF",
    "2. name": "Tencent Holdings Ltd",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.5185",
  },
  {
    "1. symbol": "NNN1.FRK",
    "2. name": "Tencent Holdings Ltd ADR",
    "3. type": "Equity",
    "4. region": "Frankfurt",
    "5. marketOpen": "08:00",
    "6. marketClose": "20:00",
    "7. timezone": "UTC+02",
    "8. currency": "EUR",
    "9. matchScore": "0.4516",
  },
  {
    "1. symbol": "TME",
    "2. name": "Tencent Music Entertainment Group",
    "3. type": "Equity",
    "4. region": "United States",
    "5. marketOpen": "09:30",
    "6. marketClose": "16:00",
    "7. timezone": "UTC-04",
    "8. currency": "USD",
    "9. matchScore": "0.4000",
  },
  {
    "1. symbol": "63TA.FRK",
    "2. name": "Tencent Music Entertainment Group",
    "3. type": "Equity",
    "4. region": "Frankfurt",
    "5. marketOpen": "08:00",
    "6. marketClose": "20:00",
    "7. timezone": "UTC+02",
    "8. currency": "EUR",
    "9. matchScore": "0.3500",
  },
];

export const intradayData = {
  "Meta Data": {
    "1. Information":
      "Intraday (5min) open, high, low, close prices and volume",
    "2. Symbol": "LMDXW",
    "3. Last Refreshed": "2023-10-27 17:15:00",
    "4. Interval": "5min",
    "5. Output Size": "Compact",
    "6. Time Zone": "US/Eastern",
  },
  "Time Series (5min)": {
    "2023-10-27 17:15:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "300",
    },
    "2023-10-27 16:00:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "3220",
    },
    "2023-10-27 15:55:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "620",
    },
    "2023-10-27 15:45:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "206",
    },
    "2023-10-27 15:40:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "1533",
    },
    "2023-10-27 13:50:00": {
      "1. open": "0.0260",
      "2. high": "0.0260",
      "3. low": "0.0260",
      "4. close": "0.0260",
      "5. volume": "100",
    },
    "2023-10-27 12:50:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0150",
      "4. close": "0.0150",
      "5. volume": "3733",
    },
    "2023-10-27 12:45:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "1000",
    },
    "2023-10-27 11:20:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "465",
    },
    "2023-10-27 11:05:00": {
      "1. open": "0.0140",
      "2. high": "0.0140",
      "3. low": "0.0140",
      "4. close": "0.0140",
      "5. volume": "100",
    },
    "2023-10-27 10:55:00": {
      "1. open": "0.0150",
      "2. high": "0.0150",
      "3. low": "0.0140",
      "4. close": "0.0150",
      "5. volume": "2700",
    },
    "2023-10-27 10:50:00": {
      "1. open": "0.0160",
      "2. high": "0.0160",
      "3. low": "0.0150",
      "4. close": "0.0150",
      "5. volume": "1500",
    },
    "2023-10-27 10:45:00": {
      "1. open": "0.0170",
      "2. high": "0.0180",
      "3. low": "0.0160",
      "4. close": "0.0160",
      "5. volume": "7516",
    },
    "2023-10-27 10:35:00": {
      "1. open": "0.0200",
      "2. high": "0.0200",
      "3. low": "0.0200",
      "4. close": "0.0200",
      "5. volume": "2220",
    },
    "2023-10-27 10:25:00": {
      "1. open": "0.0250",
      "2. high": "0.0250",
      "3. low": "0.0250",
      "4. close": "0.0250",
      "5. volume": "382",
    },
    "2023-10-27 10:05:00": {
      "1. open": "0.0250",
      "2. high": "0.0250",
      "3. low": "0.0200",
      "4. close": "0.0200",
      "5. volume": "9350",
    },
    "2023-10-27 10:00:00": {
      "1. open": "0.0300",
      "2. high": "0.0300",
      "3. low": "0.0250",
      "4. close": "0.0260",
      "5. volume": "14679",
    },
    "2023-10-27 09:35:00": {
      "1. open": "0.0250",
      "2. high": "0.0500",
      "3. low": "0.0250",
      "4. close": "0.0500",
      "5. volume": "15725",
    },
    "2023-10-27 09:20:00": {
      "1. open": "0.0380",
      "2. high": "0.0380",
      "3. low": "0.0380",
      "4. close": "0.0380",
      "5. volume": "1",
    },
    "2023-10-27 09:10:00": {
      "1. open": "0.0300",
      "2. high": "0.0300",
      "3. low": "0.0300",
      "4. close": "0.0300",
      "5. volume": "1",
    },
    "2023-10-27 08:50:00": {
      "1. open": "0.0250",
      "2. high": "0.0250",
      "3. low": "0.0250",
      "4. close": "0.0250",
      "5. volume": "1",
    },
    "2023-10-27 08:35:00": {
      "1. open": "0.0350",
      "2. high": "0.0350",
      "3. low": "0.0350",
      "4. close": "0.0350",
      "5. volume": "1",
    },
    "2023-10-27 08:30:00": {
      "1. open": "0.0420",
      "2. high": "0.0440",
      "3. low": "0.0420",
      "4. close": "0.0440",
      "5. volume": "2188",
    },
    "2023-10-27 07:00:00": {
      "1. open": "0.0570",
      "2. high": "0.0570",
      "3. low": "0.0440",
      "4. close": "0.0440",
      "5. volume": "215",
    },
    "2023-10-26 17:55:00": {
      "1. open": "0.0570",
      "2. high": "0.0570",
      "3. low": "0.0440",
      "4. close": "0.0440",
      "5. volume": "215",
    },
    "2023-10-26 17:10:00": {
      "1. open": "0.2170",
      "2. high": "0.2170",
      "3. low": "0.0520",
      "4. close": "0.0520",
      "5. volume": "0",
    },
    "2023-10-26 16:40:00": {
      "1. open": "0.2170",
      "2. high": "0.2170",
      "3. low": "0.0500",
      "4. close": "0.0500",
      "5. volume": "0",
    },
    "2023-10-26 16:35:00": {
      "1. open": "0.0550",
      "2. high": "0.0550",
      "3. low": "0.0500",
      "4. close": "0.0500",
      "5. volume": "0",
    },
    "2023-10-26 16:30:00": {
      "1. open": "0.0800",
      "2. high": "0.0800",
      "3. low": "0.0500",
      "4. close": "0.0500",
      "5. volume": "0",
    },
    "2023-10-26 16:20:00": {
      "1. open": "0.0560",
      "2. high": "0.0560",
      "3. low": "0.0520",
      "4. close": "0.0520",
      "5. volume": "0",
    },
    "2023-10-26 16:15:00": {
      "1. open": "0.0990",
      "2. high": "0.0990",
      "3. low": "0.0900",
      "4. close": "0.0900",
      "5. volume": "21210",
    },
    "2023-10-26 16:10:00": {
      "1. open": "0.1530",
      "2. high": "0.2170",
      "3. low": "0.0520",
      "4. close": "0.0520",
      "5. volume": "71",
    },
    "2023-10-26 16:05:00": {
      "1. open": "0.0550",
      "2. high": "0.0550",
      "3. low": "0.0500",
      "4. close": "0.0500",
      "5. volume": "0",
    },
    "2023-10-26 16:00:00": {
      "1. open": "0.2100",
      "2. high": "0.2170",
      "3. low": "0.1670",
      "4. close": "0.1980",
      "5. volume": "8",
    },
    "2023-10-26 15:55:00": {
      "1. open": "0.1260",
      "2. high": "0.2170",
      "3. low": "0.0510",
      "4. close": "0.1920",
      "5. volume": "2250",
    },
    "2023-10-26 15:50:00": {
      "1. open": "0.0860",
      "2. high": "0.2170",
      "3. low": "0.0790",
      "4. close": "0.1980",
      "5. volume": "981",
    },
    "2023-10-26 15:45:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "635",
    },
    "2023-10-26 15:40:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "444",
    },
    "2023-10-26 15:35:00": {
      "1. open": "0.0960",
      "2. high": "0.0960",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "475",
    },
    "2023-10-26 15:30:00": {
      "1. open": "0.0860",
      "2. high": "0.0960",
      "3. low": "0.0780",
      "4. close": "0.0870",
      "5. volume": "1616",
    },
    "2023-10-26 15:25:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0780",
      "4. close": "0.0780",
      "5. volume": "279",
    },
    "2023-10-26 15:20:00": {
      "1. open": "0.0810",
      "2. high": "0.0860",
      "3. low": "0.0740",
      "4. close": "0.0780",
      "5. volume": "265",
    },
    "2023-10-26 15:15:00": {
      "1. open": "0.0800",
      "2. high": "0.0860",
      "3. low": "0.0730",
      "4. close": "0.0790",
      "5. volume": "1698",
    },
    "2023-10-26 15:10:00": {
      "1. open": "0.0800",
      "2. high": "0.0800",
      "3. low": "0.0730",
      "4. close": "0.0730",
      "5. volume": "286",
    },
    "2023-10-26 15:05:00": {
      "1. open": "0.0800",
      "2. high": "0.0800",
      "3. low": "0.0730",
      "4. close": "0.0730",
      "5. volume": "200",
    },
    "2023-10-26 15:00:00": {
      "1. open": "0.0800",
      "2. high": "0.0800",
      "3. low": "0.0730",
      "4. close": "0.0730",
      "5. volume": "258",
    },
    "2023-10-26 14:55:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0730",
      "4. close": "0.0730",
      "5. volume": "186",
    },
    "2023-10-26 14:50:00": {
      "1. open": "0.0850",
      "2. high": "0.0860",
      "3. low": "0.0780",
      "4. close": "0.0790",
      "5. volume": "200",
    },
    "2023-10-26 14:45:00": {
      "1. open": "0.0850",
      "2. high": "0.0850",
      "3. low": "0.0780",
      "4. close": "0.0780",
      "5. volume": "200",
    },
    "2023-10-26 14:40:00": {
      "1. open": "0.0850",
      "2. high": "0.0850",
      "3. low": "0.0780",
      "4. close": "0.0780",
      "5. volume": "277",
    },
    "2023-10-26 14:35:00": {
      "1. open": "0.0850",
      "2. high": "0.0850",
      "3. low": "0.0780",
      "4. close": "0.0780",
      "5. volume": "193",
    },
    "2023-10-26 14:30:00": {
      "1. open": "0.0850",
      "2. high": "0.0850",
      "3. low": "0.0780",
      "4. close": "0.0780",
      "5. volume": "186",
    },
    "2023-10-26 14:25:00": {
      "1. open": "0.0850",
      "2. high": "0.0850",
      "3. low": "0.0640",
      "4. close": "0.0780",
      "5. volume": "254",
    },
    "2023-10-26 14:20:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "193",
    },
    "2023-10-26 14:15:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "186",
    },
    "2023-10-26 14:10:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "186",
    },
    "2023-10-26 14:05:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0780",
      "4. close": "0.0790",
      "5. volume": "157",
    },
    "2023-10-26 14:00:00": {
      "1. open": "0.0860",
      "2. high": "0.0880",
      "3. low": "0.0470",
      "4. close": "0.0780",
      "5. volume": "236",
    },
    "2023-10-26 13:55:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "164",
    },
    "2023-10-26 13:50:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "114",
    },
    "2023-10-26 13:45:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "186",
    },
    "2023-10-26 13:40:00": {
      "1. open": "0.0860",
      "2. high": "0.0860",
      "3. low": "0.0790",
      "4. close": "0.0790",
      "5. volume": "179",
    },
    "2023-10-26 13:35:00": {
      "1. open": "0.0850",
      "2. high": "0.0860",
      "3. low": "0.0780",
      "4. close": "0.0790",
      "5. volume": "164",
    },
    "2023-10-26 13:30:00": {
      "1. open": "0.0770",
      "2. high": "0.0860",
      "3. low": "0.0440",
      "4. close": "0.0440",
      "5. volume": "451",
    },
    "2023-10-26 13:25:00": {
      "1. open": "0.0770",
      "2. high": "0.0770",
      "3. low": "0.0700",
      "4. close": "0.0710",
      "5. volume": "164",
    },
    "2023-10-26 13:20:00": {
      "1. open": "0.0770",
      "2. high": "0.0770",
      "3. low": "0.0480",
      "4. close": "0.0710",
      "5. volume": "566",
    },
    "2023-10-26 13:15:00": {
      "1. open": "0.0770",
      "2. high": "0.0770",
      "3. low": "0.0600",
      "4. close": "0.0710",
      "5. volume": "193",
    },
    "2023-10-26 13:10:00": {
      "1. open": "0.0770",
      "2. high": "0.0770",
      "3. low": "0.0700",
      "4. close": "0.0710",
      "5. volume": "157",
    },
    "2023-10-26 13:05:00": {
      "1. open": "0.0730",
      "2. high": "0.0770",
      "3. low": "0.0470",
      "4. close": "0.0700",
      "5. volume": "215",
    },
    "2023-10-26 13:00:00": {
      "1. open": "0.0720",
      "2. high": "0.0720",
      "3. low": "0.0660",
      "4. close": "0.0660",
      "5. volume": "129",
    },
    "2023-10-26 12:55:00": {
      "1. open": "0.0690",
      "2. high": "0.0710",
      "3. low": "0.0630",
      "4. close": "0.0650",
      "5. volume": "121",
    },
    "2023-10-26 12:50:00": {
      "1. open": "0.0650",
      "2. high": "0.0690",
      "3. low": "0.0600",
      "4. close": "0.0630",
      "5. volume": "121",
    },
    "2023-10-26 12:45:00": {
      "1. open": "0.0630",
      "2. high": "0.0660",
      "3. low": "0.0570",
      "4. close": "0.0600",
      "5. volume": "122",
    },
    "2023-10-26 12:40:00": {
      "1. open": "0.0630",
      "2. high": "0.0630",
      "3. low": "0.0570",
      "4. close": "0.0580",
      "5. volume": "121",
    },
    "2023-10-26 12:35:00": {
      "1. open": "0.0750",
      "2. high": "0.0760",
      "3. low": "0.0580",
      "4. close": "0.0590",
      "5. volume": "129",
    },
    "2023-10-26 12:30:00": {
      "1. open": "0.0760",
      "2. high": "0.0760",
      "3. low": "0.0680",
      "4. close": "0.0690",
      "5. volume": "136",
    },
    "2023-10-26 12:25:00": {
      "1. open": "0.0670",
      "2. high": "0.0760",
      "3. low": "0.0580",
      "4. close": "0.0700",
      "5. volume": "150",
    },
    "2023-10-26 12:20:00": {
      "1. open": "0.0480",
      "2. high": "0.0670",
      "3. low": "0.0420",
      "4. close": "0.0610",
      "5. volume": "523",
    },
    "2023-10-26 12:15:00": {
      "1. open": "0.0700",
      "2. high": "0.0760",
      "3. low": "0.0430",
      "4. close": "0.0430",
      "5. volume": "657",
    },
    "2023-10-26 12:10:00": {
      "1. open": "0.0570",
      "2. high": "0.0700",
      "3. low": "0.0400",
      "4. close": "0.0640",
      "5. volume": "207",
    },
    "2023-10-26 12:05:00": {
      "1. open": "0.0760",
      "2. high": "0.0760",
      "3. low": "0.0520",
      "4. close": "0.0520",
      "5. volume": "136",
    },
    "2023-10-26 12:00:00": {
      "1. open": "0.0770",
      "2. high": "0.0770",
      "3. low": "0.0700",
      "4. close": "0.0700",
      "5. volume": "150",
    },
    "2023-10-26 11:55:00": {
      "1. open": "0.0580",
      "2. high": "0.0770",
      "3. low": "0.0530",
      "4. close": "0.0700",
      "5. volume": "116",
    },
    "2023-10-26 11:50:00": {
      "1. open": "0.0560",
      "2. high": "0.0590",
      "3. low": "0.0510",
      "4. close": "0.0540",
      "5. volume": "165",
    },
    "2023-10-26 11:45:00": {
      "1. open": "0.0420",
      "2. high": "0.0480",
      "3. low": "0.0390",
      "4. close": "0.0430",
      "5. volume": "1132",
    },
    "2023-10-26 11:40:00": {
      "1. open": "0.0640",
      "2. high": "0.0640",
      "3. low": "0.0380",
      "4. close": "0.0380",
      "5. volume": "1770",
    },
    "2023-10-26 11:35:00": {
      "1. open": "0.0610",
      "2. high": "0.0620",
      "3. low": "0.0550",
      "4. close": "0.0570",
      "5. volume": "216",
    },
    "2023-10-26 11:30:00": {
      "1. open": "0.0610",
      "2. high": "0.0750",
      "3. low": "0.0550",
      "4. close": "0.0680",
      "5. volume": "164",
    },
    "2023-10-26 11:25:00": {
      "1. open": "0.0610",
      "2. high": "0.0640",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "157",
    },
    "2023-10-26 11:20:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "594",
    },
    "2023-10-26 11:15:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "172",
    },
    "2023-10-26 11:10:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "157",
    },
    "2023-10-26 11:05:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "179",
    },
    "2023-10-26 11:00:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "179",
    },
    "2023-10-26 10:55:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "172",
    },
    "2023-10-26 10:50:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "186",
    },
    "2023-10-26 10:45:00": {
      "1. open": "0.0600",
      "2. high": "0.0610",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "186",
    },
    "2023-10-26 10:40:00": {
      "1. open": "0.0600",
      "2. high": "0.0600",
      "3. low": "0.0550",
      "4. close": "0.0550",
      "5. volume": "186",
    },
    "2023-10-26 10:35:00": {
      "1. open": "0.0480",
      "2. high": "0.0600",
      "3. low": "0.0370",
      "4. close": "0.0550",
      "5. volume": "1707",
    },
    "2023-10-26 10:30:00": {
      "1. open": "0.0610",
      "2. high": "0.0610",
      "3. low": "0.0400",
      "4. close": "0.0440",
      "5. volume": "501",
    },
  },
};