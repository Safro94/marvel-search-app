import styled from 'styled-components';

export default styled.img`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  display: grid;
  grid-template-columns: 150px 1fr;
`;
