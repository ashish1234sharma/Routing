import { useEffect,useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

import { ProductsPage } from "./ProductsPage";

export const ProductsDetailsPage = () => {

  const {id}=useParams()
  const [product,setProduct] =useState([])
  const navigate = useNavigate()

  useEffect(()=>{
getdata()

  },[])

 const getdata = async () => {
   try{
 
 let data =await axios.get(`http://localhost:3001/products/${id}`)
 
     console.log("Data:",data.data)
     
     setProduct(data.data)
 } catch(e) {
    navigate("/notfound")
 }
 
 }

  return (
    <>
      <div
        style={{
          display: "flex",
          paddingTop: "50px",
          justifyContent: "center",
          textAlign: "left",
        }}
      >
        <img src={""} alt="" />
        <div className="productDetails" style={{ padding: "20px" }}>
          <div>
            <h2 className="productName">{product.name}</h2>
            <h5 className="productPrice">Price : {product.price}</h5>
          </div>
          <h5>Specifications : </h5>
          <div style={{ width: "700px", paddingLeft: "30px" }}>
            {/* Show Product specification here */}
          </div>
        </div>
      </div>
    </>
  );
};
