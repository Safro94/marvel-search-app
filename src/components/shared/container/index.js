import styled from 'styled-components';
import { device, size } from '../../../helpers/device';

export default styled.div`
  width: 100%;
  max-width: 100%;
  background: ${(props) => props.theme.primaryColor};

  @media ${device.tablet} {
    margin: 0 auto;
    width: ${size.tablet};
    max-width: ${size.tablet};
  }

  @media ${device.laptop} {
    width: ${size.laptop};
    max-width: ${size.laptop};
  }

  @media ${device.desktop} {
    width: ${size.desktop};
    max-width: ${size.desktop};
  }
`;
