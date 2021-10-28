import { MockedResponse } from '@apollo/client/testing';
import { CollectionByIdDocument } from '../../generated/types';

export const params = {
  collectionId: 'test-id',
};

export const collection = () => {
  return {
    id: 'test-id',
    name: 'test-name',
    detail: 'test description',
  };
};

export const mocks = (): MockedResponse[] => [
  {
    request: { query: CollectionByIdDocument, variables: params },
    result: { data: { collectionById: collection() } },
  },
];
