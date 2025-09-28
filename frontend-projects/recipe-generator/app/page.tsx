'use client';

import { useEffect, useState } from 'react';
import { Container } from './components/Container';
import Favorite from './components/Favorite';
import FoodImage from './components/FoodImage';
import { RecipeInfor } from './components/RecipeInfor';

// interface for the Meal Data
interface MealData {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredients: string[];
}

export default function Home() {
  // const [data, setData] = useState({});
  const [history, setHistory] = useState<MealData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayFav, setDisplayFav] = useState(false);

  const [favoriteFoods, setFavoriteFoods] = useState<MealData[]>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('favorites');
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  });

  const fetchMeal = async () => {
    try {
      const response = await fetch(
        'https://www.themealdb.com/api/json/v1/1/random.php'
      );
      const result = await response.json();
      const ingredients: string[] = [];
      for (let i = 1; i <= 20; i++) {
        const measure = result.meals[0][`strMeasure${i}`];
        const ingredient = result.meals[0][`strIngredient${i}`];
        if (ingredient && ingredient.trim() !== '') {
          ingredients.push(`${measure || ''} ${ingredient}`.trim());
        }
      }

      const newRecipe: MealData = {
        strMeal: result.meals[0].strMeal,
        strMealThumb: result.meals[0].strMealThumb,
        strInstructions: result.meals[0].strInstructions,
        strIngredients: ingredients,
      };

      // add recipe to history, remove forward history if user went back before fetching new
      setHistory((prev) => {
        const updated = [...prev.slice(0, currentIndex + 1), newRecipe];
        setCurrentIndex(updated.length - 1); // point to latest recipe
        return updated;
      });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchMeal();
  }, []);

  const currentRecipe = history[currentIndex];

  function updateFoods() {
    if (!currentRecipe) return;
    setFavoriteFoods((prev) => {
      const exists = prev.some(
        (meal) => meal.strMeal === currentRecipe.strMeal
      );
      if (exists) {
        return prev;
      }

      const updated = [...prev, currentRecipe];
      localStorage.setItem('favorites', JSON.stringify(updated));
      return updated;
    });
  }

  return (
    <div className='h-screen sm:bg-[#a4e0fc] w-screen sm:p-2 sm:flex items-center relative'>
      <div className='sm:w-3/4 sm:h-5/6 sm:flex mx-auto items-center justify-center rounded-2xl relative'>
        {currentRecipe && (
          <>
            <Container
              fetchMeal={fetchMeal}
              setCurrentIndex={setCurrentIndex}
              currentIndex={currentIndex}
              setDisplayFav={setDisplayFav}
              updateFoods={updateFoods}
            />
            <FoodImage
              imageUrl={currentRecipe.strMealThumb}
              mealName={currentRecipe.strMeal}
            />
            <RecipeInfor
              mealName={currentRecipe.strMeal}
              instructions={currentRecipe.strInstructions}
              ingredients={currentRecipe.strIngredients}
            />
          </>
        )}
        {displayFav && <Favorite setDisplayFav={setDisplayFav} />}
      </div>
    </div>
  );
}
