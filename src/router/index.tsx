import { useMemo } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router';
import { useDispatch } from 'react-redux';
import { Container, Box, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

import CollectionPage from '../pages/Collection';
import CollectionsPage from '../pages/Collections';
import FavoritesPage from '../pages/Favorites';

import IlluviumAppBar from '../components/AppBar';
import IlluviumFooter from '../components/Footer';
import IlluviumLoader from '../components/Loader';

import { useFavoriteCollectionsQuery } from '../generated/types';

import { ICollection } from '../types';
import paths from '../consts/paths';
import { DEFAULT_USER_ID } from '../consts/consts';
import { setFavorites } from '../redux/actions/marketplace';

/**
 * Set page content to be full height for minimum one so that we can see footer at the bottom with blank pages.
 */
const useStyles = makeStyles(() =>
  createStyles({
    content: {
      minHeight: 'calc(100vh - 90px)',
    },
  }),
);

/**
 * This is the component to render basic layout with changable content inside it.
 * @returns React Element
 */

const IlluviumRoutes = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { t } = useTranslation(['translations']);
  const { pathname } = useLocation();
  const { loading } = useFavoriteCollectionsQuery({
    onCompleted: ({ favoriteCollections }) => {
      dispatch(setFavorites(favoriteCollections as ICollection[]));
    },
    onError: (err) => {
      console.log(err);
    },
    variables: {
      userId: DEFAULT_USER_ID,
    },
  });

  const pageTitle = useMemo(() => {
    if (pathname === paths.collections) return 'page_title_collections';
    if (pathname === paths.favorites) return 'page_title_favorites';
    if (pathname.includes(paths.collection)) return 'page_title_collection';
    return '';
  }, [pathname]);

  if (loading) {
    return <IlluviumLoader />;
  }

  return (
    <>
      <IlluviumAppBar />
      <Container className={classes.content}>
        <Box paddingY={2}>
          <Typography variant="h4" sx={{ fontWeight: 700, marginBottom: 2 }}>
            {t(pageTitle)}
          </Typography>
          <Switch>
            <Route path={paths.collections} component={CollectionsPage} />
            <Route path={paths.favorites} component={FavoritesPage} />
            <Route path={paths.collection + '/:collectionId'} component={CollectionPage} />
            <Redirect exact from="/" to={paths.collections} />
          </Switch>
        </Box>
      </Container>
      <IlluviumFooter />
    </>
  );
};

/**
 * This is the wrapper component for all pages used in the app
 * @returns React BrowserRouter Instance
 */
const IlluviumRouter = () => {
  return (
    <BrowserRouter>
      <IlluviumRoutes />
    </BrowserRouter>
  );
};

export { IlluviumRouter };
