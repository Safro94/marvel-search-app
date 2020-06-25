import styled from 'styled-components';
import { device } from '../../helpers/device';

const Wrapper = styled.div`
  padding: 20px;
  display: grid;
  grid-gap: 20px;

  @media ${device.tablet} {
    grid-template-columns: 1fr 2fr;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const CreatorsInformation = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  align-items: flex-start;
`;

const H1 = styled.h1`
  text-align: center;
  margin-bottom: 20px;
`;

const H4 = styled.h4`
  text-align: center;
`;

const Paragraph = styled.p``;

export { Wrapper, ImageContainer, H1, InformationContainer, H4, Paragraph, CreatorsInformation };
