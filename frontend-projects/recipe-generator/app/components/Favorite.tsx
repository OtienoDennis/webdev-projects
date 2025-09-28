import { useEffect, useRef, useState } from 'react';
import Button from './Button';
import FavImage from './FavImage';

interface FavoriteProps {
  setDisplayFav: React.Dispatch<React.SetStateAction<boolean>>;
}

interface MealData {
  strMeal: string;
  strMealThumb: string;
  strInstructions: string;
  strIngredients: string[];
}

export default function Favorite({ setDisplayFav }: FavoriteProps) {
  const [favoriteList, setFavoriteList] = useState<MealData[]>([]);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('favorites');
      if (stored) {
        setFavoriteList(JSON.parse(stored));
      }
    } catch (error) {
      console.error('Error parsing favorites from localstorage:', error);
      setFavoriteList([]);
    }
  }, []);

   useEffect(() => {
     function handleClickOutside(event: MouseEvent) {
       if (
         modalRef.current &&
         !modalRef.current.contains(event.target as Node)
       ) {
         setDisplayFav(false);
       }
     }

     document.addEventListener('mousedown', handleClickOutside);
     return () => {
       document.removeEventListener('mousedown', handleClickOutside);
     };
   }, [setDisplayFav]);

  return (
    <div className='fixed inset-0 bg-black bg-black/70 flex items-start sm:items-center justify-center z-50  '>
      <div
        ref={modalRef}
        className='bg-white py-5 px-6 rounded-xl absolute left-1/2 -translate-x-1/2 sm:top-1/2 sm:-translate-y-1/2 top-13 w-5/6 sm:w-auto max-h-1/2 overflow-y-auto'>
        <h1 className='font-extrabold text-xl mb-2'>Favorites</h1>
        <div className='flex flex-col gap-3'>
          {favoriteList.length > 0 ? (
            favoriteList.map((item) => (
              <FavImage
                key={item.strMeal}
                imageUrl={item.strMealThumb}
                foodName={item.strMeal}
              />
            ))
          ) : (
            <p className='text-center text-2xl text-gray-700'>
              No favorites yet!
            </p>
          )}
        </div>
        <div className='text-center pt-7'>
          <Button text='CLOSE' onClick={() => setDisplayFav(false)} />
        </div>
      </div>
    </div>
  );
}
