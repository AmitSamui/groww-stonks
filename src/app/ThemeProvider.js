"use client";
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "next-themes";

const ThemeProviderComponent = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};

export default ThemeProviderComponent;
