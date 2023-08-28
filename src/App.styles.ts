import styled from "styled-components";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 330px;
  background-image: url("/assets/yousician-hero.png");
  background-repeat: no-repeat;
  background-size: cover;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  text-transform: uppercase;
`;

const Description = styled.h2`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { Header, Title, Description, Main };
