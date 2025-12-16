import { ChevronLeft } from "lucide-react";

export const LoginHeader = () => {
  return (
    <div className=" w-full bg-amber-300 flex flex-col justify-center">
      <div className="pl-30 flex flex-col gap-6">
        <div className="w-6 h-6 border border-gray-200 flex justify-center items-center rounded-[6px]">
          <ChevronLeft size={12} />
        </div>
        <div>
          <h3 className="font-semibold text-3xl">Create your account</h3>
          <p className="text-gray-400 text-[24px]">
            Sign up to explore your favorite dishes.
          </p>
        </div>
      </div>
    </div>
  );
};
