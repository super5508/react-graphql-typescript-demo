import { cleanup, screen, render } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { defaultTheme } from '../../themes';
import store from '../../redux';

import Loader from '.';
import i18nTests from '../../translations/i18nTests';

beforeEach(() => {
  cleanup();
});

const setup = () => {
  const history = createMemoryHistory();
  render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <I18nextProvider i18n={i18nTests}>
          <Router history={history}>
            <Loader />
          </Router>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>,
  );
};

test('renders loading text', () => {
  setup();
  expect(screen.getByText(/Loading .../i)).toBeInTheDocument();
});
