import React from "react";
import { MDBIcon } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease, remove } from "./redux/actions";

const CartItems = ({ id, img, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <div style={{ width: "70vw", maxWidth: "90vw", margin: "0px auto" }}>
      <div className="row" style={{ marginTop: "20px", marginLeft: "120px" }}>
        <div className="col-sm-2">
          <img
            src={img}
            className="img-fluid"
            alt={title}
            style={{ objectFit: "cover", width: "5rem", height: "5rem" }}
          />
        </div>
        <div className="col-sm-2">
          <h5>{title}</h5>
          <h5 style={{ color: "#617d98" }}>${price}</h5>
          <MDBIcon
            fas
            icon="trash"
            style={{ cursor: "pointer", color: "red" }}
            onClick={() => dispatch(remove(id))}
          />
        </div>
        <div className="col-sm-8">
          <MDBIcon
            fas
            icon="chevron-up"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(increase(id))}
          />
          <p style={{ marginTop: "10px" }}>{amount}</p>
          <MDBIcon
            fas
            icon="chevron-down"
            style={{ cursor: "pointer" }}
            onClick={() => dispatch(decrease(id))}
          />
        </div>
      </div>
    </div>
  );
};

export default CartItems;
