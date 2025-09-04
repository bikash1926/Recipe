import React, { createContext, useEffect, useState } from "react";
export const recipecontext = createContext(null);

const RecipesContextes = (props) => {
  const [data, setdata] = useState([]);

  useEffect(()=>{
    setdata(JSON.parse(localStorage.getItem("recipe"))|| [])
  },[])

  return (
    <recipecontext.Provider value={{ data, setdata }}>
      {props.children}
    </recipecontext.Provider>
  );
};

export default RecipesContextes;
// // {
//       id: 1,
//       title: "Classic Margherita Pizza Tomato sauce Fresh mozzarella cheese ",
//       Ingr: "Pizza dough",
//       desc: "Preheat the oven to 475°F (245°C).Roll out the pizza dough and spread tomato sauce evenly.Top with slices of fresh mozzarella and fresh basil leaves.Drizzle with olive oil and season with salt and pepper",
//       image: "https://cdn.dummyjson.com/recipe-images/1.webp",
//       chef: "nalino",
//     },