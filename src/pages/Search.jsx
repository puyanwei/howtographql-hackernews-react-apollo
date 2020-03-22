import React, { useState } from "react";
import { withApollo } from "react-apollo";
import gql from "graphql-tag";
import Link from "../components/Link";

const Search = () => {
  const [blaa, setBlaa] = useState({
    links: [],
    filter: ""
  });
  const { links, filter } = blaa;

  const _executeSearch = async () => {
    // ... you'll implement this 🔜
  };

  const handleOnChange = e => setBlaa({ ...blaa, filter: e.target.value });
  const handleClick = () => this._executeSearch();

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
