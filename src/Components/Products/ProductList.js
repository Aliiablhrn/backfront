import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";
const ProductsList = () => {
  const { products, getProductsData } = useContext(productContext);
  const { deleteProduct } = useContext(productContext)

  useEffect(() => {
    getProductsData();
  }, []);

  return (
    <div style={{ marginTop: "100px", display:'flex', justifyContent:'center' }}>
      {products.map((product) => (
        <div 
          className="card"
          key={product.id}
          style={{ border: "1px solid gray", margin: '10px', width:'300px', textAlign:'center', fontSize:'17px' }}
        >
          <img
            src={product.image}
            className="card-img-top"
            alt="..."
            style={{ width: "250px", height: "auto", marginTop:'20px' }}
          />
          <div className="card-body">
            <p className="card-title">{product.title}</p>
            <p className="card-text">{product.author}</p>
            <p className="card-text">{product.price}</p>
          </div>
          <Link to={`/product/${product.id}`}>
            <button style={{marginBottom: '20px', fontSize:'17px', border: 'none', backgroundColor: "black", color: 'yellow', width: '100px', height: '35px', fontWeight: '600', cursor:'pointer'}}>Details</button>
          </Link>
          <br></br>
          <button onClick={() => deleteProduct(product.id)} style={{marginBottom: '20px', fontSize:'17px', border: 'none', backgroundColor: "red", color: 'white', width: '100px', height: '35px', fontWeight: '600', cursor:'pointer'}}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default ProductsList;
