import axios from "axios";
import { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";
import { MdDeleteForever } from "react-icons/md";
import { Link, NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Mainproduct = () => {
  const [data, setdata] = useState([]);
  const [cate, setcate] = useState(null);
  const [order, setorder] = useState(null);
  const [page, setpage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const getproductdata = () => {
    axios
      .get("https://dp-41watch-json-server.onrender.com/products", {
        params: {
          _page: page,
          _limit: 10,
          category: cate,
          _sort: order === "asc" || order === "desc"?"price":"title",
          _order: order,
        },
      })
      .then((res) => {setdata(res.data) 
        let data = res.data;

        
      const totalItems = parseInt(res.headers["x-total-count"], 10);
      setTotalPages(Math.ceil(totalItems / 10));})
      .catch((err) => console.log(err));
  };

  const DeleteProductBtn = (id)=>{
    axios.delete(`https://dp-41watch-json-server.onrender.com/products/${id}`)
    .then((res)=>{
      toast.error("Data Deleted", {
        position: "top-center",
        autoClose: 4000,
      });
      getproductdata()
    })
    .catch(err=>console.log(err))
  }
  useEffect(() => {
    getproductdata();
  }, [page, cate, order]);

  return (
    <div
      style={{ width: "80%", display: "flex", margin: "5% auto" }}
      className="productpage-main"
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "80%",
          margin: "auto",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2>CATALOGUE</h2>
          <p> Do not hesitate to contact us for a specific request.</p>

          <span style={{ color: "red" }}>SOLD</span>
          <span style={{ fontSize: "14px" }}> : watch sold</span>
          <br />
          <span style={{ color: "chocolate" }}>ORDER</span>
          <span style={{ fontSize: "14px" }}>
            {" "}
            : watch only available on order
          </span>
          <br />
          <span>RESERVED</span>
          <span style={{ fontSize: "14px" }}>
            {" "}
            : watch currently unavailable
          </span>
        </div>
        <div className="ordermain"
          style={{
            width: "90%",
            display: "flex",
            justifyContent: "space-between",
            margin: "auto",
          }}
        >
          <select
            name="category"
            id=""
            onChange={(e) => setcate(e.target.value)}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              padding: "0 10px",
            }}
          >
            <option value="">Select Category</option>
            <option value="ROLEX">Rolex</option>
            <option value="YOU SLEEP">YOU SLEEP</option>
            <option value="AUDEMARS PIGUET">AUDEMARS PIGUET</option>
            <option value="MB&F">MB&F</option>
            <option value="PATEK PHILIPPE">PATEK PHILIPPE</option>
            <option value="H.MOSER & CIE">H.MOSER & CIE</option>
            <option value="VACHERON CONSTANTIN">VACHERON CONSTANTIN</option>
            <option value="CARTIER">CARTIER</option>
          </select>
          <br />
          <br />
          <select
          className="ordermain"
            name="order"
            id=""
            onChange={(e) => setorder(e.target.value)}
            style={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "20px",
              padding: "0 10px",
            }}
          >
            <option value="">Select Order</option>
            <option value="desc">High To Low</option>
            <option value="asc">Low To High</option>
          </select>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            textAlign: "center",
            margin: "5% auto",
          }}
          className="productsDataFetch"
        >
          {data.map((el) => (
           
              <div key={el.id}>
                <div
                  key={el.id}
                  style={{ position: "relative" }}
                  className="content"
                >
                  <hr />
                  {/* <h1>{el.id}</h1> */}
                  <h4>{el.category}</h4>
                  <p>{el.title[1]}</p>
                  <span>{el.year}</span>
                  <br />
                  <div className="img-watch-main">
                  <Link
              to={`/description/${el.id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
                    <img
                      src={el.images}
                      height={300}
                      width={300}
                      alt=""
                      className="watch-img"
                    />
                       </Link>
                  </div>
                  <p style={{ position: "absolute", top: "65%", left: "37%" }}>
                    OR ${el.price}
                  </p>
                  <div  className="d-flex justify-content-center">
                  <button class="EditMainBtn">
                      <div class="sign"><span className="EditBtn"><GrEdit /></span></div>

                      <div class="text"><Link to={`/editProduct/${el.id}`} className="text-light text-decoration-none">Edit</Link></div>
                    </button>
                    <button class="DeleteMainBtn" onClick={()=>DeleteProductBtn(el.id)}>
                      <div class="sign"><span className="DeleteBtn"><MdDeleteForever /></span></div>

                      <div class="text" >Delete</div>
                    </button>
                  </div>
                  </div>
                </div>
             
         
          ))}
        </div>

        <div className="row w-100 d-flex justify-content-center">
        <div className="w-50 d-flex justify-content-between m-auto align-items-center col-12">
          <button
            className="BtnPagination"
            onClick={() => setpage(page - 1)}
            disabled={page == 1}
          >
            {" "}
            <span className="ne-pre-button">-</span>
          </button>
          <strong>{page}</strong>
          <button className="BtnPagination" onClick={() => setpage(page + 1)} disabled={page===totalPages}>
            {" "}
            <span className="ne-pre-button">+</span>
          </button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Mainproduct;
