import { React, useState } from "react";
import "./signup.css";
import "../Login/login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth, useCart } from "contexts";

export function Signup() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  });
  const { setUser } = useAuth();
  const { dispatch } = useCart();
  let navigate = useNavigate();

  const onHandleSubmit = async () => {
    try {
      const value = await axios.post("/api/auth/signup", userData);
      console.log(value.data.createdUser);
      setUser(value.data.createdUser);
      localStorage.setItem("token", value.data.encodedToken);
      dispatch({
        type: "INITIALIZE_CART",
        payload: value.data.createdUser.cart,
      });
      setUserData({
        email: "",
        password: "",
        confirmPassword: "",
        firstName: "",
        lastName: "",
      });
      navigate("/");
    } catch (e) {
      console.log("error", e);
    }
  };

  return (
    <div className="login-page">
      <div className="signup">
        <h4 className="login-title">Signup</h4>

        <div className="login-label">
          <label for="">First Name</label>
        </div>
        <input
          type="text"
          className="login-input"
          placeholder="Ishita"
          value={userData.firstName}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              firstName: e.target.value,
            }))
          }
        />

        <div className="login-label">
          <label for="">Last Name</label>
        </div>
        <input
          type="text"
          class="login-input"
          value={userData.lastName}
          placeholder="Keshawani"
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              lastName: e.target.value,
            }))
          }
        />

        <div className="login-label">
          <label for="">Email address</label>
        </div>
        <input
          type="text"
          className="login-input"
          placeholder="ishitakeshawani@gmail.com"
          value={userData.email}
          onChange={(e) =>
            setUserData((prev) => ({
              ...prev,
              email: e.target.value,
            }))
          }
        />
        <div>
          <label for="" className="login-label">
            Password
          </label>
        </div>
        <div class="login-password">
          <input
            type="password"
            className="login-password-input"
            placeholder="password"
            value={userData.password}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                password: e.target.value,
              }))
            }
          />
          <button className="login-icon button-style-none">
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>

        <div>
          <label for="" className="login-label">
            Confirm Password
          </label>
        </div>
        <div className="login-password">
          <input
            type="password"
            className="login-password-input"
            placeholder="password"
            value={userData.confirmPassword}
            onChange={(e) =>
              setUserData((prev) => ({
                ...prev,
                confirmPassword: e.target.value,
              }))
            }
          />
          <button className="login-icon button-style-none">
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>
        <div className="flex">
          <div>
            <input type="checkbox" name="remember" id="" />
            <label for="" className="remember-label">
              I accept all Terms & Conditions
            </label>
          </div>
        </div>
        <button
          className="btn btn-login"
          type="submit"
          onClick={onHandleSubmit}
        >
          Signup
        </button>
        <Link to="/login" className="link-no-style signup-link">
          Already have an account
          <i className="fa-solid fa-angle-right login-icon"></i>
        </Link>
      </div>
    </div>
  );
}
