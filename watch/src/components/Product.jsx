import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Product = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 480, min: 0 },
      items: 1,
    },
  };

  const [productdata, setproductdata] = useState([]);

  const getproductdata = () => {
    axios
      .get("https://dp-41watch-json-server.onrender.com/products")
      .then((res) => setproductdata(res.data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getproductdata();
  }, []);

  const prod = productdata.map((el) => (
    <div
      style={{ width: "60%", margin: "auto", textAlign: "center" }}
      key={el.id}
    >
      <hr />
      {/* <h1>{el.id}</h1> */}
      <h4>{el.category}</h4>
      <p>{el.title[1]}</p>
      <span>{el.year}</span>
      <br />
      <img src={el.images} height={250} width={250} alt="" />
      <p>OR ${el.price}</p>
    </div>
  ));
  return (
    <div>
      <div>
        <div
          style={{
            width: "80%",
            margin: "auto",
            position: "relative",
            textAlign: "center",
          }}
        >
          <hr />
          <button
            style={{
              position: "absolute",
              translate: "-50% -0%",
              top: "60%",
              left: "50%",
              height: "40px",
              width: "180px",
              border: "none",
            }}
            className="btn btn-light"
          >
           <NavLink to={'/mainproduct'} style={{ textDecoration: "none", color: "black" }}>SEE ALL BRANDS</NavLink>
          </button>
        </div>
        <div
          style={{ textAlign: "center", margin: "15% auto 0%" }}
          className="row w-100"
        ><br /><br />
          <div>
            <h3>MONTHLY PICKS</h3>
            <p>Enjoy our latest offers</p>
            <div></div>
          </div>
          <div></div>
        </div>
      </div>

      <div style={{ width: "90%", margin: "0 auto" }}>
        <Carousel
          style={{ width: "50%", margin: "auto" }}
          responsive={responsive}
        >
          {prod}
        </Carousel>
      </div>
    </div>
  );
};

export default Product;
