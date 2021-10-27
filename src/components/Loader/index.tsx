import { Box, Theme, CircularProgress, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    loader: {
      width: '100%',
      height: '100vh',
      position: 'fixed',
      top: 0,
      left: 0,
      display: 'flex',
    },
    placeholder: {
      fontWeight: 700,
      paddingTop: theme.spacing(3),
      color: theme.palette.primary.main,
    },
  }),
);

const Loader = () => {
  const classes = useStyles();
  const { t } = useTranslation(['words']);

  return (
    <Box
      className={classes.loader}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <CircularProgress color="primary" />
      <Typography variant="body1" component="div" className={classes.placeholder}>
        {t('words:loading')}
      </Typography>
    </Box>
  );
};

export default Loader;
