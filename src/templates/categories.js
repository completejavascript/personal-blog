import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import ArticleGrid from "../components/article-grid";
import NavPage from "../components/widget-navpage";
import ArticleList2 from "../components/article-list-2";

export default ({ pathContext, data }) => {
  const { group, index, pageCount, additionalContext, pathPrefix } = pathContext;
  const { category } = additionalContext;
  const categoryTitle = `Chuyên mục ${category}`;

  return (
    <div style={{ marginTop: `${rhythm(1 / 2)}` }}>
      <Helmet
        title={`${categoryTitle} - ${data.site.siteMetadata.title}`}
        meta={[
          { name: 'description', content: `${data.site.siteMetadata.description}` },
          { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
        ]}
      />

      <ArticleList2
        title={categoryTitle}
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
  query CategoriesQuery {
    site {
      siteMetadata {
        title
        description
        keywords
      }
    }
  }
`;