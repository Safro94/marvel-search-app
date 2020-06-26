import React from 'react';
import { render, wait } from '@testing-library/react';

import Comic from './';

jest.mock('../../components/shared/image', () => 'image');

jest.mock('./style', () => {
  return {
    Comic: 'comic',
    Information: 'information',
    Title: 'title',
    Text: 'text',
    Image: 'image',
  };
});

describe('<Comic /> ', () => {
  beforeEach(() => jest.clearAllMocks());
  const comic = {
    thumbnail: { path: 'path', extension: 'jpg' },
    title: 'Spider-man',
  };

  it('It should render with a description', async () => {
    // Act
    const { container } = render(<Comic comic={comic} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should render without a description', async () => {
    //Arrange
    const comicWithDescription = { ...comic, description: '<h1>Lorem ipsum dolor sit amet consectetur,</h1>' };

    // Act
    const { container } = render(<Comic comic={comicWithDescription} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });
});
