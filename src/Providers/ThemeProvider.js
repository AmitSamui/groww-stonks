"use client";
import React from "react";
import { ThemeProvider } from "next-themes";

/**
 * 
 * @param {*} param0 
 * wraps the application with theme provider
 */
const ThemeProviderComponent = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
