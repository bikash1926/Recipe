import React, { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { recipecontext } from "../context/RecipesContextes";
import { useForm } from "react-hook-form";

const RecipesDetiles = () => {
  const navigate = useNavigate();
  const { data, setdata } = useContext(recipecontext);
  const parm = useParams();
  const rec = data.find((recipe) => parm.id == recipe.id);
  console.log("parm", parm);

  console.log("re", rec);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      title: rec?.title,
      chef: rec?.chef,
      image: rec?.image,
      desc: rec?.dec,
    },
  });
  const SubmitHandler = (recipe) => {
    const index = data.findIndex((recipe) => parm.id == recipe.id);
    console.log("index", index);
    const copydata = [...data];
    copydata[index] = { ...copydata[index], ...recipe };
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata));
  };

  const [favorite, setFavorite] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("fav")) || [];
    } catch {
      return [];
    }
  });
  const DeleteHandler = () => {
    const filterdata = data.filter((r) => r.id != parm.id);
    setdata(filterdata);
    localStorage.setItem("recipe", JSON.stringify(filterdata));
    const favd = favorite.filter((e) => e.id !== parm.id);
    setFavorite(favd);
    localStorage.setItem("fav", JSON.stringify(favd));
    navigate("/recipes");
  };

  const FavHandler = () => {
    const copyfav = [...favorite];
    copyfav.push(rec);
    setFavorite(copyfav);
    localStorage.setItem("fav", JSON.stringify(copyfav));
  };

  const UnFavHandler = () => {
    const updated = favorite.filter((item) => item.id !== rec.id); // remove recipe
    setFavorite(updated);
    localStorage.setItem("fav", JSON.stringify(updated));
  };

  return (
   <div className="mx-auto my-10 max-w-6xl h-[85vh] flex flex-col lg:flex-row gap-8 px-6">
  {/* Left: Recipe Preview */}
  <div className="relative w-full lg:w-1/2 h-full">
    {/* Favorite Heart */}
    {favorite.find((item) => item.id === rec?.id) ? (
      <i
        onClick={UnFavHandler}
        className="absolute top-5 right-5 text-3xl text-red-500 ri-heart-fill cursor-pointer hover:scale-110 transition-transform"
      ></i>
    ) : (
      <i
        onClick={FavHandler}
        className="absolute top-5 right-5 text-3xl text-gray-400 ri-heart-line cursor-pointer hover:text-red-500 hover:scale-110 transition-all"
      ></i>
    )}

    {/* Recipe Card */}
    <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-2xl shadow-lg overflow-hidden h-full flex flex-col">
      <img
        className="w-full h-64 object-cover"
        src={rec?.image}
        alt={rec?.title}
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <h5 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            {rec?.title}
          </h5>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-4">
            👨‍🍳 {rec?.chef}
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            {rec?.desc}
          </p>
        </div>
      </div>
    </div>
  </div>

  {/* Right: Edit Form */}
  <div className="w-full lg:w-1/2 bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8 overflow-y-auto">
    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
       Edit Recipe
    </h2>
    <form className="space-y-6" onSubmit={handleSubmit(SubmitHandler)}>
  
      <div className="relative">
        <input
          type="url"
          id="image"
          {...register("image")}
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-0 dark:text-white dark:border-gray-600 outline-none"
          placeholder="Image URL"
          required
        />
        <label
          htmlFor="image"
          className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Image URL
        </label>
      </div>

      {/* Title */}
      <div className="relative">
        <input
          type="text"
          id="title"
          {...register("title")}
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-0 dark:text-white dark:border-gray-600 outline-none"
          placeholder="Title"
          required
        />
        <label
          htmlFor="title"
          className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Recipe Title
        </label>
      </div>


      <div className="relative">
        <input
          type="text"
          id="chef"
          {...register("chef")}
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-0 dark:text-white dark:border-gray-600 outline-none"
          placeholder="Chef Name"
          required
        />
        <label
          htmlFor="chef"
          className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500 "
        >
          Chef Name
        </label>
      </div>


      <div className="relative">
        <textarea
          id="desc"
          {...register("desc")}
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-0 dark:text-white dark:border-gray-600 outline-none"
          placeholder="Description"
          rows="3"
          required
        />
        <label
          htmlFor="desc"
          className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500"
        >
          Description
        </label>
      </div>

      {/* Ingredients */}
      <div className="relative">
        <textarea
          id="Ingr"
          {...register("Ingr")}
          className="peer w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-gray-900 placeholder-transparent focus:border-blue-500 focus:ring-0 dark:text-white dark:border-gray-600 outline-none"
          placeholder="Ingredients"
          rows="3"
          required
        />
        <label
          htmlFor="Ingr"
          className="absolute left-1 -top-3.5 text-sm text-gray-500 transition-all peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-focus:-top-3.5 peer-focus:text-sm peer-focus:text-blue-500 "
        >
          Ingredients
        </label>
      </div>

     
      <div className="relative">
        <select
          id="cata"
          {...register("cata")}
          className="w-full border-b-2 border-gray-300 bg-transparent py-2 px-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-0  dark:border-gray-600 outline-none"
          
        >
          <option value="Breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="Supper">Supper</option>
          <option value="Dinner">Dinner</option>
        </select>
        <label
          htmlFor="cata"
          className="absolute left-1 -top-3.5 text-sm text-gray-500"
        >
          Category
        </label>
      </div>

      
      <div className="flex gap-4 pt-4">
        <button
          type="submit"
          className="flex-1 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
         Update
        </button>
        <button
          type="button"
          onClick={DeleteHandler}
          className="flex-1 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
           Delete
        </button>
      </div>
    </form>
  </div>
</div>

  );
};

export default RecipesDetiles;
