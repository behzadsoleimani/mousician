import styled from "styled-components";

const Container = styled.section`
  margin-top: 20px;
  display: flex;
  align-items: center;
  width: 690px;
  padding: 0 30px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.light};
  @media only screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
    width: 90%;
  }
`;

const Input = styled.input`
  padding: 20px 0;
  flex-grow: 1;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: ${({ theme }) => theme.fontWeights.regular};
  &::placeholder {
    color: ${({ theme }) => theme.colors.placeholder};
  }
`;

const Icon = styled.img`
  cursor: pointer;
`;

export { Container, Input, Icon };
