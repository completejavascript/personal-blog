import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "./widget-container";
import CategoryTag from "../components/category-tag";
import PostInfo from "./post-info";
import "./article-grid.css";

export default (props) => {
  return (
    <div>
      {
        props.title ?
          <h1 style={{ marginTop: `${rhythm(1 / 2)}` }}>{props.title}</h1> :
          null
      }

      <div className="article-grid">
        {props.group.map(({ node }, index) => (
          <div className="article-cell" key={index}>
            <WidgetContainer>
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
              </div>
            </WidgetContainer>
          </div>
        ))}
      </div>
    </div>
  )
}