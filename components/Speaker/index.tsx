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

interface Props {}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const Speaker: FC<Props> = (): JSX.Element => {
  const [mute, setMute] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // const handleKeydown = (event: any) => {
  //   if (event.repeat) {
  //     return;
  //   }
  //   if (audioRef.current != null) {
  //     audioRef.current.pause();
  //     audioRef.current.currentTime = 0;
  //     audioRef.current.play();
  //   }
  // };

  // useEffect(() => {
  //   handleKeydown(event);
  // }, []);

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

        <div className="fixed bottom-0 w-screen z-[99]">
          <div
            className="absolute text-center right-6 bottom-4 cursor-pointer text-white w-9 h-9"
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
