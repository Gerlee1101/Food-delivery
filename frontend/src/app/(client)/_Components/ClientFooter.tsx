import { Facebook } from "lucide-react";

export const ClientFooter = () => {
  return (
    <div className="w-screen h-188.75 bg-black relative">
      <div className="w-full absolute top-15 py-7 px-24.5  bg-red-500  text-white flex font-semibold text-[30px] gap-8">
        <p>Fresh fast delivered </p>
        <p>Fresh fast delivered </p>
        <p>Fresh fast delivered </p>
        <p>Fresh fast delivered </p>
        <p>Fresh fast delivered </p>
      </div>
      <div className="absolute top-57 left-22 flex gap-55">
        <div className="  flex flex-col items-center">
          <img
            src="/Screenshot 2024-12-17 at 18.02.18 1 (Traced).png"
            className="w-11.5"
            alt="logo"
          />

          <span className="text-white font-semibold text-[20px]">
            Nom<span className="text-red-500 ">Nom </span>
          </span>
          <p className="text-white font-normal text-[12px]">Swift delivery </p>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-gray-300">NOMNOM</h1>
          <p className="text-white">Home</p>
          <p className="text-white">Contact us</p>
          <p className="text-white">Delivery zone</p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="text-gray-300">MENU</h1>
          <p className="text-white">Appetizers</p>
          <p className="text-white">Salads</p>
          <p className="text-white">Pizzas</p>
          <p className="text-white">Main dishes</p>
          <p className="text-white">Desserts</p>
        </div>
        <div className="flex flex-col gap-5 ">
          <p className="text-white pt-11">Side dish </p>
          <p className="text-white">Brunch </p>
          <p className="text-white">Desserts </p>
          <p className="text-white">Beveragesh </p>
          <p className="text-white">Fish & Sea foods </p>
        </div>
        <div>
          <h1 className="text-gray-300">FOLLOW US</h1>
        </div>
      </div>
    </div>
  );
};
