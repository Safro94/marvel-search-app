import React from 'react';
import { render, wait } from '@testing-library/react';

import App from './';

jest.mock('../../helpers/theme', () => ({
  light: {},
  dark: {},
}));

jest.mock('./style', () => {
  return {
    Select: 'select',
  };
});

jest.mock('../../hooks/application', () => ({
  useApplication: jest.fn(() => ({
    theme: { light: {} },
    setApplication: jest.fn(),
  })),
}));

describe('<App /> ', () => {
  beforeEach(() => jest.clearAllMocks());

  it('It should render OK', async () => {
    // Act
    const { container } = render(<App />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });
});
