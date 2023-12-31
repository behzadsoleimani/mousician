import styled from "styled-components";

type FilterTheme = "dark" | "light";

interface Props {
  onClick: () => void;
  color: FilterTheme;
}

const Path = styled.path<{ fill: FilterTheme }>`
  fill: ${({ theme, fill }) =>
    fill === "dark" ? theme.colors.background : theme.colors.light};
`;

const Svg = styled.svg<{ fill: FilterTheme }>`
  height: 30px;
  width: 30px;
  border-radius: 20px;
  border: ${({ theme }) => `2px solid ${theme.colors.light}`};
  padding: 5px;
  cursor: pointer;
  background: ${({ theme, fill }) =>
    fill === "dark" ? theme.colors.light : theme.colors.background};
`;

const FilterIcon = ({ color = "light", onClick }: Props) => {
  return (
    <Svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill={color}
      data-testid="filter"
    >
      <path d="M0 0h16v16H0z" fill="none" />
      <Path
        fill={color}
        id="a"
        d="M12.5 3.104a2.751 2.751 0 0 1 0 5.292v6.854a.75.75 0 1 1-1.5 0V8.396a2.751 2.751 0 0 1 0-5.292V.75a.75.75 0 1 1 1.5 0v2.354zM5 7.604a2.751 2.751 0 0 1 0 5.292v2.354a.75.75 0 1 1-1.5 0v-2.354a2.751 2.751 0 0 1 0-5.292V.75a.75.75 0 0 1 1.5 0v6.854zM4.25 11.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5zm7.5-4.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5z"
      />
    </Svg>
  );
};

export default FilterIcon;
