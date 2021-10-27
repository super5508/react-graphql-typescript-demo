import { ICollection } from '../../types';

/**
 * Here are the constants for identifying action types dispatched from UI side
 */
export const MARKETPLACE_SET_COLLECTIONS = 'MARKETPLACE_SET_COLLECTIONS';
export const MARKETPLACE_SET_FAVORITES = 'MARKETPLACE_SET_FAVORITES';
export const MARKETPLACE_ADD_FAVORITE = 'MARKETPLACE_ADD_FAVORITE';
export const MARKETPLACE_REMOVE_FAVORITE = 'MARKETPLACE_REMOVE_FAVORITE';

/**
 * ActionTypes are defined below
 */
interface SetCollectionsAction {
  type: typeof MARKETPLACE_SET_COLLECTIONS;
  collections: ICollection[];
}

interface SetFavoritesAction {
  type: typeof MARKETPLACE_SET_FAVORITES;
  collections: ICollection[];
}

interface AddFavoriteCollectionAction {
  type: typeof MARKETPLACE_ADD_FAVORITE;
  collection: ICollection;
}

interface RemoveFavoriteCollectionAction {
  type: typeof MARKETPLACE_REMOVE_FAVORITE;
  collection: ICollection;
}

export type MarketPlaceActionTypes =
  | SetCollectionsAction
  | AddFavoriteCollectionAction
  | RemoveFavoriteCollectionAction
  | SetFavoritesAction;

/**
 * Type definition for marketplace state
 */
export interface MarketPlaceState {
  collections: ICollection[];
  favorites: ICollection[];
}

export const defaultState: MarketPlaceState = {
  collections: [],
  favorites: [],
};
