import { MockedResponse } from '@apollo/client/testing';
import { FavoriteCollectionsDocument } from '../../generated/types';

export const params = {
  userId: 'test-user',
};

export const collections = () => {
  return [
    {
      detail: 'test-description1',
      id: 'test-id1',
      name: 'test-collection1',
    },
    {
      detail: 'test-description2',
      id: 'test-id2',
      name: 'test-collection2',
    },
    {
      detail: 'test-description3',
      id: 'test-id3',
      name: 'test-collection3',
    },
  ];
};

export const favoriteCollectionsMock = (): MockedResponse[] => [
  {
    request: { query: FavoriteCollectionsDocument, variables: params },
    result: { data: { favoriteCollections: collections() } },
  },
];
