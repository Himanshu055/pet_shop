import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddModal.css'; // Add your styles here

const AddModal = ({ onSave, onClose }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
 

  const handleAdd = () => {
    const newCustomer = {
        id: uuidv4(), // Assuming you generate IDs sequentially
        name,
        price,
        description,
       
    };

    onSave(newCustomer);
  };
//   const handleAvatarChange = (e) => {
//     const file = e.target.files[0];
//     setAvatar(file);
//   };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Add Customer details</h1>
          <button className="btn-close" onClick={onClose} aria-label="Close">
            Close
          </button>
        </div>
        <div className="modal-body">
          <form>
            <div className="mb-3">
              <label htmlFor="name-input" className="col-form-label">
                Checkup Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="name-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="col-form-label">
               Price
              </label>
              <input
                type="text"
                className="form-control"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="description" className="col-form-label">
                Description
              </label>
              <textarea
                type="email"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            
            
          </form>
        </div>
        <div className="modal-footer">
          <button className="btn btn-primary" onClick={handleAdd}>
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
