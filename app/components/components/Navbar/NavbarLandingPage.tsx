import Link from "next/link";
import { NavbarLandingConfigData } from "@/app/datas/data.config";
import { CircleUser } from "lucide-react";
import IconRecepku from "../../svg/LandingPage/Icon";

const Navbar: React.FC = () => {
  return (
    <main>
      <div className="">
        <div className="flex justify-around items-center bg-transparent">
          <div className="flex items-center justify-center gap-4">
            <IconRecepku />
            <h1 className="font-semibold">Recep-Ku</h1>
          </div>
          <div className="flex justify-center gap-[6vw]">
            {NavbarLandingConfigData.map((items, key) => (
              <div className="flex" key={key}>
                <Link href={items.href}>
                  <h1 className="font-bold">{items.title}</h1>
                </Link>
              </div>
            ))}
          </div>

          <div className="">
            <Link href="/auth/login">
              <CircleUser />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Navbar;
