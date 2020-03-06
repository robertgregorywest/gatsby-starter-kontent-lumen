import React from 'react'
import { Link } from 'gatsby'
import moment from 'moment'
import './style.scss'

class Post extends React.Component {
  render() {
    const title = this.props.data.elements.title.value;
    const date = this.props.data.elements.date.value;
    const category = this.props.data.elements.category.linked_items[0].elements.title.value;
    const categorySlug = this.props.data.elements.category.linked_items[0].elements.slug.value;
    const description = this.props.data.elements.description.value;
    const slug = `/articles/${this.props.data.elements.slug.value}`;

    return (
      <div className="post">
        <div className="post__meta">
          <time
            className="post__meta-time"
            dateTime={moment(date).format('MMMM D, YYYY')}
          >
            {moment(date).format('MMMM YYYY')}
          </time>
          <span className="post__meta-divider" />
          <span className="post__meta-category" key={categorySlug}>
            <Link to={`/categories/${categorySlug}/`} className="post__meta-category-link">
              {category}
            </Link>
          </span>
        </div>
        <h2 className="post__title">
          <Link className="post__title-link" to={slug}>
            {title}
          </Link>
        </h2>
        <p className="post__description">{description}</p>
        <Link className="post__readmore" to={slug}>
          Read
        </Link>
      </div>
    )
  }
}

export default Post
