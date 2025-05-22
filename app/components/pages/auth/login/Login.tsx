"use client";
import { useState } from "react";
import Link from "next/link";
import SideTopLoginSvg from "@/app/components/svg/login/sideTop";
import FootLoginSVG from "@/app/components/svg/login/foot";
import SideFoot from "@/app/components/svg/login/sidefoot";
import IconAppSvg from "@/app/components/ui/icon";
import API from "@/app/utils/API";
import Modal from "@/app/components/components/Modal/Modal";
import { useHook } from "@/app/hooks/kontex";
import { ModalProps } from "@/app/types/API";
import { useRouter } from "next/navigation";
import { UserTypes } from "@/app/types/API";
const LoginComponent: React.FC = () => {
  const [login, setLogin] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [modalCall, setModalCall] = useState<ModalProps | null>();
  const { setCurrentUser } = useHook();
  const router = useRouter();

  const handleLogin = async () => {
    try {
      const res = await API.post("/users/login", { login, password });
      const userPayload: UserTypes = {
        token: res.data.token,
        user: res.data.data,
      };
      setCurrentUser(userPayload);
      setModalCall({
        title: "Selamat Datang DiRecep Ku",
        icon: "success",
        deskripsi: "Ayo Cari Resep Favorite Mu disini",
        confirmButtonColor: "#FF7008",
        confirmButtonText: "Lanjut",
        onClose: () => {
          setModalCall(null);
          router.push("/dasboard");
        },
      });
    } catch (error) {
      console.log("Gagal Login", error);
      setModalCall({
        title: "Password Atau Email Anda Salah",
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
      <div className="flex justify-center items-center h-[100vh] w-full">
        <div className="flex justify-around items-center w-full bg-[#ECE7D4] h-full">
          <div className="absolute top-0 left-0">
            <Link href="/landing-page">
              <SideTopLoginSvg />
            </Link>
          </div>
          <div className="absolute top-0 right-0 z-1">
            <FootLoginSVG />
          </div>

          <div className="absolute bg-[#644010] w-[30vw] h-[70vh] inset-x-0 bottom-0 z-1 rounded-lg"></div>
          <div className="z-2 flex h-[45vw] items-end ">
            <SideFoot />
          </div>
          <div className="flex justify-center items-center flex-col gap-2 z-2">
            <div className="bg-white border-1 p-12 rounded-lg">
              <div className="flex justify-center items-center flex-col border-b-2 p-4">
                <h1 className="font-bold text-[3rem] text-[#F48E28]">
                  Recep-Ku
                </h1>
                <IconAppSvg />
              </div>
              <div className="my-10">
                <div className="border-2 rounded-lg mb-2">
                  <input
                    type="text"
                    className="outline-none p-1"
                    placeholder="Email/Username"
                    onChange={(e) => setLogin(e.target.value)}
                  />
                </div>
                <div className="border-2 rounded-lg mt-2">
                  <input
                    type="text"
                    className=" outline-none p-1"
                    placeholder="Password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="flex justify-end">
                  <span className="text-end">Forgot Password</span>
                </div>
              </div>

              <div className="border-2 rounded-full bg-[#F68300] flex justify-center items-center p-2 hover:scale-103 duration-[0.3s]">
                <button
                  className="text-black font-bold"
                  onClick={() => handleLogin()}
                >
                  Login
                </button>
              </div>

              <div className="flex justify-center items-center mt-2 ">
                <h1>
                  Don’t have account?
                  <Link href="/auth/register">
                    <span className="text-[#F68300]">Sign Up</span>
                  </Link>
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default LoginComponent;
