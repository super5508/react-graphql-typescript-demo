import { Box, Container, Theme, Typography } from '@mui/material';
import { makeStyles, createStyles } from '@mui/styles';

import { useTranslation } from 'react-i18next';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    footer: {
      backgroundColor: theme.palette.primary.dark,
      color: 'white',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
  }),
);

const IlluviumFooter = () => {
  const classes = useStyles();
  const { t } = useTranslation(['contact']);

  return (
    <Box component="footer" className={classes.footer}>
      <Container>
        <Typography>
          {t('created_by')} <strong>{t('author')}</strong>
        </Typography>
      </Container>
    </Box>
  );
};

export default IlluviumFooter;
