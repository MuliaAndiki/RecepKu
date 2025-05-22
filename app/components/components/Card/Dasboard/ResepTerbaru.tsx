"use client";

import Image from "next/image";
import Link from "next/link";
import { Star } from "lucide-react";
import { useState } from "react";
import { ResepTerbatuTypesProps } from "@/app/components/props/Props.config";
const ResepTerbaru: React.FC<ResepTerbatuTypesProps> = ({ data }) => {
  const [ratingStar] = useState<number>(0);

  return (
    <main className="w-full h-full flex justify-center items-center my-2 ">
      <div className="flex flex-col w-[65vw] min-h-[25vh] bg-[#F5F2F2] rounded-lg p-4 shadow-md">
        <div className="flex w-full">
          <div className="flex-[0.4] rounded-lg overflow-hidden">
            <Image
              src={data.image}
              alt="Donut"
              width={300}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="flex-[1.6] px-6 flex flex-col justify-center">
            <h1 className="text-[2rem] font-bold mb-2">{data.title}</h1>
            <p className="text-gray-700">{data.desc}</p>
          </div>
        </div>

        <div className="flex justify-between items-center mt-4 px-2">
          <Link href={data.href}>
            <button className="bg-[#FFDB63] text-black font-semibold px-4 py-2 rounded-lg hover:scale-105 transition-transform duration-200">
              Lihat Detail
            </button>
          </Link>

          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                fill={ratingStar >= item ? "#facc15" : "none"}
                color="#000"
                className="transition-all duration-200"
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ResepTerbaru;
