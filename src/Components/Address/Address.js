import { React, useState } from "react";
import "./address.css";

export function Address() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div class="address">
      <div class="address-sec">
        <div class="address-title">Deliver to: Richard Mason</div>
        <div class="detail-address">
          3, Sec 22, 361, A Jerbai Wadi Road, Near Post Office, Parel,Mumbai
          Maharashtra
        </div>
      </div>
      <button
        id="myBtn"
        class="btn click-btn"
        onClick={() => console.log(!openModal)}
      >
        change
      </button>
      {openModal ? 
        <div id="myModal" class="modal">
          <div class="modal-content">
            <form action="">
              <h6 class="center-text">Add Address</h6>
              <div>
                <label for="" class="name-label">
                  Full Name
                </label>
              </div>
              <input type="text" class="input" />
              <div>
                <label for="" class="name-label">
                  Contact Number
                </label>
              </div>
              <input
                class="input"
                type="tel"
                id="phone"
                name="phone"
                pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
              />
              <div>
                <label for="" class="name-label">
                  Address
                </label>
              </div>
              <input type="address" class="input-address" />
            </form>
            <div class="flex">
              <button class="btn save-btn">save</button>
              <button class="btn close-btn cancel-btn">cancel</button>
            </div>
          </div>
        </div>
       : ""}
    </div>
  );
}
