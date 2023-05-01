import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../Components/css/rigdetails.css'
import "../Components/css/adding.css"
import Slider from '../Components/slider';
import Editcomponent from '../Components/editcomponent';

const Rigdetails = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedRig, setSelectedRig] = useState(null);
   const [selectedRigId, setSelectedRigId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  // const [formData, setFormData] = useState()
  const [formData, setFormData] = useState({
    s_no:"",
    rig_name: "",
    short_name: "",
    customer_name: "",
    details: "",
    design: "",
    location: "",
    hull_no: "",
    design_2: "",
    new_group: ""
  });
  //adding button functionality
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
      s_no: formData.length + 1,
    }));
  };
  

  const handleEditClick = (rig) => {
    setSelectedRig(rig);
    setShowForm(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8002/post', {
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
        s_no:'',
        rig_name: '',
        short_name: '',
        customer_name: '',
        details: '',
        design: '',
        location: '',
        hull_no: '',
        design_2: '',
        new_group: ''
      });
    })
    .catch(error => console.log(error));
  };

  useEffect(() => {
    async function fetchRigDetails() {
      try {
        const response = await axios.get("http://localhost:8002/rig_details");
        setSearchResults(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchRigDetails();
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

  const handleStopClose = (e)=>{
    e.stopPropagation()
  }

  //edition functionality
  const [enableEdit,setEnableEdit] = useState(false)
  return (
    <div className=''>
        
        <div className="search-container-Box">
        <h1 className="rig-details-heading">Rig Details</h1>
       

         
          
        </div>
        <div className='btn-Container'>
          <div>
            <button className="listbutton" onClick={handleListClick}>List</button>
            <button className="mapbutton" onClick={handleMapViewClick}>Map</button>
            <button className="handbookbutton" onClick={handleHandbookClick}>Handbook</button>
          </div>
          <div>
            <button className='addnewbutton' onClick={() => setShowForm(true)}>Add New</button>
            <button className="editbutton"onClick={()=>setEnableEdit(preve => !preve)}>Edit</button>
          </div>
        </div>
    <div>
      {/**new add */}
      {showForm && (
        <div className='popup-container'  onClick={(e)=>{
          e.stopPropagation()
          setShowForm(false)
        }}>

          <div className="popup" onClick={handleStopClose}>
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
              Rig Name:
              <input
                type="text"
                name="rig_name"
                value={formData.rig_name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Short Name:
              <input
                type="text"
                name="short_name"
                value={formData.short_name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Customer Name:
              <input
                type="text"
                name="customer_name"
                value={formData.customer_name}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Details:
              <input
                type="text"
                name="details"
                value={formData.details}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Design:
              <input
                type="text"
                name="design"
                value={formData.design}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Location:
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Hull Number:
              <input
                type="text"
                name="hull_no"
                value={formData.hull_no}
                onChange={handleInputChange}
              />
            </label>
            <label>
              Design 2:
              <input
                type="text"
                name="design_2"
                value={formData.design_2}
                onChange={handleInputChange}
              />
            </label>
            <label>
              New Group:
              <input
                type="text"
                name="new_group"
                value={formData.new_group}
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
            {/* <th>Select</th> */}
            <th>S. No</th>
            <th>Rig Name</th>
            <th>Short name</th>
            <th>Customer Name</th>
            <th>Details</th>
            <th>Design</th>
            <th>Location</th>
            <th>Hull no.</th>
            <th>Class</th>
          </tr>
        </thead>
        <tbody>
          {searchResults.map((rig, index) => (
            <tr key={rig.id}>
              {/* <td>
                <input
                  type="radio"
                  name="rig"
                  checked={selectedRigId === rig.id}
                  onChange={() => setSelectedRigId(rig.id)}
                />
              </td> */}
              <td className='EditRadioBtnEnabbled'>
                {enableEdit &&
                <>
                  <Editcomponent
                      s_no={index+1}
                      rig_name={rig.rig_name}
                      short_name={rig.short_name}
                      customer_name={rig.customer_name}
                      details={rig.details}
                      design={rig.design}
                      location={rig.location}
                      hull_no={rig.hull_no}
                      design_2={rig.design_2}
                      new_group={rig.new_group}

                  />
                </>
                }

                {index + 1}
              </td>
              <td>{rig.rig_name}</td>
              <td>{rig.short_name}</td>
              <td>{rig.customer_name}</td>
              <td>
                <button onClick={() => handleDetailsClick(rig)}>
                  View Details
                </button>
              </td>
              <td>{rig.design}</td>
              <td>{rig.location}</td>
              <td>{rig.hull_no}</td>
              <td>{rig.new_group}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Rigdetails;
