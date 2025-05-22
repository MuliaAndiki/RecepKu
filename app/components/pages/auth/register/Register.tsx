"use client";
import { useState } from "react";
import Link from "next/link";
import SideTopLoginSvg from "@/app/components/svg/login/sideTop";
import FootRegisterSVG from "@/app/components/svg/register/foot";
import IconAppSvg from "@/app/components/ui/icon";
import KeySVG from "@/app/components/ui/key";
import API from "@/app/utils/API";
import { ModalProps } from "@/app/types/API";
import Modal from "@/app/components/components/Modal/Modal";
import { useRouter } from "next/navigation";

const RegisterComponent: React.FC = () => {
  const [userName, setUserName] = useState<string>();
  const [phoneNumber, setPhoneNumber] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPasword] = useState<string>();
  const [modalCall, setModalCall] = useState<ModalProps | null>();
  const [confirmPassword, setConfirmPassword] = useState<string>();
  const router = useRouter();

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setModalCall({
        title: "Password Dan ConfirmPassword Tidak Sesuai",
        icon: "error",
        deskripsi: "Mohon Isi Kembali Password",
        confirmButtonColor: "#FF7008",
        confirmButtonText: "Try Again",
      });
    }
    try {
      const res = await API.post(`/users/register`, {
        email,
        phoneNumber,
        userName,
        password,
      });
      setModalCall({
        title: "Selamat Anda Berhasil Melalikan Register",
        icon: "success",
        deskripsi: "Ayou Mulai Mencari Resep Favorite Mu DiRecepKu",
        confirmButtonColor: "#FF7008",
        confirmButtonText: "Lanjut",
        onClose: () => {
          setModalCall(null);
          router.push("/auth/login");
        },
      });
    } catch (error) {
      console.log("Gagal Register", error);
      setModalCall({
        title: "Anda Gagal Melakukan Register",
        icon: "error",
        deskripsi: "Try Again!",
        confirmButtonColor: "#FF7008",
        confirmButtonText: "Try Again!",
        onClose: () => {
          setModalCall(null);
        },
      });
    }
  };
  return (
    <main>
      {modalCall && <Modal {...modalCall} />}
      <div className="flex justify-center items-center h-[100vh] w-full relative">
        <div className="flex justify-around items-center w-full bg-[#ECE7D4] h-full ">
          <div className="absolute top-0 left-0">
            <Link href="/auth/login">
              <SideTopLoginSvg />
            </Link>
          </div>
          <div className="absolute right-30 bottom-0 z-3">
            <FootRegisterSVG />
          </div>
          <div className="absolute w-[5vw] h-[10vh] scale-[800%] bg-[#F6971F] rounded-full -top-0 -right-0 z-2"></div>
          <div className="absolute bg-[#644010] w-[30vw] h-[70vh] right-0 bottom-0 z-1 rounded-lg "></div>

          <div className="bg-white border-1 p-12 z-3 rounded-lg w-[25vw]">
            <div className="flex justify-center items-center flex-col border-b-1 p-2">
              <h1 className="font-bold text-[2.9rem] text-[#F48E28]">
                Register
              </h1>
              <div className="my-6">
                <IconAppSvg />
              </div>
            </div>
            <div className="mt-10 ">
              <div className=" rounded-lg mb-4 p-2 bg-[#FEEEC4]">
                <input
                  type="text"
                  className="outline-none p-1 w-full "
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className=" rounded-lg mt-4 p-2 bg-[#FEEEC4] ">
                <input
                  type="text"
                  className=" outline-none p-1 w-full"
                  placeholder="NomorHp"
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>

              <div className=" rounded-lg mt-4 p-2 bg-[#FEEEC4]">
                <input
                  type="text"
                  className=" outline-none p-1 w-full"
                  placeholder="Username"
                  onChange={(e) => setUserName(e.target.value)}
                />
              </div>

              <div className=" rounded-lg mt-4 p-2 bg-[#FEEEC4] flex items-center gap-2">
                <KeySVG />
                <input
                  type="text"
                  className=" outline-none p-1 w-full"
                  placeholder="Password"
                  onChange={(e) => setPasword(e.target.value)}
                />
              </div>

              <div className=" rounded-lg mt-4 p-2 bg-[#FEEEC4] flex items-center my-6 gap-2">
                <KeySVG />
                <input
                  type="text"
                  className=" outline-none p-1 w-full"
                  placeholder="Confirm Password"
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>

            <div className=" rounded-full bg-[#F68300] flex justify-center items-center p-2 hover:scale-[103%] z-3 duration-[0.3s]">
              <button
                className="text-black font-bold"
                onClick={() => handleRegister()}
              >
                Register
              </button>
            </div>
            <div className="flex justify-center items-center mt-2">
              <h1>
                Already have an account?
                <Link href="/auth/login">
                  <span className="text-[#F68300]">Sign In</span>
                </Link>
              </h1>
            </div>
          </div>
          <div className="flex justify-end items-end flex-col  z-3 ">
            <div></div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default RegisterComponent;
