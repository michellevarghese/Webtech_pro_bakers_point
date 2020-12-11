import React from "react";
import Layout from "../../components/Layout";
import getParams from "../../utils/getParams";
import ProductsList from "./Product_List";
import "./style.css";

/**
 * @author
 * @function ProductListPage
 **/

const ProductListPage = (props) => {
  const renderProduct = () => {
    console.log(props);
    const params = getParams(props.location.search);
    let content = null;
    content = <ProductsList {...props} />;


    return content;
  };

  return <Layout>{renderProduct()}</Layout>;
};

export default ProductListPage;
