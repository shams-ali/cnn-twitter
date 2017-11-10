import React from 'react';
import PropTypes from 'prop-types';

const TweetListItem = ({ tweet, screenName, profileImage }) => (
  <article className="card">
    <a href={`https://twitter.com/${screenName}`}>
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

TweetListItem.propTypes = {
  tweet: PropTypes.string.isRequired,
  screenName: PropTypes.string.isRequired,
  profileImage: PropTypes.string.isRequired,
};

export default TweetListItem;
