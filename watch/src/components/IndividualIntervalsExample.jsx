import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";



function IndividualIntervalsExample() {
  return (
    <div>
      <Carousel style={{ width: "80%", margin: "auto" }}>
        <Carousel.Item
          interval={3000}
          className="img1"
          style={{ width: "100%", height: "450px", position: "relative" }}
        >
          {/* <ExampleCarouselImage text="First slide" /> */}
          <button
            style={{
              position: "absolute",
              translate: "-50% -50%",
              top: "50%",
              left: "50%",
              border: "none",
              height: "40px",
              width: "220px",
            }}
          >
            OUR CATALOG
          </button>
        </Carousel.Item>
        <Carousel.Item
          interval={3000}
          className="img2"
          style={{ width: "100%", height: "450px" }}
        >
          {/* <ExampleCarouselImage text="Second slide" /> */}
          <button
            style={{
              position: "absolute",
              translate: "-50% -50%",
              top: "50%",
              left: "50%",
              border: "none",
              height: "40px",
              width: "220px",
            }}
          >
            FOCUS ON DAYTONA SPLIT
          </button>
        </Carousel.Item>
        <Carousel.Item
          className="img3"
          style={{ width: "100%", height: "450px" }}
        >
          {/* <ExampleCarouselImage text="Third slide" /> */}
          <button
            style={{
              position: "absolute",
              translate: "-50% -50%",
              top: "50%",
              left: "50%",
              border: "none",
              height: "40px",
              width: "220px",
            }}
          >
            OUR ROLEX COLLECTION
          </button>
        </Carousel.Item>
      </Carousel>

      <div className="d-sm-none d-none d-xl-block d-xxl-block">
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
                    <Nav.Link href="#deets">AUDEMARS PIGUET</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">BLANCPAIN</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">BREITLING</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">BREGUET</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">F. P. JOURNE</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">HUBLOT</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">OFFICINE PANERAI</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">OMEGA</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">PATEK PHILIPPE</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">ROLEX</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">TAG HEUER</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">TUDOR</Nav.Link>
                  </td>
                  <td>
                    <Nav.Link href="#deets">ZENITH</Nav.Link>
                  </td>
                </tr>
              </table>
            </Nav>
          </Container>
        </Navbar>
      </div>
    </div>
  );
}

export default IndividualIntervalsExample;
