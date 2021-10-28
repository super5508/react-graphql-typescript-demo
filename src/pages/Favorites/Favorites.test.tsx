import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { cleanup, render, screen } from '@testing-library/react';
import UserEvent from '@testing-library/user-event';
import { Router } from 'react-router';
import * as ReactRedux from 'react-redux';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { defaultTheme } from '../../themes';
import store from '../../redux';

import FavoriteCollections from '.';
import i18nTests from '../../translations/i18nTests';

import * as mocks from './mock';

beforeEach(() => {
  jest.spyOn(ReactRedux, 'useSelector').mockReturnValue({ favorites: mocks.collections() });

  cleanup();
});

const setup = (mockData: MockedResponse[]) => {
  const history = createMemoryHistory();

  return render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <I18nextProvider i18n={i18nTests}>
          <Router history={history}>
            <MockedProvider mocks={mockData} addTypename={false}>
              <FavoriteCollections />
            </MockedProvider>
          </Router>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>,
  );
};

test('renders favorite collections from test store', async () => {
  const { findAllByTestId } = setup(mocks.favoriteCollectionsMock());
  const collectionEls = await findAllByTestId('favorite-collection');
  expect(collectionEls.length).toEqual(3);
});

test('expands collections', async () => {
  const { findAllByTestId } = setup(mocks.favoriteCollectionsMock());
  const collectionEls = await findAllByTestId('favorite-collection');
  expect(collectionEls.length).toBeGreaterThan(0);
  UserEvent.click(collectionEls[0], { button: 0 });
  const expandedEls = await findAllByTestId('favorite-collection-detail');
  expect(expandedEls.length).toEqual(1);
});
