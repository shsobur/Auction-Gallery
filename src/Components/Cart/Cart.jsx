import { RxCross2 } from "react-icons/rx";
import "./Cart.css";

const Cart = () => {
  return (
    <>
      <div className="main_product_cart_container">
        <div className="product_cart_image_container">
          <img src="https://i.postimg.cc/8cnjqc07/product-4.jpg" alt="image" />
        </div>

        <div className="product_cart_info_container">
          <div className="product_cart_title_container">
            <h2>1965 Gibson SG Standard Guitar...</h2>
            <button>
              <RxCross2 />
            </button>
          </div>

          <div className="product_cart_price_container">
            <h3>$2,650</h3>
            <h3>Bids: 12</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
