import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Collection = {
  __typename?: 'Collection';
  detail?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type CollectionType = {
  __typename?: 'CollectionType';
  id?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addFavoriteCollection?: Maybe<MutationResult>;
  removeFavoriteCollection?: Maybe<MutationResult>;
};


export type MutationAddFavoriteCollectionArgs = {
  collectionId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type MutationRemoveFavoriteCollectionArgs = {
  collectionId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};

export type MutationResult = {
  __typename?: 'MutationResult';
  success?: Maybe<Scalars['Boolean']>;
};

export type Query = {
  __typename?: 'Query';
  collectionById?: Maybe<Collection>;
  collectionTypes?: Maybe<Array<Maybe<CollectionType>>>;
  collections?: Maybe<Array<Maybe<Collection>>>;
  favoriteCollections?: Maybe<Array<Maybe<Collection>>>;
  user?: Maybe<User>;
};


export type QueryCollectionByIdArgs = {
  collectionId?: Maybe<Scalars['String']>;
};


export type QueryCollectionsArgs = {
  type?: Maybe<Scalars['String']>;
};


export type QueryFavoriteCollectionsArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  favoriteCollections?: Maybe<Array<Maybe<Scalars['String']>>>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
};

export type AddFavoriteCollectionMutationVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  collectionId?: Maybe<Scalars['String']>;
}>;


export type AddFavoriteCollectionMutation = { __typename?: 'Mutation', addFavoriteCollection?: { __typename?: 'MutationResult', success?: boolean | null | undefined } | null | undefined };

export type RemoveFavoriteCollectionMutationVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
  collectionId?: Maybe<Scalars['String']>;
}>;


export type RemoveFavoriteCollectionMutation = { __typename?: 'Mutation', removeFavoriteCollection?: { __typename?: 'MutationResult', success?: boolean | null | undefined } | null | undefined };

export type CollectionTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type CollectionTypesQuery = { __typename?: 'Query', collectionTypes?: Array<{ __typename?: 'CollectionType', id?: string | null | undefined, name?: string | null | undefined } | null | undefined> | null | undefined };

export type CollectionsQueryVariables = Exact<{
  type: Scalars['String'];
}>;


export type CollectionsQuery = { __typename?: 'Query', collections?: Array<{ __typename?: 'Collection', id?: string | null | undefined, name?: string | null | undefined, detail?: string | null | undefined } | null | undefined> | null | undefined };

export type FavoriteCollectionsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FavoriteCollectionsQuery = { __typename?: 'Query', favoriteCollections?: Array<{ __typename?: 'Collection', id?: string | null | undefined, name?: string | null | undefined, detail?: string | null | undefined } | null | undefined> | null | undefined };

export type CollectionByIdQueryVariables = Exact<{
  collectionId: Scalars['String'];
}>;


export type CollectionByIdQuery = { __typename?: 'Query', collectionById?: { __typename?: 'Collection', id?: string | null | undefined, name?: string | null | undefined, detail?: string | null | undefined } | null | undefined };


export const AddFavoriteCollectionDocument = gql`
    mutation addFavoriteCollection($userId: String, $collectionId: String) {
  addFavoriteCollection(userId: $userId, collectionId: $collectionId) {
    success
  }
}
    `;
export type AddFavoriteCollectionMutationFn = Apollo.MutationFunction<AddFavoriteCollectionMutation, AddFavoriteCollectionMutationVariables>;

