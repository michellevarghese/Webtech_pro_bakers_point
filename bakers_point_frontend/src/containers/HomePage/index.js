import React from 'react'
import Header from '../../components/Header'
import Layout from '../../components/Layout'
import MenuHeader from '../../components/MenuHeader'
import cupcake from "../../images/cupcake.png";
import waffles from "../../images/waffles.png";
import "./styles.css";

/**
* @author
* @function HomePage
**/

const HomePage = (props) => {
  return(
    <Layout>
      <span className="heading">We can bake your day and meet your local kneads!</span>
      <br></br>
      <img className="image" src={cupcake}></img>
      <img className="image" src={waffles}></img>
    </Layout>
   )

 }

export default HomePage
