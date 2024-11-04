import React, { useState } from "react";
import axios from "axios"

function Minter() {
  const [loaderHidden, setLoaderHidden] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploaded, setUploaded] = useState(false);
  const [inputs, setInputs] = useState({});
  const user = localStorage.getItem("userDetail")
  const id = JSON.parse(user)._id

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const onFileChange = (event) => {
      setSelectedFile(event.target.files[0]);
  };

  const onFileUpload = async() => {
    if (!selectedFile) {
      setUploadStatus('Please select a file first.');
      return;
  }
    setLoaderHidden(true)
    const formData = new FormData();
    formData.append("video", selectedFile);
    formData.append("category", inputs.category);
    formData.append("price", inputs.price);
    formData.append("userId", id);
    const response = await axios.post('http://localhost:5000/upload', formData, {
      headers: {
          'Content-Type': 'multipart/form-data',
      },
  });
  if(response.status === 200){
    setUploaded(true)
    setLoaderHidden(false)
  }
    setLoaderHidden(false);
};

  if (!uploaded) {
    return (
      <div className="minter-container">
        <div hidden={loaderHidden} className="lds-ellipsis">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <h3 className="makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Create movie
        </h3>
        <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
          Upload movie
        </h6>
        <form className="makeStyles-form-109" noValidate="" autoComplete="off">
          <div className="upload-container">
            <input
              style={{cursor:"pointer"}}
              onChange={onFileChange}
              className="upload"
              type="file"
              accept="video/mp4,video/webm,video/avi"
            />
          </div>
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
            Movie category
          </h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
              <input
                placeholder="e.g. action/thriller"
                name="category"
                value={inputs.category}
                onChange={handleChange}
                type="text"
                className="form-InputBase-input form-OutlinedInput-input"
                required={true}
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>
          <h6 className="form-Typography-root makeStyles-subhead-102 form-Typography-subtitle1 form-Typography-gutterBottom">
            Movie price
          </h6>
          <div className="form-FormControl-root form-TextField-root form-FormControl-marginNormal form-FormControl-fullWidth">
            <div className="form-InputBase-root form-OutlinedInput-root form-InputBase-fullWidth form-InputBase-formControl">
              <input
                placeholder="Nwaro"
                type="Number"
                name="price"
                value={inputs.price}
                onChange={handleChange}
                className="form-InputBase-input form-OutlinedInput-input"
                required={true}
              />
              <fieldset className="PrivateNotchedOutline-root-60 form-OutlinedInput-notchedOutline"></fieldset>
            </div>
          </div>
          <div className="form-ButtonBase-root form-Chip-root makeStyles-chipBlue-108 form-Chip-clickable">
            <span onClick={onFileUpload} className="form-Chip-label">
              Upload Movie
            </span>
          </div>
        </form>
      </div>
    );
  } else {
    return (
      <div className="minter-container">
        <h3 className="Typography-root makeStyles-title-99 Typography-h3 form-Typography-gutterBottom">
          Uploaded!
        </h3>
      </div>
    );
  }
}

export default Minter;
