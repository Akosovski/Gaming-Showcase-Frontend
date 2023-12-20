// MAIN
'use client';
import Head from "next/head";
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";

// COMPONENTS

// SVG FILES

export default function Page() {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title></title>
          <link rel="icon" href="#" />
        </Head> 

        <div className="grid grid-cols-2 gap-4 place-content-center">
          <div className="bg-blue-500 p-4">
            <h1 className="text-lg text-green">Akosovski</h1>
          </div>
          
        </div>
        
      </div>
    )
  }