/**
 * __useAddFavoriteCollectionMutation__
 *
 * To run a mutation, you first call `useAddFavoriteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useAddFavoriteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [addFavoriteCollectionMutation, { data, loading, error }] = useAddFavoriteCollectionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useAddFavoriteCollectionMutation(baseOptions?: Apollo.MutationHookOptions<AddFavoriteCollectionMutation, AddFavoriteCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<AddFavoriteCollectionMutation, AddFavoriteCollectionMutationVariables>(AddFavoriteCollectionDocument, options);
      }
export type AddFavoriteCollectionMutationHookResult = ReturnType<typeof useAddFavoriteCollectionMutation>;
export type AddFavoriteCollectionMutationResult = Apollo.MutationResult<AddFavoriteCollectionMutation>;
export type AddFavoriteCollectionMutationOptions = Apollo.BaseMutationOptions<AddFavoriteCollectionMutation, AddFavoriteCollectionMutationVariables>;
export const RemoveFavoriteCollectionDocument = gql`
    mutation removeFavoriteCollection($userId: String, $collectionId: String) {
  removeFavoriteCollection(userId: $userId, collectionId: $collectionId) {
    success
  }
}
    `;
export type RemoveFavoriteCollectionMutationFn = Apollo.MutationFunction<RemoveFavoriteCollectionMutation, RemoveFavoriteCollectionMutationVariables>;

/**
 * __useRemoveFavoriteCollectionMutation__
 *
 * To run a mutation, you first call `useRemoveFavoriteCollectionMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRemoveFavoriteCollectionMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [removeFavoriteCollectionMutation, { data, loading, error }] = useRemoveFavoriteCollectionMutation({
 *   variables: {
 *      userId: // value for 'userId'
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useRemoveFavoriteCollectionMutation(baseOptions?: Apollo.MutationHookOptions<RemoveFavoriteCollectionMutation, RemoveFavoriteCollectionMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RemoveFavoriteCollectionMutation, RemoveFavoriteCollectionMutationVariables>(RemoveFavoriteCollectionDocument, options);
      }
export type RemoveFavoriteCollectionMutationHookResult = ReturnType<typeof useRemoveFavoriteCollectionMutation>;
export type RemoveFavoriteCollectionMutationResult = Apollo.MutationResult<RemoveFavoriteCollectionMutation>;
export type RemoveFavoriteCollectionMutationOptions = Apollo.BaseMutationOptions<RemoveFavoriteCollectionMutation, RemoveFavoriteCollectionMutationVariables>;
export const CollectionTypesDocument = gql`
    query collectionTypes {
  collectionTypes {
    id
    name
  }
}
    `;

/**
 * __useCollectionTypesQuery__
 *
 * To run a query within a React component, call `useCollectionTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useCollectionTypesQuery(baseOptions?: Apollo.QueryHookOptions<CollectionTypesQuery, CollectionTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionTypesQuery, CollectionTypesQueryVariables>(CollectionTypesDocument, options);
      }
export function useCollectionTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionTypesQuery, CollectionTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionTypesQuery, CollectionTypesQueryVariables>(CollectionTypesDocument, options);
        }
export type CollectionTypesQueryHookResult = ReturnType<typeof useCollectionTypesQuery>;
export type CollectionTypesLazyQueryHookResult = ReturnType<typeof useCollectionTypesLazyQuery>;
export type CollectionTypesQueryResult = Apollo.QueryResult<CollectionTypesQuery, CollectionTypesQueryVariables>;
export const CollectionsDocument = gql`
    query collections($type: String!) {
  collections(type: $type) {
    id
    name
    detail
  }
}
    `;

/**
 * __useCollectionsQuery__
 *
 * To run a query within a React component, call `useCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionsQuery({
 *   variables: {
 *      type: // value for 'type'
 *   },
 * });
 */
export function useCollectionsQuery(baseOptions: Apollo.QueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
      }
export function useCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionsQuery, CollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionsQuery, CollectionsQueryVariables>(CollectionsDocument, options);
        }
export type CollectionsQueryHookResult = ReturnType<typeof useCollectionsQuery>;
export type CollectionsLazyQueryHookResult = ReturnType<typeof useCollectionsLazyQuery>;
export type CollectionsQueryResult = Apollo.QueryResult<CollectionsQuery, CollectionsQueryVariables>;
export const FavoriteCollectionsDocument = gql`
    query favoriteCollections($userId: String!) {
  favoriteCollections(userId: $userId) {
    id
    name
    detail
  }
}
    `;

/**
 * __useFavoriteCollectionsQuery__
 *
 * To run a query within a React component, call `useFavoriteCollectionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useFavoriteCollectionsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFavoriteCollectionsQuery({
 *   variables: {
 *      userId: // value for 'userId'
 *   },
 * });
 */
export function useFavoriteCollectionsQuery(baseOptions: Apollo.QueryHookOptions<FavoriteCollectionsQuery, FavoriteCollectionsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FavoriteCollectionsQuery, FavoriteCollectionsQueryVariables>(FavoriteCollectionsDocument, options);
      }
export function useFavoriteCollectionsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FavoriteCollectionsQuery, FavoriteCollectionsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FavoriteCollectionsQuery, FavoriteCollectionsQueryVariables>(FavoriteCollectionsDocument, options);
        }
export type FavoriteCollectionsQueryHookResult = ReturnType<typeof useFavoriteCollectionsQuery>;
export type FavoriteCollectionsLazyQueryHookResult = ReturnType<typeof useFavoriteCollectionsLazyQuery>;
export type FavoriteCollectionsQueryResult = Apollo.QueryResult<FavoriteCollectionsQuery, FavoriteCollectionsQueryVariables>;
export const CollectionByIdDocument = gql`
    query collectionById($collectionId: String!) {
  collectionById(collectionId: $collectionId) {
    id
    name
    detail
  }
}
    `;

/**
 * __useCollectionByIdQuery__
 *
 * To run a query within a React component, call `useCollectionByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useCollectionByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCollectionByIdQuery({
 *   variables: {
 *      collectionId: // value for 'collectionId'
 *   },
 * });
 */
export function useCollectionByIdQuery(baseOptions: Apollo.QueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
      }
export function useCollectionByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CollectionByIdQuery, CollectionByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CollectionByIdQuery, CollectionByIdQueryVariables>(CollectionByIdDocument, options);
        }
export type CollectionByIdQueryHookResult = ReturnType<typeof useCollectionByIdQuery>;
export type CollectionByIdLazyQueryHookResult = ReturnType<typeof useCollectionByIdLazyQuery>;
export type CollectionByIdQueryResult = Apollo.QueryResult<CollectionByIdQuery, CollectionByIdQueryVariables>;