import React from "react";
import { Link } from "react-router-dom";

const RecipesCard = (props) => {
  const { id, image, title, desc, Ingr, chef } = props.recipe;
  return (
    <Link
      to={`/recipes/detalis/${id}`}
      className="block w-70 bg-blue-200 rounded-xl shadow-md overflow-hidden mx-5 my-10
             hover:shadow-lg hover:-translate-y-1 transition-all duration-300 "
    >
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
        <small className="text-gray-500 block mb-1">{chef}</small>
        <p className="mt-2 text-sm text-gray-500">{Ingr}</p>
        <p className="mt-3 text-gray-600">
          {desc.slice(0, 100)}...
          <span className="text-blue-500 font-medium"> More</span>
        </p>
      </div>
    </Link>
  );
};

export default RecipesCard;
