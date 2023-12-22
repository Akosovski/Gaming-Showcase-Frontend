'use client';
import Head from "next/head";
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import '../styles/globals.css';

{/* STEAM IMAGES */}
import steamprofile from "../public/images/defaultprofile.jpg";
import steamlogo from "../public/images/steamlogo.png";
import powerplayer from "../public/images/powerplayer.png";
import readyornot from "../public/images/readyornot.jpg";
import eldenring from "../public/images/eldenring.jpg";
import bannerlord from "../public/images/bannerlord.jpg";
import xplane12 from "../public/images/xplane12.jpg";

{/* HOYOVERSE IMAGES */}
import hoyoprofile from "../public/images/hoyoprofile.png";
import hoyolablogo from "../public/images/hoyolablogo.png";

export default function Page() {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>
        <Head>
          <link rel="icon" href="#" />
        </Head>

        {/* STEAM */}
        <div className="bg-[url('../public/images/steambg.gif')]">

          <section className="w-9/12 max-[1145px]:w-full mx-auto bg-[#091024] bg-opacity-80 max-[768px]:bg-opacity-60 steam-part max-[470px]:min-width-[350px] overflow-hidden">
            <navbar className="w-full h-32">
              <div className="drop-shadow-lg w-48 h-16 overflow-hidden pt-5 pl-8">
                <a href="https://steamcommunity.com/id/royal_avene/" target="_blank" rel="noreferrer"><Image src={steamlogo}></Image></a>
              </div>
            </navbar>
            {/* PROFILE BAR */}
            <header className="px-4 flex flex-row justify-between max-[768px]:justify-start gap-5 max-[768px]:gap-7 max-[470px]:gap-1 text-white pb-4 pt-4 max-[768px]:h-[400px] max-[470px]:h-[320px]">
              <div className="flex flex-col md:flex-row gap-1 ml-5 max-[768px]:ml-2">
                <div className="max-[768px]:order-last max-[768px]:ml-2 max-[768px]:-mt-[50px] w-48 drop-shadow-lg border-2 w-48 h-48 max-[470px]:w-28 max-[470px]:h-28 overflow-hidden mt-5 mb-5">
                  <Image src={steamprofile} layout="fill" objectFit="cover"></Image>
                </div>
                <img className="absolute -ml-6 -mt-1 w-[239px] h-[240px] max-[768px]:z-50 max-[768px]:-ml-4 max-[768px]:mt-[72px] max-[470px]:w-[140px] max-[470px]:h-[140px] max-[470px]:-ml-[8px] max-[470px]:mt-[84px]" 
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1098340/71f42ec23a7f80c365f0c3900a6e61bdc78733d7.png"/>

                <div className="grid grid-rows-2">
                  <div className="p-4 pb-0 h-full ml-2 max-[768px]:w-max max-[768px]:-ml-2 max-[470px]:-ml-4">
                    <h1 className="text-2xl mt-4 max-[768px]:mt-0">Royal Avène</h1>
                    <h1 className="truncate">Akosovski &nbsp; &#127470;&#127465; Jakarta Raya, Indonesia</h1>
                  </div>

                  <div className="p-4 pb-0 h-full ml-2 max-[768px]:w-max max-[768px]:-ml-2 max-[768px]:absolute max-[768px]:mt-[310px] max-[470px]:mt-[230px] max-[470px]:-ml-4">
                    <div className="border border-1 border-black bg-black h-[22px] w-fit">
                    <h1 className="-mt-[4px] hover:text-white ml-1 w-fit cursor-text text-black">Jago Boleh, Goblok Jangan.</h1>
                    </div>
                  </div>

                </div>
              </div>
              
              <div className="p-4 w-72 pt-8 max-[768px]:w-full max-[768px]:pt-32 max-[768px]:-ml-20 max-[470px]:-ml-[185px] max-[470px]:pt-24">
                <div className="grid grid-rows-2">

                  <div className="flex gap-2">
                    <a href="https://steamcommunity.com/id/royal_avene/badges" target="_blank" rel="noreferrer">
                      <h1 className="text-2xl">Level</h1>
                    </a>
                    <div>
                      <div className="border border-2 rounded-full border-[#4e8ddb] pt-0.5 pb-0.5 text-center w-9">
                        <h1 className="text-[18px]">54</h1>
                      </div>
                    </div>
                  </div>

                  <a href="https://steamcommunity.com/id/royal_avene/badges/13" target="_blank" rel="noreferrer">
                    <div className="flex flex-rows-2 items-center w-full max-[768px]:max-w-48 min-w-[165px] h-16 right-0 rounded-[5px] -mt-1.5
                    bg-[#060a17] bg-opacity-90">
                        <div className="ml-2 rounded-[5px]">
                          <Image src={powerplayer}></Image>
                        </div>
                        <div className="ml-2">
                          <h1 className="text-[15px] -mb-1 max-[470px]:text-[14px]">Power Player</h1>
                          <h1 className="text-sm max-[470px]:text-[13px]">336 XP</h1>
                        </div>
                    </div>
                  </a>

                </div>
              </div>
            </header>
              
            {/* MAIN STATS */}
            <main className="flex flex-wrap justify-center">

              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Game Collector</h1>
                <div className="border-t-2 border-slate-900 bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="grid grid-cols-4 rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div>
                      <h1 className="text-3xl max-[470px]:text-2xl">110</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[13px] hover:text-white">Games Owned</h1></a>
                    </div>
                    <div className="ml-4">
                      <h1 className="text-3xl max-[470px]:text-2xl">215</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[13px] hover:text-white">DLC Owned</h1></a>
                    </div>
                    <div className="ml-5">
                      <h1 className="text-3xl max-[470px]:text-2xl">44</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/recommended/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[13px] hover:text-white">Reviews</h1></a>
                    </div>
                    <div className="ml-2">
                      <h1 className="text-3xl max-[470px]:text-2xl">9</h1>
                      <a href="https://store.steampowered.com/wishlist/id/royal_avene/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[13px] hover:text-white">Wishlisted</h1></a>
                    </div>
                  </div>

                  {/* FEATURED */}
                  <h1 className="ml-0.5 mt-2 mb-2 text-gray-400">Featured Games</h1>
                  <div className="flex flex-row-4 gap-1.5">
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/1245620/ELDEN_RING/" target="_blank" rel="noreferrer"><Image src={eldenring} className="w-full"></Image></a>
                    </div>
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/1144200/Ready_or_Not/" target="_blank" rel="noreferrer"><Image src={readyornot} className="w-full"></Image></a>
                    </div>
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/261550/Mount__Blade_II_Bannerlord/" target="_blank" rel="noreferrer"><Image src={bannerlord} className="w-full"></Image></a>
                    </div>
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/2014780/XPlane_12/" target="_blank" rel="noreferrer"><Image src={xplane12} className="w-full"></Image></a>
                    </div>
                  </div>

                </div>
              </div>

              {/* ACHIEVEMENTS */}
              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Achievement Showcase</h1>
                <div className="border-t-2 border-slate-900 bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="flex flex-cols max-[461px]:grid max-[461px]:grid-cols-3 rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="mr-10 max-[768px]:mr-5 max-[470px]:mr-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl truncate">1,544</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[13px]">Achievements</h1>
                    </div>
                    <div className="mr-8 max-[768px]:mr-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">1</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/?tab=perfect" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[13px] hover:text-white">Perfect Games</h1></a>
                    </div>
                    <div className="ml-5 max-[461px]:ml-0">
                      <h1 className="text-3xl max-[470px]:text-2xl">34%</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/?tab=all&sort=achievements" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[13px] hover:text-white">Avg. Game Completion Rate</h1></a>
                    </div>
                  </div>

                </div>
              </div>

            </main>
            <h1 className="text-center text-gray-500  max-[470px]:text-[15px]">Steam&reg; - 22 December 2023</h1>
            <br></br>
          </section>
        </div>

        {/* HOYOVERSE */}
        <div className="bg-[#0c0f1d] h-full">
            <div className="flex flex-row justify-center">
              <div className="w-48 drop-shadow-lg w-48 h-48 max-[470px]:w-28 max-[470px]:h-28 overflow-hidden m-7 max-[470px]:ml-2">
                <Image src={hoyoprofile} layout="fill" objectFit="cover"></Image>
              </div>
              <div className="grid grid-cols content-center w-48 max-[470px]:-ml-2">
                <div className="drop-shadow-lg w-44 h-8 overflow-hidden mb-3">
                  <Image src={hoyolablogo} layout="fill" objectFit="cover"></Image>
                </div>
                <div className="flex flex-row gap-3">
                  <h1 className="text-2xl max-[470px]:text-xl text-white">Akosovski</h1>
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
            <div className="flex flex-row gap-5 flex-wrap justify-center pb-5 mt-3 max-[470px]:px-2">

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
                    <h1 className="font-bold">877</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Characters</h1>
                    <h1 className="font-bold">43</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Achievements</h1>
                    <h1 className="font-bold">568</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Spiral Abyss</h1>
                    <h1 className="font-bold">10-3</h1>
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
                    <h1 className="font-bold">222</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Characters Unlocked</h1>
                    <h1 className="font-bold">26</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Achievements Unlocked</h1>
                    <h1 className="font-bold">298</h1>
                  </div>
                  <div className="flex flex-cols justify-between bg-[#343746] p-3 rounded-[10px] text-slate-100">
                    <h1>Treasured Opened</h1>
                    <h1 className="font-bold">309</h1>
                  </div>
                </div>
              </div>

            </div>
        </div>

      </div>
    )
  }