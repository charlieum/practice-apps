import React, {useState} from "react";
import { render } from "react-dom";
import axios from 'axios';
import Form1 from './components/Form1.jsx';
import Form2 from './components/Form2.jsx';
import Form3 from './components/Form3.jsx';
import Confirmation from './components/Confirmation.jsx';
import Details from './components/Details.jsx';

const App = () => {

  const [view, setView] = useState('');
  const [formOneData, setFormOneData] = useState({name: '', email: '', password: ''});
  const [formTwoData, setFormTwoData] = useState({address1: '', address2: '', city: '', state:'', zipcode: ''});
  const [formThreeData, setFormThreeData] = useState({creditcard: '', exp: '', cvv: '', billingZip: ''});

  const postData = () => {
    let fullData = {
      purchaseState: 'confirmation',
      ...formOneData,
      ...formTwoData,
      ...formThreeData
    };

    console.log('client > fullData: ', fullData);

    axios.post('/checkout', fullData)
      .then((response) => {
        console.log();
      })
      .catch((error) => {
        console.log(error);
      })
  }

  const func = {
    renderComponents: () => {
      if(view === '') {
        return <Form1 setView={setView} setFormOneData={setFormOneData}/>
      }
      if(view === 'shipping') {
        return <Form2 setView={setView} setFormTwoData={setFormTwoData}/>
      }
      if(view === 'payment') {
        return <Form3 setView={setView} setFormThreeData={setFormThreeData} postData={postData}/>
      }
      if(view === 'confirmation') {
        return <Confirmation formOneData={formOneData} formTwoData={formTwoData} formThreeData={formThreeData} postData={postData} setView={setView}/>
      }
      if(view === 'details') {
        return <Details formOneData={formOneData} formTwoData={formTwoData} formThreeData={formThreeData}/>
      }
    }
  };

  React.useEffect (() => {
    axios.get('/checkout')
      .then((response) => {
        console.log()
      })
      .catch((error) => {
        console.log(error);
      })
  }, []);

  return (
    <div>
      <div>
        <h1>Charlie's Ugly Portraits <em>checkout</em></h1>
      </div>
      <div>
        {func.renderComponents()}
      </div>
    </div>
  );
};

render(<App />, document.getElementById('root'));

