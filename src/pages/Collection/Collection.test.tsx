import { MockedProvider } from '@apollo/client/testing';
import { cleanup, render } from '@testing-library/react';
import ReactRouter, { Router } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { defaultTheme } from '../../themes';
import store from '../../redux';

import Collection from '.';
import i18nTests from '../../translations/i18nTests';

import * as mocks from './mock';

beforeEach(() => {
  jest.spyOn(ReactRouter, 'useParams').mockReturnValue({ collectionId: 'test-id' });

  cleanup();
});

const setup = () => {
  const history = createMemoryHistory();

  return render(
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <I18nextProvider i18n={i18nTests}>
          <Router history={history}>
            <MockedProvider mocks={mocks.mocks()} addTypename={false}>
              <Collection />
            </MockedProvider>
          </Router>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>,
  );
};

test('renders collection content from mock api', async () => {
  const { findByRole, findByText } = setup();
  await findByRole('progressbar');
  await findByRole('contentinfo');
  await findByText(mocks.collection().detail);
});
