import React from 'react'
import card from '../../card'

const HomeCard = ({ title, image }) => {
  return (
  <div className="bg-white rounded-2xl shadow-lg  shadow-black ">
      <img 
        src={image} 
        alt={title} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4 text-center">
        <h2 className="text-xl font-bold text-blue-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-900">
          This is a short description about {title}.
        </p>
        <div className="mt-2 bg-gray-700 h-[45px] rounded-2xl flex items-center justify-center gap-6">
             <i class="ri-star-line bg-amber-50 rounded-[50%] h-8 w-8 py-1"></i>
            <p className="text-white py-1 ">See complete Recipe</p>
        </div>
      </div>
    </div>
)}

export default HomeCard
