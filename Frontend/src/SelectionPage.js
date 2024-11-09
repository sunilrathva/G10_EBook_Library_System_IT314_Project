import React from 'react';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import Readericon from './images/readericon.png';
import Authoricon from './images/authoricon.png';
import './SelectionPage.css';

const SelectionPage = () => {
  const navigate = useNavigate();  // Initialize useNavigate hook

  const handleSelection = (role) => {
    console.log(`You selected: ${role}`);
    // Navigate to RegisterPage
    navigate('/Register', { state: { role } });  // Pass the selected role to RegisterPage
  };

  return (
    <div className="selection-container">
      <h1>Choose Your Role</h1>
      <div className="button-group">
        <button onClick={() => handleSelection("Reader")} className="role-button">
            <img src={Readericon} alt="Reader Icon" className="icon" /> I'm a Reader
        </button>
        <button onClick={() => handleSelection("Author")} className="role-button">
            <img src={Authoricon} alt="Author Icon" className="icon" /> I'm an Author
        </button>
      </div>
    </div>
  );
};

export default SelectionPage;
