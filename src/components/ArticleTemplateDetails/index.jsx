import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import Disqus from '../Disqus/Disqus'
import './style.scss'

class ArticleTemplateDetails extends React.Component {
  render() {
    const articleTemplateData = this.props
    const subtitle = articleTemplateData.data.kontentItemSiteMetadata.elements.subtitle.value
    const author = articleTemplateData.data.kontentItemAuthor
    const article = this.props.data.allKontentItemArticle.nodes[0].elements
    const tags = article.tags.linked_items

    const homeBlock = (
      <div>
        <Link className="article-single__home-button" to="/">
          All Articles
        </Link>
      </div>
    )

    const tagsBlock = (
      <div className="article-single__tags">
        <ul className="article-single__tags-list">
          {tags &&
            tags.map((tag) => (
              <li className="article-single__tags-list-item" key={tag.system.codename}>
                <Link to={`/tags/${tag.elements.slug.value}`} className="article-single__tags-list-item-link">
                  {tag.elements.title.value}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    )

    const commentsBlock = (
      <div>
        <Disqus
          postNode={article}
          siteMetadata={this.props.data.kontentItemSiteMetadata.elements.title.value}
        />
      </div>
    )

    return (
      <div>
        {homeBlock}
        <div className="article-single">
          <div className="article-single__inner">
            <h1 className="article-single__title">{article.title.value}</h1>
            <div
              className="article-single__body"
              /* eslint-disable-next-line react/no-danger */
              dangerouslySetInnerHTML={{ __html: article.content.resolvedData.html }}
            />
            <div className="article-single__date">
              <em>
                Published {moment(article.date.value).format('D MMM YYYY')}
              </em>
            </div>
          </div>
          <div className="article-single__footer">
            {tagsBlock}
            <hr />
            <p className="article-single__footer-text">
              {subtitle}
              <a
                href={`https://twitter.com/${author.elements.twitter.value}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <br /> <strong>{author.elements.name.value}</strong> on Twitter
              </a>
            </p>
            {commentsBlock}
          </div>
        </div>
      </div>
    )
  }
}

export default ArticleTemplateDetails
