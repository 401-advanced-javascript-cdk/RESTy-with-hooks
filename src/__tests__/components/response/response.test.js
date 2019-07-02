import React from 'react';
// import Response from '../../../components/response/response.js';
import App from '../../../app.js';

describe('<Response />', () => {
  it('takes in responseData as prop', () => {
    const app = mount(<App />);
    expect(app.find('Response').props()).toBeDefined();
  });
});