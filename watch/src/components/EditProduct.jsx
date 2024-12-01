import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const EditProduct = () => {
  const { id } = useParams();
  const GetData = {
    id: "",
    images: "",
    title: "",
    category: "",
    price: "",
    year: "",
    state: "",
    alloy: "",
    stock: "",
    diameter: "",
    movement: "",
  };
  const [newData, setNewData] = useState(GetData);

  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };

  const getData = (id) => {
    axios
      .get(`https://dp-41watch-json-server.onrender.com/products/${id}`)
      .then((res) => setNewData(res.data))
      .catch((err) => console.log(err));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`https://dp-41watch-json-server.onrender.com/products/${id}`, newData)
      .then((res) => {
        console.log(res);
        alert("Data updated successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData(id);
  }, [id]);

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1>EDIT PRODUCT</h1>
      <hr />
      <br />
      <br />
      <h5 style={{ textAlign: "right" }}>
        <Link
          to={"/mainproduct"}
          style={{
            textDecoration: "none",
            color: "white",
            backgroundColor: "black",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          CHECK PRODUCTS
        </Link>
      </h5>
      <br />
      <div className="row w-100 d-flex justify-content-between flex-sm-column flex-column flex-lg-row flex-xl-row flex-xxl-row">
        <div className="col-5 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 col-12">
          <img
            src="https://www.41watch.com/modules/homeslider/images/ca3e313cc94882acb12295ec2f06fed3e89e6a49_footer.jpg"
            height={"80%"}
            width={"100%"}
            alt=""
          />
          <p style={{ textAlign: "left" }}>
            Be sure to mention any accompanying paperwork and describe your watch
            to the best of your ability. You know your watch better than we ever
            will, so the details you provide us with will be invaluable for selling
            it. Our team will formulate a trending price for your timepiece based
            on the description you provide and similar watches auctioned on our
            platform.
          </p>
        </div>
        <div className="col-5 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 col-12">
          <form style={{ position: "relative" }} onSubmit={(e) => handleSubmit(e)}>
            <div className="form-group">
              <input
                type="text"
                placeholder="Images"
                name="images"
                value={newData.images}
                onChange={(e) => handleChange(e)}
              />
              <select
                onChange={(e) => handleChange(e)}
                value={newData.category}
                name="category"
              >
                <option>select Your Category</option>
                <option value={"ROLEX"}>ROLEX</option>
                <option value={"YOU SLEEP"}>YOU SLEEP</option>
                <option value={"AUDEMARS PIGUET"}>AUDEMARS PIGUET</option>
                <option value={"MB&F"}>MB&F</option>
                <option value={"PATEK PHILIPPE"}>PATEK PHILIPPE</option>
                <option value={"H.MOSER & CIE"}>H.MOSER & CIE</option>
                <option value={"VACHERON CONSTANTIN"}>VACHERON CONSTANTIN</option>
                <option value={"CARTIER"}>CARTIER</option>
              </select>
              <select
                onChange={(e) => handleChange(e)}
                value={newData.state}
                name="state"
              >
                <option>select State</option>
                <option value={"Excellent"}>Excellent</option>
                <option value={"Like new"}>Like new</option>
                <option value={"Nine"}>Nine</option>
                <option value={"New / never worn"}>New / never worn</option>
                <option value={"Good"}>Good</option>
              </select>
              <select
                onChange={(e) => handleChange(e)}
                value={newData.year}
                name="year"
              >
                <option>select year</option>
                <option value={"2010"}>2010</option>
                <option value={"2011"}>2011</option>
                <option value={"2012"}>2012</option>
                <option value={"2013"}>2013</option>
                <option value={"2014"}>2014</option>
                <option value={"2015"}>2015</option>
                <option value={"2016"}>2016</option>
                <option value={"2017"}>2017</option>
                <option value={"2018"}>2018</option>
                <option value={"2019"}>2019</option>
                <option value={"2020"}>2020</option>
                <option value={"2021"}>2021</option>
                <option value={"2022"}>2022</option>
                <option value={"2023"}>2023</option>
                <option value={"2024"}>2024</option>
              </select>
              <input
                type="text"
                placeholder="Alloy"
                name="alloy"
                value={newData.alloy}
                onChange={(e) => handleChange(e)}
              />
               <input
            type="text"
            placeholder="stock"
            name="stock"
            value={newData.stock}
            onChange={(e) => handleChange(e)}
          />
          <input
            type="text"
            placeholder="diameter"
            name="diameter"
            value={newData.diameter}
            onChange={(e) => handleChange(e)}
          />
              <input
                type="text"
                placeholder="Movement"
                name="movement"
                value={newData.movement}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="text"
                placeholder="Title"
                name="title"
                value={newData.title}
                onChange={(e) => handleChange(e)}
              />
              <input
                type="number"
                placeholder="Price"
                name="price"
                value={newData.price}
                onChange={(e) => handleChange(e)}
              />
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProduct;
