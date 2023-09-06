import type { NextApiRequest, NextApiResponse } from "next";
import { NextRequest, NextResponse } from "next/server";

type Data = {};

const kratong_list = [
  { id: 1, name: "Test1" },
  { id: 2, name: "Test2" },
  { id: 3, name: "Test3" },
  { id: 4, name: "Test4" },
  { id: 5, name: "Test5" },
  { id: 6, name: "Test6" },
  { id: 7, name: "Test7" },
  { id: 8, name: "Test8" },
  { id: 9, name: "Test9" },
  { id: 10, name: "Test10" },
  { id: 11, name: "Test11" },
  { id: 12, name: "Test12" },
  { id: 13, name: "Test13" },
  { id: 14, name: "Test14" },
  { id: 15, name: "Test15" },
  { id: 16, name: "Test16" },
  { id: 17, name: "Test17" },
  { id: 18, name: "Test18" },
  { id: 19, name: "Test19" },
  { id: 20, name: "Test20" },
  { id: 21, name: "Test21" },
  { id: 22, name: "Test22" },
  { id: 23, name: "Test23" },
  { id: 24, name: "Test24" },
  { id: 25, name: "Test25" },
  { id: 26, name: "Test26" },
  { id: 27, name: "Test27" },
  { id: 28, name: "Test28" },
  { id: 29, name: "Test29" },
  { id: 30, name: "Test30" },
  { id: 31, name: "Test31" },
  { id: 32, name: "Test32" },
  { id: 33, name: "Test33" },
  { id: 34, name: "Test34" },
  { id: 35, name: "Test35" },
  { id: 36, name: "Test36" },
  { id: 37, name: "Test37" },
  { id: 38, name: "Test38" },
  { id: 39, name: "Test39" },
  { id: 40, name: "Test40" },
  { id: 41, name: "Test41" },
  { id: 42, name: "Test42" },
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
