export type HeaderProps = {
  title: string;
  text: string;
};
export const LoginHeader = (props: HeaderProps) => {
  return (
    <div className=" w-full flex flex-col justify-center">
      <div className=" flex flex-col gap-6">
        <div>
          <h3 className="font-semibold text-3xl ">{props.title}</h3>
          <p className="text-gray-400 text-[24px]">{props.text}</p>
        </div>
      </div>
    </div>
  );
};
