"use client";

import { useState } from "react";
import { UploadCloud } from "lucide-react";
import API from "@/app/utils/API";
import { useHook } from "@/app/hooks/kontex";

const TambahkanResepComponent: React.FC = () => {
  const { currentUser } = useHook();
  const [ingredients, setIngredients] = useState([{ quantity: "", name: "" }]);
  const [title, setTitle] = useState<string>("");
  const [shortDescription, setShortDescription] = useState<string>("");
  const [instructions, setInstructions] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string>("");
  const [category, setCategory] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);

  const handleAddrecipes = async () => {
    try {
      if (!image) {
        alert("Mohon unggah gambar terlebih dahulu");
        return;
      }
      const formData = new FormData();
      formData.append("title", title);
      formData.append("shortDescription", shortDescription);
      formData.append("instructions", instructions);
      formData.append("additionalInfo", additionalInfo);
      formData.append("category", category);
      formData.append("thumbnail", image);
      formData.append("ingredients", JSON.stringify(ingredients));

      await API.post(`/recipes/create-recipe`, formData, {
        headers: {
          Authorization: `Bearer ${currentUser?.token}`,
          "Content-Type": "multipart/form-data",
        },
      });
    } catch (error) {
      console.error("Failed to add recipe:", error);
    }
  };

  const handleAddIngredient = () => {
    setIngredients([...ingredients, { quantity: "", name: "" }]);
  };

  const handleIngredientChange = (
    index: number,
    field: string,
    value: string
  ) => {
    const newIngredients = [...ingredients];
    newIngredients[index][field as "quantity" | "name"] = value;
    setIngredients(newIngredients);
  };

  return (
    <main className="p-6 w-full max-w-[90vw] mx-auto">
      <h1 className="font-bold text-[1.5rem] mb-4">
        My Recipes&nbsp;
        <span className="text-[#F6971F]">&lt; Tambah resep</span>
      </h1>

      <div className="flex justify-between items-center w-full mb-6">
        <h1 className="text-[1.2rem] font-bold">
          Isi detail di bawah ini untuk membagikan kreasi lezatmu!
        </h1>
        <span className="text-blue-500 text-sm">* : Wajib diisi</span>
      </div>

      <form
        className="space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          handleAddrecipes();
        }}
      >
        <div>
          <label>* Judul Resep</label>
          <input
            type="text"
            className="border w-full rounded-md p-2 mt-1 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div>
          <label>Deskripsi Singkat</label>
          <input
            type="text"
            className="border w-full rounded-md p-2 mt-1 outline-none"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
          />
        </div>

        {ingredients.map((ingredient, index) => (
          <div className="flex gap-4" key={index}>
            <div className="flex-1">
              <label>* Kuantitas</label>
              <input
                type="text"
                className="border w-full rounded-md p-2 mt-1 outline-none"
                value={ingredient.quantity}
                onChange={(e) =>
                  handleIngredientChange(index, "quantity", e.target.value)
                }
              />
            </div>
            <div className="flex-1">
              <label>* Nama Bahan</label>
              <input
                type="text"
                className="border w-full rounded-md p-2 mt-1 outline-none"
                value={ingredient.name}
                onChange={(e) =>
                  handleIngredientChange(index, "name", e.target.value)
                }
              />
            </div>
          </div>
        ))}

        <button
          type="button"
          onClick={handleAddIngredient}
          className="flex items-center gap-2 bg-gray-200 px-4 py-2 rounded-lg"
        >
          + Tambah Bahan
        </button>

        <div>
          <label>* Petunjuk</label>
          <textarea
            className="border w-full rounded-md p-2 mt-1 outline-none"
            rows={3}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </div>

        <div>
          <label>Informasi Tambahan</label>
          <input
            type="text"
            className="border w-full rounded-md p-2 mt-1 outline-none"
            value={additionalInfo}
            onChange={(e) => setAdditionalInfo(e.target.value)}
          />
        </div>

        <div>
          <label className="block font-medium mb-2">* Pilih Kategori :</label>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {[
              "Makanan Pembuka",
              "Makanan Penutup",
              "Makanan Utama",
              "Camilan",
              "Minuman",
            ].map((item) => (
              <label key={item} className="flex items-center gap-2">
                <input
                  type="radio"
                  name="category"
                  value={item}
                  checked={category === item}
                  onChange={() => setCategory(item)}
                />
                {item}
              </label>
            ))}
          </div>
        </div>

        <div className="flex justify-end">
          <label className="flex flex-col items-center gap-2 cursor-pointer text-sm">
            <UploadCloud className="w-10 h-10 text-orange-500" />
            Upload foto
            <input
              type="file"
              className="hidden"
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  setImage(e.target.files[0]);
                }
              }}
            />
          </label>
        </div>

        <div className="flex justify-center gap-6 mt-4">
          <button
            type="button"
            className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-md"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </main>
  );
};

export default TambahkanResepComponent;
