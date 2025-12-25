// "use client";
"use client";
import { Button } from "@/components/ui/button";
import { LayoutDashboardIcon, TruckIcon } from "lucide-react";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
export const AdminHeader = () => {
  const router = useRouter();
  const pathname=usePathname();
const isMenu=pathname==="/admin"||pathname.startsWith("/admin/FoodMenu");
  const isOrder=pathname.startsWith("admin/Order");
console.log({isMenu,isOrder})
  return (
    <div className="p-10 bg-gray-200 min-h-screen">
      {/* Logo */}
      <div className="flex justify-center items-center pt-5 gap-2">
         <img
          src="/Screenshot 2024-12-17 at 18.02.18 1 (Traced).png"
          alt="NomNom logo"
          width={40}
          height={40}
        />
        <div>
          <span className="text-black font-semibold text-[20px]">
            Nom<span className="text-red-500">Nom</span>
          </span>
          <p className="text-black text-[12px]">Swift delivery</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-col gap-5 pt-16">
        <Button
          variant={isMenu ? "default" : "ghost"}
          className="rounded-full flex gap-2 justify-start"
          onClick={() => router.push("/admin/FoodMenu")}
        >
          <LayoutDashboardIcon size={18} />
          Food menu
        </Button>

        <Button
          variant={isOrder ? "default" : "ghost"}
          className="rounded-full flex gap-2 justify-start "
          onClick={() => router.push("admin/Order")}
        >
          <TruckIcon size={18} />
          Orders
        </Button>
      </div>

      {/* Content */}
      <div className="pt-10">
        {/* {activeTab === "menu" && <FoodMenu />}
        {activeTab === "orders" && <Orders />} */}
      </div>
    </div>
  );
};
