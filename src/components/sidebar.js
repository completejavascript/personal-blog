import React from "react";
import { rhythm } from "../utils/typography";
import WidgetCategory from "../components/widget-category";
import WidgetLatestPost from "../components/widget-latestpost";
import WidgetGoogleSearch from "../components/widget-search";
import WidgetFacebook from "../components/widget-facebook";
import WidgetTagCloud from "../components/widget-tag-cloud";
import WidgetSiteLinks from "../components/widget-site-links";
import "./sidebar.css";

const siteLinks = [
  {
    text: "Ôn luyện thuật toán", 
    link: "https://thuattoan.phamvanlam.com/",
  },
  {
    text: "Complete JavaScript", 
    link: "https://completejavascript.com/",
  },
];

export default props => (
  <aside style={{ paddingTop: `${rhythm(0.35)}` }}>
    <WidgetCategory categories={props.categories} />
    <WidgetLatestPost latestPosts={props.latestPosts} />
    <WidgetGoogleSearch siteUrl={props.siteUrl} />
    <WidgetFacebook fbConfig={props.fbConfig} />
    <WidgetTagCloud tags={props.tags} />
    <WidgetSiteLinks siteLinks={siteLinks} />
  </aside>
);