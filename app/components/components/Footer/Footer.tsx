import RempahSVG from "../../svg/app/rempah";
import Link from "next/link";
import { FooterTypesData } from "@/app/datas/data.config";
import Image from "next/image";
import IconRecepku from "../../svg/LandingPage/Icon";
const Footer: React.FC = () => {
  return (
    <main className="w-[100vw] h-[50vh] bg-[#ECE7D4] z-[-1] relative">
      <div className="flex justify-center items-center h-full">
        <div className="flex justify-around w-full">
          <div className="">
            <div className="flex-col ">
              <div className="items-center justify-center gap-2 flex">
                <IconRecepku />
                <h1>Recep-Ku</h1>
              </div>
              <div className="w-[15vw] text-center text-[1.2rem]">
                <h1>
                  {FooterTypesData.map((items, key) => (
                    <div key={key}>
                      <span className="text-[2ren]">{items.Footer1.desc}</span>
                    </div>
                  ))}
                </h1>
              </div>
            </div>
          </div>
          <div className="flex-col">
            <h1>Navigation</h1>
            <div>
              {FooterTypesData.map((items, key) => (
                <div key={key}>
                  {items.Footer2.map((item, key) => (
                    <div key={key}>
                      <Link href={item.href}>
                        <p>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex-col">
            <h1>Genres</h1>
            <div>
              {FooterTypesData.map((items, key) => (
                <div key={key}>
                  {items.Footer3.map((item, key) => (
                    <div key={key}>
                      <Link href={item.href}>
                        <p>{item.title}</p>
                      </Link>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="flex=col">
            <h1>Follow Us</h1>
            <div>
              {FooterTypesData.map((items, key) => (
                <div key={key}>
                  {items.Footer4.map((item, key) => (
                    <Link href={item.href} key={key}>
                      <p>{item.Icon}</p>
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
export default Footer;
