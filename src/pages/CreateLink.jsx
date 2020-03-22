import React, { useState } from "react";
import { useMutation } from "@apollo/react-hooks";
import { FEED_QUERY } from "../queries/FeedListQuery";
import { POST_MUTATION } from "../queries/CreateLinkMutation";

const CreateLink = ({ history }) => {
  const [newLink, setNewLink] = useState({ description: "", url: "" });
  const { description, url } = newLink;

  const [PostMutation] = useMutation(POST_MUTATION, {
    variables: { description, url },
    update: () => handleUpdateFeed(),
    onCompleted: () => {
      history.push("/");
    }
  });

  const handleDescriptionChange = e =>
    setNewLink({ ...newLink, description: e.target.value });

  const handleUrlChange = e => setNewLink({ ...newLink, url: e.target.value });

  const handleUpdateFeed = (store, { data: { post } }) => {
    const data = store.readQuery({ query: FEED_QUERY });
    data.feed.links.unshift(post);
    store.writeQuery({
      query: FEED_QUERY,
      data
    });
  };

  const handleClick = () => PostMutation({ description, url });

  return (
    <div>
      <div className="flex flex-column mt3">
        <input
          className="mb2"
          value={description}
          onChange={handleDescriptionChange}
          type="text"
          placeholder="A description for the link"
        />
        <input
          className="mb2"
          value={url}
          onChange={handleUrlChange}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      <button onClick={handleClick}>Submit</button>
    </div>
  );
};
export default CreateLink;
