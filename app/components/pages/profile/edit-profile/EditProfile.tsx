"use client";

import SideBar from "@/app/components/components/sidebar/SideBar";
import BackgroundProfileSVG from "@/app/components/svg/profile/Background";
import { Pencil } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import API from "@/app/utils/API";
import { useHook } from "@/app/hooks/kontex";
import Modal from "@/app/components/components/Modal/Modal";

const EditProfileComponent: React.FC = () => {
  const { currentUser } = useHook();

  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [userName, setUsername] = useState<string>("");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [profilePic, setProfilePic] = useState<File | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setProfilePic(file);
    }
  };

  const handleEditProfile = async () => {
    try {
      const formData = new FormData();
      formData.append("userName", userName);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("email", email);
      formData.append("phoneNumber", phoneNumber);

      if (profilePic) {
        formData.append("profilePic", profilePic);
      }

      const res = await API.put(
        `/users/profile/${currentUser?.user._id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${currentUser?.token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log("Success:", res.data);
    } catch (error) {
      console.error("Failed to update profile:", error);
    }
  };

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
          <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>

          <div className="flex gap-6">
            <div className="flex-1 space-y-4">
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block font-medium">Nama Depan</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama depan"
                    className="border rounded-md p-2 w-full"
                    onChange={(e) => setFirstName(e.target.value)}
                    value={firstName}
                  />
                </div>
                <div className="flex-1">
                  <label className="block font-medium">Nama Belakang</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama belakang"
                    className="border rounded-md p-2 w-full"
                    onChange={(e) => setLastName(e.target.value)}
                    value={lastName}
                  />
                </div>
              </div>

              <div>
                <label className="block font-medium">Username</label>
                <input
                  type="text"
                  placeholder="Username"
                  className="border rounded-md p-2 w-full"
                  onChange={(e) => setUsername(e.target.value)}
                  value={userName}
                />
              </div>

              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  placeholder="Email"
                  className="border rounded-md p-2 w-full"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                />
              </div>

              <div>
                <label className="block font-medium">No Handphone</label>
                <input
                  type="text"
                  placeholder="Nomor telepon"
                  className="border rounded-md p-2 w-full"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  value={phoneNumber}
                />
              </div>
            </div>

            <div className="relative w-[120px] h-[120px] rounded-full overflow-hidden self-start border">
              {profilePic && (
                <Image
                  src={URL.createObjectURL(profilePic)}
                  alt="Preview"
                  layout="fill"
                  objectFit="cover"
                />
              )}
              <input
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
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
            <button
              className="bg-orange-500 text-white px-6 py-2 rounded-md font-semibold"
              onClick={handleEditProfile}
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default EditProfileComponent;
