import { memo } from "react";

import { ContactType } from "../../types";

function ContactComponent({ item }: { item: ContactType }): React.ReactElement {
  return (
    <li>
      {item.name}: {item.value}
    </li>
  );
}

export const Contact = memo(ContactComponent);
