import styled from 'styled-components';
import { device } from '../../helpers/device';

const Wrapper = styled.div`
  padding: 20px 0;
  display: grid;
  grid-gap: 20px 0;

  @media ${device.tablet} {
    margin: 20px;
    grid-template-columns: repeat(2, 250px);
    justify-content: space-evenly;
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 250px);
  }
`;

const H1 = styled.h1`
  grid-column: span 4;
  text-align: center;
`;

export { Wrapper, H1 };
