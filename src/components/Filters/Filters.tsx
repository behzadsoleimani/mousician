import { useRef, useState } from "react";
import FilterIcon from "../svgIcons/FilterIcon";
import LevelIcon from "../svgIcons/LevelIcon";
import { getRange } from "../../helpers";
import {
  Container,
  FilterHeader,
  FiltersList,
  Label,
  RangeLabel,
  RangleWrapper,
  WrapperIcon,
} from "./Filters.styles";

export const Filters = ({ onSelect }: Props) => {
  const [selected, setSelected] = useState<number[]>([]);
  const [rangeLabel, setRangeLabel] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const selectedLevels = useRef({ firstSelected: 0, secondSelected: 0 });

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  const handleSelectFilter = (level: number) => () => {
    const { firstSelected, secondSelected } = selectedLevels.current;
    if (!firstSelected || (firstSelected && secondSelected)) {
      setSelected([level]);
      selectedLevels.current.firstSelected = level;
      selectedLevels.current.secondSelected = 0;
    } else if (!secondSelected) {
      setSelected([level]);
      selectedLevels.current.secondSelected = level;
      const range = getRange(firstSelected, level);
      setSelected(range);
      onSelect(range);
      setRangeLabel(`${range[0]} - ${range[range.length - 1]}`);
    }
  };

  return (
    <Container>
      <FilterHeader>
      <Label data-testid="label">
        {showFilters ? "Hide filter" : "Filter by level"}
      </Label>
      <RangleWrapper $hasRangeLabel={!!rangeLabel}>
        {rangeLabel && <RangeLabel>{rangeLabel}</RangeLabel>}{" "}
        <FilterIcon
          onClick={toggleFilters}
          color={!!rangeLabel ? "dark" : "light"}
        />
      </RangleWrapper>
      </FilterHeader>
      {showFilters && (
        <FiltersList data-testid="list">
          {Array.from({ length: 15 }, (_, l) => {
            return (
              <WrapperIcon key={l}>
                <LevelIcon
                  level={l + 1}
                  onClick={handleSelectFilter(l + 1)}
                  isSelected={selected.includes(l + 1)}
                />
              </WrapperIcon>
            );
          })}
        </FiltersList>
      )}
    </Container>
  );
};
