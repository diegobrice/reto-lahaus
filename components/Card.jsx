import Image from 'next/image';

const Card = ({ item }) => {
  const { attributes } = item;

  return (
    <div className="card">
      <div className="card__image">
        <Image src={attributes.gallery_urls[0]} alt={attributes.name} layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Card;
