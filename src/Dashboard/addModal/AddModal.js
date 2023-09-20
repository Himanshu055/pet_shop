import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import './AddModal.css'; // Add your styles here

const AddModal = ({ onSave, onClose }) => {
  const [name, setName] = useState('');
  const [petName, setPetName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [avatar, setAvatar] = useState(null);

  const handleAdd = () => {
    const newCustomer = {
        id: uuidv4(), // Assuming you generate IDs sequentially
        name,
        petName,
        email,
        phone,
        avatar,
    };

    onSave(newCustomer);
  };
  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    setAvatar(file);
  };

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
                Owner Name:
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
              <label htmlFor="pet-name-input" className="col-form-label">
                Pet Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="pet-name-input"
                value={petName}
                onChange={(e) => setPetName(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="email-input" className="col-form-label">
                Email:
              </label>
              <input
                type="email"
                className="form-control"
                id="email-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="phone-input" className="col-form-label">
                Phone Number:
              </label>
              <input
                type="tel"
                className="form-control"
                id="phone-input"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <label htmlFor="avatar" className="avatar-label">
              Upload Avatar:
              <input
                type="file"
                id="avatar"
                accept=".jpg, .jpeg, .png"
                onChange={handleAvatarChange}
              />
            </label>
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
