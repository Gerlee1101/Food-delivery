import { AdminHeader } from "./_Components/AdminHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <AdminHeader />
      admin header
      {children}
    </div>
  );
}
