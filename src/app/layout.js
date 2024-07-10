"use client";

import { ThemeProvider } from "@/components/contexts/ThemeContext";
import "./globals.css";

import React from "react";

// import React, { useState } from "react";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`body`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
