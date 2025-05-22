"use client";
import SideLandSvg from "../../svg/LandingPage/sidelan";
import FootSVG from "../../svg/LandingPage/food";
import BgFoot from "../../svg/LandingPage/bg-foog";
import MenuSpesial from "../../components/Card/LandingPage/MenuSpesial";
import { MenuSpesialTypesData } from "@/app/datas/data.config";
import ChikenSVG from "../../svg/LandingPage/chiken";
import SayurSVG from "../../svg/LandingPage/Sayur";
import BawangSVG from "../../svg/LandingPage/bawang";
import RameSVG from "../../svg/LandingPage/ramen";
import Testimoni from "../../components/Card/LandingPage/TestiMoni";
import { TestiMoniTypesData } from "@/app/datas/data.config";
import Link from "next/link";
import { useHook } from "@/app/hooks/kontex";
const LandingPageComponent: React.FC = () => {
  return (
    <main className="h-full w-full ">
      <div className="w-[100vw] h-[100vh] bg-[#ECE7D4] relative z-1 flex justify-center">
        <div className="flex items-center absolute inset-0">
          <BgFoot />
        </div>
        <div className="flex justify-end w-full h-[100vh] absolute inset-0 top-1 scale-101">
          <SideLandSvg />
        </div>
        <div className="flex items-center justify-center z-2">
          <div className="flex justify-between items-center w-350">
            <div className="w-full h-full">
              <div className="flex justify-center items-center flex-col">
                <div className="w-[29vw]">
                  <h1 className="font-extrabold text-[3rem] ">
                    Temukan Cara Praktis Membuat Makanan Favorit Anda
                  </h1>
                  <span className="font-semibold">
                    Eggs, Salad, fruits, pasta
                  </span>
                  <Link href="/auth/login">
                    <div className=" w-80 h-15 bg-[#FDC741] flex justify-center items-center rounded-full mt-20 border-1 duration-[0.3s] hover:scale-110 z-100 ">
                      <button className="font-bold text-[1rem] " type="button">
                        Temukan Lebih Banyak
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
            <div className="z-1">
              <FootSVG />
            </div>
          </div>
        </div>
      </div>

      {/* Section */}
      <section className="w-screen h-screen bg-[#ECE7D4] z-3">
        <main className="flex justify-center items-center flex-col">
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-semibold text-[2rem]">
              Menu Spesial Favorit Semua Orang
            </h1>
            <span className="font-light mt-2">
              Dari yang gurih, hangat, sampai yang renyah — semua hidangan ini
              dijamin bikin kamu pengen nambah terus!
            </span>
          </div>

          <div className="w-full justify-center items-center flex">
            {/* <div className="justify-around flex items-center gap-4 mt-20">
              {allRecipes?.slice(0, 3).map((items, key) => (
                <MenuSpesial key={key} data={items} />
              ))}
            </div> */}
          </div>
        </main>
      </section>

      {/* Section */}
      <section className="w-screen h-screen bg-[#ECE7D4] z-[-1] relative">
        <div className="flex absolute z-1 bottom-0">
          <SayurSVG />
        </div>
        <div className="flex absolute z-1 right-40 bottom-65 ">
          <BawangSVG />
        </div>
        <main className="flex justify-center items-center flex-col w-full z-2">
          <div className="flex justify-around items-center w-full">
            <div className="flex justify-center ">
              <ChikenSVG />
            </div>
            <div className="flex justify-start items-center">
              <div className="flex justify-center items-center flex-col">
                <h1 className="text-center text-[2rem] font-bold w-[15vw]">
                  Selamat Datang di Recep-Ku!
                </h1>
                <span className="text-[1.2rem] w-[20vw] text-center my-6">
                  Dari ayam bakar berbumbu kaya sampai sup hangat yang bikin
                  nyaman — Recep-Ku hadir buat kamu yang hobi masak atau baru
                  mulai belajar. Resep mudah, bahan sederhana, rasa istimewa.
                  Yuk mulai masak hari ini!
                </span>

                <div className="border-2 bg-[#FDC83E] rounded-full p-4 w-[10vw] flex justify-center items-center">
                  <button className="">Selanjutnya</button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>

      {/* Section */}
      <section className="w-[100vw] h-[100vh] bg-[#FDC741] z-[-1] relative">
        <div className="flex absolute z-1">
          <RameSVG />
        </div>
        <main className="flex justify-center items-center flex-col w-full z-2">
          <div className="flex flex-col justify-center items-center">
            <h1 className="text-center text-[3rem] font-bold w-[30vw] mt-2">
              Apa Kata Mereka Tentang Recep-Ku?
            </h1>
            <span className="w-[60vw] text-center text-[1.8rem] my-10">
              Testimoni dari Mereka yang Sudah Mencoba, Kami percaya, kepuasan
              pelanggan adalah yang utama. Inilah pendapat mereka yang telah
              membuktikan sendiri kelezatan dan kemudahan resep-resep kami.
            </span>
          </div>
          <div className="mt-10">
            {TestiMoniTypesData.map((items, key) => (
              <Testimoni key={key} data={items} />
            ))}
          </div>
        </main>
      </section>
    </main>
  );
};

export default LandingPageComponent;
