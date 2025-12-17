
import Image from "next/image";
import Password from "../_Components/auth/Password";


export default function Home() {
  return (
    <div className="w-screen h-screen flex pt-16 pr-16 pl-16 pb-16 ">
      <div className="w-full flex gap-10 items-center">
        <Password/>

        <Image
          className="w-[60%] h-full object-cover rounded-3xl"
          src="/homepage/5d86e6a2488bb31d983ecd581caec983f3a32842 copy.jpg"
          alt="food-delivery-homepage-image"
          width={856}
          height={2000}
        />
      </div>
    </div>
  );
}
