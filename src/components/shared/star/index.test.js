import React from 'react';
import { render, wait, waitForElement, fireEvent } from '@testing-library/react';

import Star from './';

jest.mock('../../icons/star', () => 'starIcon');
jest.mock('../../icons/fullStar', () => 'fullStarIcon');

jest.mock('./style', () => {
  return {
    Star: 'Star',
    FullStar: 'FullStar',
  };
});

describe('<Star /> ', () => {
  beforeEach(() => jest.clearAllMocks());
  const handleClick = jest.fn();

  it('It should render a FullStar if showFullStar is true', async () => {
    //Arrange
    const showFullStar = true;

    // Act
    const { container } = render(<Star showFullStar={showFullStar} handleClick={handleClick} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('It should render a Star if showFullStar is false', async () => {
    //Arrange
    const showFullStar = false;

    // Act
    const { container } = render(<Star showFullStar={showFullStar} handleClick={handleClick} />);
    await wait();

    // Assert
    expect(container).toMatchSnapshot();
  });

  it('When the fullStar is clicked, it should called the function passed by prop', async () => {
    //Arrange
    const showFullStar = true;

    // Act
    const { getByTestId } = render(<Star showFullStar={showFullStar} handleClick={handleClick} />);
    const fullStar = await waitForElement(() => getByTestId('full-star'));
    fireEvent.click(fullStar);

    // Assert
    expect(handleClick).toBeCalledTimes(1);
  });

  it('When the star button is clicked, it should called the function passed by prop', async () => {
    //Arrange
    const showFullStar = false;

    // Act
    const { getByTestId } = render(<Star showFullStar={showFullStar} handleClick={handleClick} />);
    const star = await waitForElement(() => getByTestId('star'));
    fireEvent.click(star);

    // Assert
    expect(handleClick).toBeCalledTimes(1);
  });
});
