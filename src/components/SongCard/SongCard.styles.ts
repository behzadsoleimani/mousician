import styled from "styled-components";

const Container = styled.div<{ $isEven: boolean }>`
  display: flex;
  align-items: center;
  background-color: ${({ $isEven, theme }) =>
    $isEven ? theme.colors.secondary : ""};
  border-radius: 2px;
  justify-content: space-between;
  padding: 5px;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.xs}) {
    padding: 10px 30px;
    padding-right: 30px;
    justify-content: space-between;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 100%;
    padding: 10px 60px;
  }
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 100%;
    padding: 10px 60px;
    width: 930px;
  }
`;

const LeftSide = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const SongImage = styled.img`
  height: 70px;
  width: 70px;
  object-fit: contain;
  border-radius: 5px;
`;

const SongInfo = styled.div`
  gap: 10px;
  display: flex;
  flex-direction: column;
`;

const Title = styled.h4`
  margin: 0;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0;
`;

const IconWrappers = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    gap: 10px;
    margin-left: 20px;
  }
`;

export {
  Container,
  SongImage,
  SongInfo,
  Title,
  Description,
  IconWrappers,
  LeftSide,
};
