import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { Router } from 'react-router';
import { I18nextProvider } from 'react-i18next';
import { ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';

import { defaultTheme } from '../../themes';
import store from '../../redux';

import Collections from '.';
import i18nTests from '../../translations/i18nTests';

import * as mocks from './mock';

beforeEach(() => {
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
              <Collections />
            </MockedProvider>
          </Router>
        </I18nextProvider>
      </ThemeProvider>
    </Provider>,
  );
};

test('renders collections from mock api', async () => {
  const { findAllByTestId } = setup([
    ...mocks.collectionTypeMock(),
    ...mocks.collectionsByTypeMock(),
  ]);
  expect((await findAllByTestId('collection-row')).length).toEqual(2);
});

test('updates collections when change type', async () => {
  const { findAllByTestId, findByTestId } = setup([
    ...mocks.collectionTypeMock(),
    ...mocks.collectionsByTypeMock(),
  ]);
  const toggleEl = await findByTestId('collections-toggle');
  expect(toggleEl.childNodes.length).toBeGreaterThan(1);
  const inputNode = toggleEl.childNodes[1];
  fireEvent.change(inputNode, { target: { value: mocks.consts.type2 } });
  expect((await findAllByTestId('collection-row')).length).toEqual(1);
});

test('renders collection types from mock api', async () => {
  const { findAllByTestId, findByTestId } = setup([
    ...mocks.collectionTypeMock(),
    ...mocks.collectionsByTypeMock(),
  ]);
  const toggleEl = await findByTestId('collections-toggle');
  expect(toggleEl.childNodes.length).toBeGreaterThan(0);
  const selectNode = toggleEl.childNodes[0];
  fireEvent.mouseDown(selectNode);
  expect((await findAllByTestId('collection-type')).length).toEqual(2);
});
