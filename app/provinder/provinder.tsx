"use client";
import { useState, useEffect } from "react";

import contex from "@/app/hooks/kontex";

import "aos/dist/aos.css";
import { UserTypes, MyRecipesTypes } from "../types/API";

export const ProvinderRecepku = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<UserTypes | null>(null);
  // const [dataRecipes, setDataRecipes] = useState<MyRecipesTypes[] | null>(null);

  //   useEffect(() => {
  //     AOS.init({ duration: 1000, once: true });
  //   }, []);

  return (
    <contex.Provider
      value={{
        currentUser,
        setCurrentUser,
        // dataRecipes,
        // setDataRecipes,
      }}
    >
      {children}
    </contex.Provider>
  );
};
