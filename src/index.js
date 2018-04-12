import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import ApolloClient from 'apollo-boost';
import logo from './busybusy-b-512.png';
import './index.css';
import OrgData from './OrgData';
import MemberData from './MemberData';
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


const App = () => (
  <ApolloProvider client={client}>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Busy React</h1>
        <OrgData />
      </header>
       <div className="member-table">
        <div className="member-table-header">
          <span className="header-cell name">Employee Name</span>
          <span className="header-cell email">Email</span>
          <span className="header-cell time-entries">Entries</span>
        </div>
        <div className="member-table-body">
          <MemberData />
        </div>
      </div>
    </div>
  </ApolloProvider>
);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
