import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import NavPage from "../components/widget-navpage";
import ArticleList2 from "../components/article-list-2";
import { getRobotIndexTag } from "../utils/functions";

const IndexPage = ({ data, pathContext }) => {
  const { group, index, pageCount, pathPrefix } = pathContext;

  return (
    <div style={{ marginTop: `${rhythm(1 / 2)}` }}>
      <Helmet
        title={`${data.site.siteMetadata.subtitle} - ${data.site.siteMetadata.title}`}
        meta={
          [
            { name: 'description', content: `${data.site.siteMetadata.description}` },
            { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
          ].concat(getRobotIndexTag(index))
        }
      />

      <ArticleList2
        title={"Bài viết mới nhất"}
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

export default IndexPage;

export const query = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        siteUrl
        subtitle
        description
        keywords
      }
    }
  }
`;
