"use client";
import type { NextPage } from "next";
import React, { FC, useEffect, useState, Fragment } from "react";
import { useWindowDimensions, useAnimationFrame } from "@utils/index";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import useSWR, { mutate } from "swr";
import axios from "axios";
import { Lake } from "@components/Water";

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

  useEffect(() => {
    async function fetchData() {
      const URL =
        process.env.NEXT_PUBLIC_API_URL + `api/kratong?page=${count}&limit=8`;
      const result = await axios(URL);
      const rand = getRandom(result.data.kratong, 8);
      setKratong(rand);

      if (result.data.nextPage) setCount(count + 1);
    }

    if (count == 1) {
      fetchData();
    } else {
      const timer = setTimeout(() => {
        fetchData();
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, [count]);

  // const [lanes, setLanes] = useState<any>([[], [], []]);

  // useEffect(() => {
  //   if (data.length > 0) {
  //     const lanes = chunk(data, 3);
  //     setLanes(lanes);
  //   }
  // }, [data]);

  // shuffle(data);

  // useEffect(() => {
  //   console.log(lanes);
  // });

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
      <div className="w-full h-[100vh] relative bg-[url('/assets/scene/sky.png')] bg-cover bg-top bg-no-repeat">
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

        {/* ###### TEXT ######## */}
        <div className="h-1/2 p-8 w-full relative flex flex-col justify-center z-10">
          <p className="text-white">ดิ โอลด์ สยาม พลาซ่า ชวน</p>
          <p className="text-white text-2xl">ลอยกระทงออนไลน์ 2566</p>

          <p className="text-white mt-7 text-sm">กระทงทั้งหมด</p>
          <p className="text-white text-2xl font-bold">
            17,233<span className="font-normal text-sm"> กระทง</span>{" "}
          </p>
        </div>

        {/* ###### BUILDING ######## */}

        <div className="w-full h-[400px] bottom-1/2 md:bottom-1/3 absolute z-0 bg-[url('/assets/scene/buildings-black.png')] !bg-repeat-x  bg-contain md:-translate-y-20 bg-bottom " />

        {/* ###### WATER ######## */}

        <div className="h-1/2 bottom-0 w-full absolute hidden">
          <div className="w-full h-full relative  flex flex-col justify-between">
            <div className="w-full h-full relative">
              <div className="w-full absolute h-[250px]">
                <div className="w-full h-full bg-[url('/assets/scene/wave-1.png')] bg-contain bg-repeat-x absolute bottom-0 -translate-y-2 bg-center"></div>
              </div>
              {/* ###### TOP LANE ######## */}
              <div className="w-full absolute h-[250px] bottom-[-90px]">
                <div className="w-full h-14 shrink-0 relative -translate-y-9 "></div>
                <div className="w-full h-full bg-[url('/assets/scene/wave-1.png')] bg-contain bg-repeat-x absolute bottom-0 -translate-y-2 bg-center"></div>
              </div>
              {/* ###### MID LANE ######## */}
              <div className="w-full absolute h-[250px] bottom-[-150px]">
                <div className="w-full h-14 shrink-0 relative -translate-y-9">
                  <div className="w-14 h-full rounded-full bg-green-500"></div>
                </div>
                <div className="w-full h-full bg-[url('/assets/scene/wave-1.png')] bg-contain bg-repeat-x absolute bottom-0 -translate-y-2 bg-right"></div>
              </div>

              <div className="w-full absolute h-[250px] bottom-[-200px]">
                <div className="w-full h-14 shrink-0 relative -translate-y-9">
                  <div className="w-14 h-full rounded-full bg-green-500"></div>
                </div>
                <div className="w-full h-full bg-[url('/assets/scene/wave-1.png')] bg-contain bg-repeat-x absolute bottom-0 -translate-y-2 bg-right"></div>
              </div>
            </div>

            <div className="w-full h-full relative">
              {/* ###### BOTTOM LANE ######## */}
              <div className="w-full h-14 -translate-y-9">
                <div className="w-14 h-full rounded-full bg-green-500"></div>
              </div>

              <div className="w-full h-full bg-[url('/assets/scene/wave-1.png')] bg-contain bg-repeat-x absolute bottom-0"></div>
            </div>
          </div>
        </div>

        <div className="absolute h-1/2 bottom-0 w-full translate-y-16 ">
          <Lake data={kratong} />
          {/* <div className="w-full h-full relative bg-red-300 flex flex-col justify-around">
            <motion.div
              animate={{
                x: [-5, 9999],
              }}
              transition={{
                x: {
                  duration: 150,
                  ease: "linear",
                },
              }}
              className="flex flex-row"
            >
              <KratongItem />
              <KratongItem />
            </motion.div>

            <motion.div
              animate={{
                x: [-5, 9999],
              }}
              transition={{
                x: {
                  duration: 150,
                  ease: "linear",
                },
              }}
              className="flex flex-row"
            >
              <KratongItem />
              <KratongItem />
            </motion.div>

            <motion.div
              animate={{
                x: [-5, 9999],
              }}
              transition={{
                x: {
                  duration: 150,
                  ease: "linear",
                },
              }}
              className="flex flex-row"
            >
              <KratongItem />
              <KratongItem />
            </motion.div>
          </div> */}
        </div>

        {/* ###### FLOWER ######## */}

        <div className="absolute bottom-0 h-1/2 w-full md:hidden">
          <div className="relative w-full h-full">
            <div className="h-[150px]  w-fit absolute right-5 bottom-16 boat">
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

            <div className="h-[150px]  w-fit absolute right-8 bottom-2 -skew-x-12 ">
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

            <div className="h-[150px]  w-fit absolute left-5 bottom-16 boat-left">
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

            <div className="h-[150px]  w-fit absolute left-20 bottom-16 scale-75 ">
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

            <div className="h-[150px]  w-fit absolute left-14 bottom-2">
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

            <div className="h-[150px]  w-fit absolute left-0 bottom-0 scale-110 ">
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

            <div className="h-[150px]  w-fit absolute right-20 bottom-16">
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

            <div className="h-[150px]  w-fit absolute right-0 bottom-0 scale-110 ">
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

        <div className="absolute bottom-[-50px] h-[250px]  flex justify-center items-end w-full md:hidden">
          <div className="relative w-full h-full">
            <Image
              src={"/assets/scene/wood-bridge.png"}
              alt="moon"
              width="0"
              height="0"
              sizes="100vw"
              style={{
                objectFit: "cover",
                objectPosition: "bottom",
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        <div className="fixed bottom-7 w-full flex justify-center items-center md:hidden">
          <button
            type="button"
            className="bg-[#FFDA00] px-4 py-2 rounded-full overflow-hidden shadow min-w-[150px]"
          >
            ลอยกระทง
          </button>
        </div>
      </div>
    </>
  );
};

export default Background;
