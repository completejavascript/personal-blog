import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import ArticleGrid from "../components/article-grid";
import NavPage from "../components/widget-navpage";
import ArticleList2 from "../components/article-list-2";
import { getRobotIndexTag } from "../utils/functions";

export default ({ pathContext, data }) => {
  const { group, index, pageCount, additionalContext, pathPrefix } = pathContext;
  const { tag } = additionalContext;
  const tagTitle = `Thẻ ${tag}`;

  return (
    <div style={{ marginTop: `${rhythm(1 / 2)}` }}>
      <Helmet
        title={`${tagTitle} - ${data.site.siteMetadata.title}`}
        meta={
          [
            { name: 'description', content: `${data.site.siteMetadata.description}` },
            { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
          ].concat(getRobotIndexTag(index))
        }
      />

      <ArticleList2
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