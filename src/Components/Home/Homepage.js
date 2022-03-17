import { React,useEffect,useState } from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./homepage.css";
import { topbrandslist } from "../../backend/db/topbrands";
import firstcollection from "./Images/collection1.jfif";
import secondcollection from "./Images/collection2.jfif";

export default function Homepage() {

  const [categorylist,setCategoryList] = useState([]);
  
  useEffect(()=>{
    const fetchData = async () =>{
      const data = await fetch('/api/categories');
      const jsonData = await data.json();
      setCategoryList(jsonData.categories);
    }
    fetchData();
  },[]);

  return (
    <div>
      <Navbar />

      <div className="banner">
        <button className="btn image-btn">Shop Now</button>
      </div>

      <div className="categories">
        <div className="categories-title">Top Categories</div>
        <div className="category-list">
          {categorylist.map((val) => (
            <div className="category-list-item">
              <div className="category-list-item-name">{val.categoryName}</div>
              <img
                className="category-list-item-image"
                src={val.image}
                alt="category-items"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="onlyat-section">
        <div className="onlyat-section-title">Only At Stunners Hub</div>
        <div className="onlyat-list">
          <img
            className="onlyat-item"
            src={firstcollection}
            alt="collection-items"
          />
          <img
            className="onlyat-item"
            src={secondcollection}
            alt="collection-items"
          />
        </div>
      </div>

      <div className="top-brands">
        <div className="top-brands-title">Top Brands</div>
        <div className="top-brands-list">
          {topbrandslist.map((val) => (
            <img className="top-brands-item" src={val} alt="top-brands" />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}