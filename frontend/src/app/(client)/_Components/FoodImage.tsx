import Image from "next/image";

type FoodImageProps = {
  //   backdrop_path: string;
  title: string;
  className: string;
  loading?: boolean;
  fill?: boolean;
};

export const FoodImage = ({
  //   backdrop_path,
  title,
  className,
  loading,
  fill,
}: FoodImageProps) => {
  return (
    <Image
      src="/appetizers/4ff51a14c041fc57196ebf52f07e524b5e4cc98c.png"
      //   width={400}
      //   height={340}
      alt={title}
      className={className}
      style={{ objectFit: "cover" }}
      fill
      loading="eager"
    />
  );
};
