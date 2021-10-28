import { MockedResponse } from '@apollo/client/testing';
import { CollectionTypesDocument, CollectionsDocument } from '../../generated/types';

export const consts = {
  type1: 'test-type1',
  type2: 'test-type2',
};

export const params = {
  type: consts.type1,
};

export const collections = (type: string) => {
  if (type === consts.type1) {
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
    ];
  }

  return [
    {
      detail: 'test-description3',
      id: 'test-id3',
      name: 'test-collection3',
    },
  ];
};

export const collectionTypes = () => {
  return [
    {
      id: 'test-type1',
      name: 'test1',
    },
    {
      id: 'test-type2',
      name: 'test2',
    },
  ];
};

export const collectionTypeMock = (): MockedResponse[] => [
  {
    request: { query: CollectionTypesDocument },
    result: { data: { collectionTypes: collectionTypes() } },
  },
];

export const collectionsByTypeMock = (): MockedResponse[] => [
  {
    request: {
      query: CollectionsDocument,
      variables: {
        type: consts.type1,
      },
    },
    result: { data: { collections: collections(consts.type1) } },
  },
  {
    request: {
      query: CollectionsDocument,
      variables: {
        type: consts.type2,
      },
    },
    result: { data: { collections: collections(consts.type2) } },
  },
];
