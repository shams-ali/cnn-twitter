import React from "react";
import TweetListItem from "./tweetListItem.js";

const TweetList = ({ tweets }) => {
  return tweets.map(({ id, text, created_at, user: { screen_name } }) => {
    return (
      <ul key={id}>
        <TweetListItem
          tweet={text}
          createdAt={created_at}
          screenName={screen_name}
        />
      </ul>
    );
  });
};

export default TweetList;
