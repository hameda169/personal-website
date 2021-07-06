import { memo } from "react";

import { ProjectType } from "../../types";

function ProjectComponent({ item: { name, source: source_, demo: demo_ } }: { item: ProjectType }): React.ReactElement {
  const demo = demo_ != null && !Array.isArray(demo_) ? [demo_] : demo_;
  const source = source_ != null && !Array.isArray(source_) ? [source_] : source_;

  return (
    <li>
      <b>{name}</b>:&nbsp;
      {demo?.map(({ name, link }, index) => (
        <>
          <a href={link}>{name}</a>
          {index !== demo.length ? ", " : ""}
        </>
      ))}
      {source?.map(({ name, link }, index) => (
        <>
          <a href={link}>{name}</a>
          {index !== source.length - 1 ? ", " : ""}
        </>
      ))}
    </li>
  );
}

export const Project = memo(ProjectComponent);
