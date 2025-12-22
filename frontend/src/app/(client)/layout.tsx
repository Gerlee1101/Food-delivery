import { ClientFooter } from "./_Components/ClientFooter";
import { ClientHeader } from "./_Components/ClientHeader";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-gray-600 min-h-screen">
      <ClientHeader />
      {children}
      <ClientFooter />
    </div>
  );
}
