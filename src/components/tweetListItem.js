import React from "react";

const TweetListItem = ({ tweet, createdAt, screenName, profileImage }) => (
  <article className="card">
    <a href="#">
      <figure className="thumbnail">
        <img src={profileImage} alt="User" />
      </figure>
      <div className="card-content">
        <h2>{screenName}</h2>
        <p>{tweet}</p>
      </div>
    </a>
  </article>
);

export default TweetListItem;
