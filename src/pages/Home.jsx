import React from 'react'
import card from '../../card'
import HomeCard from './HomeCard';


const Home = () => {
  return (
    <>
     <div className='w-[90vw] ml-20 px-20 h-[90vh] py-20 flex '>
      <div className="right w-1/2 ">
        <div className='p-20'>
          <h1 className="w-[20vw] text-5xl text-gray-600 font-semibold tracking-wid leading-15"><span className='text-blue-500 font-normal text-6xl'>it's</span> not just Food,it's an Experience.</h1>
          <div className="flex  mt-15 gap-10">
            <button className='bg-red-500 w-40 px-4 py-2 rounded-4xl text-white text-xl font-mono '>View Menu</button>
            <button className='bg-white rounded-4xl px-4 py-2 text-2xl font-mono w-25 hover:'>Book</button>
          </div>
        </div>
      </div>
    <div className="left w-1/2 h-full bg-gray-300 rounded-2xl " >
     <div className=" w-[20vw] h-[20vw] mt-20 ml-10 absolute ">
     <img 
     className=' relative w-full h-full object-cover top-15 right-20  rounded-full transition-transform duration-700 hover:rotate-360 '
     src="https://images.unsplash.com/photo-1611309454921-16cef3438ee0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTB8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     <img 
     className=' relative w-full h-full object-cover bottom-100 left-70  rounded-full transition-transform duration-700 hover:rotate-180 '
     src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGZvb2QlMjBwbGF0ZXxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     <img 
     className=' relative w-50 h-50 object-cover bottom-90 left-70   rounded-full transition-transform duration-700 hover:rotate-180 '
     src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D" alt="" />
     
     </div>
    </div>
    
    </div>
    <hr />
      <div className='grid grid-cols-5 gap-4 h-[40vh] w-[vw] ml-25 mt-10 mr-25'>
        {card.map(item => (
          <HomeCard key={item.id} title={item.title} image={item.image} />
        ))}
      </div>
    </>
   
  
  )
}

export default Home
