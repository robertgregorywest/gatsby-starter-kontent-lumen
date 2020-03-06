import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PostTemplateDetails from '../components/PostTemplateDetails'

class PostTemplate extends React.Component {
  render() {
    const title= this.props.data.site.siteMetadata.title
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

export default PostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        author {
          name
          twitter
        }
        disqusShortname
        url
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
