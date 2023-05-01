import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "../Components/css/adding.css"
import "../Components/css/legaldetails.css"
const LegalDetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRigId, setSelectedRigId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState()
  const [formData, setFormData] = useState({
    s_no:"",
   country:"",
   File_name_for_legal_requirements:"",
   Documents:""
  });
  //adding button functionality
  const handleInputChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
      s_no:formData.length+1
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8002/post1', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      setShowForm(false)
      console.log(data);
      setFormData({
        s_no:"",
        country:"",
        File_name_for_legal_requirements:"",
        Documents:""
       
      });
    })
    .catch(error => console.log(error));
  };

  useEffect(() => {
    async function fetchLegalDetails() {
      try {
        const response = await axios.get("http://localhost:8002/legal_details");
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLegalDetails();
  }, []);


  const handleListClick = () => {
    // Render a list view of the rigs
  };

  const handleMapViewClick = () => {
    // Render a map view of the rigs
  };

  const handleHandbookClick = () => {
    // Render a handbook of the rigs
  };

  const handleDetailsClick = (rig) => {
    console.log(rig);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className=''>
        
        <div className="search-container-Box">
        <h1 className="rig-details-heading">Legal Details</h1>
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={handleSearchChange}
          />
        </div>
      
          <div>
            <button className='addnewbutton' onClick={() => setShowForm(true)}>Add New</button>
            <button className="editbutton"onClick={handleHandbookClick}>Edit</button>
          </div>
        
    <div>
      
      {showForm && (
        <div className='popup-container' onClick={()=>setShowForm(false)}>
         <div className="popup">
          <form onSubmit={handleSubmit}>
          {/* <label>
              S.NO
              <input
                type="text"
                name="s_no"
                value={formData.rig_name}
                onChange={handleInputChange}
              />
            </label> */}
            <label>
              Country:
              <input
                type="text"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
              />
            </label>
            <label>
            File_name_for_legal_requirements :
              <input
                type="text"
                name="File_name_for_legal_requirements"
                value={formData.File_name_for_legal_requirements}
                onChange={handleInputChange}
              />
            </label>
            <label>
            Documents :
              <input
                type="text"
                name="Documents"
                value={formData.Documents}
                onChange={handleInputChange}
              />
            </label>
        
            <br />
            <button type="submit">Submit</button>
          </form>
         </div>
        </div>
      )}
    </div>

      <table>
        <thead>
          <tr>
        
            <th>S. No</th>
            <th>Country</th>
            <th>File_name_for_legal_requirements </th>
            <th>Documents</th>
           
          </tr>
        </thead>
        <tbody>
          {searchResults.map((legal_details, index) => (
            <tr key={index}>
             
              <td>{index + 1}</td>
              <td>{legal_details.country}</td>
              <td>{legal_details.File_name_for_legal_requirements}</td>
              <td>{legal_details.Documents}</td>
             
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LegalDetails;
