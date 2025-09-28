import Image from 'next/image';

type ImageProps = {
  imageUrl: string;
  mealName: string;
};
const FoodImage = ({ imageUrl, mealName }: ImageProps) => {
  if (!imageUrl) return null
  return (
    <div className='w-full h-[40vh] relative sm:w-1/3 sm:m-0 sm:h-full'>
      <Image
        src={imageUrl}
        className='object-cover sm:rounded-tl-xl sm:rounded-bl-xl '
        fill
        alt={mealName}
      />
    </div>
  );
};

export default FoodImage;
