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
import SelfKratongPopup from "../SelfKratongPopup";
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
            duration: 150,
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
          <SelfKratongPopup lane={lane} info={data} />
        </motion.div>
      </motion.div>
    </>
  );
};

export const TopLaneSelf: NextPage<{ sample: any }> = ({ sample }) => {
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

export const MidLaneSelf: NextPage<{ sample: any }> = ({ sample }) => {
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
    if (sample != undefined) addKratong(sample, 8989);
    // sample.map((item: any, index: any) => {
    // });
  }, [sample]);

  return <>{temp}</>;
};

export const BotLaneSelf: NextPage<{ sample: any }> = ({ sample }) => {
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
