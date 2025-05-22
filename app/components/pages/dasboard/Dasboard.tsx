"use client";
import { Search, Funnel } from "lucide-react";
import BackgroundDasboardSVG from "../../svg/dashboard/background";
import Rekomendasi from "../../components/Card/Dasboard/Rekomendasi";
import ResepTerbaru from "../../components/Card/Dasboard/ResepTerbaru";
import { ReserpTerbatuTypesData } from "@/app/datas/data.config";
import { RekomendasiTypesData } from "@/app/datas/data.config";
import API from "@/app/utils/API";
import { useHook } from "@/app/hooks/kontex";
import { useState, useEffect } from "react";
const DasboardComponents: React.FC = () => {
  const { currentUser } = useHook();
  const [dataLanding, setDataLanding] = useState<any[]>();

  // const handleGetALLRecipe = async () => {
  //   try {
  //     const res = await API.get(`/recipes/`, {
  //       headers: {
  //         Authorization: `Bearer ${currentUser?.token}`,
  //       },
  //     });
  //     console.log("Data Recipes Berhasil Diambil", res.data);
  //     setAllRecipes(res.data);
  //     console.log("Data Dari AllRecipes", allRecipes);
  //   } catch (error) {
  //     console.log("Gagal Mengambil Data Recipes", error);
  //   }
  // };

  // useEffect(() => {
  //   handleGetALLRecipe();
  // }, []);
  return (
    <main className="w-screen h-full">
      <div className=" flex justify-center items-center w-full h-[40vh] flex-col relative ">
        <div className="absolute  ">
          <BackgroundDasboardSVG />
        </div>
        <div className="z-1">
          <div>
            <h1 className="font-bold text-[3rem] w-[55vw] text-center text-white">
              Selamat datang di Resep-Ku! Temukan dan bagikan resep lezat dari
              dapur ke seluruh dunia.
            </h1>
            <div className="flex justify-between gap-4">
              <div className="flex justify-between border-2 rounded-md p-2 w-full bg-white">
                <input
                  type="text"
                  placeholder="Search Here..."
                  className="w-full outline-none"
                />
                <Search />
              </div>
              <div className="border-1 rounded-lg bg-white flex justify-center items-center p-2 gap-2">
                <h1>Filter</h1>
                <Funnel />
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="w-screen h-screen  ">
        <main className="flex justify-center items-center w-full h-full flex-col">
          <h1 className="font-extrabold text-[2.5rem]">Rekomendasi UntukMu</h1>
          <div className="my-4 flex justify-around items-center gap-6 mt-4">
            {RekomendasiTypesData.map((items, key) => (
              <Rekomendasi key={key} data={items} />
            ))}
          </div>
        </main>
      </section>

      <section className="w-screen h-screen  ">
        <main className="flex justify-center items-center w-full h-full flex-col">
          <h1 className="font-extrabold text-[2.5rem]">Resep Terbaru</h1>
          <div className="flex justify-center items-center flex-col">
            {ReserpTerbatuTypesData.map((items, key) => (
              <ResepTerbaru key={key} data={items} />
            ))}
          </div>
        </main>
      </section>
    </main>
  );
};
export default DasboardComponents;
