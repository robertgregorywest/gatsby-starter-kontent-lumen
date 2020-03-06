import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import kebabCase from 'lodash/kebabCase'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'
import { getSiteInfo } from '../utils/kontentItemNodeUtils'

class TagsRoute extends React.Component {
  render() {
    let tagsData = this.props;
    tagsData.data.site = getSiteInfo(this.props.data.kontentItemMenu, this.props.data.kontentItemAuthor, this.props.data.kontentItemSiteMetadata);

    const { title } = tagsData.data.site.siteMetadata
    const tags = tagsData.data.allKontentItemTag.nodes
    
    return (
      <Layout>
        <div>
          <Helmet title={`All Tags - ${title}`} />
          <Sidebar {...tagsData} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">Tags</h1>
                <div className="page__body">
                  <div className="tags">
                    <ul className="tags__list">
                      {tags.map(tag => (
                        <li key={tag.elements.title.value} className="tags__list-item">
                          <Link
                            to={`/tags/${tag.elements.slug.value}/`}
                            className="tags__list-item-link"
                          >
                            {tag.elements.title.value} (9)
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }
}

export default TagsRoute

export const pageQuery = graphql`
  query TagsQuery {
    kontentItemSiteMetadata(system: {codename: {eq: "site_metadata"}}) {
      elements {
        copyright {
          value
        }
        subtitle {
          value
        }
        title {
          value
        }
      }
    }
    kontentItemMenu(system: {codename: {eq: "navigation_menu"}}) {
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
    kontentItemAuthor(system: {codename: {eq: "author"}}) {
      elements {
        bio {
          value
        }
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
    allKontentItemTag {
      nodes {
        elements {
          title {
            value
          }
          slug {
            value
          }
        }
      }
    }
  }
`
