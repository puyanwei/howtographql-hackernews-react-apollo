import React, { useState } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Link from "../components/Link";

const FEED_SEARCH_QUERY = gql`
  query FeedSearchQuery($filter: String!) {
    feed(filter: $filter) {
      links {
        id
        url
        description
        createdAt
        postedBy {
          id
          name
        }
        votes {
          id
          user {
            id
          }
        }
      }
    }
  }
`;

const Search = ({ client }) => {
  const [searchDetails, setSearchDetails] = useState({
    links: [],
    filter: ""
  });
  const { links, filter } = searchDetails;

  const _executeSearch = async () => {
    const result = await client.query({
      query: FEED_SEARCH_QUERY,
      variables: { filter }
    });
    const links = result.data.feed.links;
    setSearchDetails({ ...searchDetails, links });
  };

  const handleClick = () => _executeSearch();

  const handleOnChange = e =>
    setSearchDetails({ ...searchDetails, filter: e.target.value });

  return (
    <div>
      <div>
        <input type="text" onChange={handleOnChange} />
        <button onClick={handleClick}>Search</button>
      </div>
      {links.map((link, index) => (
        <Link key={link.id} link={link} index={index} />
      ))}
    </div>
  );
};

export default withApollo(Search);
