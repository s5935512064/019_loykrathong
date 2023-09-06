import Image from "next/image";
import Background from "@/components/Background";
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center  bg-black overflow-hidden">
      <Background />
    </main>
  );
}
