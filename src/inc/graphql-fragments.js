import { graphql } from 'gatsby'

export const menuFragment = graphql`
fragment wordpress__wp_api_menus_menus_itemsConnectionFragment on wordpress__wp_api_menus_menus_itemsConnection {
  edges {
    node {
      items {
        object_slug
        url
        title
      }
    }
  }

}
`