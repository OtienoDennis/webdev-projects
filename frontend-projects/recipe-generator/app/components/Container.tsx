import Button from './Button';

interface ButtonProps {
  fetchMeal: () => void;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  setDisplayFav: React.Dispatch<React.SetStateAction<boolean>>;
  updateFoods: () => void;
}

export const Container = ({
  fetchMeal,
  setCurrentIndex,
  currentIndex,
  setDisplayFav,
  updateFoods
}: ButtonProps) => {
  return (
    <div className='flex justify-between my-2 mx-4 sm:absolute sm:bottom-1 sm:right-20 sm:w-4/7'>
      <div className='flex gap-3'>
        <Button
          text='Back'
          onClick={() => setCurrentIndex((prev) => Math.max(prev - 1, 0))}
          disabled={currentIndex === 0}
        />
        <Button text='Favorites' onClick={() => setDisplayFav(true)} />
      </div>
      <div className='flex gap-3 text-2xl'>
        <button
          className='cursor-pointer hover:scale-[97%] transition-all active:scale-105'
          onClick={fetchMeal}>
          🗘
        </button>
        <button
          className='cursor-pointer hover:scale-[97%] transition-all active:scale-105'
          onClick={() => updateFoods()}>
          ♥️
        </button>
      </div>
    </div>
  );
};
