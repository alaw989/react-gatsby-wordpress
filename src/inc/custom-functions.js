import { useStaticQuery, graphql } from "gatsby"


export const useSiteMenuData = () => {
  // const { wordpress } = useStaticQuery(graphql`
  //     query MenuData {
  //       wordpress {
  //         menus {
  //           nodes {
  //             name
  //             menuItems {
  //               nodes {
  //                 label
  //                 id
  //                 title
  //                 url
  //               }
  //             }
  //             id
  //             slug
  //           }
  //         }
  //       }
  //     }
  //   `
  // )

  // return wordpress.menus

}

export const scrollPosition = () => {

  var maxPosition = ""

  scrollPosition.scrollPosition < 900 ? maxPosition = scrollPosition.scrollPosition : maxPosition = 900

  return maxPosition;
}
