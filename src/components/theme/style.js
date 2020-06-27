import styled from 'styled-components';
import { device } from '../../helpers/device';

const Select = styled.select`
  background: #eee;
  padding: 3px 10px;
  font-size: 16px;
  margin-left: 5px;
  font-weight: bold;
  text-transform: uppercase;
  width: 30px;

  @media ${device.tablet} {
    width: auto;
  }
`;

export { Select };
