import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import Table from 'react-bootstrap/Table';

function ProductCategories() {
  let [token, setToken] = useState(localStorage.getItem("ElcartUserToken"));

  let [allProductsCategories, setallProductsCategories] = useState();
  let [datacame, setdatacame] = useState(false);
  

  useEffect(() => {

    axios
      .get('https://api.store.ellcart.com/stores/70082/products_categories', {
        headers: {
          'Authorization': `token ${token}`
        }
      })
      .then(function (response) {
        // handle success
        // alert('succesfully')
        console.log(response.data);
        setallProductsCategories(response.data.product_categories)
        setdatacame(true)
      })
      .catch(function (error) {
        // handle error
        alert('failed')
        console.log(error);
      })
  }, []);

  console.log(allProductsCategories);

    return(
        <>
  
  
  
          <div>
             
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            
          </tr>
        </thead>
        <tbody>
          {
            datacame ? allProductsCategories.map((product, i) =>
            (
              <tr key={i}>
                <td><img src={product.image_url} style={{height:'70px'}}></img></td>
                <td>{product.name}</td>
                <td>  <div class="dropdown" style={{ textAlign: "center" }}>
                  <button class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                    <span className="bi bi-three-dots-vertical"></span>
                  </button>
                  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                    
                    <li><a class="dropdown-item" href="#">Edit </a></li>
                    <li><a class="dropdown-item" href="#">Delete</a></li>
                  </ul>
                </div>
                </td>

              </tr>)
            ) : "loadingg"
          }
        </tbody>
      </Table>
         
          </div>
    
  
      
  
          </>
    );
}

export default ProductCategories;