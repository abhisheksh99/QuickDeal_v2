import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product.jsx'
import { useGetProductsQuery } from '../slices/productsApiSlice.js'
import Loader from '../components/Loader' 
import Message from '../components/Message' 
import { useParams } from 'react-router-dom'
import Paginate from "../components/Paginate.jsx"
import { Link } from 'react-router-dom'
import ProductCarousel from '../components/ProductCarousel.jsx'

const HomeScreen = () => {
  const {pageNumber,keyword} = useParams()
  const { data, isLoading, isError, error } = useGetProductsQuery({pageNumber,keyword})

  return (
    <>
    {!keyword ? <ProductCarousel/> :(<Link to="/" className="btn btn-dark mb-4">Go Back</Link>)}
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <Message variant="danger">{error?.data?.message || error.error}</Message>
      ) : data && data.products ? (
        <>
          <h1>Latest Products</h1>
          <Row>
            {data.products.map((product) => (
              <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate pages={data.pages} page={data.page} keyword ={keyword ? keyword : "" }/>
        </>
      ) : (
        <Message variant="info">No products found</Message>
      )}
    </>
  )
}

export default HomeScreen