import React from 'react';
import { Link } from 'gatsby';
import './style.scss'

const Pagination = ({
    prevPagePath,
    nextPagePath,
    hasNextPage,
    hasPrevPage
}) => {
    const paginationText = {
        PreviousPage: '← PREV',
        NextPage: '→ NEXT'
    }

    return (
        <div className="pagination">
            <div className="pagination__prev">
                <Link rel="prev" to={hasPrevPage ? prevPagePath : '/'} className={prevClassName}>{paginationText.PreviousPage}</Link>
            </div>
            <div className="pagination__next">
                <Link rel="next" to={hasNextPage ? nextPagePath : '/'} className={nextClassName}>{paginationText.NextPage}</Link>
            </div>
        </div>
    )
}

export default Pagination
