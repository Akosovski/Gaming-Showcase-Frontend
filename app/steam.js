'use client';
import * as React from 'react';
import { useState, useEffect } from "react";
import Image from "next/image";

{/* STEAM IMAGES */}
import screenshot from "../public/images/screenshot.png";
import review from "../public/images/review.png";
import steamlogo from "../public/images/steamlogo.png";
import powerplayer from "../public/images/powerplayer.png";
import steamprofile from "../public/images/defaultprofile.jpg";
import readyornot from "../public/images/readyornot.jpg";
import eldenring from "../public/images/eldenring.jpg";
import xplane12 from "../public/images/xplane12.jpg";
import eldenring1 from "../public/images/eldenring1.jpg";
import eldenring2 from "../public/images/eldenring2.jpg";
import hitmanpro from "../public/images/hitmanpro.jpg";
import hatred2 from "../public/images/hatred2.jpg";
import hatred3 from "../public/images/hatred3.jpg";
import ac7 from "../public/images/ac7bop.jpg";
import arma3 from "../public/images/arma3.jpg";
import arma3apfsds from "../public/images/arma3apfsds.jpg";
import mhrsunbreak from "../public/images/mhrsunbreak.jpg";
import mhwiceborne from "../public/images/mhwiceborne.jpg";
import mhw from "../public/images/mhw.jpg";
import bannerlord from "../public/images/bannerlord.jpg";
import destiny2 from "../public/images/destiny2.jpg";
import rise from "../public/images/rise.jpg";
import rise2 from "../public/images/rise2.jpg";
import ron1 from "../public/images/ron1.jpg";
import ron2 from "../public/images/ron2.jpg";
import sandstorm from "../public/images/sandstorm.jpg";
import years from "../public/images/years.png";
import il2 from "../public/images/il2.png";
import lord from "../public/images/lord.png";
import demon from "../public/images/demon.png";
import wow from "../public/images/wow.png";
import criminal from "../public/images/criminal.png";
import mafia from "../public/images/mafia.jpg";
import hitman from "../public/images/hitman.jpg";
import jwe1 from "../public/images/jwe1.jpg";
import risebanner from "../public/images/risebanner.jpg";
import ac7banner from "../public/images/ac7.jpg";
import got from "../public/images/got.jpg";
import gotbadge from "../public/images/gotbadge2.png";
import insu from "../public/images/insu.jpg";
import re2 from "../public/images/re2.jpg";
import sifu from "../public/images/sifu.jpg";
import spacemarine from "../public/images/spacemarine.jpg";
import YIR from "../public/images/2023YIR.svg";

