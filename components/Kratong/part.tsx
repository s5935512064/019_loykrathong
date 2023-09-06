"use client";
import type { NextPage } from "next";
import {KratongNormalPartType , KratongVariantPartType} from "@map/kratong"

interface KratongNormalPartProps {
    part: KratongNormalPartType;
    selected: string;
  }
  
  interface KratongVariantPartProps {
    part: KratongVariantPartType;
    selected: string;
    signVariant: number;
  }

  
export const NormalPart: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
    return (
      <div
        className={"container select-none"}
        style={{ display: selected === part.id ? "inline-block" : "none" }}
      >
        <img draggable={false} className="select-none" src={part.url} alt={part.name} />
      </div>
    );
};

export const Candle: NextPage<KratongNormalPartProps> = ({ part, selected }) => {
    return (
      <div
        className={"container select-none"}
        style={{ display: selected === part.id ? "inline-block" : "none" }}
      >
        <img draggable={false} className="select-none" src={part.url} alt={part.name} />
      </div>
    );
  };

  export const VariantPart: NextPage<KratongVariantPartProps> = ({ part, selected, signVariant }) => {
    return (
      <>
        {part.variants.map((variant: string, variantIdx) => {
          return (
            <div
              key={variantIdx}
              className="container"
              style={{ display: selected === part.id && variantIdx === signVariant ? "inline-block" : "none" }}
            >
              <img draggable={false} className="select-none" src={variant} alt={part.name} />
            </div>
          );
        })}
      </>
    );
  };