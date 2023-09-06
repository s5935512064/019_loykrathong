"use client";
import type { NextPage } from "next";
import React, { FC, useEffect, useState, Fragment } from "react";
import { useWindowDimensions, useAnimationFrame } from "@utils/index";
import { TopLane, MidLane, BotLane } from "@components/KratongItem";
import { AnimatePresence, motion } from "framer-motion";
import { WaterOneData } from "@map/animations";
import Image from "next/image";

interface Props {
  data: any;
}

function random(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array: Array<any>) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

function chunk(arr: Array<any>, cCount: number) {
  const len = Math.ceil(arr.length / cCount);
  let chunks = [],
    i = 0,
    n = arr.length;

  while (i < n) {
    chunks.push(arr.slice(i, (i += len)));
  }

  return chunks;
}

function getRndInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const KratongTest = () => {
  let xPosition = getRndInteger(-100, -150);
  let yPosition = getRndInteger(-5, 5);
  let speed = getRndInteger(50, 100);
  return (
    <>
      <motion.div
        animate={{
          x: [xPosition, 2999],
          y: [yPosition],
        }}
        transition={{
          x: {
            duration: speed,
            ease: "linear",
          },
        }}
      >
        <motion.div
          animate={WaterOneData.animate}
          transition={WaterOneData.transition}
        >
          <div className="w-32 h-32 relative ">
            <Image
              src={"/assets/kratong/item1.png"}
              alt="kratong"
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
        </motion.div>
      </motion.div>
    </>
  );
};

const Lake: FC<Props> = ({ data }): JSX.Element => {
  const [lanes, setLanes] = useState<any>([[], [], []]);

  useEffect(() => {
    if (data.length > 0) {
      const lanes = chunk(data, 3);
      setLanes(lanes);
      // setLanes1(lanes[0]);
      // lanes[0].map((item, index) => onAddBtnClick());

      // console.log({ temp });

      // setLanes1([...temp]);
    }
  }, [data]);

  shuffle(data);

  return (
    <>
      <div className="w-full h-full bg-black flex flex-col justify-between">
        <motion.div
          id="lane-t"
          className="w-full h-full flex flex-row items-center "
        >
          {/* {lanes && lanes[0].map((item: any, index: any) => onAddBtnClick())} */}
          <TopLane sample={lanes[0]} />
        </motion.div>

        <motion.div
          id="lane-m"
          className="w-full h-full flex flex-row items-center"
        >
          {/* {lanes2.map((item: any, index: any) => (
            <KratongItem key={item.id} idUnix={String(item.id)} />
          ))} */}
          <MidLane sample={lanes[1]} />
        </motion.div>
        <motion.div
          id="lane-b"
          className="w-full h-full flex flex-row items-center"
        >
          {/* {lanes3.map((item: any, index: any) => (
            <KratongItem key={item.id} idUnix={String(item.id)} />
          ))} */}
          <BotLane sample={lanes[2]} />
        </motion.div>
        <motion.div className="w-full h-full flex flex-row items-center"></motion.div>
      </div>
    </>
  );
};

export default Lake;
