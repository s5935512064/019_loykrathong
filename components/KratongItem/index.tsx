"use client";
import type { NextPage } from "next";
import React, { FC, useEffect, useState, Fragment, use } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { WaterOneData } from "@map/animations";
import { useWindowDimensions, random, useAnimationFrame } from "@utils/index";
import Image from "next/image";

interface Props {
  sample: any;
}

function getRndInteger(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export const MovingKratong: NextPage<{
  data: any;
  initialX?: number;
  speed?: number;
  lane: string;
}> = ({ initialX = 0, data, lane }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  let xPosition = getRndInteger(-500, -300);
  let yPosition = getRndInteger(-5, 5);
  let speed = getRndInteger(50, 100);
  const [x, setX] = useState(initialX);
  const zIndex = lane === "t" ? 19 : lane === "m" ? 29 : 39;

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
          className="relative"
        >
          <AnimatePresence>
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
          </AnimatePresence>
        </motion.div>
      </motion.div>
    </>
  );
};

export const TopLane: NextPage<{ sample: any }> = ({ sample }) => {
  return (
    <>
      {sample &&
        sample.map((e: any, i: any) => {
          return (
            <MovingKratong
              key={`lane-t-${e.name}`}
              data={e}
              initialX={i * 600}
              lane="t"
            />
          );
        })}
    </>
  );
};

export const MidLane: NextPage<{ sample: any }> = ({ sample }) => {
  return (
    <>
      {sample &&
        sample.map((e: any, i: any) => {
          return (
            <MovingKratong
              key={`lane-m-${e.id}`}
              data={e}
              initialX={i * 600}
              lane="m"
            />
          );
        })}
    </>
  );
};

export const BotLane: NextPage<{ sample: any }> = ({ sample }) => {
  return (
    <>
      {sample &&
        sample.map((e: any, i: any) => {
          return (
            <MovingKratong
              key={`lane-b-${e.id}`}
              data={e}
              initialX={i * 600}
              lane="b"
            />
          );
        })}
    </>
  );
};
