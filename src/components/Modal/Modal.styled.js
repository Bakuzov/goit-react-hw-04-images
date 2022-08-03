import styled from 'styled-components';
export const DivOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;
export const Modal1 = styled.div`
  position: absolute;

  width: 70%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: rgba(51, 37, 37, 0.34);
  transform: translateX(-50%) translateY(-50%) translateZ(0);
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14),
    0px 2px 1px rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  transition: opacity 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94),
    transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
`;
export const Img = styled.img`
  display: flex;
  width: 100%;
  height: auto;
`;
