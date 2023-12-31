import React from "react";

const Confirmation = ({formOneData, formTwoData, formThreeData, postData, setView}) => {

  const onPostData = () => {
    postData();
    setView('details');
  };

  return (
    <div className='formContainer'>
      <div className='formHeader'>
        <h3>Confirm Purchase</h3>
      </div>
      <div className='formBody'>
        <div className='formLine'>
          <input type='button' value='Purchase' onClick={onPostData}></input>
        </div>
        <div className='formLine'>
            <u>Order Details</u>
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

export default Confirmation;