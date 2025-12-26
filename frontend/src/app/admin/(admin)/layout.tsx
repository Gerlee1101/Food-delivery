import { AdminHeader } from "./_Components/AdminHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex min-h-screen">
      <AdminHeader />
      {children}
    </div>
  );
}
