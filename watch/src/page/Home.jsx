import React from 'react'
import IndividualIntervalsExample from '../components/IndividualIntervalsExample'
import Product from '../components/Product'
import Catlogue from '../components/Catlogue'
import Catlogueproduct from '../components/Catlogueproduct'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <IndividualIntervalsExample />
      <Product />
      <Catlogue />
      <Catlogueproduct />
      <Footer />
      {/* <Loginpage /> */}
      {/* <Mainproduct /> */}
    </div>
  )
}

export default Home
