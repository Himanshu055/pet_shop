// CustomerList.js

import React, { useState } from 'react';

import './CustomerList.css';
import EditModal from './EditModel/EditModal';
import AddModal from './addModal/AddModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';


// import EditModal from '../EditModel/EditModel';

const CustomerList = () => {
  const [editingCustomerId, setEditingCustomerId] = useState(null);
  const [editedCustomer, setEditedCustomer] = useState(null); // Data of the edited customer
  const [showAddModal, setShowAddModal] = useState(false);
  const [customers, setCustomers] = useState([
    {
      id: 1,
      name: 'John Doe',
      petName: 'Buddy',
      image: 'https://plus.unsplash.com/premium_photo-1673641895483-2119e6d9fd75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      email: 'john@example.com',
      phone: '123-456-7890',
    },
    {
      id: 2,
      name: 'Jane Smith',
      petName: 'Mikly',
      image: 'https://images.unsplash.com/photo-1484406566174-9da000fda645?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 3,
      name: 'Himanshu',
      petName: 'Jacky',
      image: 'https://images.unsplash.com/photo-1612287668012-49f536b3a1ec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwYW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 4,
      name: 'Onny',
      petName: 'rockze',
      image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGV0JTIwYW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 5,
      name: 'Neno',
      petName: 'Demo',
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGV0JTIwYW5pbWFsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 6,
      name: 'anny',
      petName: 'Shinchan',
      image: 'https://images.unsplash.com/photo-1494256997604-768d1f608cac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBldCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
    {
      id: 7,
      name: 'Pinu',
      petName: 'Venny',
      image: 'https://images.unsplash.com/photo-1482434368596-fbd06cae4f89?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHBldCUyMGFuaW1hbHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      email: 'jane@example.com',
      phone: '987-654-3210',
    },
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
      <h2 style={{ textAlign: 'center', marginTop: '5px', fontWeight: 'bold' }}>Pet Management</h2>
      <button className="add-button" onClick={handleAdd}>
          Add
        </button>
      {customers.map((customer) => (
        <div className="customer-item" key={customer.id}>
          <div className="customer-image">
            <img src={customer.image} alt={customer.name} />
          </div>
          <div className="customer-details">
            <h3>Owner Name : {customer.name}</h3>
            <p>Pet Name: {customer.petName}</p>
            <p>Email: {customer.email}</p>
            <p>Phone: {customer.phone}</p>
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
