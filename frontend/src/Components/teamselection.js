
import React, { useState } from 'react';

function TeamSelection({ onBack, onNext }) {
  const [supervisor, setSupervisor] = useState('');
  const [technician1, setTechnician1] = useState('');
  const [technician2, setTechnician2] = useState('');
  const [additionalTechnicians, setAdditionalTechnicians] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onNext();
  };

  const handleAddTechnician = () => {
    setAdditionalTechnicians([...additionalTechnicians, '']);
  };

  const handleTechnicianChange = (index, value) => {
    const updatedTechnicians = [...additionalTechnicians];
    updatedTechnicians[index] = value;
    setAdditionalTechnicians(updatedTechnicians);
  };

  return (
    <form onSubmit={handleSubmit}>
      <button type="button" onClick={onBack}>
        Back
      </button>
      <label>
        Supervisor:
        <input
          type="text"
          value={supervisor}
          onChange={(e) => setSupervisor(e.target.value)}
        />
      </label>
      <label>
        Technician 1:
        <input
          type="text"
          value={technician1}
          onChange={(e) => setTechnician1(e.target.value)}
        />
      </label>
      <label>
        Technician 2:
        <input
          type="text"
          value={technician2}
          onChange={(e) => setTechnician2(e.target.value)}
        />
      </label>
      {additionalTechnicians.map((technician, index) => (
        <label key={index}>
          Technician {index + 3}:
          <input
            type="text"
            value={technician}
            onChange={(e) => handleTechnicianChange(index, e.target.value)}
          />
        </label>
      ))}
      <button type="button" onClick={handleAddTechnician}>
        +Add more
      </button>
      <button type="submit">Next</button>
    </form>
  );
}

export default TeamSelection;
