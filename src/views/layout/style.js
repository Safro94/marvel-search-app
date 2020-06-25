import styled from 'styled-components';
import { device } from '../../helpers/device';

const Wrapper = styled.div`
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  @media ${device.tablet} {
    padding: 20px 40px;
  }
`;

export { Wrapper };
