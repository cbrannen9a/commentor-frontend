import React from "react";
import { graphql } from "gatsby";

import GraphQLErrorList from "../components/graphqlErrorList";
import BlogPost from "../components/blogPost";
import SEO from "../components/seo";
import Layout from "../components/layout";

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      title
      slug {
        current
      }
      _rawBody(resolveReferences: { maxDepth: 5 })
    }
  }
`;

const BlogPostTemplate = ({
  data,
  errors,
}: {
  data: { post: Post };
  errors: Error[];
}) => {
  const post = data && data.post;
  return (
    <Layout>
      {errors && <SEO title="GraphQL Error" />}
      {post && <SEO title={post.title || "Untitled"} />}

      {errors && <GraphQLErrorList errors={errors} />}

      {post && <BlogPost {...post} />}
    </Layout>
  );
};

type Post = {
  id: string;
  publishedAt: string;
  title: string;
  slug: {
    current: string;
  };
  _rawBody: [];
};

export default BlogPostTemplate;
