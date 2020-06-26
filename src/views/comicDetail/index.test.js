/* eslint-disable import/first */
import React from 'react';
import { render, wait } from '@testing-library/react';

import ComicDetail from './';

jest.mock('../../services/service', () => {
  return {
    GetComicById: jest.fn().mockImplementation(() => {
      return {
        images: [{ path: 'path', extension: 'jpg' }],
        title: 'Spider-man',
        creators: {
          items: [
            { role: 'writter', name: 'Stan Lee' },
            { role: 'producer', name: 'Some name' },
          ],
        },
        description:
          'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro quibusdam nisi voluptates recusandae nesciunt quis possimus exercitationem pariatur? Officia vero voluptatem sint tempora magni ullam repudiandae fugit architecto illum molestiae!',
      };
    }),
  };
});
import Service from '../../services/service';

jest.mock('../../components/shared/image', () => 'image');

jest.mock('./style', () => {
  return {
    Wrapper: 'wrapper',
    ImageContainer: 'imageContainer',
    H1: 'h1',
    InformationContainer: 'informationContainer',
    H4: 'h4',
    Paragraph: 'paragraph',
    CreatorsInformation: 'creatorsInformation',
  };
});

describe('<ComicDetail /> ', () => {
  beforeEach(() => jest.clearAllMocks());
  const id = 30;

  it('It should render a text if there is no Id given', async () => {
    // Act
    const { container } = render(<ComicDetail.WrappedComponent match={{ params: {} }} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should render a comic if we pass an Id', async () => {
    // Act
    const { container } = render(<ComicDetail.WrappedComponent match={{ params: { id: id } }} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('If there is an Id, it should call GetComicById', async () => {
    // Act
    render(<ComicDetail.WrappedComponent match={{ params: { id: id } }} />);
    await wait();

    // Assert
    expect(Service.GetComicById).toHaveBeenCalledTimes(1);
  });
});
