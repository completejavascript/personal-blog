module.exports = {
  siteMetadata: {
    siteUrl: `https://phamvanlam.com`,
    title: `Lam Pham Blog`,
    subtitle: `Chia sẻ về các phần mềm miễn phí hay nhất`,
    description: `Blog này được lập nên với mục đích chia sẻ những kiến thức và kinh nghiệm của bản thân về các các phần mềm miễn phí, mã nguồn mở,... tốt nhất`,
    keywords: `phan-mem, phan mem, ma nguon mo, ma-nguon-mo, open-source, phan mem mien phi, phan-mem-mien-phi`,
    fanpage: `https://www.facebook.com/hdopensource/`,
    email: 'lampv606@gmail.com',
    twitterHandle: ``,
    pageLength: 6,
    lang: `vi`,
    fbPageId: `711515045902029`,
    fbCommentId: `258963164755571`,
    fbId: `100013577851883`,
    siteLinks: [
      {
        text: "Ôn luyện thuật toán", 
        link: "https://thuattoan.phamvanlam.com/",
      },
      {
        text: "Complete JavaScript", 
        link: "https://completejavascript.com/",
      },
      {
        text: "Portfolio", 
        link: "http://about.phamvanlam.com/",
      },
    ]
  },
  pathPrefix: `/personal-blog`,
  plugins: [
    `gatsby-plugin-glamor`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-embed-gist",
            options: {
              username: 'completejavascript',
              includeDefaultCss: true
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 590,
            },
          },
          {
            resolve: "gatsby-remark-embed-video",
            options: {
              width: 800,
              ratio: 1.77, // Optional: Defaults to 16/9 = 1.77
              height: 400, // Optional: Overrides optional.ratio
              related: false, //Optional: Will remove related videos from the end of an embedded YouTube video.
              noIframeBorder: true //Optional: Disable insertion of <style> border: 0
            }
          },
          "gatsby-remark-responsive-iframe",
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              // Class prefix for <pre> tags containing syntax highlighting;
              // defaults to 'language-' (eg <pre class="language-js">).
              // If your site loads Prism into the browser at runtime,
              // (eg for use with libraries like react-live),
              // you may use this to prevent Prism from re-processing syntax.
              // This is an uncommon use-case though;
              // If you're unsure, it's best to use the default value.
              classPrefix: "language-",
              // This is used to allow setting a language for inline code
              // (i.e. single backticks) by creating a separator.
              // This separator is a string and will do no white-space
              // stripping.
              // A suggested value for English speakers is the non-ascii
              // character '›'.
              inlineCodeMarker: null,
              // This lets you set up language aliases.  For example,
              // setting this to '{ sh: "bash" }' will let you use
              // the language "sh" which will highlight using the
              // bash highlighter.
              aliases: {},
            },
          },
        ]
      }
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96543695-3",
        // Puts tracking script in the head instead of the body
        head: false,
        // Setting this parameter is optional
        anonymize: true,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: [],
      },
    },
    {
      resolve: `gatsby-plugin-sitemap`
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};
