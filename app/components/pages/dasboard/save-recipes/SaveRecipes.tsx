"use client";
import FootMyrecipesSVG from "@/app/components/svg/myrecipes/FootCenter";
import { useEffect } from "react";
import API from "@/app/utils/API";
import { useHook } from "@/app/hooks/kontex";

const SaveRecipesComponent: React.FC = () => {
  const { currentUser } = useHook();
  const handleSaveRecipes = async () => {
    try {
      const res = await API.get(
        `/users/saved-recipes/${currentUser?.user._id}`,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
          },
        }
      );
      console.log("Data SaveRecipes Berhasil Diambil", res.data);
    } catch (error) {
      console.log("Gagal MengAmbil Data Save", error);
    }
  };

  useEffect(() => {
    handleSaveRecipes();
  }, []);

  return (
    <main>
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
    </main>
  );
};

export default SaveRecipesComponent;
