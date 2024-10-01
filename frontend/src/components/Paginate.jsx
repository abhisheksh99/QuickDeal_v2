import { Pagination } from "react-bootstrap"
import { LinkContainer } from "react-router-bootstrap"

// Paginate component for navigation between pages
const Paginate = ({ pages, page, isAdmin = false }) => {
  return (
    // Only render pagination if there's more than one page
    pages > 1 && (
      <Pagination>
        {/* Create an array of page numbers and map over them */}
        {[...Array(pages).keys()].map((x) => (
          <LinkContainer
            key={x + 1}
            // Set link based on whether it's admin view or not
            to={!isAdmin ? `/page/${x + 1}` : `/admin/productlist/${x + 1}`}
          >
            {/* Render pagination item, highlighting current page */}
            <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  )
}

export default Paginate