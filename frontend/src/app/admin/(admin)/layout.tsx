import { AdminHeader } from "./_Components/AdminHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-screen bg-red-200">
      <AdminHeader />
      admin header
      {children}
    </div>
  );
}
