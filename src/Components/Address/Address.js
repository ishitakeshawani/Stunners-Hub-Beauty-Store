import { React, useState } from "react";
import "./address.css";

export function Address() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div className="address">
      <div className="address-sec">
        <div className="address-title">Deliver to: Richard Mason</div>
        <div className="detail-address">
          3, Sec 22, 361, A Jerbai Wadi Road, Near Post Office, Parel,Mumbai
          Maharashtra
        </div>
      </div>
      <button
        id="myBtn"
        className="btn click-btn"
        onClick={() => setOpenModal(true)}
      >
        change
      </button>
      {openModal ? 
        <div id="myModal" className="modal">
          <div className="modal-content">
            <form action="">
              <h6 className="center-text">Add Address</h6>
              <div>
                <label htmlFor="name" className="name-label">
                  Full Name
                </label>
              </div>
              <input type="text" className="input" />
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
                required
              />
              <div>
                <label htmlFor="address" className="name-label">
                  Address
                </label>
              </div>
              <input type="address" className="input-address" />
            </form>
            <div className="flex">
              <button className="btn save-btn">save</button>
              <button className="btn close-btn cancel-btn">cancel</button>
            </div>
          </div>
        </div>
       : ""}
    </div>
  );
}
