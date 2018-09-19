import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "./widget-container";
import PostInfo from "./post-info";
import { GridContainer, GridRow, GridColumn } from "../components/grid";

const thumbnailStyle = {
  width: `100%`,
  height: `auto`
}

export default (props) => {
  return (
    <div>
      {
        props.title ?
          <h1 style={{ marginTop: `${rhythm(1 / 2)}` }}>{props.title}</h1> :
          null
      }

      {props.group.map(({ node }, index) => (
        <WidgetContainer key={index}>
          <GridRow>
            <GridColumn xs={12} sm={12} md={6}>
              {
                node.frontmatter.thumbnail !== "" ?
                  <Link to={node.fields.slug} style={thumbnailStyle}>
                    <img src={node.frontmatter.thumbnail}></img>
                  </Link> : null
              }
              <PostInfo
                date={node.frontmatter.date}
                timeToRead={node.timeToRead}
                categories={node.frontmatter.categories}
              />
            </GridColumn>

            <GridColumn xs={12} sm={12} md={6}>
              <h2
                style={{
                  marginBottom: `${rhythm(1 / 4)}`,
                  marginTop: `0`
                }}
              >
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>

              <p
                style={{
                  display: `flex`,
                  paddingTop: `${rhythm(1 / 2)}`,
                }}
              >
                {node.excerpt}
              </p>
            </GridColumn>
          </GridRow>
        </WidgetContainer>
      ))}
    </div>
  )
}
