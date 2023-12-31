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
import Image from "next/image";
import GroupKratongPopup from "../GroupKratongPopup";
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
  let speed = getRndInteger(50, 200);
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
          <GroupKratongPopup lane={lane} info={data} zIndex={zIndex} />
        </motion.div>
      </motion.div>
    </>
  );
};

export const TopLane: NextPage<{ sample: any }> = ({ sample }) => {
  const [temp, setTemp] = useState<any>([]);

  const addKratong = async (item: any, index: any) => {
    setTimeout(() => {
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
    }, getRndInteger(0, 2000));
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
    setTimeout(() => {
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
    }, getRndInteger(0, 2000));
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
    setTimeout(() => {
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
    }, getRndInteger(0, 2000));
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
