import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "./widget-container";
import CategoryTag from "../components/category-tag";
import PostInfo from "./post-info";

export default (props) => {
  return (
    <div>
      <h1 style={{ marginTop: `${rhythm(1 / 2)}` }}>{props.title}</h1>

      {props.group.map(({ node }, index) => (
        <WidgetContainer key={index}>
          {
            node.frontmatter.thumbnail !== "" ?
              <Link to={node.fields.slug}>
                <img src={node.frontmatter.thumbnail}></img>
              </Link> : null
          }
          <div>
            <h2
              style={{
                marginBottom: `${rhythm(1 / 4)}`,
                marginTop: `${rhythm(1 / 4)}`
              }}
            >
              <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
            </h2>

            <PostInfo
              date={node.frontmatter.date}
              timeToRead={node.timeToRead}
              categories={node.frontmatter.categories}
            />

            <p
              style={{
                display: `flex`,
                marginTop: `${rhythm(1 / 2)}`,
                paddingTop: `${rhythm(1 / 2)}`,
                borderTop: `1px solid hsla(0,0%,0%,0.07)`,
              }}
            >
              {node.excerpt}
            </p>

            <Link to={node.fields.slug}>Đọc thêm</Link>
            <CategoryTag node={node} />
          </div>
        </WidgetContainer>
      ))}
    </div>
  )
}