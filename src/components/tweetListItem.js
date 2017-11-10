import React from "react";

const TweetListItem = ({ tweet, createdAt, screenName }) => (
  <li>
    <div>{createdAt}</div>
    <a href={`https://twitter.com/${screenName}`}>{tweet}</a>
  </li>
);

export default TweetListItem;
