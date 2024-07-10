import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Product from "../components/Produto";
import Loader from "../components/Loader";
import Message from "../components/Message";
import ProductCarousel from "../components/ProdutoCarousel";
import { fetchProductList } from "../redux/slices/produtoSlice";
import Paginate from "../components/Paginate";
import { useParams } from "react-router-dom";
import { Row, Col } from "react-bootstrap";

function Catalogo() {
  const dispatch = useDispatch();


  const productList = useSelector((state) => state.product.productList);

  
  const { products, loading, error, page, pages } = productList;
  const { pageNumber } = useParams();

  
  let keyword = window.location.search;

  useEffect(() => {
    dispatch(fetchProductList({ keyword, pageNumber }));
  }, [dispatch, keyword, pageNumber]);

  return (
    <div>
      {!keyword && (
        <>
          <div style={{ fontWeight: "bold", fontSize: "25px", color: "black", fontFamily: "MozAnimationDelay" }}>PRODUTOS MAIS AVALIADOS</div>
          <ProductCarousel />
        </>
      )}

      <div style={{ fontWeight: "bold", fontSize: "25px", color: "black", fontFamily: "MozAnimationDelay" }}>PRODUTOS MAIS RECENTES</div>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Row>
            {products.map((product) => (
              <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                <Product product={product} />
              </Col>
            ))}
          </Row>
        </div>
      )}
      <Paginate page={page} pages={pages} keyword={keyword} />
    </div>
  );
}

export default Catalogo;
