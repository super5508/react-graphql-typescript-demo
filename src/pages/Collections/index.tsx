import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Theme,
  IconButton,
  Box,
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  CircularProgress,
} from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector, useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { useCallback, useState, useEffect } from 'react';

import {
  useCollectionTypesQuery,
  useCollectionsLazyQuery,
  useAddFavoriteCollectionMutation,
  useRemoveFavoriteCollectionMutation,
} from '../../generated/types';

import { useToast } from '../../hooks/useToast';
import { ICollection, ICollectionType } from '../../types';
import { RootState } from '../../redux';
import { addFavoriteCollection, removeFavoriteCollection } from '../../redux/actions/marketplace';
import { DEFAULT_USER_ID } from '../../consts/consts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableHead: {
      backgroundColor: theme.palette.primary.main,
    },
    collectionTypeSelect: {
      marginBottom: theme.spacing(3),
    },
    tableLoader: {
      display: 'flex',
      height: theme.spacing(8),
    },
  }),
);

const CollectionsPage = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { favorites } = useSelector((r: RootState) => r.marketplace);
  const [collectionTypes, setCollectionTypes] = useState<ICollectionType[]>([]);
  const [selectedId, setSelectedId] = useState('');
  const [rows, setRows] = useState<ICollection[]>([]);
  const { toastComponent, burnToast, makeToast } = useToast();
  const { t } = useTranslation('translations');

  const { loading: typeLoading } = useCollectionTypesQuery({
    onCompleted: ({ collectionTypes }) => {
      setCollectionTypes(collectionTypes as ICollectionType[]);
    },
    onError: () => {
      burnToast(<Box component="span">{t('api_error')}</Box>);
    },
  });

  const [fetchCollectionByType, { loading: collectionLoading }] = useCollectionsLazyQuery({
    variables: {
      type: selectedId,
    },
    onCompleted: ({ collections }) => {
      setRows(collections as ICollection[]);
      makeToast(<Box component="span">{t('collections_success')}</Box>);
    },
    onError: () => {
      burnToast(<Box component="span">{t('api_error')}</Box>);
    },
  });

  const [fetchAddFavorite] = useAddFavoriteCollectionMutation({
    onCompleted: (data) => {
      if (data.addFavoriteCollection?.success) {
        makeToast(<Box component="span">{t('add_favorite_success')}</Box>);
      } else {
        burnToast(<Box component="span">{t('api_error')}</Box>);
      }
    },
  });

  const [fetchRemoveFavorite] = useRemoveFavoriteCollectionMutation({
    onCompleted: (data) => {
      if (data.removeFavoriteCollection?.success) {
        makeToast(<Box component="span">{t('remove_favorite_success')}</Box>);
      } else {
        burnToast(<Box component="span">{t('api_error')}</Box>);
      }
    },
  });

  const isFavoriteCollection = useCallback(
    (collection: ICollection) => {
      return !!favorites.find((c) => c.id === collection.id);
    },
    [favorites],
  );

  const toggleFavoriteCollection = useCallback(
    async (collection: ICollection) => {
      if (!favorites.find((c) => c.id === collection.id)) {
        fetchAddFavorite({
          variables: {
            userId: DEFAULT_USER_ID,
            collectionId: collection.id,
          },
        }).then(() => {
          dispatch(addFavoriteCollection(collection));
        });
      } else {
        fetchRemoveFavorite({
          variables: {
            userId: DEFAULT_USER_ID,
            collectionId: collection.id,
          },
        }).then(() => {
          dispatch(removeFavoriteCollection(collection));
        });
      }
    },
    [fetchAddFavorite, fetchRemoveFavorite, favorites, dispatch],
  );

  useEffect(() => {
    if (!collectionTypes.length) {
      return;
    }

    setSelectedId(collectionTypes[0].id);
  }, [collectionTypes, setSelectedId]);

  useEffect(() => {
    if (!selectedId) {
      return;
    }

    fetchCollectionByType();
  }, [selectedId, fetchCollectionByType]);

  return (
    <>
      <Box className={classes.collectionTypeSelect}>
        <FormControl fullWidth>
          <InputLabel>Collection Type</InputLabel>
          <Select
            value={selectedId}
            label="Collection Type"
            onChange={(e) => setSelectedId(e.target.value)}
            size="small"
            disabled={typeLoading}
            data-testid="collections-toggle"
          >
            {collectionTypes.map((collectionType) => (
              <MenuItem
                key={collectionType.id}
                value={collectionType.id}
                data-testid="collection-type"
              >
                {collectionType.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell sx={{ color: 'white' }} align="left">
                Title
              </TableCell>
              <TableCell sx={{ color: 'white' }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {collectionLoading || typeLoading ? (
              <TableRow>
                <TableCell component="th" scope="row" colSpan={2}>
                  <Box justifyContent="center" alignItems="center" className={classes.tableLoader}>
                    <CircularProgress color="primary" />
                  </Box>
                </TableCell>
              </TableRow>
            ) : (
              rows.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  data-testid="collection-row"
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="left">
                    <IconButton
                      color={isFavoriteCollection(row) ? 'secondary' : 'default'}
                      onClick={() => toggleFavoriteCollection(row)}
                    >
                      <FavoriteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {toastComponent}
    </>
  );
};

export default CollectionsPage;
