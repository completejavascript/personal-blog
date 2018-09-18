import React from "react";
import { rhythm } from "../utils/typography";
import Helmet from "react-helmet";
import profile from "../images/profile_phamvanlam-com-co-dien.jpg";
import WidgetContainer from "../components/widget-container";

export default ({ data }) => {
  const seoTitle = `Giới thiệu - ${data.site.siteMetadata.title}`;
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

      <h1>Giới thiệu</h1>
      <WidgetContainer>
        <img
          src={profile}
          alt="profile_phamvanlam-com-co-dien"
          width="252" height="auto"
          style={{ float: `left`, paddingRight: `${rhythm(1 / 2)}` }}
        />
        <p>
          Xin chào các bạn! Tôi là Phạm Văn Lâm, cựu sinh viên Đại học Bách Khoa Hà Nội chuyên ngành Điện tử – Viễn thông. Hiện tại, tôi đang làm việc tại SVMC – trung tâm nghiên cứu và phát triển điện thoại di động Samsung tại Việt Nam.
        </p>
        <p>
          Blog này được lập nên với mục đích chia sẻ những kiến thức và kinh nghiệm của bản thân về các các phần mềm miễn phí, mã nguồn mở,... tốt nhất
        </p>
        <p>
          Vì như các bạn đã biết, tiền mua bản quyền sử dụng các phần mềm chỉnh sửa ảnh như Adobe Photoshop, phần mềm chỉnh sửa video như Adobe Premiere hay phần mềm văn phòng Microsoft Office,… là không hề nhỏ. Vì vậy, trong quá trình học tập và làm việc, tôi đã tìm hiểu và sử dụng một số phần mềm mã nguồn mở thay thế như GIMP (chỉnh sửa hình ảnh), KDEnlive (chỉnh sửa video), Libre Office (phần mềm văn phòng),…
        </p>
        <p>
          Tôi nhận thấy rằng những phần mềm mã nguồn mở này hoàn toàn miễn phí mà không hề thua kém gì các phần mềm chuyên nghiệp. Do đó, tôi lập nên trang này với mục đích chia sẻ những kiến thức và kinh nghiệm của bản thân về cách sử dụng các phần mềm mã nguồn mở như GIMP, KDEnlive, Libre Office,… với các bạn.
        </p>
        <p>
          Rất mong nhận được sự ủng hộ và đóng góp ý kiến của các bạn để trang web ngày càng hoàn thiện hơn. Qua đó, tôi có thêm nhiều động lực để phát triển trang này.
        </p>
      </WidgetContainer>
    </article>
  )
}

export const query = graphql`
  query AboutQuery {
    site {
      siteMetadata {
        siteUrl
        title
        subtitle
        description
        keywords
      }
    }
  }
`