module.exports = {
  siteMetadata: {
    title: 'VP & Associates',
    description: ``,
    author: `whataustinhasmade`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },

    // {
    //   resolve: `gatsby-source-graphql`,`
    //   options: {
    //     typeName: `WORDPRESS`,
    //     fieldName: `wordpress`,``
    //     url: `http://caring-group.dev14.sociusinc.com/graphql`,
    //     // refetchInterval: 60,
    //   }
    // },
    {
			resolve: `gatsby-source-wordpress`,
			options: {
        baseUrl: "whataustinhasmade.com",
        url: "http://whataustinhasmade.com/graphql",
				protocol: "http",
				hostingWPCOM: false,
        useACF: true,
        acfRestVersion: 3,
        acfOptionPageIds: ['options'],
        auth: {},
        verboseOutput: false,
        minimizeDeprecationNotice: true
			}
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /\.inline\.svg$/
        }
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}


