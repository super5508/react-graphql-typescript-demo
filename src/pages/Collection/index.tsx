import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router';
import { useTranslation } from 'react-i18next';

import { Alert, Box, CircularProgress } from '@mui/material';

import { useToast } from '../../hooks/useToast';
import { useCollectionByIdLazyQuery } from '../../generated/types';
import { ICollection } from '../../types';
import paths from '../../consts/paths';

const CollectionPage = () => {
  const [collection, setCollection] = useState<ICollection | null>(null);
  const { collectionId } = useParams<{ collectionId: string }>();
  const history = useHistory();
  const { toastComponent, makeToast } = useToast();
  const { t } = useTranslation(['translations']);

  const [fetchCollectionById, { loading }] = useCollectionByIdLazyQuery({
    onCompleted: ({ collectionById }) => {
      if (collectionById) {
        setCollection(collectionById as ICollection);
        makeToast(<span>{t('get_collection_success')}</span>);
      } else {
        history.push(paths.collections);
      }
    },
    onError: () => {
      history.push(paths.collections);
    },
  });

  useEffect(() => {
    if (!collectionId) {
      return;
    }

    fetchCollectionById({
      variables: {
        collectionId,
      },
    });
  }, [collectionId, fetchCollectionById]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex' }} justifyContent="center">
        <CircularProgress color="primary" />
      </Box>
    );
  }

  return (
    <>
      <Alert severity="info" role="contentinfo">
        {collection?.detail}
      </Alert>
      {toastComponent}
    </>
  );
};

export default CollectionPage;
