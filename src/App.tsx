import { ThemeProvider } from '@mui/material';
import { ApolloProvider } from '@apollo/client';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { Provider as StoreProvider } from 'react-redux';

import { IlluviumRouter } from './router';
import { aplloClient } from './api/Apollo';
import { defaultTheme } from './themes';
import store from './redux';

import './styles.css';

import translationEN from './translations/en.json';

const resources = {
  en: translationEN,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  debug: process.env.NODE_ENV !== 'production',
  keySeparator: false,
  react: {
    wait: true,
  },
  defaultNS: 'translation',
  interpolation: {
    escapeValue: false,
  },
});

const App = () => {
  return (
    <StoreProvider store={store}>
      <ApolloProvider client={aplloClient}>
        <ThemeProvider theme={defaultTheme}>
          <IlluviumRouter />
        </ThemeProvider>
      </ApolloProvider>
    </StoreProvider>
  );
};

export default App;
