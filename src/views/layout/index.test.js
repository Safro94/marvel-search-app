import React from 'react';
import { render, wait } from '@testing-library/react';

import Layout from './';

jest.mock('../../routes', () => 'routes');
jest.mock('../../components/header', () => 'header');
jest.mock('../../components/shared/container', () => 'container');

jest.mock('./style', () => {
  return {
    Wrapper: 'wrapper',
  };
});

describe('<Layout /> ', () => {
  beforeEach(() => jest.clearAllMocks());

  it('It should render OK', async () => {
    // Act
    const { container } = render(<Layout />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });
});
