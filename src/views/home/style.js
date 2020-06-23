import styled from 'styled-components';
import { device } from '../../helpers/device';

export const Wrapper = styled.div`
  padding: 20px 0;
  display: grid;
  grid-gap: 20px;

  @media ${device.tablet} {
    margin: 20px;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.laptop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
