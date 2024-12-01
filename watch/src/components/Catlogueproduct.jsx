import React, { useEffect, useState } from 'react'
import { TfiTruck } from "react-icons/tfi";
import { IoEarthOutline } from "react-icons/io5";
import { CiLock } from "react-icons/ci";
import { VscCalendar } from "react-icons/vsc";
import { BsPiggyBank } from "react-icons/bs";
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Catlogueproduct = () => {
    
const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items:3 ,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  
    
    const [productdata,setproductdata]=useState([])
  
    const getproductdata=()=>{
      axios.get("https://dp-41watch-json-server.onrender.com/products")
      .then((res)=>setproductdata(res.data))
      .catch((err)=>console.log(err))
    }
  
    useEffect(()=>{
      getproductdata()
    },[])
  
    const prod= productdata.map((el)=>(
      
        <div style={{width:"60%",margin:"auto",textAlign:"center",position:"relative"}} key={el.id}  className='content2'>
        <hr />
        {/* <h1>{el.id}</h1> */}
        <h4>{el.category}</h4>
        <p>{el.title[1]}</p>
        <span>{el.year}</span><br />
        <div className="img-watch-main2">
        <img src={el.images} height={250} width={250} alt="" className='watch-img2'/>
        </div>
      <p style={{position:"absolute",top:"80%",left:"32%"}}>OR ${el.price}</p>
  
      </div>
    ))
  return (
    <div>
        <div>
     <div>
    
    <div style={{textAlign:"center",margin:"5% auto"}}>
    <h3>OUR PICKS</h3>
    <p>A selection of our favorite deals</p>
      <div>
      </div>
    </div>
    <div>
        
    </div>
   </div>
  
  <div style={{width:"90%",margin:"auto"}}>
  <Carousel style={{width:"50%",margin:"auto"}} responsive={responsive}>
  {prod}
</Carousel>
  </div>
 
 {/*5 Watches Hover  */}

    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-6 col-lg-8 col-xl-8 col-xxl-8 one mb-3">
        <img src="https://www.41watch.com/modules/themeconfigurator/img/6b8a83fb4d6ccf604e6106b55d52cfa3a6842704_untitled-design-93.png" alt="" className='img-fluid h-100 w-100 ' />
        <button>OUR  DAYTONA <br /> COLLECTION</button>
        </div>
        <div className="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 col-xxl-4 two mb-3">
        <img src="https://www.41watch.com/modules/themeconfigurator/img/3cf94905f684011e1374394411c318b9eedf3238_submariner-red-1680-home.jpg" className='img-fluid h-100' alt="" />
        <button>OUR  SUBMARIENER <br /> COLLECTION</button>
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 four mb-3">
        <img src="https://www.41watch.com/modules/themeconfigurator/img/4dfe7287c5cf639233dc8445608224cac1af6148_untitled-design-15.jpg" alt="" className='img-fluid h-100'/>
        <button>OUR  AUDEMARS <br /> COLLECTION</button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 four mb-3">
        <img src="https://www.41watch.com/modules/themeconfigurator/img/f43bdb90648ec0c57687d0d0bfdc435131580d22_untitled-design-12.jpg" className='img-fluid h-100' alt="" />
        <button>OUR  AUDEMARS <br /> COLLECTION</button>
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 four mb-3">
        <img src="https://www.41watch.com/modules/themeconfigurator/img/b5cb2bcb894746434153879127446fbb6d453f3e_untitled-design-14.jpg" className='img-fluid h-100' alt="" />
        <button>OUR  PATEK <br /> COLLECTION</button>
        </div>
      </div>
    </div>

    <div className="container">
      <div className="row ">
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center">
        <TfiTruck />
        <p style={{fontSize:"18px"}}>Secure delivery <br />
        1 to 6 days</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center">
        <IoEarthOutline />
        <p style={{fontSize:"18px"}}>Guaranteed origin</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center">
        <CiLock />
                        <p style={{fontSize:"18px"}}>Secure payment</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-2 col-xl-2 col-xxl-2 fs-2 text-center">
        <VscCalendar />
                        <p style={{fontSize:"18px"}}>1 year warranty</p>
        </div>
        <div className="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-3 col-xxl-3 fs-2 text-center">
        <BsPiggyBank />
        <p style={{fontSize:"18px"}}>Tailor-made financing</p>
        </div>
      </div>
    </div>

  </div>
      {/* <div>
      <div style={{margin:"auto",width:"80%",overflow:"hidden"}}>
            <table>
                <tr style={{width:"80%",display:"flex",justifyContent:"space-between"}}>
                    <td style={{fontSize:"32px",width:"300px",textAlign:"center"}}>
                        <TfiTruck />
                        <p style={{fontSize:"18px"}}>Secure delivery <br />
                        1 to 6 days</p>
                    </td>
                    <td style={{fontSize:"32px",width:"300px",textAlign:"center"}}>
                        <IoEarthOutline />
                        <p style={{fontSize:"18px"}}>Guaranteed origin</p>
                    </td>
                    <td style={{fontSize:"32px",width:"300px",textAlign:"center"}}>
                        <CiLock />
                        <p style={{fontSize:"18px"}}>Secure payment</p>
                    </td>
                    <td style={{fontSize:"32px",width:"300px",textAlign:"center"}}>
                        <VscCalendar />
                        <p style={{fontSize:"18px"}}>1 year warranty</p>
                    </td>
                    <td style={{fontSize:"32px",width:"300px",textAlign:"center"}}>
                        <BsPiggyBank />
                        <p style={{fontSize:"18px"}}>Tailor-made financing</p>
                    </td>
                </tr>
            </table>

      </div> 
      </div>*/}

        <div style={{textAlign:"center"}}>
            <hr />
            <span >41 Watch: the guarantee of a professional service with complete transparency</span>
            <hr />

            <h2>WANT TO BE INFORMED ABOUT THE LATEST OFFERS?</h2>
        </div>
      </div>
      
 
  )
}

export default Catlogueproduct
