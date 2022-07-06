import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { productContext } from "../../context/ProductContextProvider";

const AddProduct = () => {
  const [inpTitle, setInpTitle] = useState("");
  const [inpDescription, setInpDescription] = useState("");
  const [inpPrice, setInpPrice] = useState("");
  const [selectedFile, setSelectedFile] = useState({});
  let { addProduct, exactproduct } = useContext(productContext);
  const navigate = useNavigate();

  async function handleClick() {
    const newObj = {
      title: inpTitle,
      description: inpDescription,
      image: selectedFile,
      category: 1,
      price: inpPrice,
    };

    // const newObj = new FormData();
    // newObj.append("title", inpTitle)

    await addProduct(newObj);
    navigate('/')


    // navigate(`/product/${exactproduct.id}`);
  }

  return (
    <div className="inner" style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', marginTop: '100px', width: '400px', margin: '100px auto'}}>
      <h1>Add Product: </h1>
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
      <button style={{marginTop: '20px', height: '30px', fontSize: '18px', border: 'none', backgroundColor: 'green', color: 'white'}} onClick={handleClick}>Add</button>
    </div>
  );
};

export default AddProduct;
