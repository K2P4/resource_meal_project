import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { AiFillYoutube } from "react-icons/ai";

const Search = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const api = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`
    );
    const { meals } = await api.json();
    setItems(meals);
    console.log(meals);
  };

  return (
    <div>
      <div className=" ">
        {items.map((item) => {
          return (
            <div className=" mt-5 w-[80%] mx-auto flex justify-center items-center  justify-center gap-5 ">
              <img
                src={item.strMealThumb}
                alt=""
                className="w-[50%] h-[500px] object-cover rounded shadow"
              />
              <div className=" ">
               <div className="flex gap-4 align-middle ">
               <h1 className="font-serif text-gray-800 bold mt-2 tracking-wide leading-5 ">
                  {item.strMeal}
                </h1>
                <a href={item.strMealThumb}>
                  <AiFillYoutube className=" text-4xl text-red-500" />
                </a>
               </div>

                <div className="flex items-center gap-3 align-middle justify-between">
                  <h1 className="font-serif text-gray-600 my-3 bold mt-2 tracking-wide leading-5 ">
                    {item.strArea}
                  </h1>

                  <h1 className="font-serif text-gray-600 my-3 bold mt-2 tracking-wide leading-5 ">
                    {item.strCategory}
                  </h1>
                </div>

                <p className="font-serif text-gray-500 text-justify  mt-2 tracking-wide leading-6">
                  {item.strInstructions}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      
    </div>
  );
};

export default Search;
