import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "../components/widget-container";
import WidgetTitle from "../components/widget-title";

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
                <li
                  key={index}
                  style={{
                    marginBottom: `${rhythm(0.35)}`,
                    display: `flex`
                  }}
                >

                  <span
                    style={{
                      marginRight: `${rhythm(0.4)}`,
                      color: `#aaa`,
                      fontStyle: `italic`,
                      fontSize: `${rhythm(1.25)}`,
                      lineHeight: 1,
                    }}
                  >
                    {index + 1}.
                  </span>

                  <Link to={node.fields.slug}>
                    {node.frontmatter.title.charAt(0).toUpperCase() + node.frontmatter.title.slice(1)}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </WidgetContainer>
    </div>
  )
}
