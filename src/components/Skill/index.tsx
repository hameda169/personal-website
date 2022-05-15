import { memo } from "react";

import { SkillType } from "../../types";

function SkillComponent({ item }: { item: SkillType }): React.ReactElement {
  const maxScore = 100 / 25;

  return (
    <li>
      {item.name} {item.score / 25}/{maxScore}
    </li>
  );
}

export const Skill = memo(SkillComponent);
