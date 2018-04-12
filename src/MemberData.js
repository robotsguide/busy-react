import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";

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
              
            const memberRows = [];
            
            data.members.map(member => {
              let memberRow = null;
              if (member.email === null) {
                 memberRow = <div className="member-row" key={member.id}>
                  <span className="member-cell name">{`${member.first_name} ${member.last_name}`}</span>
                  <span className="member-cell email">none submitted</span>
                  <span className="member-cell time-entries"><button>View Time Entries</button></span>
                </div>;
                memberRows.push(memberRow);
                
              } else {
              memberRow = <div className="member-row" key={member.id}>
                  <span className="member-cell name">{`${member.first_name} ${member.last_name}`}</span>
                  <span className="member-cell email">{`${member.email}`}</span>
                  <span className="member-cell time-entries"><button>View Time Entries</button></span>
                </div>;
                memberRows.push(memberRow);
              }
              return null;
            });
            return memberRows;
          }}
        </Query>
  }
}

export default MemberData;