"use client";
import { FC, useEffect, useMemo, useState } from "react";
import type { NextPage } from "next";
import {CUPSAAMap , KratongMap, PrincipalMap} from "@map/kratong"
import { AnimatePresence, motion } from "framer-motion";
import {useWindowDimensions , useAnimationFrame , random} from "@utils/index"
import { WaterFourData} from "@map/animations" 
import {Candle , NormalPart , VariantPart} from "@components/Kratong/part"

function classNames(...classes: any[]) {
    return classes.filter(Boolean).join(" ");
}

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

const DisplayName: FC<{ name: string }> = ({ name }) => {
    return (
      <span className="absolute w-[150%] left-1/2 -translate-x-1/2 text-white z-[99] text-xs sm:text-sm top-[-29px] text-center font-light font-ui">
        {name}
      </span>
    );
};

export const KratongPopup: FC<{
    info: Wish;
    onToggle: (toggle: boolean) => void;
  }> = ({ info, onToggle }) => {
    return (
      <>
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="w-[275px] absolute z-[999] left-[63px] top-[-165px]"
        >
          <div className="bg-white bg-opacity-30 backdrop-filter backdrop-blur-sm w-[270px] h-[180px] rounded-xl" />
          {/* <XIcon
            className="w-5 h-5 text-white absolute z-[99] right-4 top-4 cursor-pointer hover:text-gray-100"
            onClick={() => onToggle(false)}
          /> */}
          <div className="absolute z-[98] top-0 left-0 py-6 px-6 flex flex-col min-w-1/4">
            <p className="font-ui font-medium text-white mb-2 pr-4">{info.name}</p>
            <hr className="w-1/2 border-[0.5px] border-white mb-4" />
            <p className="font-ui text-sm font-light text-white">{info.content}</p>
          </div>
        </motion.div>
      </>
    );
  };

  interface KratongProps {
    data: KratongData;
    height: string;
    zIndex: number;
    onClick: () => void;
    highlighted?: boolean;
  }

  export const DisplayKratong: FC<KratongProps> = ({ data, height, zIndex, onClick, highlighted = false }) => {
    const selected = data.kratong;
    const { width } = useWindowDimensions();
    const [toggle, setToggle] = useState(false);
    const [hovered, setHovered] = useState(false);
  
    return (
      <>
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onClick={() => onClick()}
          style={{ ["--size" as string]: height, ["--z-index" as string]: zIndex }}
          className={classNames("kratong", "cursor-pointer")}
        >
          {highlighted ? <div className={"aura"}></div> : hovered && <div className={"aura"}></div>}
          <DisplayName name={data.wish.name} />
          <div className={"topping"}>
            <div className={"decorations"}>
              {Object.keys(KratongMap.decorations).map((decoration: string) => {
                // @ts-ignore
                const part = KratongMap.decorations[decoration];
                if (part.type === "normal")
                  return <NormalPart key={decoration} part={part} selected={selected.decorations} />;
                else if (part.type === "variant")
                  return (
                    <VariantPart
                      key={decoration}
                      part={part}
                      selected={selected.decorations}
                      signVariant={selected.signVariant}
                    />
                  );
              })}
            </div>
            <div className={"candle"}>
              {Object.keys(KratongMap.candles).map((candle: string) => {
                // @ts-ignore
                const part = KratongMap.candles[candle];
                return <Candle key={candle} part={part} selected={selected.candles} />;
              })}
            </div>
          </div>
          <div className={"base"}>
            <div className={"flowers"}>
              {Object.keys(KratongMap.flowers).map((flower: string) => {
                // @ts-ignore
                const part = KratongMap.flowers[flower];
                if (part.type === "normal") return <NormalPart key={flower} part={part} selected={selected.flowers} />;
                else if (part.type === "variant")
                  return (
                    <VariantPart
                      key={flower}
                      part={part}
                      selected={selected.flowers}
                      signVariant={selected.signVariant}
                    />
                  );
              })}
            </div>
            <div className={"shell"}>
              {Object.keys(KratongMap.base).map((base: string) => {
                // @ts-ignore
                const part = KratongMap.base[base];
                if (part.type === "normal") {
                  // @ts-ignore
                  return <NormalPart key={base} part={KratongMap.base[base]} selected={selected.base} />;
                } else if (part.type === "variant")
                  return (
                    <VariantPart key={base} part={part} selected={selected.base} signVariant={selected.signVariant} />
                  );
              })}
            </div>
          </div>
        </div>
      </>
    );
  };
  