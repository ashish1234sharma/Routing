import {useState}from "react"
import axios from "axios"

export const Formdata=()=>{

    const [data,Setdata]=useState([])

    const handleChange=(e)=>{
        const {id,value} = e.target
        Setdata({
            ...data,
            [id] :value
        })
    }
    const handlesubmit=(e)=>{
        e.preventDefault();
        const payload = data;
        fetch("http://localhost:3001/products", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { 'Content-Type': 'application/json' }
        }).then(() => {
          console.log("Data",payload)
    
        })
    }

    return(
        <div style={{display:"flex",flexDirection:"coloumn"}}>
        
        <form onSubmit={handlesubmit}>
            <input type="text" placeholder="Enter Product name" id="name" onChange={handleChange}></input>
            <input type="number" placeholder="Enter Product price" id="price" onChange={handleChange}></input>
            <input type="submit" value="Submit" id="button"></input>
        </form>
        </div>
        
    )
}