import React from "react";

import PortableText from "./portableText";

const BlogPost = ({ _rawBody }: { _rawBody: [] }) => {
  return <article>{_rawBody && <PortableText blocks={_rawBody} />}</article>;
};

export default BlogPost;
