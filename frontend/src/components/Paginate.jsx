import { Pagination } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

// Paginate component for navigation between pages
const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    // Only render pagination if there's more than one page
    pages > 1 && (
      <Pagination>
        {/* Create an array of page numbers and map over them */}
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            to={
              // Determine the link based on admin status and keyword
              !isAdmin
                ? keyword // If not admin and keyword exists
                  ? `/search/${keyword}/page/${x + 1}` // Link for search results
                  : `/page/${x + 1}` // Regular pagination link
                : `/admin/productlist/${x + 1}` // Admin product list link
            }
          >
            {/* Render pagination item, highlighting the current page */}
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate