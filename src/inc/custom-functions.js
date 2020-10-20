import { useStaticQuery, graphql } from "gatsby"

export const useSiteMenuData = () => {
  const { wordpress } = useStaticQuery(graphql`
      query MenuData {
        wordpress {
          menus {
            nodes {
              name
              menuItems {
                nodes {
                  label
                  id
                  title
                  url
                }
              }
              id
              slug
            }
          }
        }
      }
    `
  )

  return wordpress.menus

}

