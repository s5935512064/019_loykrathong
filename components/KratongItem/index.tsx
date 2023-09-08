"use client";
import type { NextPage } from "next";
import React, {
  FC,
  useEffect,
  useState,
  Fragment,
  useMemo,
  useRef,
} from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
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

function getRndDecimal(min: number, max: number) {
  var precision = 100;
  min = Math.ceil(min);
  max = Math.floor(max);
  return (
    Math.floor(
      Math.random() * (max * precision - min * precision) + min * precision
    ) /
    (1 * precision)
  );
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

export const MovingKratong: NextPage<{
  data: any;
  initialX?: number;
  speed?: number;
  lane: string;
}> = ({ initialX = 0, data, lane }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  let xPosition = getRndInteger(0, 250);
  let yPosition = getRndInteger(-10, 10);
  let randKratong = getRndInteger(1, 9);
  let delay = getRndDecimal(1, 2);
  let speed = getRndInteger(50, 100);
  const [x, setX] = useState(initialX);
  const zIndex = lane === "t" ? 39 : lane === "m" ? 29 : 9;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <>
      <motion.div
        ref={ref}
        animate={{
          x: [-xPosition, 2999],
          y: [yPosition],
        }}
        transition={{
          x: {
            duration: speed,
            ease: "linear",
          },
        }}
        className="absolute left-[-75px]"
      >
        <motion.div
          animate={WaterOneData.animate}
          transition={WaterOneData.transition}
          className="relative"
        >
          <div
            className={classNames(
              lane == "t"
                ? "w-24 h-24 md:w-32 md:h-32 brightness-[85%] hover:brightness-100 active:brightness-110"
                : lane == "m"
                ? "w-32 h-32 md:w-36 md:h-36 brightness-[95%] hover:brightness-100 active:brightness-110"
                : "w-36 h-36 md:w-40 md:h-40 hover:brightness-100 active:brightness-110",
              " relative duration-200 transition-all cursor-pointer ",
              `!z-[${zIndex}]`
            )}
          >
            <Image
              unoptimized
              src={`/assets/kratong/kratong-${randKratong}.webp`}
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

export const TopLane: NextPage<{ sample: any }> = ({ sample }) => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratong
          key={`lane-t-${item.name}`}
          data={item}
          initialX={index * 600}
          lane="t"
        />
      )
    );
  };

  useEffect(() => {
    sample.map((item: any, index: any) => {
      if (item != undefined) addKratong(item, index);
    });
  }, [sample]);

  // const generateKratong = useMemo(() => {
  //   sample.map((item: any, index: any) => {
  //     if (item != undefined) addKratong(item, index);
  //   });
  //   return <>{temp}</>;
  // }, [sample]);

  return <>{temp}</>;
};

export const MidLane: NextPage<{ sample: any }> = ({ sample }) => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratong
          key={`lane-m-${item.name}`}
          data={item}
          initialX={index * 600}
          lane="m"
        />
      )
    );
  };

  // const generateKratong = useMemo(() => {
  //   sample.map((item: any, index: any) => {
  //     if (item != undefined) addKratong(item, index);
  //   });
  //   return <>{temp}</>;
  // }, [sample]);

  useEffect(() => {
    sample.map((item: any, index: any) => {
      if (item != undefined) addKratong(item, index);
    });
  }, [sample]);

  return <>{temp}</>;
};

export const BotLane: NextPage<{ sample: any }> = ({ sample }) => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTemp(
      temp.concat(
        <MovingKratong
          key={`lane-b-${item.name}`}
          data={item}
          initialX={index * 600}
          lane="b"
        />
      )
    );
  };

  // const generateKratong = useMemo(() => {
  //   sample.map((item: any, index: any) => {
  //     if (item != undefined) addKratong(item, index);
  //   });
  //   return <>{temp}</>;
  // }, [sample]);

  useEffect(() => {
    sample.map((item: any, index: any) => {
      if (item != undefined) addKratong(item, index);
    });
  }, [sample]);

  return <>{temp}</>;
};
