import {
  MARKETPLACE_ADD_FAVORITE,
  MARKETPLACE_REMOVE_FAVORITE,
  MARKETPLACE_SET_COLLECTIONS,
  MARKETPLACE_SET_FAVORITES,
  MarketPlaceActionTypes,
} from '../types/marketplace';
import { ICollection } from '../../types';

/**
 * This is the action method for initializing collections data
 * @param collections collection arrays go here
 * @returns ActionTypes for MarketPlace Reducer
 */
export const setCollections = (collections: ICollection[]): MarketPlaceActionTypes => {
  return {
    type: MARKETPLACE_SET_COLLECTIONS,
    collections,
  };
};

/**
 * This is the action method for initializing favorites data
 * @param collections collection arrays go here
 * @returns ActionTypes for MarketPlace Reducer
 */
export const setFavorites = (collections: ICollection[]): MarketPlaceActionTypes => {
  return {
    type: MARKETPLACE_SET_FAVORITES,
    collections,
  };
};

/**
 * This is the action method for adding a collection into favorites
 * @param collection collection data goes here
 * @returns ActionTypes for MarketPlace Reducer
 */
export const addFavoriteCollection = (collection: ICollection): MarketPlaceActionTypes => {
  return {
    type: MARKETPLACE_ADD_FAVORITE,
    collection,
  };
};

/**
 * This is the action method for removing a collection from favorites
 * @param collection collection data goes here
 * @returns ActionTypes for MarketPlace Reducer
 */
export const removeFavoriteCollection = (collection: ICollection): MarketPlaceActionTypes => {
  return {
    type: MARKETPLACE_REMOVE_FAVORITE,
    collection,
  };
};
