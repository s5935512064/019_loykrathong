"use client";
import React, { FC, useEffect, useState, Fragment } from "react";
import { useWindowDimensions, useAnimationFrame } from "@utils/index";
import { TopLane, MidLane, BotLane } from "@components/KratongItem";
import { AnimatePresence, motion } from "framer-motion";
import { MidLaneSpecial, TopLaneSpecial } from "@/components/BoardKratong";

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

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
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

const managerKrathong = [
  [
    {
      id: 9999,
      name: "คุณอภิชัย",
      wish: "ขอให้ข้าพเจ้ามีโชคด้านการงาน ทำมาค้าขึ้น เจ้านายรัก ลูกน้องเชื่อฟัง ปังทุกเรื่องด้วยเถิด",
      profile: "/assets/profile/k_apichai.png",
      krathong_type: 1,
    },
  ],
  [
    {
      id: 8888,
      name: "คุณสืบพงษ์",
      wish: "ขอให้มีความสุข ปราศจากความทุกข์และภยันตรายใด ๆ สุขภาพแข็งแรง เจริญรุ่งเรืองยิ่งๆขึ้นไป",
      profile: "/assets/profile/k_suebpong.png",
      krathong_type: 2,
    },
  ],
  [
    {
      id: 7777,
      name: "คุณชลปรียา",
      wish: "ขอให้ประสบความสำเร็จทุกประการเอาชนะปัญหาต่าง ๆ",
      profile: "/assets/profile/k_chonpreeya.png",
      krathong_type: 3,
    },
  ],
];

const Lake: FC<Props> = ({ data }): JSX.Element => {
  const [lanes, setLanes] = useState<any>([[], [], []]);

  useEffect(() => {
    if (data.length > 0) {
      const lanes = chunk(data, 3);
      setLanes(lanes);
    }
  }, [data]);

  shuffle(data);

  return (
    <>
      <div className=" h-full flex flex-col relative ">
        <motion.div
          id="lane-t"
          className=" h-1/4 flex flex-row items-center   relative  -translate-y-5 "
        >
          <TopLane sample={lanes[0]} />
          <TopLaneSpecial sample={managerKrathong[2]} />
        </motion.div>

        <motion.div
          id="lane-m"
          className="  h-1/4 flex flex-row items-center   relative "
        >
          <MidLane sample={lanes[1]} />
          <MidLaneSpecial sample={managerKrathong[0]} />
          <MidLaneSpecial sample={managerKrathong[1]} />
        </motion.div>
        <motion.div
          id="lane-b"
          className="  h-2/3 flex-row items-center absolute bottom-[0px] flex justify-end "
        >
          <BotLane sample={lanes[2]} />
        </motion.div>
        <motion.div className=" h-1/2 flex  items-center absolute bottom-0 "></motion.div>
      </div>
    </>
  );
};

export default Lake;
