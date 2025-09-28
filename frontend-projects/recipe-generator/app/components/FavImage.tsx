import Image from 'next/image';

interface FavImageProps {
  imageUrl: string;
  foodName: string;
}

export default function FavImage({imageUrl, foodName} : FavImageProps) {
  return (
    <div className='flex items-center gap-3'>
      <Image
        src={imageUrl}
        alt={foodName}
        width={50}
        height={10}
        className='rounded-sm'
        style={{ width: '50px', height: '50px', objectFit: 'cover' }}
      />
      <p>{foodName}</p>
    </div>
  );
}
