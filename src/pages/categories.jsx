import React from 'react'
import { Link, graphql } from 'gatsby'
import Helmet from 'react-helmet'
import Layout from '../components/Layout'
import Sidebar from '../components/Sidebar'

class CategoriesRoute extends React.Component {
  render() {
    const categoriesData = this.props;
    const { title } = categoriesData.data.site
    const categories = this.props.data.allKontentItemCategory.nodes

    return (
      <Layout>
        <div>
          <Helmet title={`All Categories - ${title}`} />
          <Sidebar {...categoriesData} />
          <div className="content">
            <div className="content__inner">
              <div className="page">
                <h1 className="page__title">Categories</h1>
                <div className="page__body">
                  <div className="categories">
                    <ul className="categories__list">
                      {categories.map(category => (
                        <li
                          key={category.system.codename}
                          className="categories__list-item"
                        >
                          <Link
                            to={`/categories/${category.elements.slug.value}/`}
                            className="categories__list-item-link"
                          >
                            {category.elements.slug.value} ({category.usedByContentItems.length})
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

export default CategoriesRoute

export const pageQuery = graphql`
  query CategoriesQuery {
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
    allKontentItemCategory {
      nodes {
        elements {
          slug {
            value
          }
          title {
            value
          }
        }
        usedByContentItems {
          system {
            codename
          }
        }
        system {
          codename
        }
      }
    }
  }
`
