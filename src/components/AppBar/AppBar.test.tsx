import { cleanup, screen, render, getByText } from '@testing-library/react';
import { Router } from 'react-router-dom';
import * as ReactRedux from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { defaultTheme } from '../../themes';
import store from '../../redux';

import AppBar from '.';
import i18nTests from '../../translations/i18nTests';

beforeEach(() => {
  jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({
    favorites: [
      {
        detail: 'test-description1',
        id: 'test-id1',
        name: 'test-collection1',
      },
      {
        detail: 'test-description2',
        id: 'test-id2',
        name: 'test-collection2',
      },
      {
        detail: 'test-description3',
        id: 'test-id3',
        name: 'test-collection3',
      },
    ],
  });

  cleanup();
});

const setup = () => {
  const history = createMemoryHistory();
  return render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <I18nextProvider i18n={i18nTests}>
          <Router history={history}>
            <AppBar />
          </Router>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>,
  );
};

test('renders title', () => {
  setup();
  expect(screen.getByText(/MarketPlace/i)).toBeInTheDocument();
});

test('renders collections link', () => {
  setup();
  expect(screen.getByText(/Collections/i)).toBeInTheDocument();
});

test('renders favorites link', () => {
  setup();
  expect(screen.getByText(/Favorites/i)).toBeInTheDocument();
});

test('renders badge count', async () => {
  const { findByTestId } = setup();
  const appbarNotifEl = await findByTestId('appbar-notifications');
  expect(appbarNotifEl).toBeTruthy();
  expect(getByText(appbarNotifEl, /3/)).toBeTruthy();
});
