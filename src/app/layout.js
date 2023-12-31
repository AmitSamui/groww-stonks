import "./globals.css";
import style from "./Layout.module.css";
import { Poppins } from "next/font/google";
import Navbar from "@/Components/Navbar/Navbar";
import Sidebar from "@/Components/Sidebar/Sidebar";
import ThemeProviderComponent from "../Providers/ThemeProvider";
import ReduxProvider from "@/Providers/ReduxProvider";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Groww Stonks",
  description: "Stock and ETF'S broker app",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${poppins.variable}`} lang="en">
      <body>
        <ReduxProvider>
          <ThemeProviderComponent>
            <div className={`${style.page_layout}`}>
              <Sidebar />
              <div
                className={`${style.content_layout} flex-column justify-start align-center`}
              >
                <Navbar />
                {children}
              </div>
            </div>
          </ThemeProviderComponent>
        </ReduxProvider>
      </body>
    </html>
  );
}
