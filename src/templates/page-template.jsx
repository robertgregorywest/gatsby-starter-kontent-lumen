import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import PageTemplateDetails from '../components/PageTemplateDetails'
import { getSiteInfo } from '../utils/kontentItemNodeUtils'

class PageTemplate extends React.Component {
  render() {
    let pageTemplateData = this.props;
    pageTemplateData.data.site = getSiteInfo(pageTemplateData.data.kontentItemMenu, pageTemplateData.data.kontentItemAuthor, pageTemplateData.data.kontentItemSiteMetadata);

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTemplateData.data.site.title} - ${pageTemplateData.data.kontentItemPage.elements.title.value}`}</title>
            <meta name="description" content={pageTemplateData.data.kontentItemPage.elements.meta_description.value} />
          </Helmet>
          <PageTemplateDetails {...pageTemplateData} />
        </div>
      </Layout>
    )
  }
}

export default PageTemplate

export const pageQuery = graphql`
  query PageBySlug($slug: String!) {
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
    kontentItemPage(elements: {slug: {value: {eq: $slug}}}) {
      id
      system {
        id
      }
      elements {
        description {
          resolvedData {
            html
          }
          value
        }
        meta_description  {
          value
        }
        title {
          value
        }
      }
    }
  }
`
