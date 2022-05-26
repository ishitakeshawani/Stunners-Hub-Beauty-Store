import { useCart } from "contexts";
import { React, useState } from "react";
import "./address.css";

export function Address() {
  const [openModal, setOpenModal] = useState(false);
  const { dispatch, cartState } = useCart();
  const [userAddress, setUserAddress] = useState({
    name: "",
    phoneNo: "",
    address: "",
  });
  const address = cartState?.address;
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "SET_ADDRESS",
      payload: userAddress,
    });
    setUserAddress({
      name: "",
      phoneNo: "",
      address: "",
    });
  };
  return (
    <div className="address">
      <div className="address-sec">
        <div className="address-title">
          {address.name ? `Deliver to: ${address.name}` : `Address`}
        </div>
        <div className="detail-address">
          {address.address ? address.address : "Please add address here"}
        </div>
      </div>
      <button
        id="myBtn"
        className="btn click-btn"
        onClick={() => setOpenModal(true)}
      >
        Add
      </button>
      {openModal ? (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <form onSubmit={handleSubmit}>
              <h6 className="center-text">Add Address</h6>
              <div>
                <label htmlFor="name" className="name-label">
                  Full Name
                </label>
              </div>
              <input
                type="text"
                className="input"
                required
                onChange={(e) =>
                  setUserAddress((prev) => ({ ...prev, name: e.target.value }))
                }
              />
              <div>
                <label htmlFor="number" className="name-label">
                  Contact Number
                </label>
              </div>
              <input
                className="input"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                onChange={(e) =>
                  setUserAddress((prev) => ({
                    ...prev,
                    phoneNo: e.target.value,
                  }))
                }
                required
              />
              <div>
                <label htmlFor="country" className="name-label">
                  Country
                </label>
              </div>
              <input type="text" className="input" required/>
              <div>
                <label htmlFor="address" className="name-label">
                  Address
                </label>
              </div>
              <input
                type="address"
                required
                className="input-address"
                onChange={(e) =>
                  setUserAddress((prev) => ({
                    ...prev,
                    address: e.target.value,
                  }))
                }
              />
            </form>
            <div className="flex">
              <button
                className="btn save-btn"
                type="submit"
                onClick={(e) => {
                  setOpenModal(false);
                  handleSubmit(e);
                }}
              >
                save
              </button>
              <button
                className="btn close-btn cancel-btn"
                onClick={() => setOpenModal(false)}
              >
                cancel
              </button>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
