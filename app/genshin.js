'use client';
import * as React from 'react';
import Image from 'next/image';

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
import arlecchino from "../public/images/arlecchino.svg";

export default function Page() {
  return (
    <div>
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
                  <Image src={arlecchino}/>
                </div>
                <div className="text-white text-center text-lg">
                  <h1 className="mb-1 -mt-2.5 max-[360px]:-mt-4">Arlecchino</h1>
                </div>
              </div>

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

            <h1 className="text-center text-gray-500 mt-5 max-[470px]:text-[15px]">Genshin Impact - 26 May 2024</h1>
            <br></br>
    </div>
    )
}