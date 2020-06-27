import React from 'react';

import StarIcon from '../../icons/star';
import FullStarIcon from '../../icons/fullStar';

import { Star, FullStar } from './style';

export default ({ handleClick, showFullStar }) => {
  return (
    <>
      {showFullStar ? (
        <FullStar onClick={handleClick} data-testid="full-star">
          <FullStarIcon />
        </FullStar>
      ) : (
        <Star onClick={handleClick} data-testid="star">
          <StarIcon />
        </Star>
      )}
    </>
  );
};
