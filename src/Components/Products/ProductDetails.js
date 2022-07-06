import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";
import { productContext } from "../../context/ProductContextProvider";

const ProductDetails = () => {
  const { exactproduct, getExactProductData, deleteProduct } =
    useContext(productContext);
  const navigate = useNavigate();

  const { id } = useParams();

  useEffect(() => {
    getExactProductData(id);
    if (exactproduct.id) {
      navigate(`/product/${exactproduct.id}`);
    }
  }, []);

  if (exactproduct.title) {
    return (
      <div style={{ marginTop: "100px", border: '1px solid black', textAlign: 'center', width: '500px', margin: '100px auto' }}>
        <div className="card" style={{margin: '50px'}}>
          <img
            src={exactproduct.image}
            className="card-img-top"
            alt="notDefined"
            style={{ width: "450px", height: "auto"}}
          />
          <div className="card-body">
            <p className="card-title">{exactproduct.title}</p>
            <p className="card-text">{exactproduct.author}</p>
            <p className="card-text">{exactproduct.price}</p>
          </div>
        </div>
        {exactproduct.is_author ? (
          <>
            <button style={{marginBottom: '20px', marginRight: '20px', backgroundColor: 'red', border: 'none', width: '80px', height: '30px', fontSize: '15px', color: 'white'}} onClick={() => deleteProduct(id)}>Delete</button>
            <Link to={`/edit/${id}`}>
              <button style={{marginBottom: '20px', backgroundColor: 'orange', border: 'none', width: '80px', height: '30px', fontSize: '15px', color: 'black'}} onClick={() => getExactProductData(id)}>Edit</button>
            </Link>
          </>
        ) : (
          ""
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default ProductDetails;
