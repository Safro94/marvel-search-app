import styled from 'styled-components';

const Header = styled.div`
  display: grid;
  grid-template-columns: 100px 2fr 0.5fr;
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

export { Header, ImageContainer, Separator };
