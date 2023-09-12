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
import Image from "next/image";
import { Dialog, Transition, RadioGroup } from "@headlessui/react";
import { WaterOneData } from "@map/animations";
import { Edit } from "@components/Vector";
import SocialShared from "../SocialShared";

interface Props {
  onLoy: (toggle: boolean) => void;
}

function classNames(...classes: any[]) {
  return classes.filter(Boolean).join(" ");
}

const itemKratong = [
  { id: 1, name: "kratong-1", type: 1, src: "/assets/kratong/kratong-1.webp" },
  { id: 2, name: "kratong-2", type: 2, src: "/assets/kratong/kratong-2.webp" },
  { id: 3, name: "kratong-3", type: 3, src: "/assets/kratong/kratong-3.webp" },
  { id: 4, name: "kratong-4", type: 4, src: "/assets/kratong/kratong-4.webp" },
  { id: 5, name: "kratong-5", type: 5, src: "/assets/kratong/kratong-5.webp" },
  { id: 6, name: "kratong-6", type: 6, src: "/assets/kratong/kratong-6.webp" },
  { id: 7, name: "kratong-7", type: 7, src: "/assets/kratong/kratong-7.webp" },
  { id: 8, name: "kratong-8", type: 8, src: "/assets/kratong/kratong-8.webp" },
  { id: 9, name: "kratong-9", type: 9, src: "/assets/kratong/kratong-9.webp" },
];

