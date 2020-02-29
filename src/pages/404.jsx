import React from 'react'
import { graphql } from 'gatsby'
import Sidebar from '../components/Sidebar'
import Layout from '../components/Layout'
import { getSiteInfo } from '../utils/kontentItemNodeUtils'

class NotFoundRoute extends React.Component {
  render() {
    const siteInfo = {
      data: {
        site: getSiteInfo(
          this.props.data.kontentItemMenu,
          this.props.data.kontentItemAuthor
        ),
      },
    }

    return (
      <Layout>
        <div>
          <Sidebar {...siteInfo} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">NOT FOUND</h1>
                <div className="page__body">
                  <p>
                    You just hit a route that doesn&#39;t exist... the sadness.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default NotFoundRoute

export const pageQuery = graphql`
  query NotFoundQuery {
    kontentItemMenu(system: { codename: { eq: "navigation_menu" } }) {
      elements {
        menu_items {
          linked_items {
            ... on KontentItemMenuItem {
              id
              elements {
                label {
                  value
                }
                path {
                  value
                }
              }
            }
          }
        }
      }
    }
    kontentItemAuthor(system: { codename: { eq: "author" } }) {
      elements {
        email {
          value
        }
        github {
          value
        }
        name {
          value
        }
        rss {
          value
        }
        telegram {
          value
        }
        twitter {
          value
        }
        vk {
          value
        }
        avatar_image {
          value {
            url
          }
        }
      }
    }
  }
`
