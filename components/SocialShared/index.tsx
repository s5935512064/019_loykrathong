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
import Image from "next/image";
import Link from "next/link";
import { FacebookShareButton, LineShareButton } from "react-share";
import { usePathname, useRouter } from "next/navigation";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const SocialShared: FC<Props> = (): JSX.Element => {
  const pathName = usePathname();

  return (
    <>
      <div className="w-fit h-fit  fixed  xmd:left-6 top-44 xs:top-48 md:top-72 xmd:top-10 z-50 flex flex-row  gap-2 xmd:gap-3 items-center justify-center">
        <FacebookShareButton
          url={`${process.env.NEXT_PUBLIC_API_URL + pathName}`}
          // quote={post.from[0].name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32.84 32.84"
            className="cursor-pointer w-10 h-10 hover:scale-110 duration-200 transition-all"
          >
            <circle
              id="Ellipse_9"
              data-name="Ellipse 9"
              cx="15.67"
              cy="15.67"
              r="15.67"
              transform="translate(0.75 0.75)"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
            />
            <path
              id="Path_548020"
              data-name="Path 548020"
              d="M89.224,61.228h-2.91v-6.2H84.86V52.647h1.454V51.209c0-1.947.821-3.106,3.153-3.106h1.941v2.388H90.2c-.909,0-.969.334-.969.956v1.194h2.194l-.255,2.389H89.224Z"
              transform="translate(-71.834 -38.578)"
              fill="#FFF"
            />
          </svg>
        </FacebookShareButton>

        <LineShareButton
          url={`${process.env.NEXT_PUBLIC_API_URL + pathName}`}
          // @ts-ignore
          // quote={post.from[0].name}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 33.492 33.499"
            className="cursor-pointer  w-10 h-10 hover:scale-110 duration-200 transition-all"
          >
            <path
              id="Path_548021"
              data-name="Path 548021"
              d="M214.5,70.99h0a16,16,0,1,1,16-16,16.2,16.2,0,0,1-6.251,12.693,30.624,30.624,0,0,1-4.459,2.436A26.441,26.441,0,0,1,214.5,71"
              transform="translate(-197.758 -38.248)"
              fill="none"
              stroke="#FFF"
              strokeWidth="1.5"
            />
            <path
              id="Path_548022"
              data-name="Path 548022"
              d="M213.915,65.158a.356.356,0,0,1-.288-.113.785.785,0,0,1-.054-.6v-.019l.157-.912a2.076,2.076,0,0,0-.034-.966c-.118-.293-.577-.448-.941-.526-5.171-.685-8.921-4.277-8.921-8.54,0-4.773,4.786-8.657,10.669-8.657s10.666,3.884,10.666,8.657a7.749,7.749,0,0,1-2.286,5.328,34.211,34.211,0,0,1-8.38,6.192,1.622,1.622,0,0,1-.588.151m4.7-13.978a.206.206,0,0,0-.2.2v4.651a.206.206,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.2.2,0,0,0,.2-.2v-.757a.2.2,0,0,0-.2-.2h-2.037v-.784h2.037a.205.205,0,0,0,.2-.2v-.756a.206.206,0,0,0-.2-.2h-3Zm-4.19,2.1h0l2.129,2.876a.247.247,0,0,0,.052.05l.016.008.015.007h.032a.177.177,0,0,0,.056.008h.752a.206.206,0,0,0,.206-.2V51.367a.206.206,0,0,0-.206-.2h-.755a.2.2,0,0,0-.2.2v2.764l-2.131-2.876-.015-.022-.014-.014-.015-.014-.017-.009h-.852a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V53.291Zm-2.852-2.1a.2.2,0,0,0-.2.2v4.654a.2.2,0,0,0,.2.2h.757a.2.2,0,0,0,.2-.2V51.384a.2.2,0,0,0-.2-.2Zm-4.043,0a.2.2,0,0,0-.2.2v4.651a.2.2,0,0,0,.2.206h3a.2.2,0,0,0,.2-.2v-.756a.2.2,0,0,0-.2-.2h-2.037V51.384a.206.206,0,0,0-.206-.2Z"
              transform="translate(-197.758 -38.248)"
              fill="#FFF"
            />
          </svg>
        </LineShareButton>

        <button
          type="button"
          className="hover:scale-110 duration-200 transition-all  w-10 h-10 rounded-full border smd:border-2 border-white text-white flex justify-center items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-7 h-7"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default SocialShared;
