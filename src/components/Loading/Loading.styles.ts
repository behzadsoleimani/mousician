import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  0%, 100% { font-size: 14px; }
  50% { font-size: 20px; }
`;

const fadeInDelay1 = keyframes`
  0%, 100% { font-size: 14px; }
  50% { font-size: 20px; }
`;

const fadeInDelay2 = keyframes`
  0%, 100% { font-size: 14px; }
  50% { font-size: 20px; }
`;

const LoadingContainer = styled.h1`
  text-align: center;
  span {
    font-size: 14px;
    margin-right: 5px;
    color: ${({ theme }) => theme.colors.placeholder};
  }
  span:nth-child(1) {
    animation: ${fadeIn} 3s infinite;
  }
  span:nth-child(2) {
    animation: ${fadeInDelay1} 3s infinite 1s;
  }
  span:nth-child(3) {
    animation: ${fadeInDelay2} 3s infinite 2s;
  }
`;
export { LoadingContainer };
