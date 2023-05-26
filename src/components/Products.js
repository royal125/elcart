import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Table from 'react-bootstrap/Table';


function Products() {

  let [token, setToken] = useState(localStorage.getItem("ElcartUserToken"));

  let [allProducts, setallProducts] = useState();
  let [datacame, setdatacame] = useState(false);
  

  useEffect(() => {

    axios
      .get('https://api.store.ellcart.com/stores/70082/products', {
        headers: {
          'Authorization': `token ${token}`
        }
      })
      .then(function (response) {
        console.log(response);
        setallProducts(response.data)
        setdatacame(true)
      })
      .catch(function (error) {
        alert('failed')
        console.log(error);
      })
  }, []);

  console.log(allProducts);

  return (

    <>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>SKU</th>
            <th>Category</th>
            <th>Regular Price</th>
            <th>Sale Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {
            datacame ? allProducts.map((product, i) =>
            (
              <tr key={i}>
                <td>{product.product.name}</td>
                <td>{product.product.sku}</td>
                <td>{product.product.category_id}</td>
                <td>{product.product.regular_price}</td>
                <td>{product.product.sale_price}</td>
                <td>{product.product.stock_status}</td>
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

       </>

  )
}

export default Products;


