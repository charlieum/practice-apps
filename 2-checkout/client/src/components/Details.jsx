import React, {useState} from 'react';

const Details = ({formOneData, formTwoData, formThreeData}) => {

  return (
    <div className='formContainer'>
      <div className='formHeader'>
        <h3>Purchase Confirmation</h3>
      </div>
      <div className='formBody'>
        <div className='formLine'>
          <h3>Thank you <strong>{formOneData.name}</strong> for shopping at <strong>Charlie's Ugly Portraits!</strong></h3>
        </div>
        <div className='formLine'>
          <span><strong>Name:</strong></span>{formOneData.name}
        </div>
        <div className='formLine'>
          <span><strong>Email:</strong></span>{formOneData.email}
        </div>
        <div className='formLine'>
          <span><strong>Address 1:</strong></span>{formTwoData.address1}
        </div>
        <div className='formLine'>
          <span><strong>Address 2:</strong></span>{formTwoData.address2}
        </div>
        <div className='formLine'>
          <span><strong>City:</strong></span>{formTwoData.city}
        </div>
        <div className='formLine'>
          <span><strong>State:</strong></span>{formTwoData.state}
        </div>
        <div className='formLine'>
          <span><strong>Zipcode:</strong></span>{formTwoData.zipcode}
        </div>

      </div>
    </div>
  );
};

export default Details;