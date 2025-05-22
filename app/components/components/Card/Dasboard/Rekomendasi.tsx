"use client";
import { useState } from "react";
import Image from "next/image";
import { RekomendasiTypesProps } from "@/app/components/props/Props.config";
import { Star } from "lucide-react";
import Link from "next/link";
const Rekomendasi: React.FC<RekomendasiTypesProps> = ({ data }) => {
  const [ratingStar] = useState<number>(0);
  return (
    <main className="w-full h-full ">
      <div className="flex justify-center items-center w-[25vw] h-[45vh] border-1 rounded-lg flex-col bg-[#F5F2F2]">
        <div className="w-full h-full">
          <Image
            src={data.image}
            alt="Pict"
            width={200}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="flex justify-start m-4 flex-col">
            <h1 className="text-[1.6rem] font-extrabold">{data.title}</h1>
            <span className="font-light text-[1.6rem] my-4">{data.desc}</span>
            <div className="flex justify-between">
              <Link href={data.href}>
                <div className="border-2 bg-[#FFDB63] flex items-center justify-center p-2 rounded-lg">
                  <span className="font-bold">Lihat Detail</span>
                </div>
              </Link>

              <div className="flex">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item}>
                    <Star
                      color={ratingStar >= item ? "#FFFF00" : "#000000"}
                      className="duration-[0.2s]"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Rekomendasi;
