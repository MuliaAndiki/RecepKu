"use client";

import SideBar from "../../components/sidebar/SideBar";
import BackgroundProfileSVG from "../../svg/profile/Background";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useHook } from "@/app/hooks/kontex";

const ProfileComponent: React.FC = () => {
  const { currentUser } = useHook();
  return (
    <main className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 z-0 translate-x-25 scale-[113%]">
        <BackgroundProfileSVG />
      </div>

      <div className="relative z-10 flex h-full">
        <div className="flex-[0.3]">
          <SideBar />
        </div>

        <div className="flex-[1] p-8">
          <h1 className="text-2xl font-bold mb-6">Profile</h1>

          <div className="flex gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1  ">
                  <label className="block font-medium">Nama Depan</label>
                  <h1 className="border rounded-md p-2 w-full">
                    {currentUser?.user.firstName}
                  </h1>
                </div>
                <div className="flex-1">
                  <label className="block font-medium">Nama Belakang</label>
                  <h1 className="border rounded-md p-2 w-full">
                    {currentUser?.user.lastName}
                  </h1>
                </div>
              </div>

              <div>
                <label className="block font-medium">Username</label>
                <h1 className="border rounded-md p-2 w-full">
                  {currentUser?.user.userName}
                </h1>
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <h1 className="border rounded-md p-2 w-full">
                  {currentUser?.user.email}
                </h1>
              </div>

              <div>
                <label className="block font-medium">No Handphone</label>
                <h1 className="border rounded-md p-2 w-full">
                  {currentUser?.user.phoneNumber}
                </h1>
              </div>
            </div>

            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden self-start">
              <Image
                src={currentUser?.user.profilePic}
                alt="Profile"
                fill
                className="object-cover"
              />
              <div className="absolute bottom-0 right-0 bg-white p-1 rounded-full shadow cursor-pointer">
                <Pencil size={18} color="#F6971F" />
              </div>
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <button className="border-2 border-orange-500 px-6 py-2 text-orange-500 rounded-md">
              Cancel
            </button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold">
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ProfileComponent;
