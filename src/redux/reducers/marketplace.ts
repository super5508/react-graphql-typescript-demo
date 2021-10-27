import {
  MarketPlaceActionTypes,
  MarketPlaceState,
  MARKETPLACE_ADD_FAVORITE,
  MARKETPLACE_REMOVE_FAVORITE,
  MARKETPLACE_SET_COLLECTIONS,
  MARKETPLACE_SET_FAVORITES,
  defaultState,
} from '../types/marketplace';

export const marketplace = (
  state: MarketPlaceState = defaultState,
  action: MarketPlaceActionTypes,
): MarketPlaceState => {
  switch (action.type) {
    case MARKETPLACE_ADD_FAVORITE: {
      /**
       * Mutating favorites array from action payload
       */
      const { collection } = action;
      return {
        ...state,
        favorites: [...state.favorites, collection],
      };
    }
    case MARKETPLACE_REMOVE_FAVORITE: {
      /**
       * Mutating favorites array from action payload
       */
      const { collection } = action;
      return {
        ...state,
        favorites: state.favorites.filter((c) => c.id !== collection.id),
      };
    }
    case MARKETPLACE_SET_COLLECTIONS: {
      /**
       * Initializing collections array from action payload
       */
      const { collections } = action;
      return {
        ...state,
        collections,
      };
    }
    case MARKETPLACE_SET_FAVORITES: {
      /**
       * Initializing favorites array from action payload
       */
      const { collections } = action;
      return {
        ...state,
        favorites: collections,
      };
    }
    default: {
      return state;
    }
  }
};
