/**
 * All page paths used in Routing system goes here
 */
const pagePaths = {
  collections: '/collections',
  favorites: '/favorites',
  collection: '/collection',
  collectionById: (collectionId: string) => `/collection/${collectionId}`,
};

export default pagePaths;
