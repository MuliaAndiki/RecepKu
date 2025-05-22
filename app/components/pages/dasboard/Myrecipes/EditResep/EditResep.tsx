"use client";
import { useState } from "react";
import { Trash2, Pencil } from "lucide-react";
import Image from "next/image";

const EditResepComponent: React.FC = () => {
  const [ingredients, setIngredients] = useState([{ qty: "", name: "" }]);
  const [instruction, setInstruction] = useState("");
  const [infoTambahan, setInfoTambahan] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { qty: "", name: "" }]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const updateIngredient = (
    index: number,
    field: "qty" | "name",
    value: string
  ) => {
    const updated = [...ingredients];
    updated[index][field] = value;
    setIngredients(updated);
  };

  return (
    <main className="p-6 max-w-[900px] mx-auto">
      <h1 className="font-bold text-[1.5rem] mb-4">
        My Recipes&nbsp;
        <span className="text-[#F6971F]">&lt; Edit resep</span>
      </h1>

      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="relative w-[200px] h-[200px] bg-gray-200 rounded-md overflow-hidden">
          {/* <Image
            src={}
            alt="Preview"
            className="object-cover"
            fill
          /> */}
          <div className="absolute bottom-2 right-2 bg-white p-2 rounded-full shadow cursor-pointer">
            <Pencil size={18} color="#F6971F" />
          </div>
        </div>
        <div className="flex-1">
          <label className="font-semibold">Judul Resep</label>
          <input
            type="text"
            placeholder="Masukkan judul resep"
            className="border w-full rounded-md p-2 mt-1 outline-none"
          />
        </div>
      </div>

      <h2 className="font-semibold mb-2">Bahan-Bahan</h2>
      {ingredients.map((item, index) => (
        <div key={index} className="flex gap-2 items-center mb-2">
          <input
            type="text"
            value={item.qty}
            placeholder="Kuantitas"
            onChange={(e) => updateIngredient(index, "qty", e.target.value)}
            className="border rounded-md p-2 w-[30%]"
          />
          <input
            type="text"
            value={item.name}
            placeholder="Nama bahan"
            onChange={(e) => updateIngredient(index, "name", e.target.value)}
            className="border rounded-md p-2 flex-1"
          />
          <button type="button" onClick={() => removeIngredient(index)}>
            <Trash2 className="text-red-500" />
          </button>
        </div>
      ))}
      <button
        type="button"
        onClick={addIngredient}
        className="bg-gray-200 px-4 py-2 rounded-md mt-2"
      >
        + Tambah Bahan
      </button>

      <div className="mt-6">
        <label className="font-semibold">Petunjuk</label>
        <textarea
          rows={6}
          value={instruction}
          placeholder="Masukkan petunjuk memasak..."
          onChange={(e) => setInstruction(e.target.value)}
          className="border w-full rounded-md p-2 mt-1 outline-none"
        />
      </div>

      <div className="mt-4">
        <label className="font-semibold">Informasi Tambahan</label>
        <input
          type="text"
          value={infoTambahan}
          placeholder="Masukkan info tambahan jika ada..."
          onChange={(e) => setInfoTambahan(e.target.value)}
          className="border w-full rounded-md p-2 mt-1 outline-none"
        />
      </div>

      <div className="mt-6">
        <label className="font-semibold block mb-2">Pilih Kategori</label>
        <div className="flex flex-wrap gap-4">
          {[
            "Makanan Pembuka",
            "Makanan Penutup",
            "Makanan Utama",
            "Camilan",
            "Minuman",
          ].map((category) => (
            <label key={category} className="flex items-center gap-2">
              <input type="checkbox" />
              {category}
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-center gap-6 mt-8">
        <button className="px-6 py-2 border-2 border-orange-500 text-orange-500 rounded-md">
          Cancel
        </button>
        <button className="px-6 py-2 bg-orange-500 text-white font-semibold rounded-md">
          Save Edit
        </button>
      </div>
    </main>
  );
};

export default EditResepComponent;
