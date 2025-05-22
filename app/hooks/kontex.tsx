"use client";
import React, { createContext, useContext } from "react";
import { UserTypes, MyRecipesTypes } from "@/app/types/API/index";

const contex = createContext<{
  currentUser: UserTypes | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<UserTypes | null>>;
  // dataRecipes: MyRecipesTypes[] | null;
  // setDataRecipes: React.Dispatch<React.SetStateAction<MyRecipesTypes[] | null>>;
} | null>(null);

export const useHook = () => {
  const RecepKu = useContext(contex);
  if (!RecepKu) {
    throw new Error("");
  }
  return RecepKu;
};

export default contex;
