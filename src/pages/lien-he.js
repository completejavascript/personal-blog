import React from "react";
import WidgetContainer from "../components/widget-container";
import Helmet from "react-helmet";

export default ({ data }) => {
  const seoTitle = `Liên hệ - ${data.site.siteMetadata.title}`;
  const url = `${data.site.siteMetadata.siteUrl}/gioi-thieu/`;

  return (
    <article>
      <Helmet
        title={seoTitle}
        meta={[
          { name: 'description', content: `${data.site.siteMetadata.description}` },
          { name: 'keywords', content: `${data.site.siteMetadata.keywords}` },
        ]}
      />

      <h1>Liên hệ</h1>
      <WidgetContainer>
        <p>
          Nếu các bạn có góp ý hay thắc mắc gì về những phần mềm miễn phí, mã nguồn mở mà tôi đã giới thiệu, thì bạn có thể gửi cho tôi bằng những cách sau:
      </p>
        <ul>
          <li>Email: {data.site.siteMetadata.email}</li>
          <li>Facebook Fanpage: <a href={data.site.siteMetadata.fanpage}>Hướng dẫn phần mềm mã nguồn mở</a></li>
        </ul>
      </WidgetContainer>
    </article>
  )
}

export const query = graphql`
  query ContactQuery {
    site {
      siteMetadata {
        title
        subtitle
        description
        keywords
        fanpage
        email
        siteUrl
      }
    }
  }
`