import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import "./ItemList.css";
import { useEffect, useState } from "react";
import { GiSelfLove } from "react-icons/gi";
import Cart from "../Cart/Cart";

const ItemList = () => {
  const [markActive, setMarkActive] = useState(null);
  const [products, setProducts] = useState([]);

  const handleBookMark = (id) => {
    setMarkActive(id);
  }

  useEffect(() => {
    const url = "./products.json";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

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
                              <div className="font-semibold">{product.title}</div>
                            </div>
                          </div>
                        </td>

                        <td>
                          <p className="font-semibold">${product.currentBidPrice}</p>
                        </td>

                        <td>
                          <p className="font-semibold">{product.timeLeft}left</p>
                        </td>

                        <th>
                          <button
                            onClick={() => handleBookMark(product.id)}
                            className={markActive ? "bookmark_active text-lg" : "text-lg"}
                          >
                            {markActive === product.id ? <FaBookmark /> : <FaRegBookmark />}
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
                <span><GiSelfLove /></span>
                <h2>Favorite Items</h2>
              </div>

              <div className="product_card_container">
                  <Cart></Cart>
              </div>

              <div className="product_price_container">
                <ul>
                  <li>Total bids Amount:</li>
                  <li>$52,10,670</li>
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
