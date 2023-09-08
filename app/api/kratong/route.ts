import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type Data = {};

const kratong_list = [
  { id: 1, name: "Test1", type: 1 },
  { id: 2, name: "Test2", type: 3 },
  { id: 3, name: "Test3", type: 2 },
  { id: 4, name: "Test4", type: 2 },
  { id: 5, name: "Test5", type: 1 },
  { id: 6, name: "Test6", type: 2 },
  { id: 7, name: "Test7", type: 1 },
  { id: 8, name: "Test8", type: 2 },
  { id: 9, name: "Test9", type: 4 },
  { id: 10, name: "Test10", type: 1 },
  { id: 11, name: "Test11", type: 2 },
  { id: 12, name: "Test12", type: 1 },
  { id: 13, name: "Test13", type: 1 },
  { id: 14, name: "Test14", type: 2 },
  { id: 15, name: "Test15", type: 1 },
  { id: 16, name: "Test16", type: 3 },
  { id: 17, name: "Test17", type: 2 },
  { id: 18, name: "Test18", type: 1 },
  { id: 19, name: "Test19", type: 1 },
  { id: 20, name: "Test20", type: 4 },
  { id: 21, name: "Test21", type: 2 },
  { id: 22, name: "Test22", type: 1 },
  { id: 23, name: "Test23", type: 2 },
  { id: 24, name: "Test24", type: 3 },
  { id: 25, name: "Test25", type: 1 },
  { id: 26, name: "Test26", type: 4 },
  { id: 27, name: "Test27", type: 2 },
  { id: 28, name: "Test28", type: 2 },
  { id: 29, name: "Test29", type: 2 },
  { id: 30, name: "Test30", type: 3 },
  { id: 31, name: "Test31", type: 1 },
  { id: 32, name: "Test32", type: 1 },
  { id: 33, name: "Test33", type: 4 },
  { id: 34, name: "Test34", type: 1 },
  { id: 35, name: "Test35", type: 1 },
  { id: 36, name: "Test36", type: 2 },
  { id: 37, name: "Test37", type: 1 },
  { id: 38, name: "Test38", type: 3 },
  { id: 39, name: "Test39", type: 3 },
  { id: 40, name: "Test40", type: 1 },
  { id: 41, name: "Test41", type: 2 },
  { id: 42, name: "Test42", type: 1 },
  { id: 43, name: "Test43", type: 1 },
  { id: 44, name: "Test44", type: 1 },
  { id: 45, name: "Test45", type: 4 },
  { id: 46, name: "Test46", type: 4 },
  { id: 47, name: "Test47", type: 1 },
  { id: 48, name: "Test48", type: 2 },
  { id: 49, name: "Test49", type: 1 },
  { id: 50, name: "Test50", type: 1 },
  { id: 51, name: "Test51", type: 3 },
  { id: 52, name: "Test52", type: 1 },
  { id: 53, name: "Test53", type: 1 },
  { id: 54, name: "Test54", type: 2 },
  { id: 55, name: "Test55", type: 1 },
  { id: 56, name: "Test56", type: 1 },
  { id: 57, name: "Test57", type: 4 },
  { id: 58, name: "Test58", type: 1 },
  { id: 59, name: "Test59", type: 1 },
  { id: 60, name: "Test60", type: 2 },
  { id: 61, name: "Test61", type: 1 },
  { id: 62, name: "Test62", type: 1 },
  { id: 63, name: "Test63", type: 2 },
  { id: 64, name: "Test64", type: 4 },
  { id: 65, name: "Test65", type: 3 },
  { id: 66, name: "Test66", type: 2 },
  { id: 67, name: "Test67", type: 1 },
  { id: 68, name: "Test68", type: 1 },
  { id: 69, name: "Test69", type: 2 },
  { id: 70, name: "Test70", type: 2 },
  { id: 71, name: "Test71", type: 2 },
  { id: 72, name: "Test72", type: 2 },
  { id: 73, name: "Test73", type: 1 },
  { id: 74, name: "Test74", type: 1 },
  { id: 75, name: "Test75", type: 3 },
  { id: 76, name: "Test76", type: 4 },
  { id: 77, name: "Test77", type: 1 },
  { id: 78, name: "Test78", type: 2 },
  { id: 79, name: "Test79", type: 1 },
  { id: 80, name: "Test80", type: 4 },

  { id: 81, name: "Test81", type: 1 },
  { id: 82, name: "Test82", type: 2 },
  { id: 83, name: "Test83", type: 1 },
  { id: 84, name: "Test84", type: 3 },
  { id: 85, name: "Test85", type: 2 },
  { id: 86, name: "Test86", type: 1 },
  { id: 87, name: "Test87", type: 4 },
  { id: 88, name: "Test88", type: 2 },
  { id: 89, name: "Test89", type: 1 },
  { id: 90, name: "Test90", type: 1 },

  { id: 91, name: "Test91", type: 1 },
  { id: 92, name: "Test92", type: 1 },
  { id: 93, name: "Test93", type: 3 },
  { id: 94, name: "Test94", type: 4 },
  { id: 95, name: "Test95", type: 2 },
  { id: 96, name: "Test96", type: 1 },
  { id: 97, name: "Test97", type: 3 },
  { id: 98, name: "Test98", type: 1 },
  { id: 99, name: "Test99", type: 2 },
  { id: 100, name: "Test100" },
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
