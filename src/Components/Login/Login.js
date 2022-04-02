import { React, useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useCart, useProduct } from "contexts";

export function Login() {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  let navigate = useNavigate();
  const { setUser } = useProduct();
  const { dispatch } = useCart();

  const onSubmitHandler = async () => {
    try {
      const value = await axios.post("/api/auth/login", userData);
      setUser(value.data.foundUser);
      console.log(value.data);
      localStorage.setItem("token", value.data.encodedToken);
      dispatch({
        type: "INITIALIZE_CART",
        payload: value.data.foundUser.cart,
      });
      setUserData({
        email: "",
        password: "",
      });
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="login-page">
      <div className="login">
        <h4 className="login-title">Login</h4>

        <div className="login-label">
          <label for="">Email address</label>
        </div>
        <input
          type="text"
          className="login-input"
          value={userData.email}
          placeholder="xyz@gmail.com"
          onChange={(e) => {
            setUserData((prev) => ({
              ...prev,
              email: e.target.value,
            }));
          }}
        />
        <div>
          <label for="" class="login-label">
            Password
          </label>
        </div>
        <div className="login-password">
          <input
            type="password"
            className="login-password-input"
            placeholder="password"
            value={userData.password}
            onChange={(e) => {
              setUserData((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
          <button className="login-icon button-style-none">
            <i className="fa-regular fa-eye"></i>
          </button>
        </div>
        <div className="flex">
          <div>
            <input type="checkbox" name="remember" id="" />
            <label for="" className="remember-label">
              Remember me
            </label>
          </div>
          <div className="forgot-password semibold-font-weight">
            Forgot your password?
          </div>
        </div>
        <button
          className="btn btn-login"
          onClick={onSubmitHandler}
          type="submit"
        >
          Login
        </button>
        <Link to="/signup" className="link-no-style signup-link">
          Create new account{" "}
          <i className="fa-solid fa-angle-right login-icon"></i>
        </Link>
      </div>
    </div>
  );
}
