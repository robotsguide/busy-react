import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import TimeEntries from './TimeEntries';

class MemberData extends Component {
  render() {  
    return <Query
      query={gql`
        {
          members {
            ...memberProps
          }
        }
          fragment memberProps on MemberType {
            id
            first_name
            last_name
            email
            organization_id
            position_id
          }
        `}
        >
          {({ loading, error, data }) => {
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
              
            
            
            return data.members.map(member => {
              if (member.email === null) {
                 return <div className="member-row" key={member.id}>
                  <span className="member-cell name">{`${member.first_name} ${member.last_name}`}</span>
                  <span className="member-cell email">none submitted</span>
                  <TimeEntries memberId={member.id}/>
                </div>;
                
              } else {
              return <div className="member-row" key={member.id}>
                  <span className="member-cell name">{`${member.first_name} ${member.last_name}`}</span>
                  <span className="member-cell email">{`${member.email}`}</span>
                  <TimeEntries memberId={member.id}/>
                </div>;
              }
            });
          }}
        </Query>
  }
}

export default MemberData;