import React, { useEffect } from "react";
import { MDBBtn, MDBIcon } from "mdb-react-ui-kit";
// import CartData from "./data";
import CartItems from "./CartItems";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, clearItems } from "./redux/actions";

const CartContainer = () => {
  const { cart, totalAmount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  if (cart.length === 0) {
    return (
      <h3 className="fw-bold" style={{ marginTop: "20px" }}>
        Your Shopping{" "}
        <span>
          <MDBIcon fas icon="shopping-bag" />
        </span>{" "}
        is Empty
      </h3>
    );
  }
  return (
    <div>
      <h2 className="fw-bold">Your Shopping Cart</h2>
      {cart.map((item) => {
        return <CartItems key={item.id} {...item} />;
      })}
      <footer>
        <hr />
        <div>
          <h4
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              marginRight: "60px",
            }}
          >
            Total <span>${totalAmount}</span>
          </h4>
        </div>
        <MDBBtn
          color="danger"
          onClick={() => dispatch(clearItems())}
          style={{ width: "140px", marginTop: "30px" }}
        >
          Clear Cart
        </MDBBtn>
      </footer>
    </div>
  );
};

export default CartContainer;
