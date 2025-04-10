import "./ItemList.css";
import Cart from "../Cart/Cart";
import { useEffect, useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import Swal from "sweetalert2";

const ItemList = () => {
  const [bookMarkActive, setBookMarkActive] = useState([]);
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    if (cart.length !== 0) {
      const productId = [...new Set(cart.map((item) => item.id))];
      setBookMarkActive(productId);
    }
  }, [cart]);

  useEffect(() => {
    const totalPrice = cart.reduce((total, item) => total + item.price, 0);
    setTotalPrice(totalPrice);
  }, [cart]);

  const handleBookMark = (product) => {
    const isExist = cart.some((item) => item.id === product.id);

    if (isExist) {
      // Alert__
      const Toast = Swal.mixin({
        toast: true,
        position: "top",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "warning",
        title: "Alrady added to bookmark",
      });
      return;
    }

    const cartData = {
      id: product.id,
      image: product.image,
      description: product.description,
      price: product.currentBidPrice,
      bidsCount: product.bidsCount,
    };

    setCart([cartData, ...cart]);

    // Alert__
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Bookmart added successfully",
    });
  };

  useEffect(() => {
    const url = "./products.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleRemoveBookMark = (id) => {
    const remaining = cart.filter((item) => item.id !== id);
    setCart(remaining);

    if (cart.length === 1) {
      setCart([]);
      setBookMarkActive([]);
    }

    // Alert__
    const Toast = Swal.mixin({
      toast: true,
      position: "top",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Bookmart removed successfully",
    });
  };

  return (
    <>
      <section>
        <div className="main_products_list_top_contaienr">
          <h1>Active Auctions</h1>
          <p>Discover and bid on extraordinary items</p>

          <div className="products_list_container">
            <div className="product_left_side_item_container">
              <div className="overflow-x-auto bg-slate-100 p-5 rounded-lg">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Items</th>
                      <th>Current Bid</th>
                      <th>Time Left</th>
                      <th>Bid Now</th>
                    </tr>
                  </thead>
                  {products.map((product) => (
                    <tbody key={product.id}>
                      <tr className="border-b-2">
                        <td>
                          <div className="flex items-start gap-3">
                            <div className="avatar">
                              <div className="mask h-16 w-24">
                                <img
                                  src={product.image}
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-semibold">
                                {product.title}
                              </div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <p className="font-semibold">
                            ${product.currentBidPrice}
                          </p>
                        </td>

                        <td>
                          <p className="font-semibold">
                            {product.timeLeft}left
                          </p>
                        </td>

                        <th>
                          <button
                            onClick={() => handleBookMark(product)}
                            className={"text-lg"}
                          >
                            {bookMarkActive.includes(product.id) ? (
                              <FaBookmark />
                            ) : (
                              <FaRegBookmark />
                            )}
                          </button>
                        </th>
                      </tr>
                    </tbody>
                  ))}
                </table>
              </div>
            </div>

            <div className="product_right_side_cart_container">
              <div className="product_card_title_container">
                <span>
                  <GiSelfLove />
                </span>
                <h2>Favorite Items</h2>
              </div>

              <div className="product_card_container">
                {cart.length === 0 ? (
                  <div className="product_cart_massage_container">
                    <h1>No products!</h1>
                  </div>
                ) : (
                  cart.map((item) => (
                    <Cart
                      key={item.id}
                      item={item}
                      handleRemoveBookMark={handleRemoveBookMark}
                    ></Cart>
                  ))
                )}
              </div>

              <div className="product_price_container">
                <ul>
                  <li>Total bids Amount:</li>
                  <li>${totalPrice}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ItemList;
