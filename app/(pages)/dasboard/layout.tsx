import DashboardLayoutsComponents from "@/app/components/pages/dasboard/layouts";
export default function DashboardLayouts({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <DashboardLayoutsComponents>{children}</DashboardLayoutsComponents>
    </>
  );
}
