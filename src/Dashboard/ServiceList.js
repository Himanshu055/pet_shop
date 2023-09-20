// CustomerList.js

import React, { useState } from 'react';

import './CustomerList.css';


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import EditModal from './ServiceAddModal/EditModal';
import AddModal from './ServiceAddModal/AddModal';


// import EditModal from '../EditModel/EditModel';

const CustomerList = () => {
  const [editingCustomerId, setEditingCustomerId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState(null); // Data of the edited customer
  const [showAddModal, setShowAddModal] = useState(false);
  const [customers, setCustomers] = useState([
    { id: 1, name: 'Checkup', price: 50,description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled" },
    { id: 2, name: 'Vaccination', price: 30,description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"  },
    { id: 3, name: 'Dental Cleaning', price: 70,description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"  },
    { id: 4, name: 'X-Ray', price: 100,description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"  },
    { id: 5, name: 'Surgery', price: 150,description:"simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled"  },
    // Add more dummy customers
  ]); // Initial customer data

  const handleEdit = (customerId) => {
    const customerToEdit = customers.find((customer) => customer.id === customerId);
    setEditingCustomerId(customerId);
    setEditedCustomer(customerToEdit);
  };

  const handleRemove = (customerId) => {
    const updatedCustomers = customers.filter((customer) => customer.id !== customerId);
    setCustomers(updatedCustomers);
  };

  const handleEditvalue = (editedData) => {
    // Update the customers array with edited data
    const updatedCustomers = customers.map((customer) =>
      customer.id === editingCustomerId ? { ...customer, ...editedData } : customer
    );
    setCustomers(updatedCustomers);
    setEditingCustomerId(null);
    setEditedCustomer(null);
  };

  const handleAdd = () => {
    setShowAddModal(true);
  };

  const handleAddModalClose = () => {
    setShowAddModal(false);
  };

  const handleSave = (newCustomerData) => {
    setCustomers([...customers, newCustomerData]);
    setShowAddModal(false);
  };

  const totalRecords = customers.length;

  return (
    <div>
    <div className="customer-list">
      <h2 style={{ textAlign: 'center', marginTop: '5px', fontWeight: 'bold' }}>Service List</h2>
      <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      {customers.map((customer) => (
        <div className="customer-item" key={customer.id}>
         
          <div className="customer-details">
            <h3>Check up : {customer.name}</h3>
            <p>Price: ${customer.price}</p>
            <p><b>Check up description:</b> {customer.description}</p>
           
          </div>
          <div className="button-group">
            <button className="button edit-button" onClick={() => handleEdit(customer.id)}>
            <FontAwesomeIcon icon={faEdit} />  
            </button>
            <button className="button remove-button" onClick={() => handleRemove(customer.id)}>
            <FontAwesomeIcon icon={faTrash} /> 
            </button>
          </div>
        </div>
      ))}
       {showAddModal && <AddModal onSave={handleSave} onClose={handleAddModalClose} />}
        
      {editingCustomerId && (
        <EditModal
          customer={editedCustomer}
          onSave={handleEditvalue}
          onClose={() => setEditingCustomerId(null)}
        />
      )}
    </div>
    <p className="total-records">Total Records: {totalRecords}</p>
    </div>
  );
};

export default CustomerList;
