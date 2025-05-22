import Link from "next/link";
const SideBar: React.FC = () => {
  return (
    <main>
      <div className="flex flex-col border-r-2">
        <div className="px-12 py-6">
          <Link href="/dasboard">
            <h1 className="text-[2rem]">Profile</h1>
          </Link>
        </div>

        <Link href=""></Link>
        <div className="flex flex-col my-8 mx-20 gap-10">
          <Link href="/profile">
            <div className="flex gap-4">
              <h1 className="text-[2rem] font-bold">Profile</h1>
            </div>
          </Link>
          <Link href="/profile/edit-profile">
            <div className="flex gap-4">
              <h1 className="text-[2rem] font-bold">Edit Profile</h1>
            </div>
          </Link>
          <Link href="/landing-page">
            <div className="flex gap-4">
              <h1 className="text-[2rem] font-bold">Log out</h1>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default SideBar;
