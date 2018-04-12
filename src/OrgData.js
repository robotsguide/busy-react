import React, { Component } from 'react';
import gql from "graphql-tag";
import { Query } from "react-apollo";
import './OrgData.css';

class OrgData extends Component {
  render() {
    return <Query
      query={gql`
        {
          memberById:member(id: "92cccae3-2aac-43c2-b69e-fbca7e472118") {
            organization {
              ...orgProps
            }
          }
        }
        fragment orgProps on OrganizationType {
            id
            organization_name
            owned_by
            updated_on
            created_on
            submitted_on
            deleted_on
        }
      `}
      >
      {({ loading, error, data }) => {
        if (loading) return <p>Loading...</p>;
        if (error) return <p>Error :(</p>;

        return (
          <div className="company-name">Company: {`${data.memberById.organization.organization_name}`}</div>
        );
      }}
      </Query>
  }
}

export default OrgData;
