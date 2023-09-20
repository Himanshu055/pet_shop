import React, { useState, useEffect } from 'react';
import './EditModal.css'; // Import your CSS file for styling

const EditModal = ({ customer, onSave, onClose }) => {
  const [recipient, setRecipient] = useState('');
  const [customername, setCustomername] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  // Use useEffect to set initial values when the customer prop changes
  useEffect(() => {
    if (customer) {
      setCustomername(customer.name);
      setPrice(customer.price);
      setRecipient(customer.email); // Connect recipient to email
      setDescription(customer.description);   // Connect message to phone
    }
  }, [customer]);

  const handleSave = () => {
    const editedData = {
      name: customername,   // Update customer name
      price: price,     // Update pet name
      email: recipient,     // Update email
      description: description,       // Update phone
    };
    
    onSave(editedData); // This function should update the existing customer's data

    onClose(); // Close the modal after saving
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h1 className="modal-title fs-5">Edit Customer</h1>
          <button className="btn-close" onClick={onClose} aria-label="Close">
            Close
          </button>
        </div>
        <div className="modal-body">
          <form>

          <div className="mb-3">
              <label htmlFor="customer-text" className="col-form-label">
                Checkup Name:
              </label>
              <input
                type="text"
                className="form-control"
                id="customer-text"
                value={customername}
                onChange={(e) => setCustomername(e.target.value)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="price" className="col-form-label">
                Price:
              </label>
              <input
                type="text"
                className="form-control"
                id="Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>


            <div className="mb-3">
              <label htmlFor="description" className="col-form-label">
                Description
              </label>
              <textarea
                type="text"
                className="form-control"
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </div>
            {/* <div className="mb-3">
              <label htmlFor="message-text" className="col-form-label">
                Phone:
              </label>
              <input
                type="text"
                className="form-control"
                id="message-text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div> */}
          </form>
        </div>
        <div className="modal-footer">
          {/* <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button> */}
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
