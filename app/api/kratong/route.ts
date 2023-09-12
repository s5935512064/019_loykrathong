import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type Data = {};

const kratong_list = [
  {
    id: 1,
    name: "test1",
    wish: "test wish",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 2,
    name: "test2",
    wish: "test wish2",
    kratong: {
      id: 2,
      name: "kratong-2",
      type: 2,
      src: "/assets/kratong/kratong-2.webp",
    },
    loy: false,
  },

  {
    id: 3,
    name: "test3",
    wish: "test wish3",
    kratong: {
      id: 3,
      name: "kratong-3",
      type: 3,
      src: "/assets/kratong/kratong-3.webp",
    },
    loy: false,
  },

  {
    id: 4,
    name: "test4",
    wish: "test wish4",
    kratong: {
      id: 4,
      name: "kratong-9",
      type: 9,
      src: "/assets/kratong/kratong-9.webp",
    },
    loy: false,
  },

  {
    id: 5,
    name: "test5",
    wish: "test wish5",
    kratong: {
      id: 5,
      name: "kratong-4",
      type: 4,
      src: "/assets/kratong/kratong-4.webp",
    },
    loy: false,
  },

  {
    id: 6,
    name: "test6",
    wish: "test wish6",
    kratong: {
      id: 6,
      name: "kratong-5",
      type: 5,
      src: "/assets/kratong/kratong-5.webp",
    },
    loy: false,
  },

  {
    id: 7,
    name: "test7",
    wish: "test wish7",
    kratong: {
      id: 7,
      name: "kratong-7",
      type: 7,
      src: "/assets/kratong/kratong-7.webp",
    },
    loy: false,
  },

  {
    id: 8,
    name: "test8",
    wish: "test wish8",
    kratong: {
      id: 8,
      name: "kratong-8",
      type: 8,
      src: "/assets/kratong/kratong-8.webp",
    },
    loy: false,
  },

  {
    id: 9,
    name: "test9",
    wish: "test wish9",
    kratong: {
      id: 6,
      name: "kratong-6",
      type: 6,
      src: "/assets/kratong/kratong-6.webp",
    },
    loy: false,
  },

  {
    id: 10,
    name: "test1",
    wish: "test wish",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 11,
    name: "test11",
    wish: "test wish11",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 12,
    name: "test12",
    wish: "test wish12",
    kratong: {
      id: 2,
      name: "kratong-2",
      type: 2,
      src: "/assets/kratong/kratong-2.webp",
    },
    loy: false,
  },

  {
    id: 13,
    name: "test13",
    wish: "test wish13",
    kratong: {
      id: 3,
      name: "kratong-3",
      type: 3,
      src: "/assets/kratong/kratong-3.webp",
    },
    loy: false,
  },

  {
    id: 14,
    name: "test14",
    wish: "test wish14",
    kratong: {
      id: 4,
      name: "kratong-9",
      type: 9,
      src: "/assets/kratong/kratong-9.webp",
    },
    loy: false,
  },

  {
    id: 15,
    name: "test15",
    wish: "test wish15",
    kratong: {
      id: 5,
      name: "kratong-4",
      type: 4,
      src: "/assets/kratong/kratong-4.webp",
    },
    loy: false,
  },

  {
    id: 16,
    name: "test16",
    wish: "test wish16",
    kratong: {
      id: 6,
      name: "kratong-5",
      type: 5,
      src: "/assets/kratong/kratong-5.webp",
    },
    loy: false,
  },

  {
    id: 17,
    name: "test17",
    wish: "test wish17",
    kratong: {
      id: 7,
      name: "kratong-7",
      type: 7,
      src: "/assets/kratong/kratong-7.webp",
    },
    loy: false,
  },

  {
    id: 28,
    name: "test28",
    wish: "test wish28",
    kratong: {
      id: 8,
      name: "kratong-8",
      type: 8,
      src: "/assets/kratong/kratong-8.webp",
    },
    loy: false,
  },

  {
    id: 19,
    name: "test19",
    wish: "test wish9",
    kratong: {
      id: 6,
      name: "kratong-6",
      type: 6,
      src: "/assets/kratong/kratong-6.webp",
    },
    loy: false,
  },

  {
    id: 20,
    name: "test20",
    wish: "test wish",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 31,
    name: "test31",
    wish: "test wish31",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 32,
    name: "test32",
    wish: "test wish32",
    kratong: {
      id: 2,
      name: "kratong-2",
      type: 2,
      src: "/assets/kratong/kratong-2.webp",
    },
    loy: false,
  },

  {
    id: 23,
    name: "test23",
    wish: "test wish13",
    kratong: {
      id: 3,
      name: "kratong-3",
      type: 3,
      src: "/assets/kratong/kratong-3.webp",
    },
    loy: false,
  },

  {
    id: 24,
    name: "test24",
    wish: "test wish24",
    kratong: {
      id: 4,
      name: "kratong-9",
      type: 9,
      src: "/assets/kratong/kratong-9.webp",
    },
    loy: false,
  },

  {
    id: 25,
    name: "test25",
    wish: "test wish25",
    kratong: {
      id: 5,
      name: "kratong-4",
      type: 4,
      src: "/assets/kratong/kratong-4.webp",
    },
    loy: false,
  },

  {
    id: 26,
    name: "test26",
    wish: "test wish26",
    kratong: {
      id: 6,
      name: "kratong-5",
      type: 5,
      src: "/assets/kratong/kratong-5.webp",
    },
    loy: false,
  },

  {
    id: 27,
    name: "test27",
    wish: "test wish27",
    kratong: {
      id: 7,
      name: "kratong-7",
      type: 7,
      src: "/assets/kratong/kratong-7.webp",
    },
    loy: false,
  },

  {
    id: 28,
    name: "test28",
    wish: "test wish28",
    kratong: {
      id: 8,
      name: "kratong-8",
      type: 8,
      src: "/assets/kratong/kratong-8.webp",
    },
    loy: false,
  },

  {
    id: 29,
    name: "test29",
    wish: "test wish29",
    kratong: {
      id: 6,
      name: "kratong-6",
      type: 6,
      src: "/assets/kratong/kratong-6.webp",
    },
    loy: false,
  },

  {
    id: 30,
    name: "test30",
    wish: "test wish30",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 31,
    name: "test31",
    wish: "test wish31",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 32,
    name: "test32",
    wish: "test wish32",
    kratong: {
      id: 2,
      name: "kratong-2",
      type: 2,
      src: "/assets/kratong/kratong-2.webp",
    },
    loy: false,
  },

  {
    id: 33,
    name: "test33",
    wish: "test wish33",
    kratong: {
      id: 3,
      name: "kratong-3",
      type: 3,
      src: "/assets/kratong/kratong-3.webp",
    },
    loy: false,
  },

  {
    id: 34,
    name: "test34",
    wish: "test wish34",
    kratong: {
      id: 4,
      name: "kratong-9",
      type: 9,
      src: "/assets/kratong/kratong-9.webp",
    },
    loy: false,
  },

  {
    id: 35,
    name: "test35",
    wish: "test wish35",
    kratong: {
      id: 5,
      name: "kratong-4",
      type: 4,
      src: "/assets/kratong/kratong-4.webp",
    },
    loy: false,
  },

  {
    id: 36,
    name: "test36",
    wish: "test wish36",
    kratong: {
      id: 6,
      name: "kratong-5",
      type: 5,
      src: "/assets/kratong/kratong-5.webp",
    },
    loy: false,
  },

  {
    id: 37,
    name: "test37",
    wish: "test wish37",
    kratong: {
      id: 7,
      name: "kratong-7",
      type: 7,
      src: "/assets/kratong/kratong-7.webp",
    },
    loy: false,
  },

  {
    id: 38,
    name: "test38",
    wish: "test wish38",
    kratong: {
      id: 8,
      name: "kratong-8",
      type: 8,
      src: "/assets/kratong/kratong-8.webp",
    },
    loy: false,
  },

  {
    id: 39,
    name: "test39",
    wish: "test wish39",
    kratong: {
      id: 6,
      name: "kratong-6",
      type: 6,
      src: "/assets/kratong/kratong-6.webp",
    },
    loy: false,
  },

  {
    id: 40,
    name: "test40",
    wish: "test wish40",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 41,
    name: "test41",
    wish: "test wish41",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },

  {
    id: 42,
    name: "test42",
    wish: "test wish42",
    kratong: {
      id: 2,
      name: "kratong-2",
      type: 2,
      src: "/assets/kratong/kratong-2.webp",
    },
    loy: false,
  },

  {
    id: 43,
    name: "test43",
    wish: "test wish43",
    kratong: {
      id: 3,
      name: "kratong-3",
      type: 3,
      src: "/assets/kratong/kratong-3.webp",
    },
    loy: false,
  },

  {
    id: 44,
    name: "test44",
    wish: "test wish44",
    kratong: {
      id: 4,
      name: "kratong-9",
      type: 9,
      src: "/assets/kratong/kratong-9.webp",
    },
    loy: false,
  },

  {
    id: 45,
    name: "test45",
    wish: "test wish45",
    kratong: {
      id: 5,
      name: "kratong-4",
      type: 4,
      src: "/assets/kratong/kratong-4.webp",
    },
    loy: false,
  },

  {
    id: 46,
    name: "test46",
    wish: "test wish46",
    kratong: {
      id: 6,
      name: "kratong-5",
      type: 5,
      src: "/assets/kratong/kratong-5.webp",
    },
    loy: false,
  },

  {
    id: 47,
    name: "test47",
    wish: "test wish47",
    kratong: {
      id: 7,
      name: "kratong-7",
      type: 7,
      src: "/assets/kratong/kratong-7.webp",
    },
    loy: false,
  },

  {
    id: 48,
    name: "test48",
    wish: "test wish48",
    kratong: {
      id: 8,
      name: "kratong-8",
      type: 8,
      src: "/assets/kratong/kratong-8.webp",
    },
    loy: false,
  },

  {
    id: 49,
    name: "test49",
    wish: "test wish49",
    kratong: {
      id: 6,
      name: "kratong-6",
      type: 6,
      src: "/assets/kratong/kratong-6.webp",
    },
    loy: false,
  },

  {
    id: 50,
    name: "test50",
    wish: "test wish50",
    kratong: {
      id: 1,
      name: "kratong-1",
      type: 1,
      src: "/assets/kratong/kratong-1.webp",
    },
    loy: false,
  },
];

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);

  const page = searchParams.get("page");
  const limit = searchParams.get("limit");

  const totalItems = kratong_list.length;
  const totalPage = Math.ceil(kratong_list.length / Number(limit));

  const start = (Number(page) - 1) * Number(limit);
  let nextPage: boolean = totalPage > Number(page) ? true : false;
  let end = start + Number(limit);
  if (end > totalItems) {
    end = totalItems;
  }

  const res = {
    page: page,
    limit: limit,
    kratong: kratong_list.slice(start, end),
    nextPage: nextPage,
  };

  return NextResponse.json(res);
}
