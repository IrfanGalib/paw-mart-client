import React from "react";
import { Link } from "react-router-dom";
import { FaPaw, FaBone, FaShoppingBag, FaFirstAid } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

const categories = [
  {
    name: "Pets",
    icon: <FaPaw className="text-5xl" />,
  },
  {
    name: "Pet Food",
    icon: <FaBone className="text-5xl" />,
  },
  {
    name: "Accessories",
    icon: <FaShoppingBag className="text-5xl" />,
  },
  {
    name: "Pet Care Products",
    icon: <FaFirstAid className="text-5xl" />,
  },
];

const CategorySection = () => {
  return (
    <div className="max-w-7xl mx-auto mt-16 px-12">
      <h2 className="text-3xl font-bold text-[#002855] mb-8 text-center">
        Shop by{" "}
        <span className="text-blue-500">
          <Typewriter
            words={["Pets", "Pet Food", "Accessories", "Pet Care Products"]}
            loop={5}
            typeSpeed={250}
          />
        </span>
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => (
          <Link
            key={category.name}
            to={`/category-filtered-product/${category.name}`}
            className="p-8 border-2 border-dashed border-[#002855] rounded-xl flex flex-col items-center text-[#002855] hover:bg-[#002855] hover:text-white transition"
          >
            {category.icon}
            <h3 className="mt-4 text-xl font-semibold">{category.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategorySection;
