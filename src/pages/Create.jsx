import React, { useContext } from 'react'
import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { recipecontext } from '../context/RecipesContextes';
import { useNavigate } from 'react-router-dom';


const Create = () => {

  const { data, setdata } = useContext(recipecontext)
  const { register, handleSubmit, reset } = useForm()
  const navigate = useNavigate();


  const SubmitHandler = (recipe) => {
    recipe.id = nanoid();
    const copydata = [...data]
    copydata.push(recipe)
    setdata(copydata);
    localStorage.setItem("recipe", JSON.stringify(copydata))
    reset();
    navigate("/Recipes")


  }
  return (

    <>
      <div className=" w-[20vw] h-[20vw] mt-20 ml-10 absolute ">
        <img
          className=' relative w-50 h-50 object-cover top-30 right-10  rounded-full transition-transform duration-700 hover:rotate-360 '
          src="https://images.unsplash.com/photo-1611309454921-16cef3438ee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img
          className=' relative w-50 h-50 object-cover bottom-[19rem] left-[25rem] rounded-full transition-transform duration-700 hover:rotate-180 '
          src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img
          className=' relative w-50 h-50 object-cover bottom-[10rem] left-[55rem] rounded-full '
          src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img
          className=' relative w-50 h-50 object-cover bottom-[15rem] left-[25rem] rounded-full '
          src="https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
        <img
          className=' relative w-50 h-50 object-cover bottom-[60rem] left-[75rem] rounded-full '
          src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        <img
          className=' relative w-50 h-50 object-cover bottom-[38rem] left-[78rem] rounded-full '
          src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        <img
          className=' relative w-20 h-20 object-cover top-[-68rem] left-[86rem] rounded-full '
          src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGZvb2R8ZW58MHx8MHx8fDA%3D" alt="" />
        <img
          className=' relative w-30 h-30 object-cover bottom-[80rem] left-[65rem] rounded-full '
          src="https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGFzdGF8ZW58MHx8MHx8fDA%3D" alt="" />
        <img
          className=' relative w-40 h-40 object-cover bottom-[95rem] left-[5rem] rounded-full'
          src="https://images.unsplash.com/photo-1516100882582-96c3a05fe590?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGFzdGF8ZW58MHx8MHx8fDA%3D" alt="" />

      </div>

      <form
        className= "backdrop-blur-lg shadow-xl rounded-2xl px-8 py-10 mt-10 w-[90%] max-w-lg mx-auto border border-white/20"
        onSubmit={handleSubmit(SubmitHandler)}
      >
        <h2 className="text-2xl font-semibold text-center mb-6 text-white">🍴 Add New Recipe</h2>

        <input
          className="block w-full p-3 mb-4 rounded-xl bg-white/20 
               text-white placeholder-gray-800 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("image")}
          placeholder="Enter image URL"
          type="url"
        />

        <input
          className="block w-full p-3 mb-4 rounded-xl bg-white/20 
               text-white placeholder-gray-800 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("title")}
          placeholder="Recipe Title"
          type="text"
        />

        <input
          className="block w-full p-3 mb-4 rounded-xl bg-white/20 
               text-white placeholder-gray-800 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("chef")}
          placeholder="Chef Name"
          type="text"
        />

        <textarea
          className="block w-full p-3 mb-4 rounded-xl bg-white/20 
               text-white placeholder-gray-800 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("desc")}
          placeholder="Start writing recipe description..."
          rows="4"
        />

        <textarea
          className="block w-full p-3 mb-4 rounded-xl bg-white/20 
               text-white placeholder-gray-800 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("Ingr")}
          placeholder="Write ingredients..."
          rows="3"
        />

        <select
          className="block w-full p-3 mb-6 rounded-xl bg-white/20 
               text-white placeholder-gray-800 
               focus:outline-none focus:ring-2 focus:ring-blue-400"
          {...register("cata")}
        >
          <option value="Breakfast" className="text-black">Breakfast</option>
          <option value="Lunch" className="text-black">Lunch</option>
          <option value="Supper" className="text-black">Supper</option>
          <option value="Dinner" className="text-black">Dinner</option>
        </select>

        <button
          className="w-full bg-gradient-to-r from-blue-500 to-purple-600 
               text-white font-semibold py-3 rounded-xl shadow-lg
               hover:from-purple-600 hover:to-blue-500 transition-all duration-300"
        >
          Submit
        </button>
      </form>
    </>
  )
}

export default Create
