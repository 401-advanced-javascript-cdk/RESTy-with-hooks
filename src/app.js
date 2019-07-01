import React from 'react';

import Response from './components/response/response.js';
import Header from './components/header/header.js';
import Footer from './components/footer/footer.js';
import Form from './components/form/form.js';
import superagent from 'superagent';
import { useState } from 'react';
import './app.scss';

const App = props => {

  const [response, changeResponse] = useState({});
  const [history, changeHistory] = useState([]);

  const submitForm = userInput => {
    if(userInput.method === 'get') {
      userInput.jsonInput = "{}";
    }
    superagent(userInput.method, userInput.url)
      .send(JSON.parse(userInput.jsonInput))
      .then(response => {
        changeResponse(response);
        changeHistory([...history, {userInput, response}]);
        console.log(response.body)
      });

  }
  return (
    <React.Fragment>
        <Header />
        <Form submitForm={submitForm} />
        <Response response={response} />
        <Footer />
    </React.Fragment>
  );

}

export default App;