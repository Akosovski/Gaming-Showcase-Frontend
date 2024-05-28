'use client';
import * as React from 'react';
import Image from 'next/image';

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

export default function Page() {
  return (
    <div>
        {/* HONKAI IMPACT 3RD */}
        <hr className="mx-96 mt-12 max-[470px]:mx-16"></hr>
        <div className="grid grid-rows-2 justify-center mt-8">
            <div className="drop-shadow-lg w-[250px] justify-center h-[150px] overflow-hidden ">
                <Image src={hi3logo}></Image>
            </div>
        </div>
        
        <div className="flex flex-rows flex-wrap p-3 gap-6 justify-center -mt-32 max-[845px]:mx-0 max-[1366px]:mx-24 min-[1366px]:mx-44">

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
    </div>
    )
}