"use client";
import FootMyrecipesSVG from "@/app/components/svg/myrecipes/FootCenter";
import EditIconSVG from "@/app/components/ui/editIcon";
import Link from "next/link";
import { useHook } from "@/app/hooks/kontex";
import { useEffect, useState } from "react";
import API from "@/app/utils/API";
import MyRecipesCard from "@/app/components/components/Card/Dasboard/MyRecipes";

const MyRecipesComponents: React.FC = () => {
  const { currentUser } = useHook();
  const [dataRecipes, setDataRecipes] = useState<any[]>();

  const handleGetRecipesById = async () => {
    try {
      const res = await API.get(
        `/recipes/my-recipes/${currentUser?.user._id}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );
      setDataRecipes(res.data.data);
      console.log("Data MyRecipes Berhasil diambil", res.data);
    } catch (error) {
      console.log("Data MyRecipes Gagal di Ambil", error);
    }
  };

  useEffect(() => {
    handleGetRecipesById();
  }, []);

  return (
    <main className="h-screen w-screen">
      <div className="flex justify-center items-center relative w-full h-[30vh]">
        <div className="absolute">
          <FootMyrecipesSVG />
        </div>
        <div className="z-1 flex justify-center items-center flex-col">
          <h1 className="text-white text-[1.5rem] font-extrabold">My Recipe</h1>
          <span className="text-white text-[1.5rem]">
            "Yuk, bagikan kreasi masakanmu dan jadikan dapurmu inspirasi untuk
            yang lain!”
          </span>
        </div>
      </div>

      <section className="w-full ">
        <div className="flex justify-start p-6 flex-col">
          <h1 className="font-bold text-[1.8rem]">
            Halo,
            <span className="text-[#FF7008] font-bold text-[1.8rem]">
              {currentUser?.user.userName}
            </span>
          </h1>
          <div className="my-4">
            <h1 className="font-bold">Kamu Belum Punya Resep, Nih</h1>
            <span className="">Tambahkan resep pertamamu sekarang!</span>
          </div>

          <Link href="/dasboard/my-recipes/tambah-resep">
            <div className="border-2 bg-[#FF7008] rounded-lg w-[11vw] p-2 flex gap-4 text-white hover:scale-103 duration-[0.4s]">
              <button className="font-bold">Tambahkan Resep</button>
              <EditIconSVG />
            </div>
          </Link>

          <div className="flex">
            {dataRecipes?.map((items, key) => (
              <MyRecipesCard key={key} data={items} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MyRecipesComponents;
