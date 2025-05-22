import Navbar from "@/app/components/components/Navbar/NavbarLandingPage";
import Footer from "../../components/Footer/Footer";
export default function LandingLayoutComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
