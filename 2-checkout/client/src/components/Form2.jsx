import React, {useState} from "react";

const Form2 = ({setView, setFormTwoData}) => {
  const [address1, setAddressOne] = useState('');
  const [address2, setaddressTwo] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zipcode, setZipcode] = useState('');

  const onAddress1 = (e) => {
    setAddressOne(e.target.value);
  }

  const onAddress2 = (e) => {
    setaddressTwo(e.target.value);
  }

  const onCity = (e) => {
    setCity(e.target.value);
  }

  const onState = (e) => {
    setState(e.target.value);
  }

  const onZipcode = (e) => {
    setZipcode(e.target.value);
  }

  const setForm2 = () => {
    setFormTwoData({
      address1: address1,
      address2: address2,
      city: city,
      state: state,
      zipcode: zipcode});

    setView('payment');
  }

  return (
    <div>
      <div className='formContainer'>
        <div className='formHeader'><h3>Create Account</h3></div>
      </div>

      <div className='formContainer'>
        <div className='formHeader'><h3>Shipping Information</h3></div>
        <div className='formBody'>
        <form>
            <div className='formLine'>
              <span>Address 1: </span>
              <input type='text' value={address1} onChange={onAddress1}></input>
            </div>
            <div className='formLine'>
              <span>Address 2: </span>
              <input type='text' value={address2} onChange={onAddress2}></input>
            </div>
            <div className='formLine'>
              <span>City: </span>
              <input type='text' value={city} onChange={onCity}></input>
            </div>
            <div className='formLine'>
              <span>State: </span>
              <input type='text' value={state} onChange={onState}></input>
            </div>
            <div className='formLine'>
              <span>Zipcode: </span>
              <input type='text' value={zipcode} onChange={onZipcode}></input>
            </div>
            <div className='formLine'>
              <input type='button' value='Submit' onClick={setForm2}></input>
            </div>
          </form>
        </div>
      </div>

      <div className='formContainer'>
        <div className='formHeader'><h3>Payment</h3></div>
      </div>

    </div>
  );
};

export default Form2;