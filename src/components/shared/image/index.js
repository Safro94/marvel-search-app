import styled from 'styled-components';

export default styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  cursor: ${({ cursor }) => cursor};
`;
