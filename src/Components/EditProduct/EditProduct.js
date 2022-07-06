import React, { useContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";

const EditProduct = () => {
  const { exactproduct, getExactProductData, editProduct } = useContext(productContext);
  useEffect(() => {
    getExactProductData(id);
    
  }, []);
  
  const [inpTitle, setInpTitle] = useState(exactproduct.title);
  const [inpDescription, setInpDescription] = useState(exactproduct.description);
  const [inpPrice, setInpPrice] = useState(exactproduct.price);
  const [selectedFile, setSelectedFile] = useState(exactproduct.image);
  const navigate = useNavigate();
  const { id } = useParams()

  
  async function handleClick() {
    const newObj = {
      id: exactproduct.id,
      title: inpTitle,
      description: inpDescription,
      image: selectedFile,
      category: 1,
      price: inpPrice,
    };

    // const newObj = new FormData();
    // newObj.append("title", inpTitle)

    await editProduct(newObj);
    navigate('/')


    // navigate(`/product/${exactproduct.id}`);
  }

  
  return (
    <div className="inner" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '100px', width: '400px', margin: '100px auto'}}>
      <h1>Edit Product: </h1>
      <input
        style={{height: '30px', fontSize: '17px'}}
        value={inpTitle}
        onChange={(e) => setInpTitle(e.target.value)}
        type="text"
        placeholder="Title"
      />
      <br></br>
      <input
        style={{height: '30px', fontSize: '17px'}}
        value={inpDescription}
        onChange={(e) => setInpDescription(e.target.value)}
        type="text"
        placeholder="Description"
      />
      <br></br>
      <input
        style={{height: '30px', fontSize: '17px'}}
        value={inpPrice}
        onChange={(e) => setInpPrice(e.target.value)}
        type="text"
        placeholder="Price"
      />
      <br></br>
      <input type="file" onChange={(e) => setSelectedFile(e.target.files[0])} />

      <button style={{marginTop: '20px', height: '30px', fontSize: '18px', border: 'none', backgroundColor: 'green', color: 'white'}} 
      
      onClick={handleClick}>Save</button>
    </div>
  );
};

export default EditProduct;
