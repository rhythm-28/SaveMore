import react, { useEffect } from 'react';
import { connect } from 'react-redux';
import OrderSummaryProduct from './orderSummaryProduct';
import { Link } from 'react-router-dom';
import axios from 'axios';
function OrderSummary(props) {
  const { products } = props;
  useEffect(() => {
    return async () => {
      const res = await axios.post('api/user/orderPlaced');
    };
  }, []);
  return (
    <div>
      <h1 className="mb-5 mt-3">Thanks for shopping.</h1>
      {products.map((product) => {
        return <OrderSummaryProduct product={product} />;
      })}

      <Link to="/">
        <button style={{ marginLeft: '45%', marginBottom: '3%' }}>
          Shop Again
        </button>
      </Link>
    </div>
  );
}
const mapStateToProps = ({ cart }) => {
  return { cart };
};
export default connect(mapStateToProps)(OrderSummary);
