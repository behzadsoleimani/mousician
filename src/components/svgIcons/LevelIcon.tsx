import { LEVELS } from "../../constants";
import { getFilterColor } from "../../helpers";
import { theme } from "../../styles/theme";

const LevelIcon = ({
  level,
  onClick,
  isSelected,
}: {
  level: number;
  onClick?: () => void;
  isSelected?: boolean;
}) => {
  const filterWidth = (level * 100) / LEVELS;
  const environment = 2 * Math.PI * LEVELS;
  const progress = ((100 - filterWidth) / 100) * environment;
  const filterColor = getFilterColor(level);

  return (
    <svg viewBox="0 0 42 42" width={40} height={40} onClick={onClick}>
      {isSelected ? (
        <>
          <circle cx={21} cy={21} r={LEVELS} fill={theme.colors.light} />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill={theme.colors.background}
            dy=".3em"
            fontSize="14"
            fontWeight={theme.fontWeights.bold}
          >
            {level}
          </text>
        </>
      ) : (
        <>
          <circle
            cx={21}
            cy={21}
            r={LEVELS}
            stroke={theme.borders.filter}
            strokeWidth={2.5}
          />
          <circle
            cx={21}
            cy={21}
            r={LEVELS}
            stroke={filterColor}
            strokeDasharray={environment}
            strokeDashoffset={progress}
            strokeWidth={2.5}
            transform="rotate(-90 21 21)"
          />
          <circle
            cx={21}
            cy={21}
            r={LEVELS}
            stroke={theme.colors.background}
            strokeDasharray="9% 65.5%"
            transform="rotate(-96 21 21)"
            strokeWidth={3}
          />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill={theme.colors.light}
            dy=".3em"
            fontSize="14"
            fontWeight={theme.fontWeights.bold}
          >
            {level}
          </text>
        </>
      )}
    </svg>
  );
};

export default LevelIcon;
