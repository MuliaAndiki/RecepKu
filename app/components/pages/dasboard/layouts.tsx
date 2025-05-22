import NavbarDasboard from "../../components/Navbar/NavbarDasboard";
import Footer from "../../components/Footer/Footer";
export default function DashboardLayoutsComponents({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <NavbarDasboard />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
