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

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Lotus: FC<Props> = (): JSX.Element => {
  useEffect(() => {
    for (var i = 0; i < 10; i++) {
      //get random dimensions
      var x = Math.random() * 100;
      var y = Math.random() * 30;
      var d = Math.random() * 4;
      var s = Math.random() * 2 + 1.5;
      //create new element and add to html
      var lotus = document.createElement("div");
      lotus.classList.add("lotus");
      var river = document.getElementById("river");
      if (river) river.appendChild(lotus);

      lotus.style.width = "100px";
      lotus.style.height = "100px";
      lotus.style.top = y + "%";
      lotus.style.left = x + "%";
      // star.style.animationDuration = s + "s";
    }
  }, []);

  return (
    <>
      <div id="river" className="w-full h-full absolute"></div>
    </>
  );
};

export default Lotus;