const Menu: FC<Props> = ({ onLoy }): JSX.Element => {
  let [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState<string>("");
  const [wish, setWish] = useState<string>("");
  const [localKratong, setLocalKratong] = useState(false);
  const [selected, setSelected] = useState<KratongItem>(itemKratong[0]);
  const [localItem, setLocalItem] = useState<LocalKratongItem>();
  const [toggle, setToggle] = useState(true);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal(caseKratong: string) {
    if (caseKratong == "edit") {
      const temp = window.localStorage.getItem("userData");
      if (temp) {
        setLocalKratong(true);
        setLocalItem(JSON.parse(temp));
      }
      setIsOpen(true);
    } else if (caseKratong == "new") {
      localStorage.clear();
      setLocalKratong(false);
      //@ts-ignore
      setLocalItem(null);
      setIsOpen(true);
    }
  }

  const handleSubmit = async (event: { preventDefault: () => void }) => {
    event.preventDefault();
    const data = {
      name: name,
      wish: wish,
      kratong: selected,
      loy: false,
    };

    localStorage.setItem("userData", JSON.stringify(data));
    setToggle(true);
    setLocalItem(data);
    closeModal();

    // let formData = new FormData();
    // formData.append("firstname", name);
    // formData.append("wish", wish);
    // formData.append("kratongType", selected?.type);
  };

  const loyKratong = async () => {
    const data = {
      name: localItem?.name,
      wish: localItem?.wish,
      kratong: localItem?.kratong,
      loy: true,
    };

    localStorage.setItem("userData", JSON.stringify(data));
    onLoy(true);

    setTimeout(() => {
      setToggle(false);
    }, 50);
  };

  useEffect(() => {
    const temp = window.localStorage.getItem("userData");
    if (temp) {
      setLocalKratong(true);
      setLocalItem(JSON.parse(temp));
    }
  }, [toggle]);

  return (
    <>
      <div className=" h-fit fixed bottom-5 z-50 px-6 xmd:px-10  flex flex-col-reverse gap-2 items-center justify-center">
        {localItem && localItem.loy == false ? (
          <div className="flex items-center gap-2 ">
            <button
              type="button"
              onClick={() => openModal("edit")}
              className="-ml-7 bottom-1 xmd:ml-2 left-0 absolute w-9 h-9 text-sm  text-white flex flex-col justify-center items-center "
            >
              <Edit size={5} />
              <span className="whitespace-nowrap -mt-1">แก้ไขกระทง</span>
            </button>
            <button
              type="button"
              onClick={loyKratong}
              className="px-7 py-2 to-[#FFDA00] bg-gradient-to-t  from-orange-500 text-amber-800 text-center shadow  rounded-full min-w-[150px]  whitespace-nowrap text-2xl font-semibold hover:brightness-105  transition-all duration-200 z-[60] hover:scale-110"
            >
              <span className="drop-shadow">ปล่อยกระทง</span>
            </button>
          </div>
        ) : (
          <button
            type="button"
            onClick={() => openModal("new")}
            className="px-7 py-2 to-[#FFDA00] bg-gradient-to-t  from-orange-500 text-amber-800 text-center shadow  rounded-full min-w-[150px]  whitespace-nowrap text-2xl font-semibold hover:brightness-105  transition-all duration-200 z-[60] hover:scale-110"
          >
            <span className="drop-shadow">สร้างกระทง</span>
          </button>
        )}

        {localItem && localItem.loy == false ? (
          <AnimatePresence>
            {toggle ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  duration: 0.8,
                  ease: [0, 0.71, 0.2, 1.01],
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                className="w-36 h-36 sm:w-52 sm:h-52 relative cursor-pointer -translate-y-10 sm:-translate-y-14"
              >
                <motion.div
                  animate={WaterOneData.animate}
                  transition={WaterOneData.transition}
                  className="relative max-h-[150px]"
                >
                  <div className="w-full h-fit bg-white/80 backdrop-blur-sm rounded-xl !absolute top-0  translate-x-1/2 !z-[-99] shadow">
                    <p className="p-4 max-w-[250px] text-xs md:text-sm text-start">
                      {localItem.wish.substring(0, 150)} <br /> ...
                      <span className="px-1 font-semibold">
                        {localItem.name}
                      </span>
                    </p>
                  </div>

                  <Image
                    src={localItem.kratong.src}
                    alt={localItem.kratong.name}
                    width="0"
                    height="0"
                    sizes="100vw"
                    style={{
                      objectFit: "contain",
                      objectPosition: "top",
                    }}
                    className="w-full h-full -translate-y-10"
                  />
                </motion.div>
              </motion.div>
            ) : null}
          </AnimatePresence>
        ) : null}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative !z-[99]"
          onClose={() => setIsOpen(isOpen)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all ">
                  <div className="absolute right-4 z-10 top-4 ">
                    <button
                      type="button"
                      onClick={closeModal}
                      className="w-8 h-8 md:w-9 md:h-9 rounded-full border   flex items-center justify-center text-black outline-none bg-white"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </span>
                      <span className="sr-only">close</span>
                    </button>
                  </div>

                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-semibold leading-6 text-gray-900"
                  >
                    มาสร้างกระทงกัน!
                  </Dialog.Title>
                  <div className="flex flex-col">
                    <p className="text-sm text-gray-500 border-b pb-2">
                      ร่วมกันลดขยะในแม่น้ำลำคลอง
                      การลอยกระทงออนไลน์ช่วยสืบสานประเพณีไทยได้โดยที่ไม่ต้องเพิ่มขยะให้กับธรรมชาติ
                    </p>

                    <div>
                      <label
                        htmlFor="first_name"
                        className="block mt-2 font-semibold text-gray-900 dark:text-white"
                      >
                        ชื่อของคุณ (Name)
                      </label>
                      <input
                        type="text"
                        id="first_name"
                        onChange={(event) => setName(event.target.value)}
                        defaultValue={localKratong ? localItem?.name : ""}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        placeholder="สมรักษ์"
                        required
                      />
                      <p className="text-red-500 text-sm">
                        * โปรดระบุชื่อของคุณ เช่น ชื่อจริง (ไม่ระบุนามสกุล),
                        ชื่อเล่น หรือนามแฝง
                      </p>
                    </div>

                    <div>
                      <label
                        htmlFor="wish"
                        className="block mt-2 font-semibold text-gray-900 dark:text-white"
                      >
                        คำอธิษฐาน (Wish)
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        onChange={(event) => setWish(event.target.value)}
                        defaultValue={localKratong ? localItem?.wish : ""}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                        placeholder="ใส่คำอธิษฐาน"
                      ></textarea>
                      <p className="text-red-500 text-sm">
                        * กรุณาใช้ถ้อยคำที่สุภาพ
                      </p>
                    </div>

                    <div>
                      <p className="block mt-2  font-semibold text-gray-900 dark:text-white">
                        เลือกกระทง
                      </p>

                      <div className="w-full h-[200px] flex justify-center items-start -mt-9 relative overflow-hidden mb-4">
                        {/* <div className="w-full scale-75 relative overflow-hidden rounded-full">
                        </div> */}
                        <Image
                          src={selected?.src}
                          alt="lutus"
                          width="0"
                          height="0"
                          sizes="100vw"
                          style={{
                            objectFit: "contain",
                            objectPosition: "center",
                          }}
                          className="w-full h-full translate-y-5 scale-90"
                        />
                      </div>

                      <div className="flex items-center  overflow-x-scroll xmd:overflow-auto xmd:flex-wrap gap-2  ">
                        <RadioGroup
                          value={selected}
                          onChange={setSelected}
                          defaultValue={
                            localKratong ? localItem?.kratong : selected
                          }
                        >
                          <RadioGroup.Label className="sr-only">
                            Server size
                          </RadioGroup.Label>
                          <div className="flex items-center  overflow-x-scroll xmd:overflow-auto xmd:flex-wrap gap-2 py-2 px-1">
                            {itemKratong.map((item, index) => (
                              <RadioGroup.Option
                                key={item.name}
                                value={item}
                                className={({ active, checked }) =>
                                  `${
                                    active
                                      ? " outline-none border-red-500 ring-1 ring-red-500"
                                      : ""
                                  }
                  ${
                    checked
                      ? "bg-white bg-opacity-75 text-white outline-none border-red-500 ring-1 ring-red-500"
                      : "bg-gray-50"
                  }
                  w-16 h-16 rounded-xl  border border-gray-300 shrink-0 relative cursor-pointer `
                                }
                              >
                                {({ active, checked }) => (
                                  <>
                                    <Image
                                      src={item.src}
                                      alt={item.name}
                                      width="0"
                                      height="0"
                                      sizes="100vw"
                                      style={{
                                        objectFit: "contain",
                                        objectPosition: "center",
                                      }}
                                      className="w-full h-full scale-90 hover:scale-95 duration-200 transition-all"
                                    />
                                  </>
                                )}
                              </RadioGroup.Option>
                            ))}
                          </div>
                        </RadioGroup>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex justify-center items-center">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-lg font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 min-w-[150px]"
                      onClick={handleSubmit}
                    >
                      สร้างกระทง
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Menu;
