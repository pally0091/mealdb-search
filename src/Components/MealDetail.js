import React from 'react';
import { useLoaderData } from 'react-router-dom';

const MealDetail = () => {
    
    const data = useLoaderData();
    const detail = (data.meals[0])
    console.log(data.meals)
    
    return (
        <div className='mt-32 w-3/5 text-center mx-auto border-4 border-double border-black p-6 rounded-xl'>
            <h1 className='text-2xl font-bold text-right'>Name: {detail.strMeal}</h1>
            <p className='text-lg text-right mt-3'>Area : {detail.strArea}</p>
            <img className='w-full rounded-xl' src={detail.strMealThumb} alt='thumb'></img>
            <p className='py-2 text-2xl font-semibold border-2 border-black rounded-lg mt-4'>Instruction to make</p>
            <p className='text-lg font-semibold text-justify mt-4'>{detail.strInstructions}</p>
            <p className='text-left border-2 px-3 py-1 rounded-3xl w-36'>Tag : {detail.strTags}</p>
        </div>
    );
};

export default MealDetail;