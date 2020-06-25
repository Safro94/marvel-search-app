import styled from 'styled-components';
import { device } from '../../helpers/device';

const Image = styled.div`
  background: url('${({ url }) => url}');
  background-size: cover;
  width: 70px;
  height: 70px;

  @media ${device.tablet} {
    width: 100px;
    height: 100px;
  }
`;

const Comic = styled.div`
  display: grid;
  grid-template-columns: 70px 1fr;
  grid-gap: 10px;
  max-height: 100px;
  overflow: hidden;
  cursor: pointer;

  @media ${device.tablet} {
    grid-template-columns: 100px 1fr;
  }
`;

const Information = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 100px;
`;

const Title = styled.h4`
  font-size: 12px;

  @media ${device.tablet} {
    font-size: 1rem;
  }
`;

const Text = styled.p`
  text-overflow: ellipsis;
  font-size: 9px;

  @media ${device.tablet} {
    font-size: 11px;
  }
`;

export { Image, Comic, Information, Title, Text };
