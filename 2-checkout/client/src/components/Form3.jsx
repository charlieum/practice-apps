import React, {useState} from "react";

const Form3 = ({setView, setFormThreeData}) => {
  const [creditcard, setCreditcard] = useState('');
  const [exp, setExp] = useState('');
  const [cvv, setCvv] = useState('');
  const [billingZip, setBillingZip] = useState('');

  const onCreditcard = (e) => {
    setCreditcard(e.target.value);
  };

  const onExp = (e) => {
    setExp(e.target.value);
  };

  const onCvv = (e) => {
    setCvv(e.target.value);
  };

  const onBillingZip = (e) => {
    setBillingZip(e.target.value);
  };

  const setForm3 = () => {

    setFormThreeData ({
      creditcard: creditcard,
      exp: exp,
      cvv: cvv,
      billingZip: billingZip
    });

    setView('confirmation');
  };

  return (
    <div>
      <div className='formContainer'>
        <div className='formHeader'><h3>Create Account</h3></div>
      </div>

      <div className='formContainer'>
        <div className='formHeader'><h3>Shipping Information</h3></div>
      </div>

      <div className='formContainer'>
        <div className='formHeader'><h3>Payment</h3></div>
        <div className='formBody'>
        <form>
            <div className='formLine'>
              <span>Credit Card: </span>
              <input type='text' value={creditcard} onChange={onCreditcard}></input>
            </div>
            <div className='formLine'>
              <span>Expiration Date: </span>
              <input type='text' value={exp} onChange={onExp}></input>
            </div>
            <div className='formLine'>
              <span>CVV: </span>
              <input type='text' value={cvv} onChange={onCvv}></input>
            </div>
            <div className='formLine'>
              <span>Billing Zipcode: </span>
              <input type='text' value={billingZip} onChange={onBillingZip}></input>
            </div>
            <div className='formLine'>
              <input type='button' value='Submit' onClick={setForm3}></input>
            </div>
          </form>
        </div>
      </div>

    </div>
  );
};

export default Form3;