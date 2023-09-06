"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import { useAnimationFrame, useWindowDimensions, random } from "@utils/index";
import { AnimatePresence, motion } from "framer-motion";
import { WaterFourData } from "@map/animations";
import { DisplayKratong, KratongPopup } from "./displayKratong";
import Image from "next/image";

export interface Selected {
  base: string;
  flowers: string;
  candles: string;
  decorations: string;
  signVariant: number;
}

export interface Wish {
  name: string;
  content: string;
}

export interface KratongData {
  kratong: Selected;
  wish: Wish;
}

const sample = [
  {
    kratong: {
      base: "banana-leaf",
      candles: "candle-green",
      decorations: "swan",
      flowers: "luck",
      signVariant: 0,
    },
    wish: {
      name: "hi",
      content: "hi",
    },
  },
];

export const MovingKratong: NextPage<{
  initialX?: number;
  speed?: number;
  data: KratongData;
  className: string;
  size: Array<string>;
  lane: string;
}> = ({ initialX = 0, speed = 1.25, data, className, size, lane }) => {
  const { width, height } = useWindowDimensions();
  const [toggle, setToggle] = useState(false);
  const [x, setX] = useState(initialX);

  const zIndex = lane === "t" ? 19 : lane === "m" ? 29 : 39;
  const textZIndex = lane === "t" ? 15 : lane === "m" ? 25 : 35;

  useAnimationFrame(
    (delta: number) => {
      // delta - time elapsed in ms
      setX((prevX) =>
        prevX < width + 1800
          ? prevX + delta * 0.01 * speed
          : prevX - (random(20, 200) + 1840)
      );
    },
    (delta: number) => {
      return false;
    }
  );

  return (
    <>
      <motion.div
        animate={WaterFourData.animate}
        transition={WaterFourData.transition}
        style={{ left: x, zIndex: zIndex }}
        className="relative"
      >
        <div className={className} style={{ zIndex }}>
          {toggle && (
            <AnimatePresence>
              <KratongPopup info={data.wish} onToggle={setToggle} />
            </AnimatePresence>
          )}

          <div className="w-10 h-10 bg-black rounded-full"></div>
          <DisplayKratong
            height={width > 640 ? size[0] : size[1]}
            zIndex={zIndex}
            onClick={() => setToggle(!toggle)}
            data={data}
          />
        </div>
        {/* <p className="w-full absolute z-[99] bottom-[-225px] text-white font-ui font-light text-center">
            {data.wish.name}
          </p> */}
      </motion.div>
    </>
  );
};

export const TopLane: NextPage<{}> = ({}) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {sample &&
        sample.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-t-${i}`}
              className={
                "transition-opacity absolute left-[550px] top-[6px] sm:top-[-28px] nak:top-[-12px] lg:top-[-4px] brightness-50 hover:brightness-100 active:brightness-110"
              }
              initialX={i * 600}
              data={e}
              size={["105px", "65px"]}
              lane="t"
            />
          );
        })}
    </>
  );
};

export const MidLane: NextPage<{}> = ({}) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {sample &&
        sample.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-m-${i}`}
              className={
                "transition-opacity absolute left-[250px] top-[-42px] sm:top-[-90px] nak:top-[-60px] lg:top-[-46px] brightness-[60%] hover:brightness-100 active:brightness-110"
              }
              initialX={i * 670}
              data={e}
              size={["155px", "105px"]}
              lane="m"
            />
          );
        })}
    </>
  );
};

export const BotLane: NextPage<{}> = ({}) => {
  const { width } = useWindowDimensions();

  return (
    <>
      {sample &&
        sample.map((e, i) => {
          return (
            <MovingKratong
              key={`lane-b-${i}`}
              className={
                "transition-opacity absolute left-[350px] top-[-54px] sm:top-[-88px] nak:top-[-58px] lg:top-[-62px] brightness-[90%] hover:brightness-100 active:brightness-110"
              }
              initialX={i * 660 + 300}
              data={e}
              size={["170px", "155px"]}
              lane="b"
            />
          );
        })}
    </>
  );
};
