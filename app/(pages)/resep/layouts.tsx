import Layout from "@/app/components/pages/resep/layouts";
export default function DashboardLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
}
