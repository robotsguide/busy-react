import React from 'react';
import ReactDOM from 'react-dom';
import MemberData from './MemberData';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MemberData />, div);
  ReactDOM.unmountComponentAtNode(div);
});
