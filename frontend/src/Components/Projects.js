import React, { useState } from 'react';
import '../Components/css/projects.css'

function ProjectDetails({ onNext }) {
  const [salesOrderNo, setSalesOrderNo] = useState('');
  const [salesOrderDate, setSalesOrderDate] = useState('');
  const [poNo, setPoNo] = useState('');
  const [poDays, setPoDays] = useState('');
  const [poDate, setPoDate] = useState('');
  const [quoteNo, setQuoteNo] = useState('');
  const [estCommencementDate, setEstCommencementDate] = useState('');
  const [estCompletionMonth, setEstCompletionMonth] = useState('');
  const [rigName, setRigName] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [rigLocation, setRigLocation] = useState('');
  const [rigType, setRigType] = useState('');
  const [serviceComponent, setServiceComponent] = useState('');
  const [documentDate, setDocumentDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  return (
    <form onSubmit={handleSubmit} className='form'>
      <label>
        Sales Order No:
        <input
          type="text"
          value={salesOrderNo}
          onChange={(e) => setSalesOrderNo(e.target.value)}
        />
      </label>
      <label>
        Sales Order Date:
        <input
          type="date"
          value={salesOrderDate}
          onChange={(e) => setSalesOrderDate(e.target.value)}
        />
      </label>
      <label>
        PO No:
        <input
          type="text"
          value={poNo}
          onChange={(e) => setPoNo(e.target.value)}
        />
      </label>
      <label>
        PO days:
        <input
          type="number"
          value={poDays}
          onChange={(e) => setPoDays(e.target.value)}
        />
      </label>
      <label>
        PO Date:
        <input
          type="date"
          value={poDate}
          onChange={(e) => setPoDate(e.target.value)}
        />
      </label>
      <label>
        Quote no:
        <input
          type="text"
          value={quoteNo}
          onChange={(e) => setQuoteNo(e.target.value)}
        />
      </label>
      <label>
        Estimated date of commencement:
        <input
          type="date"
          value={estCommencementDate}
          onChange={(e) => setEstCommencementDate(e.target.value)}
        />
      </label>
      <label>
        Estimated project completion month:
        <input
          type="month"
          value={estCompletionMonth}
          onChange={(e) => setEstCompletionMonth(e.target.value)}
        />
      </label>
    
      
      <label>
        Rig name:
        <input
          type="text"
          value={rigName}
          onChange={(e) => setRigName(e.target.value)}
        />
      </label>
      <label>
        Customer name:
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </label>
      <label>
        Rig Location:
        <input
          type="text"
          value={rigLocation}
          onChange={(e) => setRigLocation(e.target.value)}
        />
      </label>
      <label>
        Rig type:
        <input
          type=    "text"
          value={rigType}
          onChange={(e) => setRigType(e.target.value)}
        />
      </label>
      <label>
        Service component:
        <input
          type="text"
          value={serviceComponent}
          onChange={(e) => setServiceComponent(e.target.value)}
        />
      </label>
      <label>
        Document date:
        <input
          type="date"
          value={documentDate}
          onChange={(e) => setDocumentDate(e.target.value)}
        />
      </label>
      <button type="submit">Next</button>
    </form>
    );
  }
  
  export default ProjectDetails;
