import React from "react";
import Link from "gatsby-link";
import 'font-awesome/css/font-awesome.css';
import { GridContainer, GridRow, GridColumn } from "../components/grid";

const NavPostLink = props => {
  const { post, children } = props;

  return (
    <div
      style={{
        whiteSpace: `nowrap`,
        overflow: `hidden`,
        textOverflow: `ellipsis`,
      }}
    >
      {
        post.slug !== "" ?
          <Link to={post.slug}>{children}</Link> :
          <span>{children}</span>
      }
    </div>
  )
}

export default props => {
  const { prevPost, nextPost } = props;

  return (
    <GridContainer>
      <GridRow>
        <GridColumn md={6} sm={12} xs={12}>
          <div style={{ textAlign: `left` }}>
            <div>
              <i className="fa fa-angle-double-left"></i>{" "}{"Quay lại"}
            </div>
            <NavPostLink post={prevPost} >
              {prevPost.title}
            </NavPostLink>
          </div>
        </GridColumn>

        <GridColumn md={6} sm={12} xs={12}>
          <div style={{ textAlign: `right` }}>
            <div>
              {"Tiếp theo"}{" "}<i className="fa fa-angle-double-right"></i>
            </div>
            <NavPostLink post={nextPost} >
              <span>{nextPost.title}</span>
            </NavPostLink>
          </div>
        </GridColumn>
      </GridRow>
    </GridContainer>
  )
}