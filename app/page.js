'use client';
import Head from "next/head";
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";
import '../styles/globals.css';

{/* STEAM IMAGES */}
import steamlogo from "../public/images/steamlogo.png";
import powerplayer from "../public/images/powerplayer.png";
import steamprofile from "../public/images/defaultprofile.jpg";
import readyornot from "../public/images/readyornot.jpg";
import eldenring from "../public/images/eldenring.jpg";
import bannerlord from "../public/images/bannerlord.jpg";
import xplane12 from "../public/images/xplane12.jpg";
import eldenring1 from "../public/images/eldenring1.jpg";
import eldenring2 from "../public/images/eldenring2.jpg";
import hatred1 from "../public/images/hatred1.jpg";
import hatred2 from "../public/images/hatred2.jpg";
import hatred3 from "../public/images/hatred3.jpg";
import ac7 from "../public/images/ac7.jpg";
import arma3 from "../public/images/ac7.jpg";
import mhw from "../public/images/mhw.jpg";
import payday2 from "../public/images/payday2.jpg";
import phantoms from "../public/images/phantoms.jpg";
import rise from "../public/images/rise.jpg";
import ron1 from "../public/images/ron1.jpg";
import ron2 from "../public/images/ron2.jpg";
import sandstorm from "../public/images/sandstorm.jpg";
import years from "../public/images/years.png";
import il2 from "../public/images/il2.png";
import lord from "../public/images/lord.png";
import demon from "../public/images/demon.png";
import wow from "../public/images/wow.png";
import criminal from "../public/images/criminal.png";

{/* HOYOVERSE IMAGES */}
import hoyoprofile from "../public/images/hoyoprofile.png";
import hoyolablogo from "../public/images/hoyolablogo.png";

{/* HI3 IMAGES */}
import hi3logo from "../public/images/honkai-impact-3rd.svg";
import goldendiva from "../public/images/goldendiva.svg";
import herrscherreason from "../public/images/herrscherreason.svg";
import herrschervoid from "../public/images/herrschervoid.svg";
import herrscherthunder from "../public/images/herrscherthunder.svg";
import misspinkelf from "../public/images/misspinkelf.svg";
import shadowdash from "../public/images/shadowdash.svg";
import starchasmnyx from "../public/images/starchasmnyx.svg";
import swallowtailphantasm from "../public/images/swallowtailphantasm.svg";

{/* GENSHIN IMAGES */}
import genshinlogo from "../public/images/genshin-impact.svg";
import ei from "../public/images/ei.svg";
import ganyu from "../public/images/ganyu.svg";
import hutao from "../public/images/hutao.svg";
import kazuha from "../public/images/kazuha.svg";
import mona from "../public/images/mona.svg";
import keqing from "../public/images/keqing.svg";
import nahida from "../public/images/nahida.svg";
import qiqi from "../public/images/qiqi.svg";
import wanderer from "../public/images/wanderer.svg";
import yelan from "../public/images/yelan.svg";
import zhongli from "../public/images/zhongli.svg";

{/* STAR RAIL IMAGES */}
import starraillogo from "../public/images/honkai-starrail.svg";

