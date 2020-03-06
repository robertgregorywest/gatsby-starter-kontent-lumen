const _ = require('lodash')
const Promise = require('bluebird')
const path = require('path')
const slash = require('slash')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const postTemplate = path.resolve('./src/templates/post-template.jsx')
    const pageTemplate = path.resolve('./src/templates/page-template.jsx')
    const tagTemplate = path.resolve('./src/templates/tag-template.jsx')
    const categoryTemplate = path.resolve(
      './src/templates/category-template.jsx'
    )

    graphql(`
      {
        allKontentItemCategory {
          nodes {
            system {
              codename
            }
            elements {
              slug {
                value
              }
              title {
                value
              }
            }
          }
        }
        allKontentItemTag {
          nodes {
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
        allKontentItemPage {
          nodes {
            elements {
              description {
                value
              }
              title {
                value
              }
              slug {
                value
              }
            }
          }
        }
        allKontentItemArticle {
          nodes {
            elements {
              category {
                linked_items {
                  ... on KontentItemCategory {
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
    `).then(result => {
      if (result.errors) {
        console.log(result.errors)
        reject(result.errors)
      }

      _.each(result.data.allKontentItemPage.nodes, node => {
        createPage({
          path: `/${node.elements.slug.value}/`,
          component: slash(pageTemplate),
          context: { slug: `${node.elements.slug.value}`},
        });
      });

      _.each(result.data.allKontentItemArticle.nodes, node => {
        createPage({
          path: `/articles/${node.elements.slug.value}/`,
          component: slash(postTemplate),
          context: { slug: `${node.elements.slug.value}`},
        });
      });

      let tags = result.data.allKontentItemTag.nodes;
      _.each(tags, tag => {
        const tagCodename = tag.system.codename
        const tagTitle = tag.elements.title.value
        createPage({
          path: `/tags/${tag.elements.slug.value}/`,
          component: tagTemplate,
          context: { tagCodename, tagTitle },
        })
      })

      let categories = result.data.allKontentItemCategory.nodes;
      _.each(categories, category => {
        const categoryCodename = category.system.codename
        const categoryTitle = category.elements.title.value
        createPage({
          path: `/categories/${category.elements.slug.value}/`,
          component: categoryTemplate,
          context: { categoryCodename, categoryTitle },
        })
      })


      // _.each(result.data.allMarkdownRemark.edges, edge => {
      //   if (_.get(edge, 'node.frontmatter.layout') === 'post') {         
      //      createPage({
      //         path: edge.node.fields.slug,
      //         component: slash(postTemplate),
      //         context: { slug: edge.node.fields.slug },
      //       })

      //     let tags = []
      //     if (_.get(edge, 'node.frontmatter.tags')) {
      //       tags = tags.concat(edge.node.frontmatter.tags)
      //     }

      //     tags = _.uniq(tags)
      //     _.each(tags, tag => {
      //       const tagPath = `/tags/${_.kebabCase(tag)}/`
      //       createPage({
      //         path: tagPath,
      //         component: tagTemplate,
      //         context: { tag },
      //       })
      //     })

      //     let categories = []
      //     if (_.get(edge, 'node.frontmatter.category')) {
      //       categories = categories.concat(edge.node.frontmatter.category)
      //     }

      //     categories = _.uniq(categories)
      //     _.each(categories, category => {
      //       const categoryPath = `/categories/${_.kebabCase(category)}/`
      //       createPage({
      //         path: categoryPath,
      //         component: categoryTemplate,
      //         context: { category },
      //       })
      //     })
      //   }
      // })

      resolve()
    })
  })
}

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions

//   if (node.internal.type === 'File') {
//     const parsedFilePath = path.parse(node.absolutePath)
//     const slug = `/${parsedFilePath.dir.split('---')[1]}/`
//     createNodeField({ node, name: 'slug', value: slug })
//   } else if (
//     node.internal.type === 'MarkdownRemark' &&
//     typeof node.slug === 'undefined'
//   ) {
//     const fileNode = getNode(node.parent)
//     let slug = fileNode.fields.slug
//     if (typeof node.frontmatter.path !== 'undefined') {
//       slug = node.frontmatter.path
//     }
//     createNodeField({
//       node,
//       name: 'slug',
//       value: slug,
//     })

//     if (node.frontmatter.tags) {
//       const tagSlugs = node.frontmatter.tags.map(
//         tag => `/tags/${_.kebabCase(tag)}/`
//       )
//       createNodeField({ node, name: 'tagSlugs', value: tagSlugs })
//     }

//     if (typeof node.frontmatter.category !== 'undefined') {
//       const categorySlug = `/categories/${_.kebabCase(
//         node.frontmatter.category
//       )}/`
//       createNodeField({ node, name: 'categorySlug', value: categorySlug })
//     }
//   }
// }
