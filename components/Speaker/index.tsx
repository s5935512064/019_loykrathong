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
import { SpeakerMute, SpeakerUnmute } from "@components/Vector";
import Link from "next/link";
import Image from "next/image";

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Speaker: FC<Props> = (): JSX.Element => {
  const [mute, setMute] = useState(true);
  const [year, setYear] = useState<any>("2023");
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (audioRef.current !== null && mute == false) {
      audioRef.current.pause();
      audioRef.current.play();
      audioRef.current.muted = false;
      audioRef.current.volume = 0.7;
    } else if (audioRef.current !== null && mute == true) {
      audioRef.current.muted = true;
    }
  }, [mute]);

  return (
    <>
      <figure className="absolute w-full h-full">
        <audio
          id="audio-player"
          controls={true}
          loop={true}
          muted={true}
          ref={audioRef}
          className="hidden"
        >
          <source src="/assets/audio/music.mp3" type="audio/mpeg"></source>
        </audio>

        <div className="fixed bottom-0 w-screen !z-[50] flex justify-between">
          <div className="absolute left-6 bottom-6 text-white hidden xmd:block">
            <div className="flex items-center h-full lg:gap-3 lg:divide-x w-fit flex-col lg:flex-row">
              <Link legacyBehavior href={"https://siamsindhorn.com/"}>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="goto_website"
                  className="h-9 w-28 relative "
                >
                  <Image
                    src={"/assets/Logo_SSD.webp"}
                    alt="logo"
                    priority
                    width="0"
                    height="0"
                    sizes="100vw"
                    unoptimized={true}
                    style={{
                      objectFit: "contain",
                      objectPosition: "center",
                    }}
                    className="w-full h-full"
                  />
                </a>
              </Link>

              <p className="text-center  pl-3">
                Copyright © 2023 {year != "2023" && -year}{" "}
                <Link legacyBehavior href={"https://siamsindhorn.com/"}>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="name_goto_website"
                    className="font-medium cursor-pointer mr-1 italic"
                  >
                    Siam Sindhorn Co., Ltd.
                  </a>
                </Link>
                All rights reserved.
              </p>
            </div>
          </div>

          <div
            className="absolute text-center right-6 bottom-6 cursor-pointer text-white w-9 h-9"
            onClick={() => {
              setMute(!mute);
            }}
          >
            {mute ? <SpeakerMute size={9} /> : <SpeakerUnmute size={9} />}
          </div>
        </div>
      </figure>
    </>
  );
};

export default Speaker;
