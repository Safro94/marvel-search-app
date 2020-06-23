import styled from 'styled-components';

const Card = styled.div`
  background: url('${({ url }) => url}');
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

export { Card, TextWrapper, Text };
