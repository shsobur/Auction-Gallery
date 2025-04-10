import "./Cart.css";
import { RxCross2 } from "react-icons/rx";

const Cart = ({ item, handleRemoveBookMark }) => {
  const { id, image, price, description, bidsCount } = item;

  return (
    <>
      <div className="main_product_cart_container">
        <div className="product_cart_image_container">
          <img src={image} alt="image" />
        </div>

        <div className="product_cart_info_container">
          <div className="product_cart_title_container">
            <h2>
              {description.length == 35
                ? `${description}`
                : `${description.slice(0, 35)}...`}
            </h2>
            <button onClick={() => handleRemoveBookMark(id)}>
              <RxCross2 />
            </button>
          </div>

          <div className="product_cart_price_container">
            <h3>${price}</h3>
            <h3>Bids: {bidsCount}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;