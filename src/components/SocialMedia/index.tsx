import { memo } from "react";

import { SocialMediaType } from "../../types";

function SocialMediaComponent({ item }: { item: SocialMediaType }): React.ReactElement {
  return (
    <li>
      <a href={item.link}>{item.name}</a>
    </li>
  );
}

export const SocialMedia = memo(SocialMediaComponent);
