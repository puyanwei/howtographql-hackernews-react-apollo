import React from "react";

const Link = ({ link: { description, url } }) => (
  <div>
    {description}({url})
  </div>
);

export default Link;
