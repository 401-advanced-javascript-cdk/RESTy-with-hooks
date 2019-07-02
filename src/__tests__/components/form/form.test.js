import React from 'react';
import Form from '../../../components/form/form.js';

describe('<Form />', () => {
  it('contains a form element', () => {
    const form = shallow(<Form />);
    expect(form.find('form')).toBeTruthy();
  });
});