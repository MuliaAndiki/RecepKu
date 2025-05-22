"use client";

import Image from "next/image";
import { MyRecipesTypesProps } from "@/app/components/props/Props.config";
import API from "@/app/utils/API";
import { useHook } from "@/app/hooks/kontex";

const MyRecipesCard: React.FC<MyRecipesTypesProps> = ({ data }) => {
  const { currentUser } = useHook();

  const handleDeleteRecep = async () => {
    try {
      const userId = currentUser?.user._id?.trim();
      const recipeId = data._id?.trim();

      if (!userId || !recipeId) {
        console.error("User ID atau Recipe ID tidak tersedia");
        return;
      }

      const res = await API.delete(
        `/recipes/my-recipes/${userId}/${recipeId}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );

      console.log("Berhasil Hapus Resep", res.data);
    } catch (error: any) {
      console.error("Gagal menghapus resep:", error?.response?.data || error);
    }
  };

  return (
    <main className="w-full h-full">
      <div className="flex justify-center items-center w-[25vw] h-[45vh] border-1 rounded-lg flex-col bg-[#F5F2F2]">
        <div className="w-full h-full">
          <Image
            src={data.thumbnail}
            alt="Pict"
            width={200}
            height={300}
            className="w-full h-48 object-cover rounded-lg"
          />
          <div className="flex justify-start m-4 flex-col">
            <h1 className="text-[1.6rem] font-extrabold">{data.title}</h1>
            <span className="font-light text-[1.6rem] my-4">
              {data.shortDescription}
            </span>
            <div className="flex justify-around">
              <div className="bg-[#F0C122] p-4 rounded-full cursor-pointer">
                <h1 className="font-bold">Edit</h1>
              </div>

              <div className="bg-[#FD9E38] p-4 rounded-full cursor-pointer">
                <button className="font-bold" onClick={handleDeleteRecep}>
                  Hapus
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default MyRecipesCard;
