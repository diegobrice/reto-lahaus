export const getFavoriteListContent = (number) => {
  return number === 1 ? '1 propiedad guardada' : `${number} propiedades guardadas`;
};

export const getFormattedFavorites = (data) => {
  const favorites = data.data;
  const list = data.included;

  return favorites.map((favorite) => {
    const { real_estate_ids } = favorite.attributes;
    const real_estate_list = real_estate_ids.map((estate) => list.filter((item) => +item.id === +estate)[0]);
    return {
      ...favorite,
      real_estate_list,
    };
  });
};
