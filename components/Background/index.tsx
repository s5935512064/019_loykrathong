"use client";
import type { NextPage } from "next";
import React, { FC, useEffect, useState, Fragment } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { Lake } from "@components/Water";
import Lotus from "@components/Lotus";
import Menu from "../Menu";
import SocialShared from "@components/SocialShared";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export interface Selected {
  base: string;
  swan: string;
  candles: string;
  decorations: string;
}

function getRandom(arr: any[], n: number) {
  let result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  // if (n > len)
  //   throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    let x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

const fetcher = (url: string) => axios.get(url).then((res) => res.data);

const Background: FC<Props> = (): JSX.Element => {
  const [count, setCount] = useState(1);
  const [kratong, setKratong] = useState<any>([]);
  const [loy, setLoy] = useState<boolean>(false);
  const [localItem, setLocalItem] = useState<LocalKratongItem>();

  const startLoy = (input: boolean) => {
    setLoy(input);
    const temp = window.localStorage.getItem("userData");
    if (temp) {
      setLocalItem(JSON.parse(temp));
    }
  };

  useEffect(() => {
    async function fetchData() {
      const URL =
        process.env.NEXT_PUBLIC_API_URL + `api/kratong?page=${count}&limit=6`;
      const result = await axios(URL);
      const rand = getRandom(result.data.kratong, 8);
      //@ts-ignore
      setKratong(rand);

      if (result.data.nextPage) setCount(count + 1);
    }

    if (count == 1) {
      fetchData();
    } else {
      const timer = setTimeout(() => {
        fetchData();
      }, 12000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  useEffect(() => {
    for (var i = 0; i < 200; i++) {
      //get random dimensions
      var x = Math.random() * 100;
      var y = Math.random() * 30;
      var d = Math.random() * 4;
      var s = Math.random() * 2 + 1.5;
      //create new element and add to html
      var star = document.createElement("div");
      star.classList.add("star");
      var sky = document.getElementById("sky");
      if (sky) sky.appendChild(star);

      star.style.width = d + "px";
      star.style.height = d + "px";
      star.style.top = y + "%";
      star.style.left = x + "%";
      star.style.animationDuration = s + "s";
    }
  }, []);

  return (
    <>
      <Menu onLoy={(input: boolean) => startLoy(input)} />
      <div className="w-full h-[100vh] relative bg-[url('/assets/scene/sky.png')] bg-cover bg-top bg-no-repeat flex justify-center">
        <div className="bg-black/25 w-full h-full z-0 absolute blur-sm" />

        <div id="sky" className="w-full h-full relative"></div>

        {/* ###### MOON ######## */}
        <div className="w-24 h-24 md:w-36 md:h-36 fixed right-7 md:right-16 top-7 md:top-16">
          <div className="absolute w-full  scale-95  z-[5]">
            <Image
              src={"/assets/scene/moon2.png"}
              alt="moon"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full"
            />
          </div>

          <div className="absolute top-0 scale-[2.0] z-[2] animate-pulse">
            <Image
              src={"/assets/scene/blur.png"}
              alt="moon"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="absolute w-full h-full  inset-0 z-10 flex flex-col">
          {/* <div className="h-1/2 top-0  bg-white w-full"></div> */}

          <div className="z-[10] w-full h-1/2 translate-y-5 flex justify-center">
            <div className="w-full h-[400px] absolute bg-[url('/assets/scene/buildings-black.png')] !bg-repeat-x bg-contain  bg-bottom bottom-0  " />
            <div className="w-fit h-1/3 relative mt-5 md:mt-10   px-8 md:px-20 lg:p-0 flex justify-center items-center flex-col -translate-y-5">
              <div className="w-full h-full relative ">
                <Image
                  src={"/assets/scene/loy-krathong.svg"}
                  alt="moon"
                  width="0"
                  height="0"
                  sizes="100vw"
                  style={{
                    objectFit: "contain",
                    objectPosition: "center",
                  }}
                  className="w-full h-full xs:scale-90 lg:scale-100"
                />
              </div>

              <div className="flex flex-col mt-32 absolute text-white left-0 items-center w-full md:mt-56 md:justify-center ">
                {/* <p className="text-white text-sm text-center">จำนวนกระทง</p> */}
                <p className="text-4xl font-bold flex items-end gap-2 md:gap-4 md:text-7xl md:-translate-x-6 whitespace-nowrap">
                  <span className="relative text-base md:text-lg font-normal">
                    จำนวนกระทง
                  </span>
                  9,999{" "}
                  <span className="text-base md:text-lg text-end font-normal">
                    กระทง
                  </span>
                </p>
              </div>
            </div>
          </div>

          <div className="!z-[9] flex-1 w-full bg-[url('/assets/scene/lake-1.png')] relative bg-cover bg-top bg-no-repeat">
            <div className="w-full h-full absolute bg-gradient-to-b from-[#243557]/50 to-transparent" />
          </div>
        </div>

        {/* ###### WATER ######## */}

        <div className="absolute h-1/2 bottom-0 w-full md:translate-y-5 z-[11] ">
          <Lake data={kratong} onloy={loy} selfKratong={localItem} />
        </div>

        {/* ###### FLOWER ######## */}
        <div className="absolute h-fit w-full bottom-0 translate-y-10 !z-[12]">
          <div className="relative w-full h-full">
            <div className="h-[100px] sm:h-[150px]  w-fit absolute right-[10%] bottom-16 boat">
              <Image
                src={"/assets/scene/lotus_1.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]  w-fit absolute right-[8%] bottom-2 -skew-x-12 ">
              <Image
                src={"/assets/scene/leaf.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[5%] bottom-16 boat-left">
              <Image
                src={"/assets/scene/lotus_2.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[35%] bottom-16 boat-left hidden lg:block">
              <Image
                src={"/assets/scene/lotus_1.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[35%] bottom-16 boat-left hidden lg:block">
              <Image
                src={"/assets/scene/lotus_2.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[28%] bottom-0 scale-110 hidden lg:block ">
              <Image
                src={"/assets/scene/lotus_4.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[20%] bottom-16 scale-75 ">
              <Image
                src={"/assets/scene/lotus_2.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-[14%] bottom-2">
              <Image
                src={"/assets/scene/lotus_5.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[28%] bottom-2 hidden lg:block">
              <Image
                src={"/assets/scene/lotus_5.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute left-0 bottom-0 scale-110 ">
              <Image
                src={"/assets/scene/lotus_3.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-[20%] bottom-16">
              <Image
                src={"/assets/scene/lotus_5.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>

            <div className="h-[100px] sm:h-[150px]   w-fit absolute right-0 bottom-0 scale-110 ">
              <Image
                src={"/assets/scene/lotus_4.png"}
                alt="lutus"
                width="0"
                height="0"
                sizes="100vw"
                style={{
                  objectFit: "contain",
                  objectPosition: "center",
                }}
                className="w-full h-full"
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-25px] sm:bottom-[-65px] md:bottom-[-50] h-[200px] !z-[13] flex justify-center translate-y-10 items-end w-fit  ">
          <div className="relative w-full h-full">
            <Image
              unoptimized
              src={"/assets/scene/wood-bridge.png"}
              alt="bridge"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "contain",
                objectPosition: "bottom",
              }}
              className="w-full h-full md:scale-125 "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Background;
