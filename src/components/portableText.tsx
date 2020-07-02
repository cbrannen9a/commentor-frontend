import React from "react";
//@ts-ignore
import BasePortableText from "@sanity/block-content-to-react";

const PortableText = ({ blocks }: { blocks: [] }) => (
  <BasePortableText
    blocks={blocks}
    projectId={process.env.GATSBY_SANITY_PROJECTID}
    dataset={process.env.GATSBY_SANITY_DATASET}
  />
);

export default PortableText;
