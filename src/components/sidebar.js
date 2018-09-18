import React from "react";
import { rhythm } from "../utils/typography";
import WidgetCategory from "../components/widget-category";
import WidgetLatestPost from "../components/widget-latestpost";
import WidgetGoogleSearch from "../components/widget-search";
import WidgetFacebook from "../components/widget-facebook";
import WidgetTagCloud from "../components/widget-tag-cloud";
import "./sidebar.css";

export default props => (
  <aside style={{paddingTop: `${rhythm(0.35)}`}}>
    <WidgetCategory categories={props.categories} />
    <WidgetLatestPost latestPosts={props.latestPosts} />
    <WidgetGoogleSearch siteUrl={props.siteUrl} />
    <WidgetFacebook fbConfig={props.fbConfig}/>
    <WidgetTagCloud tags={props.tags} />
  </aside>
);