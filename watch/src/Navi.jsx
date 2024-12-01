import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { SlUser } from "react-icons/sl";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { FaBars } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import Cart from "./components/Cart";
import { CartContext } from "./components/CartContext";

const Navi = () => {
  const { count } = useContext(CartContext);
  const [show, setShow] = useState(false);

  const handleClose2 = () => setShow(false);
  const handleShow2 = () => setShow(true);
  return (
    <div className=" d-none d-sm-none d-xl-block d-xxl-block">
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto">
              <Nav.Link href="#deets">CHANGE UNIVERSE</Nav.Link>
            </Nav>

            <Navbar.Brand href="#home" className="me-auto">
              <img
                src="https://www.41watch.com/themes/41watch/img/41watch-logo.svg"
                alt=""
              />
            </Navbar.Brand>
            <Nav>
              <NavDropdown
                title="ANGLAIS"
                style={{ paddingTop: "10px" }}
                id="collapsible-nav-dropdown"
              >
                <NavDropdown.Item
                  href="#action/3.1"
                  style={{ paddingTop: "15px" }}
                >
                  FRANCAIS
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link
                href=""
                style={{ paddingTop: "15px", fontSize: "19px", color: "black" }}
              >
                <NavLink to={"/loginpage"}>
                  {" "}
                  <SlUser style={{ color: "black" }} />{" "}
                </NavLink>
              </Nav.Link>
              <Nav.Link href="" style={{ fontSize: "19px" }}>
                <Button
                  variant=""
                  className="togle-btn"
                  onClick={handleShow2}
                  style={{ fontSize: "19px" }}
                >
                  <HiOutlineShoppingBag />
                  <span className="cart-counter">{count}</span>
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Nav className="m-auto">
            <table
              style={{ width: "100%", margin: "auto", textAlign: "center" }}
            >
              <tr
                style={{
                  width: "250px",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                <td>
                  <Nav.Link href="/product" target="_blank">
                    CATLOGUE
                  </Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">VINTAGE</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">SELL YOUR WATCH</Nav.Link>
                </td>
                <td>
                  <Nav.Link href=""> INVESTIR</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">FINANCING</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">SHOWROOM</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">LEXIQUE</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">VIDEOS</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">RITAIL PRICES </Nav.Link>
                </td>
                <td>
                  <Nav.Link href="">BLOGS</Nav.Link>
                </td>
              </tr>
            </table>
          </Nav>
        </Container>
      </Navbar>
      <Navbar>
        <Container>
          <Nav className="m-auto">
            <table>
              <tr
                style={{
                  width: "250px",
                  fontSize: "14px",
                  fontWeight: "400",
                  lineHeight: "18px",
                }}
              >
                <td>
                  <Nav.Link href="#deets">
                    OUTSTANDING COLLECTOR'S WATCH
                  </Nav.Link>
                </td>
                <td>
                  <Nav.Link href="#deets">ABOUT US</Nav.Link>
                </td>
                <td>
                  <Nav.Link href="#deets">CONTACT US</Nav.Link>
                </td>
              </tr>
            </table>
          </Nav>
        </Container>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose2} placement="end">
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
    </div>
  );
};

export default Navi;
