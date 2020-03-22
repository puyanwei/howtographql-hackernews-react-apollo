import React, { useState } from "react";
import { withApollo } from "react-apollo";
import Link from "../components/Link";
import { FEED_SEARCH_QUERY } from "../queries/FeedSearchQuery";

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
