
# GROWW-STONKS

The assignment assigned by Groww for the Frontend Developer Intern role involves the development of a web application using NEXT.js and the Alpha Vantage API. This application is designed to provide users with real-time insights into the current state of the financial market. It offers valuable information such as the top-performing stocks, the stocks with the most significant losses, and the most actively traded stocks. Additionally, the application furnishes comprehensive details about the companies, including their stock performance and other pertinent information. The goal is to create a user-friendly, data-driven web interface to facilitate informed decision-making by investors.


## Features

- Explore Page
    -  Top gainers
    - Top loser
    - Most Actively Traded
- Products
- STOCK/EQUITY and ETF Search
- Light and dark theme


## API Reference

All the required data could be fetched from API endpoint provided by 

```http
  https://www.alphavantage.co.
```



## Screenshots

### Explore Gainers, Losers and Most actively traded

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163466/Screenshot_2023-10-30_at_6.11.35_PM_mhiqkv.png)

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163352/Screenshot_2023-10-30_at_6.11.05_PM_awohaa.png)


The Explore page serves as a comprehensive resource for users, offering a curated list of the market's
top-performing stocks, the most significant decliners, and the stocks that are currently experiencing the
highest trading activity.

### Product Page

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163644/Screenshot_2023-10-30_at_6.16.22_PM_q7fbjw.png)

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163352/Screenshot_2023-10-30_at_6.16.53_PM_jv0ut0.png)


The Product Page is a robust information hub dedicated to individual companies. It prominently features a
performance graph, a critical element, illustrating the company's stock performance over time. Users can
readily access a comprehensive profile of the company, encompassing its history, financial data, and
pertinent market information.

### Stock and ETF search

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163351/Screenshot_2023-10-30_at_6.13.15_PM_r8mpzn.png)

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163352/Screenshot_2023-10-30_at_8.09.52_PM_r8ycwg.png)


The Stock and ETF Search feature is a versatile tool that empowers users to swiftly locate and evaluate stocks
and ETFs of interest. This feature includes a user-friendly search functionality, allowing users to efficiently
search for specific stocks and ETFs. Furthermore, it offers filtering options that enable users to refine their
search based on whether they are interested in ETFs, stocks, or a comprehensive search that encompasses
both.

### Graphs

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163424/Screenshot_2023-11-05_at_11.20.11_AM_bhnly4.png)



The Graph feature on the Product Page provides a dynamic representation of the company's stock
performance. Users can select from various timeframes, including daily, weekly, monthly, and the broader
perspectives of 3 months and 6 months. This versatility allows users to closely analyze and track the
company's stock performance over different time horizons, aiding in the identification of trends and patterns
that may inform their investment decisions.

### Light and Dark Theme

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163352/Screenshot_2023-10-30_at_3.37.50_PM_hv1zi1.png)

![App Screenshot](https://res.cloudinary.com/dlavfwfuo/image/upload/v1699163352/Screenshot_2023-10-30_at_6.11.05_PM_awohaa.png)

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Accent Green | ![#25d7aa](https://via.placeholder.com/10/25d7aa?text=+) #25d7aa |
| Accent Blue | ![#5266ff](https://via.placeholder.com/10/5266ff?text=+) #5266ff |
| Primary White | ![#f8fafc](https://via.placeholder.com/10/f8fafc?text=+) #f8fafc |
| Primary Black | ![#1a1a1a](https://via.placeholder.com/10/1a1a1a?text=+) #1a1a1a |


## Things Learnt


- Using Redux in Next.js and redux-persitance
- Handling of restricted API with low limits pushing me for using different techniques for error handling.
- Explored various financial Jargons.
- Important aspects of SSR, SSG and how to use them efficiently
- Implementing Search Bar using debouncing, restricting unecessary API fetching and reducing load on sever.
- Explored a lot of new concepts in Next.js 13 documentation
- Ease of enabling dark/light theme using Next-Themes in very few steps
## Problem Faced

- Persisting redux store data in next.js
- Dealing with 25 request as daily limit of Alpha Vantage API.
- Poor Api structure, leading for the application to be more error prone.
- Apex chart not working for small data values, used chart js as an alternative.
## Installation and Running Locally

Install my-project with npm

```bash
git clone https://github.com/AmitSamui/groww-stonks.git
cd groww-stonks
```

```bash
npm install
```


#### Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`NEXT_PUBLIC_ALPHA_VANTAGE_API_KEY`

- Paste your Alpha vantantage Api key here.

#### Spin up the server

```bash
npm run dev
```

###

Hope you had a great time exploring the project

###




    
## 🔗 My Social Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://amitsamui.in)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/amit-samui-3780631ba/)
[![twitter](https://img.shields.io/badge/twitter-1DA1F2?style=for-the-badge&logo=twitter&logoColor=white)](https://twitter.com/AmitSamui257)

