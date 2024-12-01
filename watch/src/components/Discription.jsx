import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { SiInstagram } from "react-icons/si";
import { SlSocialTwitter } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { CartContext } from "./CartContext";
import Footer from "./Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Discription = () => {
  const { id } = useParams();
  const [productData, setProductData] = useState([]);
  const { addItemToCart } = useContext(CartContext);
  const getProductData = () => {
    axios
      .get(`https://dp-41watch-json-server.onrender.com/products/${id}`)
      .then((res) => setProductData(res.data))
      .catch((err) => console.log(err));
  };
  const {
    images,
    title,
    category,
    description,
    price,
    year,
    stock,
    diameter,
    alloy,
    movement,
    cased,
    state,
    certificate,
    guarantee,
    availability,
  } = productData;
  useEffect(() => {
    getProductData();
  }, []);

  const handleAddToCart = () => {
    addItemToCart(productData);
    // Show toast notification
    toast.success("PRODUCT IN YOUR CART...🤗!", {
      position: "top-center",  // Changed to a string
      autoClose: 4000,
    });
  };
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-4 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col-12 ">
            <div>
              <p>
                {" "}
                <span className="heading">Full Name:-</span>
                <span className="values">{title}</span>
              </p>
              <p>
                {" "}
                <span className="heading">STOCK REF:- </span>
                <span className="values">{stock}</span>
              </p>
              <p>
                {" "}
                <span className="heading">DIAMETER:- </span>
                <span className="values">{diameter}</span>
              </p>
              <p>
                {" "}
                <span className="heading">ALLOY:- </span>
                <span className="values">{alloy}</span>
              </p>
              <p>
                {" "}
                <span className="heading">MOVEMENT:- </span>
                <span className="values">{movement}</span>
              </p>
              <p>
                {" "}
                <span className="heading">YEAR:- </span>
                <span className="values">{year}</span>
              </p>
              <p>
                {" "}
                <span className="heading">STATE:- </span>
                <span className="values">{state}</span>
              </p>
              <p>
                {" "}
                <span className="heading">CASE:- </span>
                <span className="values">{cased}</span>
              </p>
              <p>
                {" "}
                <span className="heading">CERTIFICATE:- </span>
                <span className="values">{certificate}</span>
              </p>
              <p>
                {" "}
                <span className="heading">GUARANTEE:- </span>
                <span className="values">{guarantee}</span>
              </p>
              <p>
                {" "}
                <span className="heading">AVAILABILITY:- </span>
                <span className="values">{availability}</span>
              </p>
            </div>
          </div>
          <div className="col-4 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 col-12">
            <div>
              <h5 className="text-center">{category}</h5>
              <h2 className="text-center">{title}</h2>
              <img
                src={images}
                alt=""
                height={400}
                width={400}
                className="ms-5"
              />
            </div>
          </div>
          <div className="col-4 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 col-12">
          <div style={{ textAlign: "center" }}>
          <button className="btn-outline-none border-0 p-3">
            Cash Purchase
          </button>
          <h2>{price} €</h2>
          <button
            style={{
              backgroundColor: "#ED5516",
              color: "white",
              border: "none",
              outline: "none",
              padding: "10px 80px",
            }}
            onClick={handleAddToCart}
          >
            ADD TO CART
          </button>
          <br />
          <a href="" style={{ textDecoration: "none", color: "black" }}>
            ADD TO MY WISHLIST
          </a>
          <hr />
          <a href="" style={{ textDecoration: "none", color: "black" }}>
            ADD THIS TEMPLATE
          </a>
          <p>SEE THE COMPARATOR(0)</p>
          <hr />
          <button
            style={{
              backgroundColor: "gray",
              color: "white",
              border: "none",
              outline: "none",
              padding: "10px 80px",
            }}
          >
            reserve this watch now for {price}€
          </button>
          <hr />
          <p>CONTACT A 41 WATCH EXPERT</p>
          <hr />
          <span>
            Share On :- <SlSocialTwitter /> <SiInstagram />
          </span>
        </div>
          </div>
        </div>
      </div>
      
      <Footer />
      <ToastContainer /> 
    </div>
  );
};

export default Discription;