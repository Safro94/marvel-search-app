import styled from 'styled-components';

const Wrapper = styled.div`
  position: relative;
`;

const Card = styled.div`
  background: url('${({ url }) => url}') no-repeat center center;
  background-size: cover;
  position: relative;
  height: 300px;
  cursor: pointer;
`;

const TextWrapper = styled.span`
  position: absolute;
  bottom: 0;
  padding: 15px;
  width: 100%;
`;

const Text = styled.span`
  color: #fff;
  font-weight: bold;
  overflow-wrap: break-word;
`;

const ComicsContainer = styled.div`
  display: grid;
  grid-gap: 15px 0;
`;

const StarContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  z-index: 10;
`;

export { Card, TextWrapper, Text, ComicsContainer, StarContainer, Wrapper };
