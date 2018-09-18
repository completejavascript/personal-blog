import React from "react";
import 'font-awesome/css/font-awesome.css';
import { rhythm } from "../utils/typography";
import Link from "gatsby-link";
import slug from "slug";

export default (props) => {
  const { date, timeToRead, categories } = props;
  const itemStyle = {
    marginRight: `${rhythm(0.75)}`,
    color: "#ABABAB",
    fontSize: `${rhythm(0.5)}`
  }

  return (
    <div>
      <span style={itemStyle}>
        <i className="fa fa-calendar"></i>{" "}
        {date}
      </span>

      {/* <span style={itemStyle}>
        <i className="fa fa-clock-o"></i>{" "}
        {`${timeToRead} ${timeToRead > 1 ? `minutes read` : `minute read`}`}
      </span> */}

      <span style={itemStyle}>
        <i className="fa fa-folder-open"></i>{" "}
        {
          categories.map((category, index) => {
            return (
              <Link key={index} to={`/category/${slug(category).toLowerCase()}/`}>
                {
                  index < categories.length - 1 ?
                    <span key={index}>{category}, </span> :
                    <span key={index}>{category} </span>
                }
              </Link>
            )
          })
        }
      </span>
    </div>
  )
}