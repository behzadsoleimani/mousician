import styled from "styled-components";

const Container = styled.section`
  display: flex;
  width: 100%;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px 15px;
  @media only screen and (min-width: ${(props) => props.theme.breakpoints.md}) {
    width: 930px;
    justify-content: flex-end;
  }
`;

const FilterHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  align-items: center;
`;

const Label = styled.span`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding-right: 10px;
`;

const FiltersList = styled.section`
  display: flex;
  justify-content: flex-end;
  padding: 20px 0px;
  gap: 9px;
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    display: grid;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    row-gap: 15px;
    padding: 20px;
    margin: auto;
  }
`;

const WrapperIcon = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  place-items: center;
  height: 45px;
  width: 45px;
  border-radius: 25px;
`;

const RangleWrapper = styled.div<{ $hasRangeLabel: boolean }>`
  height: 30px;
  min-width: 40px;
  display: flex;
  align-items: center;
  border-radius: 20px;
  border: ${({ theme, $hasRangeLabel }) =>
    $hasRangeLabel ? `1px solid ${theme.colors.light}` : "none"};
`;
const RangeLabel = styled.span`
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  padding-left: 10px;
  padding-right: 10px;
`;

export {
  Container,
  Label,
  FiltersList,
  WrapperIcon,
  RangleWrapper,
  RangeLabel,
  FilterHeader,
};
