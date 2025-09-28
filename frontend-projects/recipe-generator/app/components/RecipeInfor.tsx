import React from 'react';

// Define props for components (if needed)
interface RecipeInforProps {
  mealName: string;
  instructions: string;
  // ingredients: Record<string, string>;
  ingredients: string[];
}

export const RecipeInfor = ({
  mealName,
  instructions,
  ingredients,
}: RecipeInforProps) => {
  return (
    <div className='mt-2.5 mx-5 sm:bg-white p-2 sm:m-0 sm:h-full sm:w-2/3 sm:rounded-tr-xl sm:rounded-br-xl sm:pt-4 sm:pl-7 overflow-y-auto sm:pb-15'>
      <h1 className='font-extrabold text-2xl'>{mealName}</h1>
      <ul className='list-disc list-inside mx-2 grid grid-cols-2 gap-x-3'>
        {ingredients &&
          Object.values(ingredients).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <h2 className='font-bold sm:mt-3 sm:mb-2'>DIRECTIONS</h2>
      <ol className='list-disc list-inside mx-2'>
        {instructions && instructions
          .split('.')
          .map((step, index) =>
            step.trim() ? <li key={index}>{step.trim()}</li> : null
          )}
      </ol>
    </div>
  );
};
