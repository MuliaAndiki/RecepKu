"use client";

import Image from "next/image";
import FootMyrecipesSVG from "@/app/components/svg/myrecipes/FootCenter";
import { Star, Heart, Bookmark, MessageCircle } from "lucide-react";
import { useParams } from "next/navigation";

const ResepComponent: React.FC = () => {
  return (
    <main>
      <div className="flex justify-center items-center relative w-full h-[30vh] bg-gradient-to-r from-orange-400 to-yellow-500">
        <div className="absolute">
          <FootMyrecipesSVG />
        </div>
        <div className="z-10 text-center px-4">
          <h1 className="text-white text-3xl font-extrabold">My Recipe</h1>
          <p className="text-white text-lg mt-2 max-w-[700px]">
            "Yuk, bagikan kreasi masakanmu dan jadikan dapurmu inspirasi untuk
            yang lain!”
          </p>
        </div>
      </div>

      <section className="max-w-4xl mx-auto mt-8 p-4">
        <div className="relative w-full h-[200px] rounded-md overflow-hidden">
          <Image
            src="/images/waffle.jpg"
            alt="Waffle"
            fill
            className="object-cover brightness-75"
          />
          <h2 className="absolute inset-0 flex items-center justify-center text-white text-3xl font-bold">
            Waffles
          </h2>
        </div>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-2">
            <Image
              src="/images/profile.png"
              alt="User"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="font-semibold">Claire</span>
          </div>

          <div className="flex items-center gap-4 text-gray-700">
            <div className="flex items-center gap-1">
              <Heart className="text-red-500" size={20} />
              <span>12</span>
            </div>
            <div className="flex items-center gap-1">
              <MessageCircle size={20} />
              <span>2</span>
            </div>
            <div className="flex items-center gap-1">
              <Bookmark size={20} />
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 mt-2">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              size={20}
              className="text-yellow-500 fill-yellow-500"
            />
          ))}
          <span className="ml-2 text-sm text-gray-600">5 ★ (3 ulasan)</span>
        </div>

        <p className="mt-6">
          <span className="font-bold">Kategori</span> : Camilan
        </p>

        <div className="mt-4">
          <h3 className="font-bold">Bahan–Bahan</h3>
          <ul className="list-disc pl-6 mt-2 space-y-1">
            {[
              "2 cangkir tepung terigu",
              "2 sendok makan gula pasir",
              "2 sendok teh baking powder",
              "1/2 sendok teh garam",
              "2 sendok makan tepung maizena",
              "3 butir telur kocok",
              "4 sendok makan mentega tawar yang dilelehkan",
              "1 dan 3/4 cangkir susu",
              "1 sendok makan esens vanila",
            ].map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h3 className="font-bold">Petunjuk</h3>
          <ol className="list-decimal pl-6 mt-2 space-y-1">
            <li>
              Ayak tepung terigu, gula, tepung kanji, ragi dan garam ke dalam
              mangkuk. Sisihkan.
            </li>
            <li>
              Di mangkuk lain, campurkan telur kocok dengan susu, mentega cair
              dan esens vanila.
            </li>
            <li>
              Tuang di atas campuran tepung dan campurkan bahan-bahan dengan
              cepat.
            </li>
            <li>
              Panaskan wafel. Tuang satu sendok sayur adonan dan oleskan hingga
              menutupi cetakan wafel, tutup dan panggang hingga adonan berwarna
              cokelat keemasan.
            </li>
            <li>
              Angkat dengan spatula silikon. Sajikan dengan madu, buah atau
              selai.
            </li>
          </ol>
        </div>

        <div className="mt-6">
          <h3 className="font-bold">Informasi Tambahan</h3>
          <p className="mt-1">
            Lebih nikmat dimakan saat sarapan di pagi hari :D
          </p>
        </div>
      </section>
    </main>
  );
};

export default ResepComponent;
