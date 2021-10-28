import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Theme,
  Collapse,
  Box,
  Button,
} from '@mui/material';
import { KeyboardArrowUp as IconUp, KeyboardArrowDown as IconDown } from '@mui/icons-material';
import { makeStyles, createStyles } from '@mui/styles';
import { useState, useCallback, Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import { useRemoveFavoriteCollectionMutation } from '../../generated/types';

import { removeFavoriteCollection } from '../../redux/actions/marketplace';
import { RootState } from '../../redux';
import { useToast } from '../../hooks/useToast';
import { ICollection } from '../../types';
import paths from '../../consts/paths';
import { DEFAULT_USER_ID } from '../../consts/consts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableHead: {
      backgroundColor: theme.palette.primary.main,
    },
    collectionDetail: {
      display: 'flex',
    },
  }),
);

const CollectionsPage = () => {
  const classes = useStyles();
  const { favorites } = useSelector((r: RootState) => r.marketplace);
  const [openIds, setOpenIds] = useState<string[]>([]);
  const { t } = useTranslation(['words', 'translations']);
  const history = useHistory();
  const { burnToast, makeToast, toastComponent } = useToast();
  const dispatch = useDispatch();

  const toggleRows = useCallback(
    (collectionId: string) => {
      setOpenIds((prevOpenIds) => {
        if (prevOpenIds.includes(collectionId)) {
          return prevOpenIds.filter((cId) => cId !== collectionId);
        }
        return [...prevOpenIds, collectionId];
      });
    },
    [setOpenIds],
  );

  const [fetchRemoveFavorite] = useRemoveFavoriteCollectionMutation({
    onCompleted: (data) => {
      if (data.removeFavoriteCollection?.success) {
        makeToast(<Box component="span">{t('translations:remove_favorite_success')}</Box>);
      } else {
        burnToast(<Box component="span">{t('translations:api_error')}</Box>);
      }
    },
  });

  const onViewedDetail = useCallback(
    (collection: ICollection) => {
      history.push(paths.collectionById(collection.id));
    },
    [history],
  );

  const onRemoveFavorite = useCallback(
    (collection: ICollection) => {
      fetchRemoveFavorite({
        variables: {
          userId: DEFAULT_USER_ID,
          collectionId: collection.id,
        },
      }).then(() => {
        dispatch(removeFavoriteCollection(collection));
      });
    },
    [dispatch, fetchRemoveFavorite],
  );

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead className={classes.tableHead}>
            <TableRow>
              <TableCell sx={{ color: 'white' }} align="left">
                Title
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {favorites.map((row) => (
              <Fragment key={row.id}>
                <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                  <TableCell
                    component="th"
                    scope="row"
                    onClick={() => toggleRows(row.id)}
                    data-testid="favorite-collection"
                  >
                    <Box display="flex" alignItems="center" justifyContent="space-between">
                      <span>{row.name}</span>
                      {openIds.includes(row.id) ? <IconUp /> : <IconDown />}
                    </Box>
                  </TableCell>
                </TableRow>
                <TableRow sx={{ border: 0 }}>
                  <TableCell component="th" scope="row" sx={{ border: 0, padding: 0 }}>
                    <Collapse
                      in={openIds.includes(row.id)}
                      timeout="auto"
                      unmountOnExit
                      sx={{ borderBottom: '1px solid rgba(224, 224, 224, 1)' }}
                    >
                      <Box
                        sx={{ paddingY: 1, paddingLeft: 4, paddingRight: 2 }}
                        className={classes.collectionDetail}
                        alignItems="center"
                        data-testid="favorite-collection-detail"
                      >
                        <Box component="span" marginRight="auto">
                          {row.detail}
                        </Box>
                        <Button
                          variant="outlined"
                          color="primary"
                          onClick={() => onViewedDetail(row)}
                        >
                          {t('words:view_detail')}
                        </Button>
                        <Button
                          variant="contained"
                          color="secondary"
                          sx={{ marginLeft: 1 }}
                          onClick={() => onRemoveFavorite(row)}
                        >
                          {t('words:remove_favorite')}
                        </Button>
                      </Box>
                    </Collapse>
                  </TableCell>
                </TableRow>
              </Fragment>
            ))}
            {!favorites.length && (
              <TableRow>
                <TableCell align="center">No Data</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      {toastComponent}
    </>
  );
};

export default CollectionsPage;
