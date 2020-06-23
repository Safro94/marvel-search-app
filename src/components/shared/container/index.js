import styled from 'styled-components';
import { device } from '../../../helpers/device';

export default styled.div`
  width: 100%;
  max-width: 100%;
  border: 1px solid #eee;
  background: ${(props) => props.theme.primaryColor};

  @media ${device.desktop} {
    max-width: 1400px;
  }
`;