export default function Page() {
    const [darkMode, setDarkMode] = useState(false);
    return (
      <div className={darkMode ? "dark" : ""}>

        {/* STEAM START */}
        <div className="bg-[url('../public/images/steambg.gif')] bg-cover">

          <section className="max-[1100px]:w-full w-[1000px] mx-auto bg-[#091024] bg-opacity-80 max-[768px]:bg-opacity-60 steam-part overflow-hidden">
            <navbar className="w-full h-32">
              <div className="drop-shadow-lg w-48 h-16 overflow-hidden pt-5 pl-8 max-[470px]:-ml-1 max-[330px]:-ml-5">
                <a href="https://steamcommunity.com/id/royal_avene/" target="_blank" rel="noreferrer"><Image src={steamlogo}></Image></a>
              </div>
            </navbar>

            {/* PROFILE BAR */}
            <header className="px-4 flex flex-row justify-between max-[768px]:justify-start gap-5 max-[768px]:gap-7 max-[470px]:gap-1 text-white pb-4 pt-4 max-[768px]:h-[390px] max-[470px]:h-[320px]">
              <div className="flex flex-col md:flex-row gap-1 ml-5 max-[768px]:ml-2">
                <div className="max-[768px]:order-last max-[768px]:ml-2 max-[768px]:-mt-[50px] w-48 drop-shadow-lg border-2 w-48 h-48 max-[470px]:w-28 max-[470px]:h-28 max-[330px]:-ml-[5px] overflow-hidden mt-5 mb-5">
                  <Image src={steamprofile} layout="fill" objectFit="cover"></Image>
                </div>
                <img className="absolute -ml-6 -mt-1 w-[239px] h-[240px] max-[768px]:z-50 max-[768px]:-ml-4 max-[768px]:mt-[72px] max-[470px]:w-[140px] max-[470px]:h-[140px] max-[470px]:-ml-[8px] max-[470px]:mt-[84px] max-[330px]:-ml-[20px]" 
                src="https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/items/1098340/71f42ec23a7f80c365f0c3900a6e61bdc78733d7.png"/>

                <div className="grid grid-rows-2">
                  <div className="p-4 pb-0 h-full ml-2 max-[768px]:w-max max-[768px]:-ml-2 max-[470px]:-ml-4 max-[330px]:-ml-7">
                    <h1 className="text-2xl mt-4 max-[768px]:mt-0">Royal Avène</h1>
                    <h1 className="truncate">Akosovski &nbsp; &#127470;&#127465; Jakarta Raya, Indonesia</h1>
                  </div>

                  <div className="p-4 pb-0 h-full ml-2 max-[768px]:w-max max-[768px]:-ml-2 max-[768px]:absolute max-[768px]:mt-[310px] max-[470px]:mt-[230px] max-[470px]:-ml-4 max-[330px]:-ml-7">
                    <div className="border border-1 border-black bg-black h-[22px] w-fit">
                    <h1 className="-mt-[4px] hover:text-white ml-1 w-fit cursor-text text-black text-md max-[470px]:text-[14px] max-[470px]:-mt-0.5">Jago Boleh, Goblok Jangan.</h1>
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

              {/* GAME COLLECTOR */}
              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Game Collector</h1>
                <div className="border-t-2 border-slate-900 bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="grid grid-cols-4 max-[470px]:flex max-[470px]:flex-cols max-[470px]:justify-between overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="max-[470px]:min-w-[85px] max-[530px]:min-w-[135px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">110</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">Games Owned</h1></a>
                    </div>
                    <div className="ml-3 max-[530px]:ml-4 max-[470px]:max-w-[68px] max-[330px]:ml-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">215</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">DLC Owned</h1></a>
                    </div>
                    <div className="ml-3 max-[470px]:max-w-[48px] max-[470px]:ml-3 max-[330px]:ml-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">44</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/recommended/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">Reviews</h1></a>
                    </div>
                    <div className="ml-3 max-[470px]:max-w-[60px] max-[470px]:ml-3 max-[330px]:ml-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">9</h1>
                      <a href="https://store.steampowered.com/wishlist/id/royal_avene/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">Wishlisted</h1></a>
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

                <div className="bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 pb-0">
                  <div className="grid grid-cols-7 justify-items-center overflow-hidden rounded-t-[5px] bg-[#050816] bg-opacity-60 p-2.5 pb-0.5 max-[330px]:p-1.5 max-[330px]:pb-0 text-white">
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={eldenring1}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={hatred1}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={ron1}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={hatred2}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={ron2}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={hatred3}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={eldenring2}></Image>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 justify-items-center overflow-hidden rounded-b-[5px] bg-[#050816] bg-opacity-60 p-2.5 pt-0.5 max-[330px]:p-1.5 text-white">
                    <div className="w-[64px] h-[64px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={rise}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={ac7}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={mhw}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={sandstorm}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={phantoms}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={payday2}></Image>
                    </div> 
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={arma3}></Image>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="grid grid-cols-4 max-[470px]:flex max-[470px]:flex-cols max-[470px]:justify-between overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="max-[768px]:mr-3 max-[470px]:mr-1.5 min-[600px]:min-w-[120px]">
                      <h1 className="text-3xl max-[470px]:text-2xl truncate">1,551</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px]">Achievements</h1>
                    </div>
                    <div className="max-[768px]:mr-3 max-[470px]:mr-1.5 min-[600px]:min-w-[125px] min-[470px]:min-w-[97px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">1</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/?tab=perfect" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px] hover:text-white">Perfect Games</h1></a>
                    </div>
                    <div className="min-[600px]:min-w-[240px] min-[470px]:min-w-[188px] max-[385px]:max-w-[75px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">35%</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/?tab=all&sort=achievements" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px] hover:text-white">Avg. Game Completion Rate</h1></a>
                    </div>
                  </div>
                </div>

              </div>

              {/* BADGES */}
              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Badge Collector</h1>

                <div className="bg-gradient-to-r from-[#071a42] to-[#090d24] p-3">
                  <div className="grid grid-cols-6 justify-items-center overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="w-[72px] h-[72px] max-[490px]:w-[48px] max-[490px]:h-[48px] max-[330px]:w-[38px] max-[330px]:h-[38px]">
                      <Image src={years}></Image>
                    </div>
                    <div className="w-[72px] h-[72px] max-[490px]:w-[48px] max-[490px]:h-[48px] max-[330px]:w-[38px] max-[330px]:h-[38px]">
                      <Image src={il2}></Image>
                    </div>
                    <div className="w-[72px] h-[72px] max-[490px]:w-[48px] max-[490px]:h-[48px] max-[330px]:w-[38px] max-[330px]:h-[38px]">
                      <Image src={lord}></Image>
                    </div>
                    <div className="w-[72px] h-[72px] max-[490px]:w-[48px] max-[490px]:h-[48px] max-[330px]:w-[38px] max-[330px]:h-[38px]">
                      <Image src={wow}></Image>
                    </div>
                    <div className="w-[72px] h-[72px] max-[490px]:w-[48px] max-[490px]:h-[48px] max-[330px]:w-[38px] max-[330px]:h-[38px]">
                      <Image src={demon}></Image>
                    </div>
                    <div className="w-[72px] h-[72px] max-[490px]:w-[48px] max-[490px]:h-[48px] max-[330px]:w-[38px] max-[330px]:h-[38px]">
                      <Image src={criminal}></Image>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 pt-0 rounded-b-[5px]">
                  <div className="grid grid-cols-3 max-[768px]:flex max-[768px]:flex-cols max-[768px]:justify-start overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="max-[768px]:mr-5 min-[600px]:min-w-[180px]">
                      <h1 className="text-3xl max-[470px]:text-2xl truncate">55</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px]">Total Badges Earned</h1>
                    </div>
                    <div className="max-[768px]:mr-5 min-[600px]:min-w-[165px] min-[470px]:min-w-[97px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">1</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/badges/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px] hover:text-white">Foil Badges Earned</h1></a>
                    </div>
                  </div>
                </div>

              </div>

              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">                                            {/* https://steamtime.info/s/76561198130945059 */}
                <h1 className="ml-2.5 mt-1.5 mb-2 text-center text-white text-[18px] max-[470px]:text-[16px] max-[390px]:text-[14px] max-[390px]:text-left">Total Playtime : <span className="font-bold">6,929h</span> / <span className="font-bold">769.89h</span> per year</h1>
              </div>

            </main>
            <h1 className="text-center text-gray-500 max-[470px]:text-[15px]">Steam&reg; - 30 December 2023</h1>
            <br></br>
          </section>
        </div>
        {/* STEAM END */}

        {/* ---------------------------------------------------------------------------------------------------- */}

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

            <hr className="mx-48 max-[470px]:mx-16"></hr>

            {/* HONKAI IMPACT 3RD */}
            <div className="grid grid-rows-2 justify-center mt-5">
              <div className="drop-shadow-lg w-[250px] h-[150px] overflow-hidden ">
                <Image src={hi3logo}></Image>
              </div>
              <div>
                <h1 className="text-white text-xl text-center mt-2">My Featured Valkyries</h1>
              </div>
            </div>

            <div className="flex flex-rows flex-wrap p-3 gap-6 justify-center -mt-24 max-[845px]:mx-0 max-[1366px]:mx-24 min-[1366px]:mx-44">

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={misspinkelf}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Miss Pink Elf</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={herrscherthunder}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Herrscher of Thunder</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={herrscherreason}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Herrscher of Reason</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={herrschervoid}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Herrscher of the Void</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={starchasmnyx}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Starchasm Nyx</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={shadowdash}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Shadow Dash</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={goldendiva}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Golden Diva</h1>
                </div>
              </div>

              <div className="w-[300px] rounded-[12px] bg-gradient-to-r from-[#032866] to-[#10326b]">
                <div className="w-[300px] h-[400px] rounded-[12px] overflow-hidden">
                  <Image src={swallowtailphantasm}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-1.5">Swallowtail Phantasm</h1>
                </div>
              </div>

            </div>

            <h1 className="text-center text-gray-500 mt-5 max-[470px]:text-[15px]">Honkai Impact 3rd - 23 December 2023</h1>
            <br></br>

            <hr className="mx-48 max-[470px]:mx-16"></hr>

            {/* GENSHIN IMPACT */}
            <div className="grid grid-rows-2 justify-center mt-8">
              <div className="drop-shadow-lg w-[280px] h-[110px] overflow-hidden ">
                <Image src={genshinlogo}></Image>
              </div>
              <div>
                <h1 className="text-white text-xl text-center mt-3">My Featured Characters</h1>
              </div>
            </div>

            <div className="flex flex-rows flex-wrap p-3 gap-6 justify-center -mt-12 max-[900px]:mx-0 max-[1366px]:mx-24 min-[1366px]:mx-44">
              
              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={zhongli}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Zhongli</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={ei}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Raiden Shogun</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={ganyu}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Ganyu</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={nahida}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Nahida</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={hutao}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Hu Tao</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={kazuha}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Kaedehara Kazuha</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={keqing}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Keqing</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={yelan}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Yelan</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={wanderer}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Wanderer</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={qiqi}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Qiqi</h1>
                </div>
              </div>

              <div className="w-[330px] rounded-[12px] max-[360px]:w-[300px] bg-gradient-to-r from-[#0e0d0b] to-[#0e0d0b]">
                <div className="w-[330px] h-[400px] max-[360px]:w-[300px] max-[360px]:h-[370px] rounded-[12px] overflow-hidden">
                  <Image src={mona}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Mona</h1>
                </div>
              </div>

            </div>

            <h1 className="text-center text-gray-500 mt-5 max-[470px]:text-[15px]">Genshin Impact - 28 December 2023</h1>
            <br></br>

            <hr className="mx-48 max-[470px]:mx-16"></hr>

            {/* HONKAI: STAR RAIL */}
            <div className="grid grid-rows-2 justify-center mt-8">
              <div className="drop-shadow-lg w-[280px] h-[133px] overflow-hidden ">
                <Image src={starraillogo}></Image>
              </div>
              <div>
                <h1 className="text-white text-xl text-center mt-3.5">My Featured Characters</h1>
              </div>
            </div>

        </div>
        {/* HOYOVERSE END */}

      </div>
    )
  }