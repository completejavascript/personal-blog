import React from "react";
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import WidgetContainer from "./widget-container";
import PostInfo from "./post-info";
import { GridRow, GridColumn } from "../components/grid";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/opacity.css';

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
                  <Link to={node.fields.slug}>
                    <LazyLoadImage 
                      src={node.frontmatter.thumbnail} 
                      effect={"opacity"}
                      width={`100%`}
                      height={`auto`}
                    />
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
                  marginBottom: `0`,
                  marginTop: `0`,
                  paddingBottom: `${rhythm(3 / 4)}`
                }}
              >
                <Link to={node.fields.slug}>{node.frontmatter.title}</Link>
              </h2>

              <p style={{ paddingTop: `${rhythm(1 / 2)}`, margin: `0`}}>
                {node.excerpt}
              </p>
            </GridColumn>
          </GridRow>
        </WidgetContainer>
      ))}
    </div>
  )
}
