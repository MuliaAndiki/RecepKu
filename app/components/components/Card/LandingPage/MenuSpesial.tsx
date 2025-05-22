import Image from "next/image";
import { MenuSpesialTypesProps } from "@/app/components/props/Props.config";

const MenuSpesial: React.FC<MenuSpesialTypesProps> = ({ data }) => {
  return (
    <div className="bg-white w-full h-full flex justify-center items-center px-2 py-6 rounded-tr-4xl rounded-bl-4xl">
      <div className="flex flex-col items-center justify-center">
        <Image
          src={data.image}
          alt="Menu"
          width={300}
          height={300}
          className="drop-shadow-xl/50"
        ></Image>
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-extrabold my-4 text-[1.9rem] ">{data.title}</h1>
          <span className="text-center w-[13vw] text-[1.6rem]">
            {data.shortDescription}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MenuSpesial;
