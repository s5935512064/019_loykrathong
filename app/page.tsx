import Image from "next/image";
import Background from "@/components/Background";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";
import Speaker from "@/components/Speaker";
import SocialShared from "@/components/SocialShared";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "ลอยกระทงออนไลน์ 2566 - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
  description:
    "ดิโอลด์สยามชวนเพื่อนๆ มาลอยกระทงออนไลน์ด้วยกัน ช่วยลดขยะในแม่น้ำ และลำคลอง",
  keywords: [
    "ลอยกระทง",
    "ลอยกระทง2566",
    "ลอยกระทงออนไลน์",
    "loykrathong2566",
    "loykrathong",
    "krathongonline",
    "thaitradition",
    "ดิโอลด์สยาม",
    "ดิโอลด์",
    "ห้างสรรพสินค้า",
    "theoldsiam",
    "ลานมิ่งเมือง",
    "ลานเฟื่องนคร",
    "แหล่งอาหารอร่อยใจกลางกรุง",
    "ห้างติดคลองถม",
    "อมร",
    "ห้างสรรพสินค้าย่านเยาวราช",
    "ผ้าไหม",
    "ผ้าไหมไทย",
    "ขนมไทย",
    "ขนมไทยอร่อย",
    "ผ้าไหมสวย",
    "เครื่องประดับ",
    "เพชร",
    "ทอง",
    "เงิน",
    "plaza",
    "themall",
    "thaimarket",
    "rattanakosin",
  ],
  authors: [{ name: "ดิ โอลด์ สยาม พลาซ่า" }],
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title:
      "ลอยกระทงออนไลน์ 2566 - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    description:
      "ลอยกระทงออนไลน์ 2566 - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    url: "https://theoldsiam.co.th",
    images: process.env.NEXT_PUBLIC_API_URL + "/assets/slide/slide_03.webp",
    siteName:
      "ลอยกระทงออนไลน์ 2566 - ดิโอลด์ สยาม พลาซ่า ศูนย์การค้าใจกลางกรุง ย่านเยาวราช แหล่งรวมอาหารอร่อยใจกลางกรุง ลานมิ่งเมือง ลานผ้าไหม ลานเฟื่องนคร theoldsiam",
    locale: "th_TH",
    type: "website",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
    maximumScale: 5,
  },
};

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center overflow-hidden">
      <SocialShared />
      <Background />
      <Speaker />
    </main>
  );
}
