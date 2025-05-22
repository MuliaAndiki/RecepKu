"use client";
import Link from "next/link";
import IconRecepku from "../../svg/LandingPage/Icon";
import { NavbarDashboardConfigData } from "@/app/datas/data.config";
import { useHook } from "@/app/hooks/kontex";
import Image from "next/image";
const NavbarDasboard = () => {
  const { currentUser } = useHook();
  return (
    <main>
      <div className="">
        <div className="flex justify-around items-center bg-transparent">
          <div className="flex items-center justify-center gap-4">
            <IconRecepku />
            <h1 className="font-semibold">Recep-Ku</h1>
          </div>
          <div className="flex justify-center gap-[6vw]">
            {NavbarDashboardConfigData.map((items, key) => (
              <div className="flex " key={key}>
                <Link href={items.href}>
                  <h1 className="font-bold hover:scale-[103%] duration-[0.3s] hover:text-[#F6971F]">
                    {items.title}
                  </h1>
                </Link>
              </div>
            ))}
          </div>

          <div className="">
            <Link href="/profile">
              <div className="flex gap-2 items-center justify-center">
                <Image
                  src={currentUser?.user.profilePic}
                  alt=""
                  width={500}
                  height={50}
                  className="w-[5vw] h-10 object-cover rounded-lg"
                />

                <h1 className="text-black">{currentUser?.user.email}</h1>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
};

export default NavbarDasboard;
