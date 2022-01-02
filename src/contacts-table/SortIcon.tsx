import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ClassProp } from "../common/types";

interface Props {
  down: boolean;
}

export function SortIcon({ down, className }: ClassProp<Props>) {
  return (
    <span className={className}>
      {down ? (
        <FontAwesomeIcon icon={["fas", "arrow-down"]} transform="shrink-2" />
      ) : (
        <FontAwesomeIcon icon={["fas", "arrow-up"]} transform="shrink-2" />
      )}
    </span>
  );
}
