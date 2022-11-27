import React, {useState} from "react";

const Form1 = ({setView, setFormOneData}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onSetName = (e) => {
    setName(e.target.value);
  };

  const onSetEmail = (e) => {
    setEmail(e.target.value);
  };

  const onSetPassword = (e) => {
    setPassword(e.target.value);
  };

  const setForm1 = () => {

    setFormOneData({
      name: name,
      email: email,
      password: password
    });

    setView('shipping');
  }

  return (
    <div>
      <div className='formContainer'>
        <div className='formHeader'><h3>Create Account</h3></div>
        <div className='formBody'>
          <form>
            <div className='formLine'>
              <span>Name: </span>
              <input type='text' className='formInput' value={name} onChange={onSetName}></input>
            </div>
            <div className='formLine'>
              <span>Email: </span>
              <input type='email' value={email} onChange={onSetEmail}></input>
            </div>
            <div className='formLine'>
              <span>Password: </span>
              <input type='password' value={password} onChange={onSetPassword}></input>
            </div>
            <div className='formLine'>
              <input type='button' value='Submit' onClick={setForm1}></input>
            </div>
          </form>
        </div>
      </div>

      <div className='formContainer'>
        <div className='formHeader'><h3>Shipping Information</h3></div>
      </div>

      <div className='formContainer'>
        <div className='formHeader'><h3>Payment</h3></div>
      </div>

    </div>
  );
};

export default Form1;