import "./App.css";
import Allroutes from "./Allroutes";
import Navi from "./Navi";
import Cart from "./components/Cart";
import { CartContext, CartProvider } from "./components/CartContext";
import { FaBars } from "react-icons/fa6";
import { useContext, useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import Nav from "react-bootstrap/Nav";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { NavLink } from "react-router-dom";
import { SlUser } from "react-icons/sl";

function App() {
  const [show, setShow] = useState(false);
  const { count } = useContext(CartContext);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loading, setLoading] = useState(true);
  const [show2, setShow2] = useState(false);

  const handleClose2 = () => setShow2(false);
  const handleShow2 = () => setShow2(true);
  const NavLinkStyle = {
    padding: "10px 20px",
    fontSize: "1.2rem",
  };
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return loading ? (
    <section>
      <div class="loading loading07" >
        <span data-text="4">4</span>
        <span data-text="1">1</span>
        <span class="imgWatch">
          {" "}
          <img
            src="https://gutereise.in/cdn/shop/products/01.1743.123-1_800x.jpg?v=1627553115"
            alt=""
            height="200px"
            width="200px"
          />
        </span>
        <span data-text="W">W</span>
        <span data-text="A">A</span>
        <span data-text="T">T</span>
        <span data-text="C">C</span>
        <span data-text="H">H</span>
      </div>
    </section>
  ) : (
      <div className="App">
        <div className="d-flex justify-content-around p-4 align-items-center d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none">
          {" "}
          <img
            src="https://www.41watch.com/themes/41watch/img/41watch-logo.svg"
            alt=""
          />
          <div className="d-block d-sm-flex d-md-flex d-lg-none d-xl-none d-xxl-none">
            <Button
              onClick={handleShow}
              style={{
                color: "black",
                backgroundColor: "white",
                border: "none",
                fontSize: "24px",
              }}
            >
              <FaBars />
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
              <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                  <img
                    src="https://www.41watch.com/themes/41watch/img/41watch-logo.svg"
                    alt=""
                  />
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <div className="d-block">
                  <table
                    style={{
                      width: "100%",
                      margin: "auto",
                      textAlign: "center",
                    }}
                  >
                    <tr
                      style={{
                        width: "100%",
                        fontSize: "14px",
                        fontWeight: "400",
                        lineHeight: "18px",
                        display: "flex",
                        justifyContent: "center",
                        flexDirection: "column",
                      }}
                    >
                      <td>
                        <Nav.Link
                          href="/product"
                          target="_blank"
                          style={{ ...NavLinkStyle }}
                        >
                          CATLOGUE
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          VINTAGE
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          SELL YOUR WATCH
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          {" "}
                          INVESTIR
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          FINANCING
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          SHOWROOM
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          LEXIQUE
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          VIDEOS
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          RETAIL PRICES{" "}
                        </Nav.Link>
                      </td>
                      <td>
                        <Nav.Link href="" style={{ ...NavLinkStyle }}>
                          BLOGS
                        </Nav.Link>
                      </td>
                      <td>
                      <Nav.Link href="" style={{ fontSize: "19px" }}>
                
              </Nav.Link>
              
                      </td>
                      <hr style={{width:"100%"}} />
                      <td className="d-flex justify-content-center  align-items-center fs-6 ">
                      <Button
                  variant=""
                  className="togle-btn"
                  onClick={handleShow2}
                  style={{ fontSize: "19px" }}
                >
                  <HiOutlineShoppingBag />
                  <span className="cart-counter">{count}</span>
                </Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Nav.Link
                href=""
                style={{  fontSize: "19px", color: "black" }}
              >
                <NavLink to={"/loginpage"}>
                  {" "}
                  <SlUser style={{ color: "black" }} />{" "}
                </NavLink>
              </Nav.Link>
                      </td>
                    </tr>
                  </table>
                </div>
              </Offcanvas.Body>
            </Offcanvas>
          </div>
        </div>

        
      <Offcanvas show={show2} onHide={handleClose2} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>
            OUR CART
            <hr style={{ width: "300px" }} />
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <NavLink to={"/cartpage"}></NavLink>
          <Cart />
        </Offcanvas.Body>
      </Offcanvas>

        <Navi />
        <Allroutes />
      </div>
  );
}

export default App;
