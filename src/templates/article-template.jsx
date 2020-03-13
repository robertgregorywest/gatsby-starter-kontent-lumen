import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'

class ArticleTemplate extends React.Component {
  render() {
    const title = this.props.data.kontentItemSiteMetadata.elements.title.value
    const article = this.props.data.allKontentItemArticle.nodes[0]

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${article.elements.title.value} - ${title}`}</title>
            <meta name="description" content={article.elements.description.value} />
          </Helmet>
          <PostTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default ArticleTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
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
    allKontentItemArticle(filter: {elements: {slug: {value: {eq: $slug}}}}, sort: {fields: elements___date___value, order: DESC}) {
      nodes {
        elements {
          category {
            linked_items {
              ... on KontentItemCategory {
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
          date {
            value
          }
          description {
            value
          }
          content {
            resolvedData {
              html
            }
          }
          slug {
            value
          }
          tags {
            linked_items {
              ... on KontentItemTag {
                system {
                  codename
                }
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
          title {
            value
          }
        }
      }
    }
  }
`
