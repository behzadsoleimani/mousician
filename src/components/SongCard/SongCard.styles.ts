import styled from "styled-components";

const Container = styled.div<{ isEven: boolean }>`
  display: flex;
  align-items: center;
  width: 930px;
  padding: 10px;
  padding-right: 30px;
  background-color: ${({ isEven, theme }) =>
    isEven ? theme.colors.secondary : ""};
  border-radius: 2px;
  justify-content: space-between;
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
