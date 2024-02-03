import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {AiFillYoutube} from 'react-icons/ai'



const Detail = () => {

    const {id}= useParams();
    const [items,setItems] = useState({});

    useEffect(() => {
        fetchData();
    },[])

   

    const fetchData  = async () => {
        const api = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
        const {meals} = await api.json();
        setItems(meals[0]);
        console.log(meals[0]);

    }

  return (

    <div className=' flex align-middle items-center mx-auto w-[80%] h-screen gap-20 '>
      <img src={items.strMealThumb} alt="" className='h-[500px] object-cover rounded' />
        <div className="">
           <h2 className='text-2xl text-gray-500 font-serif mb-4 font-bold tracking-wide'>{items.strMeal}</h2>
           <h2 className=' text-gray-500 font-bold font-serif mb-3 tracking-wide'>{items.strArea}</h2>
           <h2 className=' text-gray-500 font-bold font-serif mb-2 tracking-wide'>{items.strCategory}</h2>
           <p className=' text-gray-500 font-bold font-serif text-justify mb-2 tracking-wide leading-7'>{items.strInstructions}</p>

            <a href={items.strYoutube} className='text-red-500 text-4xl' target={'_blank'}>
            <AiFillYoutube/>
            </a>

        </div>
    </div>
  )
}

export default Detail
