import React from 'react';

import { render, wait, waitForElement, fireEvent } from '@testing-library/react';

import Header from './';

jest.mock('../../components/shared/image', () => 'image');
jest.mock('./search', () => 'search');

jest.mock('./style', () => {
  return {
    Header: 'header',
    ImageContainer: 'imageContainer',
    Separator: 'separator',
  };
});

describe('<Header /> ', () => {
  beforeEach(() => (history.length = 0));
  const history = [];

  it('It should render OK', async () => {
    // Act
    const { container } = render(<Header.WrappedComponent history={history} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('When the image is clicked, it should go to the home page', async () => {
    const url = '/';

    // Act
    const { getByTestId } = render(<Header.WrappedComponent history={history} />);
    const image = await waitForElement(() => getByTestId('image'));
    fireEvent.click(image);

    // Assert
    expect(history[0]).toBe(url);
  });
});
