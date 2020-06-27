import styled from 'styled-components';
import { device } from '../../helpers/device';

const Header = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 0.5fr;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  border-bottom: 1px solid #eee;

  @media ${device.tablet} {
    grid-template-columns: 100px 2fr 0.5fr;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 0;
  position: relative;
`;

const Separator = styled.div`
  border-left: 1px solid #f1f0f0;
  border-right: 1px solid #f1f0f0;
  position: absolute;
  right: 0;
  height: 70%;
`;

const FavouriteContainer = styled.div`
  display: flex;
  align-items: center;
`;

export { Header, ImageContainer, Separator, FavouriteContainer };
