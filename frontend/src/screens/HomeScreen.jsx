import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row, Badge } from "react-bootstrap";
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
            <h4>Hello, world!</h4>
            <p>
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>
            <p>
              <h2>
                Example heading{" "}
                <Badge variant="warning">
                  FREE SHIPPING ON ORDERS OVER 60€ !!!
                </Badge>
              </h2>
            </p>

          </Col>
          <Col md={6}>
          <img src={imageHero} alt="logo"/>
          </Col>
        </Row>
        </div>
      )}
      {!keyword && <ProductCarousel />}
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
