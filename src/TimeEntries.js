import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
// import './TimeEntries.css';

class TimeEntries extends Component {
  
  constructor() {
    super();
    this.state = {
      showEntries: false,
      memberId: null
    }
  }
  
  showTimeEntries = ()  => {
    this.setState({
      showEntries: !this.state.showEntries
    })
  }
  
  render() {
    const showEntries = this.state.showEntries;
    const id = this.props.memberId;
    
    if (showEntries) {
      return <Query
        query={gql`
          query member($id: ID!) {
            member(id: $id) {
              timeEntries(start_time_gte:1500000000) {
                start_time
                end_time
                project_id
                cost_code_id
                action_type
              }
            }
          }
        `}
        variables={{ id }}>
        {({ loading, error, data }) => {
          if (loading) return <p>Loading...</p>;
          if (error) return <p>Error :(</p>;
          return (
          <span className="member-cell time-entries"><button onClick={this.showTimeEntries.bind(this)}>Hide Time Entries</button><br />
            {data.member && data.member.timeEntries.map(entry => (
            <div key={entry.index}>
            <span className="entry-item">
              start timestamp (Unix): {`${entry.start_time}`}&nbsp;
              end timestamp (Unix): {`${entry.end_time}`}&nbsp;
              project Id: {`${entry.project_id}`}&nbsp;
              action type: {`${entry.action_type}`}
            </span><br />
            </div>
            ))}
          </span>
          )
        }}
        </Query>
    } else {
      return <span className="member-cell time-entries"><button onClick={this.showTimeEntries.bind(this)}>View Time Entries</button></span>;
    }
  }
}

export default TimeEntries;
