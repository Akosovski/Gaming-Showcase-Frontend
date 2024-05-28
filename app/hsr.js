'use client';
import * as React from 'react';
import Image from 'next/image';

{/* STAR RAIL IMAGES */}
import starraillogo from "../public/images/honkai-starrail.svg";

export default function Page() {
  return (
    <div>
        {/* HONKAI: STAR RAIL */}
        <hr className="mx-96 mt-12 max-[470px]:mx-16"></hr>
        <div className="grid grid-rows-2 justify-center mt-8">
              <div className="drop-shadow-lg w-[280px] h-[133px] overflow-hidden ">
                <Image src={starraillogo}></Image>
              </div>
              <div>
                <h1 className="text-white text-xl text-center mt-8">WORK IN-PROGRESS</h1>
              </div>
        </div>
    </div>
    )
}