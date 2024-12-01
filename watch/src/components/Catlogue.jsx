import React from "react";
import { Link } from "react-router-dom";


const Catlogue = () => {
  return (
    <div >


    <div className="container">
      <div className="row ">
        <div className="col-12 col-sm-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8">
        <img
            src="https://www.41watch.com/modules/themeconfigurator/img/cd274b5f4258f967f89f5b0af3efe281b66d2044_lange-home-41w.jpg"
            alt=""
           className="img-fluid h-100"
           
          />
        </div>
          <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4">
          <img
            src="https://www.41watch.com/modules/themeconfigurator/img/f8e1d65c121c8c9ec424f2ce8ae0b000b1d143d9_untitled-design-8.jpg"
            alt=""
            className="img-fluid"
          />
          </div>
      </div>
    </div>


      <div style={{ width: "80%", margin: "5% auto", textAlign: "center" }}>
        <h2>SELL US YOUR WATCHES</h2>
        <p>
          41Watch offers at your convenience outright purchases or consignments
        </p>
        <br />
        <p>EVALUATE YOUR WATCH'S PRICE</p>
      </div>


        {/* Select Brands */}
      <div className="container">
        <div className="row w-75 m-auto">
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <select name="" id="" style={{border: "1px solid black",width:"100%",padding:"10px 20px" }}>
                <option value="">BRAND</option>
                <option value="">AUDEMARS PIGUET</option>
                <option value="">BELL&ROSS</option>
                <option value="">BLANNCPAIN</option>
                <option value="">BREGUET</option>
              </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <select name="" id="" style={{border: "1px solid black",width:"100%",padding:"10px 20px" }}>
                <option value="">BRAND</option>
                <option value="">AUDEMARS PIGUET</option>
                <option value="">BELL&ROSS</option>
                <option value="">BLANNCPAIN</option>
                <option value="">BREGUET</option>
              </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <select name="" id="" style={{ border: "1px solid black",width:"100%",padding:"10px 20px" }}>
                <option value="">BRAND</option>
                <option value="">AUDEMARS PIGUET</option>
                <option value="">BELL&ROSS</option>
                <option value="">BLANNCPAIN</option>
                <option value="">BREGUET</option>
              </select>
          </div>
          <div className="col-12 col-sm-6 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mb-3">
          <button
                style={{
                  border: "none",
                  backgroundColor: "black",
                  color: "white",
                  padding:"10px 20px",
                }}
                className="btn"
              >
                <Link to={"/addproduct"} style={{textDecoration:"none",color:"white"}}>
                SELL MY WATCH</Link>
                
              </button>
          </div>
        </div>
      </div>

      {/* 5 Products Display */}
      <div style={{ width: "80%", margin: "auto" }} className="d-none d-xl-block d-xxl-block">
        <table style={{ display: "flex", justifyContent: "left" }}>
          <tr>
            <td
              style={{ textAlign: "center", width: "200px" }}
              className="fadeincursor1"
            >
              <img
                src="https://www.41watch.com/15827-home_default/rolex-submariner-date-41-126610ln.jpg"
                width={160}
                alt=""
              />
              <br />
              <p style={{ fontSize: "12PX", color: "red" }}>TRADE IN</p>
              <div className="fadein1">
                <h5>ROLEX</h5>
                <p>
                  Submariner <br /> Date 126610LN <br /> Black
                </p>
              </div>
            </td>
            <td
              style={{ textAlign: "center", width: "200px" }}
              className="fadeincursor1"
            >
              <img
                src="https://www.41watch.com/15946-home_default/cartier-tank-must-wsta0041.webp"
                width={160}
                alt=""
              />
              <br />
              <p style={{ fontSize: "12PX", color: "red" }}>TRADE IN</p>
              <div className="fadein1">
                <h5>CARTIER</h5>
                <p>
                  {" "}
                  Tank Must <br /> WSTA0041 <br /> Steel White
                </p>
              </div>
            </td>
            <td
              style={{ textAlign: "center", width: "200px" }}
              className="fadeincursor1"
            >
              <img
                src="https://www.41watch.com/4950-home_default/nautilus-5711-cadran-bleu.webp"
                width={160}
                alt=""
              />
              <br />
              <p style={{ fontSize: "12PX", color: "red" }}>TRADE IN</p>
              <div className="fadein1">
                <h5>PATEK PHILIPPE</h5>
                <p>
                  Nautilus <br /> 5711 <br /> Blue
                </p>
              </div>
            </td>
            <td
              style={{ textAlign: "center", width: "200px" }}
              className="fadeincursor1"
            >
              <img
                src="https://www.41watch.com/6914-home_default/daytona-6263-big-red.webp"
                width={160}
                alt=""
              />
              <br />
              <p style={{ fontSize: "12PX", color: "red" }}>TRADE IN</p>
              <div className="fadein1">
                <h5>ROLEX</h5>
                <p>
                  Daytona <br /> 6263 <br /> Big Red
                </p>
              </div>
            </td>
            <td
              style={{ textAlign: "center", width: "200px" }}
              className="fadeincursor1"
            >
              <img
                src="https://www.41watch.com/12411-home_default/santos.webp"
                width={160}
                alt=""
              />
              <br />
              <p style={{ fontSize: "12PX", color: "red" }}>TRADE IN</p>
              <div className="fadein1">
                <h5>CARTIER</h5>
                <p>Santos</p>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div
        style={{
          width: "80%",
          margin: "auto",
          textAlign: "center",
          fontSize: "13px",
        }}
      >
        <hr />
        <p>
          Trade in offers for a watch in perfect condition, with its original
          box and papers
        </p>
        <hr />
        <br />

      </div>


      <div className="container">
        <div className="row">
          <div className="col-12 position-relative img-hov overflow-hidden">
          <img
            src="https://www.41watch.com/modules/themeconfigurator/img/a561231843f7c882e651c03d3988f3cac91f6950_template-big-bas-home-1200x800-3.jpg"
            className="hov-img img-fluid w-100 h-100"
            alt=""
          />
          <button
            style={{
              position: "absolute",
              top: "50%",
              left: "40%",
             Translate:"-50%,-50%",
              height: "50px",
              border: "none",
              fontWeight: "bold",
            }}
          >
            OUR ROLEX CATALOGUE
          </button>
          </div>
        </div>
      </div>
      
    

      
    </div>
  );
};

export default Catlogue;
