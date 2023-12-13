import SidebarNav from "@/components/SidebarNav";

export default function ComponentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-screen-xl p-10">
      <div className="max-w-prose">
        {children}
      </div>
    </div>
  );
}
