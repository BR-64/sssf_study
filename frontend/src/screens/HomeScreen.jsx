import { Row, Col } from 'react-bootstrap';
import Product from '../components/Product';
import products from '../products.js';

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product._id}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
