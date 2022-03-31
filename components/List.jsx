import Image from 'next/image';
import Link from 'next/link';
import defaultRealEstateImage from '../public/images/empty.png';
import { getFavoriteListContent } from '../utils/formatter';

const List = ({ favoriteList }) => {
  const imagesList = favoriteList.real_estate_list.map((e) => e.attributes.gallery_urls[0]);
  const listName = favoriteList.attributes.name;
  const listDescription = getFavoriteListContent(imagesList.length);

  if (!imagesList.length) {
    imagesList.push(defaultRealEstateImage);
  }

  return (
    <Link href={`/favoritos/${favoriteList.id}`} passHref>
      <div className="list">
        <div className="list__image">
          <ListGallery imagesList={imagesList} />
        </div>
        <div className="list__content">
          <h2>{listName}</h2>
          <p>{listDescription}</p>
        </div>
      </div>
    </Link>
  );
};

const ListGallery = ({ imagesList }) => {
  const NUMBER_IMAGES_TO_SHOW = 2;
  const numberImages = imagesList.length;
  const numberAdditionalImages = numberImages - NUMBER_IMAGES_TO_SHOW;

  if (numberImages <= NUMBER_IMAGES_TO_SHOW)
    return (
      <>
        {imagesList.map((imageURL) => (
          <div key={imageURL}>
            <Image src={imageURL} layout="fill" objectFit="cover" objectPosition="bottom center" alt="" />
          </div>
        ))}
      </>
    );

  return (
    <>
      <div>
        <Image src={imagesList[0]} layout="fill" objectFit="cover" objectPosition="bottom center" alt="" />
      </div>
      <div>
        <Image src={imagesList[1]} layout="fill" objectFit="cover" objectPosition="bottom center" alt="" />
      </div>
      <div className="additional-images">
        <p>+{numberAdditionalImages}</p>
        <Image src={imagesList[2]} layout="fill" objectFit="cover" objectPosition="bottom center" alt="" />
      </div>
    </>
  );
};

export default List;
