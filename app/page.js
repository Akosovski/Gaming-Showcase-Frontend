'use client';
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import '../styles/globals.css';

// Components
import Steam from "./steam";
import Hi3 from "./hi3";
import Genshin from "./genshin";
import HSR from "./hsr";

{/* HOYOVERSE IMAGES */}
import hoyoprofile from "../public/images/hoyoprofile.png";
import hoyolablogo from "../public/images/hoyolablogo.png";

export default function Page() {
    const [darkMode, setDarkMode] = useState(false);

    return (
      <div className={darkMode ? "dark" : ""}>

        <Steam></Steam>

        {/* HOYOVERSE START */}
        <div className="bg-[#0c0f1d] h-full">
            <div className="flex flex-row justify-center">
              <div className="w-48 drop-shadow-lg w-48 h-48 max-[470px]:w-28 max-[470px]:h-28 max-[335px]:w-24 max-[335px]:h-24 overflow-hidden m-7 max-[470px]:ml-4 max-[470px]:mr-5">
                <Image src={hoyoprofile} layout="fill" objectFit="cover"></Image>
              </div>
              <div className="grid grid-cols content-center w-48 max-[470px]:-ml-2  max-[335px]:-ml-0.5">
                <div className="drop-shadow-lg w-44 h-8 max-[470px]:w-[132px] max-[470px]:h-6 overflow-hidden mb-3">
                  <Image src={hoyolablogo} layout="fill" objectFit="cover"></Image>
                </div>
                <div className="flex flex-row gap-3">
                  <h1 className="text-2xl max-[470px]:text-xl text-white mt-0.5">Akosovski</h1>
                  <div className="border-1 bg-green-500 px-1 rounded-lg mt-1.5 mb-0.5 max-[470px]:mt-1">
                    <h1 className="text-md text-white">Lv.1</h1>
                  </div>
                </div>
                <div className="mt-2">
                  <h1 className="text-md text-gray-400">Ajeb-ajeb in advance.</h1>
                </div>
              </div>
            </div>

            {/* GAMES STATS */}
            <div className="flex flex-row gap-5 flex-wrap justify-center pb-16 mt-3 max-[470px]:px-2">

              {/* HONKAI IMPACT 3RD STATS */}
              <div className="justify-center bg-[#1b1d2a] w-72 p-3 rounded-[12px]">
                <h1 className="text-slate-400 mb-1 text-lg ml-1">Honkai Impact 3rd</h1>
                <hr></hr>
                <h1 className="text-slate-100 font-bold mt-2 ml-1">Akosovski</h1>
                <h1 className="text-slate-400 mb-2 ml-1">SEA Server Lv.78</h1>
                <div className="grid grid-rows-4 gap-2">
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Days on Hyperion</h1>
                    <h1 className="font-bold">212</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Stigmata Owned</h1>
                    <h1 className="font-bold">154</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Battlesuits Owned</h1>
                    <h1 className="font-bold">43</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Outfits</h1>
                    <h1 className="font-bold">48</h1>
                  </div>
                </div>
              </div>

              {/* GENSHIN IMPACT STATS */}
              <div className="justify-center bg-[#1b1d2a] w-72 p-3 rounded-[12px]">
                <h1 className="text-slate-400 mb-1 text-lg ml-1">Genshin Impact</h1>
                <hr></hr>
                <h1 className="text-slate-100 font-bold mt-2 ml-1">Akosovski</h1>
                <h1 className="text-slate-400 mb-2 ml-1">Asia Server Lv.60</h1>
                <div className="grid grid-rows-4 gap-2">
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Days Active</h1>
                    <h1 className="font-bold">926</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Characters</h1>
                    <h1 className="font-bold">45</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Achievements</h1>
                    <h1 className="font-bold">587</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Spiral Abyss</h1>
                    <h1 className="font-bold">11-3</h1>
                  </div>
                </div>
              </div>

              {/* HONKAI: STAR RAIL STATS */}
              <div className="justify-center bg-[#1b1d2a] w-72 p-3 rounded-[12px]">
                <h1 className="text-slate-400 mb-1 text-lg ml-1">Honkai: Star Rail</h1>
                <hr></hr>
                <h1 className="text-slate-100 font-bold mt-2 ml-1">Akosovski</h1>
                <h1 className="text-slate-400 mb-2 ml-1">Asia Server Lv.70</h1>
                <div className="grid grid-rows-4 gap-2">
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Time Active</h1>
                    <h1 className="font-bold">346</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Characters Unlocked</h1>
                    <h1 className="font-bold">33</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Achievements Unlocked</h1>
                    <h1 className="font-bold">369</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Treasured Opened</h1>
                    <h1 className="font-bold">387</h1>
                  </div>
                </div>
              </div>

            </div>

            <hr className="mx-48 max-[470px]:mx-16"></hr>

            <Hi3></Hi3>

            <hr className="mx-48 max-[470px]:mx-16"></hr>

            <Genshin></Genshin>

            <hr className="mx-48 max-[470px]:mx-16"></hr>

            <HSR></HSR>

        </div>
        {/* HOYOVERSE END */}

      </div>
    )
  }