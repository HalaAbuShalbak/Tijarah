import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const products = [
  {
    id: 1,
    name: "Earthen Bottle",
    price: "$48",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 2,
    name: "Nomad Tumbler",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 3,
    name: "Focus Paper Refill",
    price: "$89",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 4,
    name: "Machined Mechanical Pencil",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 5,
    name: "Earthen Bottle",
    price: "$48",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 6,
    name: "Nomad Tumbler",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 7,
    name: "Focus Paper Refill",
    price: "$89",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
  {
    id: 8,
    name: "Machined Mechanical Pencil",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-04.jpg",
    imageAlt:
      "Hand holding black machined steel mechanical pencil with brass tip and top.",
  },
  {
    id: 9,
    name: "Earthen Bottle",
    price: "$48",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-01.jpg",
    imageAlt:
      "Tall slender porcelain bottle with natural clay textured body and cork stopper.",
  },
  {
    id: 10,
    name: "Nomad Tumbler",
    price: "$35",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-02.jpg",
    imageAlt:
      "Olive drab green insulated bottle with flared screw lid and flat top.",
  },
  {
    id: 11,
    name: "Focus Paper Refill",
    price: "$89",
    imageSrc:
      "https://tailwindcss.com/plus-assets/img/ecommerce-images/category-page-04-image-card-03.jpg",
    imageAlt:
      "Person using a pen to cross a task off a productivity paper card.",
  },
];

const Products = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [item, setItem] = useState(null);
  const [currentColor, setCurrentColor] = useState(false);
  const bgColor = !currentColor ?"bg-blue-600"  :"bg-green-600" ;
  useEffect(() => {
    const selectedProduct = products.find(
      (product) => product.id === Number(id)
    );
    setItem(selectedProduct);
  }, [id]);

  if (!item)
    return <p className="text-center text-red-500 mt-10">Product Not Found</p>;

  return (
    <>
     <a
            href="/dashboard"
            className="rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-blue-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back to items
          </a>
   
    <div className="max-w-4xl mx-auto p-6 mt-10 bg-white shadow-md rounded-2xl flex flex-col md:flex-row gap-6">
      
      <img
        src={item.imageSrc}
        alt={item.imageAlt}
        className="w-full md:w-1/2 h-auto rounded-xl object-cover"
      />

      <div className="flex flex-col justify-between gap-4 md:w-1/2">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">{item.name}</h1>
          <p className="text-gray-600 mt-2">{item.imageAlt}</p>
          <p className="text-xl font-semibold text-green-600 mt-4">
            {item.price}
          </p>
        </div>

        <button
          className={`mt-6 px-6 py-3 ${bgColor} text-white rounded-xl hover:bg-blue-700 transition duration-200 w-full`}
          onClick={() => setCurrentColor(true)}
        >
       {!currentColor?"Add to cart":"Added to cart successfully"}
        </button>
      </div>
    </div> </>
  );
};

export default Products;
