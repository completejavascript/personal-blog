import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";

const ListItemWrapper = ({ index, node, children }) => (
  index == 0 ?
    <li key={index}>
      <Link to={node.fields.slug}>
        <img src={node.frontmatter.thumbnail} />
      </Link>
      {children}
    </li>
    :
    <li key={index}>
      {children}
    </li>
);

export default props => {
  return (
    <div>
      <WidgetTitle> Bài viết mới nhất </WidgetTitle>
      <WidgetContainer>
        <ul
          style={{
            listStyleType: `none`,
            marginLeft: 0
          }}
        >
          {
            props.latestPosts.map(({ node }, index) => {
              return (
                <ListItemWrapper index={index} node={node}>
                  <div
                    style={{
                      display: `flex`,
                      paddingLeft: `${rhythm(0.25)}`,
                      paddingRight: `${rhythm(0.25)}`,
                    }}
                  >
                    <span
                      style={{
                        marginRight: `${rhythm(0.4)}`,
                        color: `#aaa`,
                        fontStyle: `italic`,
                        fontSize: `${rhythm(1.15)}`,
                        lineHeight: 1,
                      }}
                    >
                      {index + 1}.
                  </span>

                    <Link to={node.fields.slug}>
                      {node.frontmatter.title.charAt(0).toUpperCase() + node.frontmatter.title.slice(1)}
                    </Link>
                  </div>
                </ListItemWrapper>
              )
            })
          }
        </ul>
      </WidgetContainer>
    </div>
  )
}
