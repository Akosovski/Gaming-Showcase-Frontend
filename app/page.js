'use client';
import Head from "next/head";
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import '../styles/globals.css';

import steamprofile from "../public/images/default.jpg";
import steamlogo from "../public/images/steamlogo.png";
import powerplayer from "../public/images/powerplayer.png";

export default function Page() {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <title></title>
          <link rel="icon" href="#" />
        </Head>
        <div className="bg-[url('../public/images/steambg.gif')]">
          <section className="w-9/12 max-[1145px]:w-full mx-auto bg-gradient-to-r from-slate-800 to-indigo-950">
            <navbar className="w-full h-32">
              <div className="drop-shadow-lg w-48 h-16 overflow-hidden pt-5 pl-8">
                <Image src={steamlogo}></Image>
              </div>
            </navbar>
            {/* PROFILE BAR */}
            <header className="px-4 flex flex-row justify-between max-[768px]:justify-start gap-5 max-[768px]:gap-7 max-[470px]:gap-1 text-white pb-4 pt-4 max-[768px]:h-[400px] max-[470px]:h-[360px]">
              <div className="flex flex-col md:flex-row gap-1 ml-5 max-[768px]:ml-2">
                <div className="max-[768px]:order-last max-[768px]:ml-2 max-[768px]:-mt-[50px] w-48 drop-shadow-lg border-2 w-48 h-48 max-[470px]:w-36 max-[470px]:h-36 overflow-hidden mt-5 mb-5">
                  <Image src={steamprofile} layout="fill" objectFit="cover"></Image>
                </div>
                <img className="absolute -ml-6 -mt-1 w-[239px] h-[240px] max-[768px]:z-50 max-[768px]:-ml-4 max-[768px]:mt-[72px] max-[470px]:w-[180px] max-[470px]:h-[180px] max-[470px]:-ml-2.5 max-[470px]:mt-[78px]" 
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1098340/71f42ec23a7f80c365f0c3900a6e61bdc78733d7.png"/>

                <div className="grid grid-rows-2">
                  <div className="p-4 pb-0 h-full ml-2 max-[768px]:w-max max-[768px]:-ml-2">
                    <h1 className="text-2xl mt-4 max-[768px]:mt-0">Royal Avène</h1>
                    <h1 className="truncate">Akosovski &nbsp; &#127470;&#127465; Jakarta Raya, Indonesia</h1>
                  </div>

                  <div className="p-4 pb-0 h-full ml-2 max-[768px]:w-max max-[768px]:-ml-2 max-[768px]:absolute max-[768px]:mt-[310px] max-[470px]:mt-[265px]">
                    <div className="border border-1 border-black bg-black h-[22px] w-fit">
                    <h1 className="-mt-[4px] hover:text-white ml-1 w-fit cursor-text text-black">Jago Boleh, Goblok Jangan.</h1>
                    </div>
                  </div>

                </div>
              </div>
              
              <div className="p-4 w-72 pt-8 max-[768px]:w-full max-[768px]:pt-32 max-[768px]:-ml-20 max-[470px]:-ml-32 max-[470px]:pt-28">
                <div className="grid grid-rows-2">

                  <div className="flex gap-2">
                    <h1 className="text-2xl">Level</h1>
                    <div>
                      <div className="border border-2 rounded-full border-sky-600 p-1 pt-0 text-center w-9">
                        <h1 className="text-xl">54</h1>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-rows-2 items-center w-full max-[768px]:max-w-48 min-w-[165px] h-16 right-0 rounded-[5px] -mt-1.5
                  bg-gradient-to-r from-slate-900 to-gray-900">
                    <div className="ml-2">
                      <Image src={powerplayer}></Image>
                    </div>
                    <div className="ml-2">
                      <h1 className="text-[15px] -mb-1">Power Player</h1>
                      <h1 className="text-sm">336 XP</h1>
                    </div>
                  </div>

                </div>
              </div>
            </header>
              
            {/* MAIN STATS */}
            <main className="flex flex-col-2 justify-center">

              <div className="w-full mx-5 mb-5 rounded-[5px] bg-gradient-to-r from-gray-900 to-slate-800">
                <h1 className="ml-2.5 mt-1 mb-2 text-white">Game Collector</h1>
                <div className="border-t-2 border-slate-900 bg-gradient-to-r from-gray-800 to-slate-950 p-3">
                  <div className="grid grid-cols-4 rounded-[5px] bg-gradient-to-r from-gray-900 to-slate-950 p-2 text-white">
                    <div>
                      <h1 className="text-2xl">110</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[15px] max-[470px]:text-[13px]">Games Owned</h1>
                    </div>
                    <div className="ml-3">
                      <h1 className="text-2xl">215</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[15px] max-[470px]:text-[13px]">DLC Owned</h1>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-2xl">44</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[15px] max-[470px]:text-[13px]">Reviews</h1>
                    </div>
                    <div className="ml-2">
                      <h1 className="text-2xl">9</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[15px] max-[470px]:text-[13px]">Wishlisted</h1>
                    </div>
                  </div>
                </div>
              </div>

            </main>
          </section>
        </div>
      </div>
    )
  }