// import Image from "next/image";
// import Password from "../_Components/auth/Password";

// export default function Home() {
//   return (
//     <div className="w-screen h-screen flex pt-16 pr-16 pl-16 pb-16 ">
//       <div className="w-full flex gap-10 items-center">
//         <Password/>

//         <Image
//           className="w-[60%] h-full object-cover rounded-3xl"
//           src="/homepage/5d86e6a2488bb31d983ecd581caec983f3a32842 copy.jpg"
//           alt="food-delivery-homepage-image"
//           width={856}
//           height={2000}
//         />
//       </div>
//     </div>
//   );
// }
"use client";
import CreateAccount from "../_Components/auth/CreateAccount";
import Image from "next/image";
import { createContext, Dispatch, SetStateAction, useState } from "react";
import Password from "../_Components/auth/Password";
import { LoginHeader } from "../_Components/auth/LoginHeader";
import Login from "../_Components/auth/Login";
// import Login from "../_Components/auth/Login";
type StepContextType = {
  handleNext: () => void;
  handleBack: () => void;
  step: number;
  // setStep: Dispatch<SetStateAction<number>>;
  data: Data;
  setData: Dispatch<SetStateAction<Data>>;
};
export const StepContext = createContext<StepContextType>(
  {} as StepContextType
);
export type Data = {
  email: string;
  password: string;
  confirmPassword: string;
};
export default function Home() {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleNext = () => {
    setStep((prev) => Math.min(prev + 1, 2));
  };
  const handleBack = () => {
    setStep((prev) => Math.max(prev - 1, 1));
  };
  return (
    <StepContext.Provider
      value={{ step, data, handleNext, handleBack, setData }}
    >
      <div className="w-screen h-screen flex pt-16 pr-16 pl-16 pb-16 ">
        <div className="w-full flex gap-10 items-center">
          <Login />

          <Image
            className="w-[60%] h-full object-cover rounded-3xl"
            src="/homepage/5d86e6a2488bb31d983ecd581caec983f3a32842 copy.jpg"
            alt="food-delivery-homepage-image"
            width={856}
            height={2000}
          />
        </div>
      </div>
    </StepContext.Provider>
  );
}
