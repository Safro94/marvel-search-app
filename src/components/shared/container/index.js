import styled from 'styled-components';

export default styled.div`
  width: 100%;
  height: 100%;
  max-width: 100%;
  border: 1px solid #eee;
  border-bottom: 0;
  background: ${({ theme: { primaryColor } }) => primaryColor};
`;
