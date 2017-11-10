import React from "react";
import TweetListItem from "./tweetListItem.js";

const TweetList = ({
  tweets: {
    id: key,
    text: tweet,
    created_at: createdAt,
    user: { screen_name: screenName }
  }
}) => {
  return tweets.map(tweet => {
    return (
      <ul>
        <TweetListItem key tweet createdAt screenName />
      </ul>
    );
  });
};

export default TweetList;
