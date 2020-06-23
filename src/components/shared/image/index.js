import styled from 'styled-components';

export default styled.img.attrs(({ width, height }) => ({
  width,
  height,
}))`
  display: grid;
  grid-template-columns: 150px 1fr;
`;
