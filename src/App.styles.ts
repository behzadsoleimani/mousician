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
  @media only screen and (max-width: ${props => props.theme.breakpoints.xs}) {
    background-image: url("/assets/yousician-hero-mobile@2x.png");
  }
  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    background-image: url("/assets/yousician-hero-mobile.png");
  }
`;

const Title = styled.h1`
  margin: 0;
  font-size: 40px;
  text-transform: uppercase;
  text-align: center;
`;

const Description = styled.h2`
  font-size: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  text-align: center;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  width: auto

  @media only screen and (min-width: ${props => props.theme.breakpoints.sm}) {
    width: 768px;
    padding: 0px 20px;
  }
  
`;

const SongsList = styled.div`
  @media only screen and (max-width: ${props => props.theme.breakpoints.sm}) {
    width: 100%
  }
  
`;

export { Header, Title, Description, Main, SongsList };
