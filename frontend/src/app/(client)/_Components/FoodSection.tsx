import { FoodCard } from "./FoodCard";

export const foods = [
  {
    id: 1,
    title: "Burger",
    price: 12000,
    name: "Cheese Burger",
    product_description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/4ff51a14c041fc57196ebf52f07e524b5e4cc98c.png",
  },
  {
    id: 2,
    title: "Pizza",
    price: 18000,
    name: "Pepperoni",
    product_description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/4ff51a14c041fc57196ebf52f07e524b5e4cc98c.png",
  },
  {
    id: 3,
    title: "Burger",
    price: 12000,
    name: "Cheese Burger",
    product_description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/4ff51a14c041fc57196ebf52f07e524b5e4cc98c.png",
  },
  {
    id: 4,
    title: "Pizza",
    price: 18000,
    name: "Pepperoni",
    product_description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image:
      "/20240831035110-andy-20cooks-20-20juicy-20beef-20burger-20recipe.webp",
  },
  {
    id: 5,
    title: "Burger",
    price: 12000,
    name: "Cheese Burger",
    product_description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/Pepperoni-Pizza-1-500x500.jpg",
  },
  {
    id: 6,
    title: "Pizza",
    price: 18000,
    name: "Pepperoni",
    product_description:
      "Fluffy pancakes stacked with fruits, cream, syrup, and powdered sugar.",
    image: "/SambalFriedChickenBurger1.webp",
  },
];
export const FoodSection = () => {
  return (
    <>
      <div className="w-screen pl-22 pr-22 pt-12 pb-22">
        <h4 className="font-semibold text-[30px] pb-8">Appetizers</h4>
        <div className=" w-full grid grid-cols-3 gap-10 ">
          {foods.map((el) => {
            return (
              <FoodCard
                title={el.title}
                price={el.price}
                id={el.id}
                image={el.image}
                product_description={el.product_description}
                name={el.name}
                key={el.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
