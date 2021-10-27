import { AppBar, Container, Typography, Box, Theme, Badge } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { Link as RouterLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { RootState } from '../../redux';
import pagePaths from '../../consts/paths';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pageLink: {
      marginLeft: theme.spacing(3),
      color: theme.palette.primary.contrastText,
      textDecoration: 'none',

      '&:first-of-type': {
        marginLeft: 0,
      },
    },
  }),
);

const IlluviumAppBar = () => {
  const classes = useStyles();
  const { favorites } = useSelector((r: RootState) => r.marketplace);
  const { t } = useTranslation(['words']);

  return (
    <AppBar position="sticky" color="primary" sx={{ paddingY: 1 }}>
      <Container>
        <Box sx={{ display: 'flex' }} justifyContent="space-between" alignItems="center">
          <Typography variant="h4" component="div" sx={{ fontWeight: 900 }}>
            {t('words:title')}
          </Typography>
          <Box>
            <RouterLink className={classes.pageLink} to={pagePaths.collections}>
              <Badge>{t('words:collections')}</Badge>
            </RouterLink>
            <RouterLink className={classes.pageLink} to={pagePaths.favorites}>
              <Badge badgeContent={favorites.length} color="error">
                {t('words:favorites')}
              </Badge>
            </RouterLink>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
};

export default IlluviumAppBar;
