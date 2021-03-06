import React from 'react';
import { render, wait } from '@testing-library/react';

import App from './';

jest.mock('../../views/layout', () => 'layout');
jest.mock('../../helpers/theme', () => 'theme');

jest.mock('../../hooks/application', () => ({
  useApplication: jest.fn(() => ({
    theme: { light: {} },
  })),
}));

describe('<App /> ', () => {
  beforeEach(() => jest.clearAllMocks());

  it('It should render a comic if we pass an Id', async () => {
    // Act
    const { container } = render(<App />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });
});
