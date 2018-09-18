import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import ArticleGrid from "../components/article-grid";
import NavPage from "../components/widget-navpage";

export default ({ pathContext, data }) => {
  const { group, index, pageCount, additionalContext, pathPrefix } = pathContext;
  const { tag } = additionalContext;
  const tagTitle = `Thẻ ${tag.charAt(0).toLowerCase() + tag.slice(1)}`;

  return (
    <div style={{ marginTop: `${rhythm(1 / 2)}` }}>
      <Helmet
        title={`${tagTitle} - ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: `${data.site.siteMetadata.description}` },
          { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
        ]}
      />

      <ArticleGrid
        title={tagTitle}
        group={group}
      />

      <NavPage
        index={index}
        pageCount={pageCount}
        pathPrefix={pathPrefix}
      />
    </div>
  );
};

export const query = graphql`
  query TagsQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;