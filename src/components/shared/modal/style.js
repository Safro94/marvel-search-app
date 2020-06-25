import styled from 'styled-components';
import { device } from '../../../helpers/device';

const ModalContainer = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;

  @media ${device.laptop} {
    display: flex;
    align-items: center;
  }
`;

const Modal = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  position: relative;
  background: ${({ theme: { secondaryColor } }) => secondaryColor};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 5px;
  }

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: #4e4e4e;
    border-radius: 25px;
    outline: 1px solid slategrey;
  }

  @media ${device.laptop} {
    margin: 0 auto;
    width: 450px;
    max-height: 450px;
    border-radius: 10px;
  }
`;

const H1 = styled.h1`
  font-size: 1.5em;
  margin: 10px 0;
`;

const CloseContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-end;
`;

const Close = styled.span`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  border: 2px solid #ccc;
  border-radius: 50%;
  cursor: pointer;

  &:before,
  &:after {
    position: absolute;
    content: ' ';
    height: 15px;
    width: 2px;
    background: #cecece;
  }

  &:before {
    transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
  }
`;

export { Modal, H1, Close, CloseContainer, ModalContainer };
