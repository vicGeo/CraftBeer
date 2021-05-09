import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from "react-bootstrap";
import { Link } from 'react-router-dom';
import Product from "../components/Product";
import Message from "../components/Message";
import Loader from "../components/Loader";
import Paginate from "../components/Paginate";
import { listProducts } from "../actions/productActions";
import ProductCarousel from "../components/ProductCarousel";
import imageHero from "../images/hero_section.png";

const HomeScreen = ({ match }) => {
  const keyword = match.params.keyword;

  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;

  useEffect(() => {
    dispatch(listProducts(keyword, pageNumber));
  }, [dispatch, keyword, pageNumber]);

  return (
    <>
      {!keyword && (
        <div className="hero-section">
          <Row>
            <Col md={6}>
              <h1>Hello, beer drinker!</h1>
              <p>
              Order the best craft beers on the market.
              </p>
              <p>
                <h4 className="text-hero">
                    FREE SHIPPING ON ORDERS OVER 60€
                </h4>
              </p>
            </Col>
            <Col md={5}>
              <img className="float-right"  src={imageHero} alt="logo" />
            </Col>
          </Row>
        </div>
      )}
      {!keyword ? <ProductCarousel /> : <Link to='/' className='btn btn-light '>GO BACK</Link>}
      <h1 className="text-center">Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Row>
            {products.map((product) => (
              <Col
                sm={12}
                md={6}
                lg={4}
                xl={4}
                className="align-items-stretch d-flex"
                key={product._id}
              >
                <Product product={product} />
              </Col>
            ))}
          </Row>
          <Paginate
            className="justify-content-md-center"
            pages={pages}
            page={page}
            keyword={keyword ? keyword : ""}
          />
        </>
      )}
    </>
  );
};

export default HomeScreen;
