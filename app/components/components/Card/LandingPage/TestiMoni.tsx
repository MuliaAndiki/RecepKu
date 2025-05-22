import { TestiMoniTypesProps } from "@/app/components/props/Props.config";
import { Star } from "lucide-react";

import Image from "next/image";
const Testimoni: React.FC<TestiMoniTypesProps> = ({ data }) => {
  return (
    <main className="bg-white h-[40vh] w-[23vw] rounded-tr-4xl rounded-bl-4xl relative ">
      <div className="absolute inset-x-0 -top-10 left-43">
        <div className="border-5 border-white rounded-full w-[5vw] h-[10vh] items-center">
          <Image src={data.foto} alt="" />
        </div>
      </div>
      <div className="flex justify-center items-center h-full w-full flex-col">
        <Star />
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-center my-6 w-[20vw] text-[1.2rem]">
            {data.desc}
          </h1>
          <span className="text-[2rem] font-bold">{data.title}</span>
        </div>
      </div>
    </main>
  );
};

export default Testimoni;