export default function Page() {
    const [ownedGames, setOwnedGames] = useState(null);
    const [totalPlaytime, setTotalPlaytime] = useState(0);
    const [averagePlaytime, setAveragePlaytime] = useState(0);

    useEffect(() => {
      const fetchOwnedGames = async () => {
        try {
          const response = await fetch('https://akosovski-playstats-backend.up.railway.app/api/steam/games');
          if (!response.ok) {
            throw new Error('Network response invalid!');
          }
          const data = await response.json();
          const playtimes = data.response.games.map(game => game.playtime_forever);
          const total = playtimes.reduce((acc, playtime) => acc + playtime, 0);
          setTotalPlaytime(total);
          setOwnedGames(data);

          const startDate = new Date('2014-03-25');
          const oneDay = 24 * 60 * 60 * 1000;
          let currentDate = new Date();
          let totalDays = Math.round(Math.abs((currentDate - startDate) / oneDay));
          let totalPlaytimeDays = total / 24;
          setAveragePlaytime(totalPlaytimeDays / totalDays);

        } catch (error) {
          console.error('Error fetching data:', error);
          setOwnedGames([]);
          setTotalPlaytime(0);
        }
      };

      fetchOwnedGames();
    }, []);

    return (
      <div>

        {/* STEAM START */}
        <div className="bg-[url('../public/images/steambg.gif')] bg-cover">

          <section className="max-[1010px]:w-full w-[1000px] mx-auto bg-[#091024] bg-opacity-80 max-[768px]:bg-opacity-60 steam-part overflow-hidden">
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
                    <div className="float-left relative grid grid-cols-8 w-72">
                      <h1 className="truncate col-span-2 w-64">Akosovski</h1>
                      <img className="col-span-1 mt-1.5 ml-3.5" src="https://community.cloudflare.steamstatic.com/public/images/countryflags/id.gif"></img>
                      <h1 className="truncate col-span-5">Jakarta Raya, Indonesia</h1>
                    </div>
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
                      <div className="border border-2 rounded-full border-[#7652c9] pt-0.5 pb-0.5 text-center w-9">
                        <h1 className="text-[18px]">61</h1>
                      </div>
                    </div>
                  </div>

                  <a href="https://steamcommunity.com/id/royal_avene/badges/13" target="_blank" rel="noreferrer">
                    <div className="flex flex-rows-2 items-center w-full max-[768px]:max-w-48 min-w-[165px] h-16 right-0 rounded-[5px] -mt-1.5 bg-[#060a17] bg-opacity-90">
                        <div className="ml-2 rounded-[5px]">
                          <Image src={powerplayer}></Image>
                        </div>
                        <div className="ml-2">
                          <h1 className="text-[15px] -mb-1 max-[470px]:text-[14px]">Power Player</h1>
                          <h1 className="text-sm max-[470px]:text-[13px]">343 XP</h1>
                        </div>
                    </div>
                  </a>

                </div>
              </div>
            </header>
              
            {/* MAIN STATS */}
            <main className="flex flex-wrap justify-center">
            
            {/* 2023 YEAR IN REVIEW */}
            <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
              <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Steam Year In Review 2023</h1>
              <div className="border-t-2 border-slate-900 bg-gradient-to-r from-[#071a42] to-[#090d24] rounded-[5px]">
                <a href="https://s.team/y23/pdrhrdf?l=english" target="_blank" rel="noreferrer"><Image src={YIR} className="w-full"></Image></a>
              </div>
            </div>

            {/* FAVORITE GAME */}
            <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Favorite Game</h1>
                <div className="border-t-2 border-slate-900 bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="max-[470px]:justify-between overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 text-white">

                    <div className="flex max-[700px]:flex-col max-[700px]:justify-between overflow-hidden rounded-t-[5px] bg-[#050816] bg-opacity-60 p-2.5 pb-0 text-white">
                      <a href="https://store.steampowered.com/app/2215430/Ghost_of_Tsushima_DIRECTORS_CUT/" target="_blank" rel="noreferrer"><Image src={got} className="w-72 max-[700px]:w-full p-1"></Image></a>
                      <h1 className="text-3xl max-[700px]:text-2xl max-[700px]:text-center p-2 pl-5 pt-3 pb-0">Ghost of Tsushima DIRECTOR'S CUT</h1>
                    </div>
                    
                    <div className="grid grid-cols-4 max-[470px]:flex max-[470px]:flex-cols max-[470px]:justify-center overflow-hidden rounded-b-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                      <div className="max-[470px]:min-w-[85px] max-[530px]:min-w-[135px]">
                        {ownedGames === null && 
                          <h1 className="text-3xl max-[470px]:text-2xl max-[470px]:text-center">
                            0
                          </h1>
                        }
                        {ownedGames && ownedGames.response && (
                        <h1 className="text-3xl max-[470px]:text-2xl max-[470px]:text-center">
                          {(() => {
                            const game = ownedGames.response.games.find(game => game.appid === 2215430);
                            return game ? `${Math.floor(game.playtime_forever/60)}` : '0';
                          })()}
                        </h1>
                        )}
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[13px]">Hours Played</h1>
                      </div>
                      <div className="ml-3 max-[530px]:ml-4 max-[470px]:max-w-[68px] max-[330px]:ml-1.5">
                        <h1 className="text-3xl max-[470px]:text-2xl max-[470px]:text-center">77</h1>
                        <a href="https://steamcommunity.com/id/royal_avene/stats/2215430/achievements/" target="_blank" rel="noreferrer">
                          <h1 className="hover:text-gray-200 text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[13px] hover:text-white">Achievements</h1></a>
                      </div>
                    </div>

                  </div>

                  <div className="max-[470px]:justify-between overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 text-white mt-3">
                    <div className="flex flex-rows-2 items-center w-full h-16 right-0 rounded-[5px] bg-[#060a17] bg-opacity-90 m-3">
                      <div className="w-[66px] h-[66px] max-[570px]:w-[54px] max-[570px]:h-[54px] p-1.5">
                        <Image src={gotbadge}></Image>
                      </div>
                      <div> 
                      <a href="https://steamcommunity.com/id/royal_avene/gamecards/2215430" target="_blank" rel="noreferrer">
                        <h1 className="hover:text-blue-400 text-[15px] -mb-1 max-[470px]:text-[14px]">The People's Hope</h1></a>
                        <h1 className="text-sm max-[470px]:text-[13px] text-gray-500">200 XP</h1>
                      </div>
                    </div>
                    <hr className="ml-3 mr-3 border-gray-800"></hr>
                    <div className="flex flex-row m-3">
                      <div className="ml-1.5 mr-2 mt-[1px]">
                        <Image src={screenshot}></Image>
                      </div>
                      <a href="https://steamcommunity.com/id/royal_avene/screenshots/?appid=2215430" target="_blank" rel="noreferrer">
                        <h1 className="hover:decoration-1 hover:underline text-sm max-[470px]:text-[13px] mr-4">Screenshots &nbsp;15</h1></a>
                      <div className="ml-1.5 mr-2 -mt-[1px]">
                        <Image src={review}></Image>
                      </div>
                      <a href="https://steamcommunity.com/id/royal_avene/recommended/2215430/" target="_blank" rel="noreferrer">
                        <h1 className="hover:decoration-1 hover:underline text-sm max-[470px]:text-[13px]">Review &nbsp;1</h1></a>
                    </div>
                    
                  </div>

                </div>
              </div>

              {/* GAME COLLECTOR */}
              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Game Collector</h1>
                <div className="border-t-2 border-slate-900 bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="grid grid-cols-4 max-[470px]:flex max-[470px]:flex-cols max-[470px]:justify-between overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="max-[470px]:min-w-[85px] max-[530px]:min-w-[135px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">116</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">Games Owned</h1></a>
                    </div>
                    <div className="ml-3 max-[530px]:ml-4 max-[470px]:max-w-[68px] max-[330px]:ml-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">239</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">DLC Owned</h1></a>
                    </div>
                    <div className="ml-3 max-[470px]:max-w-[48px] max-[470px]:ml-3 max-[330px]:ml-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">48</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/recommended/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">Reviews</h1></a>
                    </div>
                    <div className="ml-3 max-[470px]:max-w-[60px] max-[470px]:ml-3 max-[330px]:ml-1.5">
                      <h1 className="text-3xl max-[470px]:text-2xl">12</h1>
                      <a href="https://store.steampowered.com/wishlist/id/royal_avene/" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[470px]:text-[12px] hover:text-white">Wishlisted</h1></a>
                    </div>
                  </div>

                  {/* FEATURED */}
                  <h1 className="ml-0.5 mt-2 mb-2 text-gray-400">Featured Games</h1>
                  <div className="flex flex-row-4 gap-1.5">
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/2014780/XPlane_12/" target="_blank" rel="noreferrer"><Image src={xplane12} className="w-full"></Image></a>
                    </div>
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/107410/Arma_3/" target="_blank" rel="noreferrer"><Image src={arma3} className="w-full"></Image></a>
                    </div>
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/1880360/Monster_Hunter_Rise_Sunbreak/" target="_blank" rel="noreferrer"><Image src={mhrsunbreak} className="w-full"></Image></a>
                    </div>
                    <div className="grow">
                      <a href="https://store.steampowered.com/app/1118010/Monster_Hunter_World_Iceborne/" target="_blank" rel="noreferrer"><Image src={mhwiceborne} className="w-full"></Image></a>
                    </div>
                  </div>

                </div>
              </div>
              
              {/* COMPLETIONIST */}
              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-white">Completionist Showcase</h1>

                <div className="bg-gradient-to-r from-[#071a42] to-[#090d24] p-3">
                  <div className="flex flex-wrap gap-2 min-[528px]:grid grid-cols-2 justify-items-center overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">

                    <div className="">
                      <Image src={mhw}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">100 / 100 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>

                    <div className="">
                      <Image src={risebanner}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">100 / 100 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>

                    <div className="">
                      <Image src={eldenring}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">42 / 42 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>
                    
                    <div className="">
                      <Image src={ac7banner}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">49 / 49 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>

                    <div className="">
                      <Image src={insu}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">35 / 35 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>

                    <div className="">
                      <Image src={re2}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">44 / 44 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>

                    <div className="">
                      <Image src={sifu}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">61 / 61 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>

                    <div className="">
                      <Image src={spacemarine}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">60 / 60 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>
                    
                    <div className="">
                      <Image src={hitman}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">47 / 47 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>
                    
                    <div className="">
                      <Image src={jwe1}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">73 / 73 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>
                    
                    <div className="">
                      <Image src={readyornot}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">15 / 15 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>
                    
                    <div className="">
                      <Image src={mafia}></Image>
                      <div className="flex justify-between p-0.5 pl-2 pb-0 bg-[#206bf6]">
                        <h1 className="truncate">43 / 43 Achievements</h1>
                        <img className="w-12 h-12 -mt-5 -mr-1" src="https://community.cloudflare.steamstatic.com/public/images/profile/achievementIcon.svg"></img>
                      </div>
                    </div>
                    

                  </div>

                  <div className="mt-3 grid grid-cols-2 max-[675px]:flex max-[675px]:flex-cols gap-4 overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="max-[768px]:mr-3 max-[470px]:mr-1.5 min-[600px]:min-w-[125px] min-[470px]:min-w-[97px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">26</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/?tab=perfect" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px] hover:text-white">Perfect Games</h1></a>
                    </div>
                    <div className="max-[768px]:mr-3 max-[470px]:mr-1.5 min-[600px]:min-w-[120px]">
                      <h1 className="text-3xl max-[470px]:text-2xl truncate">1046</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px]">Achievements in Perfect Games</h1>
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
                      <Image src={arma3apfsds}></Image>
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
                      <Image src={destiny2}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={ac7}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={sandstorm}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={hitmanpro}></Image>
                    </div>
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={bannerlord}></Image>
                    </div> 
                    <div className="w-[66px] h-[66px] max-[570px]:w-[48px] max-[570px]:h-[48px] max-[570px]:w-[36px] max-[570px]:h-[36px] max-[370px]:w-[30px] max-[370px]:h-[30px]">
                      <Image src={rise2}></Image>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#071a42] to-[#090d24] p-3 rounded-b-[5px]">
                  <div className="grid grid-cols-4 max-[470px]:flex max-[470px]:flex-cols max-[470px]:justify-between overflow-hidden rounded-[5px] bg-[#050816] bg-opacity-60 p-2.5 text-white">
                    <div className="max-[768px]:mr-3 max-[470px]:mr-1.5 min-[600px]:min-w-[120px]">
                      <h1 className="text-3xl max-[470px]:text-2xl truncate">2,371</h1>
                      <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px]">Achievements</h1>
                    </div>
                    <div className="max-[768px]:mr-3 max-[470px]:mr-1.5 min-[600px]:min-w-[125px] min-[470px]:min-w-[97px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">26</h1>
                      <a href="https://steamcommunity.com/id/royal_avene/games/?tab=perfect" target="_blank" rel="noreferrer">
                        <h1 className="truncate text-gray-400 text-lg max-[768px]:text-[18px] max-[600px]:text-[16px] max-[530px]:text-[14px] max-[470px]:text-[12px] hover:text-white">Perfect Games</h1></a>
                    </div>
                    <div className="min-[600px]:min-w-[240px] min-[470px]:min-w-[188px] max-[385px]:max-w-[75px]">
                      <h1 className="text-3xl max-[470px]:text-2xl">58%</h1>
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
                      <h1 className="text-3xl max-[470px]:text-2xl truncate">66</h1>
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

              <div className="w-full mx-5 max-[600px]:mx-3 max-[470px]:mx-1.5 mb-5 rounded-[5px] bg-gradient-to-r from-[#142245] to-[#0a193e]">
                <h1 className="ml-2.5 mt-1.5 mb-2 text-center text-white text-[18px] max-[470px]:text-[16px] max-[390px]:text-[14px] max-[390px]:text-left">
                  Total Playtime : <span className="font-bold">
                  {Math.floor(totalPlaytime/60)}h</span> / 
                  <span className="font-bold"> {Math.floor(averagePlaytime * 10) / 10}h</span> per day
                </h1>
              </div>

            </main>
            <h1 className="text-center text-gray-500 max-[470px]:text-[15px]">Steam&reg; - 11 June 2024</h1>
            <br></br>
          </section>
        </div>
        {/* STEAM END */}
        </div>
    )
  }