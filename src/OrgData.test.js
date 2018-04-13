import React from 'react';
import ReactDOM from 'react-dom';
import OrgData from './OrgData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<OrgData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
