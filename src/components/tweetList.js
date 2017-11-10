import React from "react";
import TweetListItem from "./tweetListItem.js";

const TweetList = ({ tweets }) => (
  <section className="cards">
    {tweets.map(
      ({ id, text, created_at, user: { screen_name, profile_image_url } }) => {
        console.log(tweets);
        return (
          <TweetListItem
            key={id}
            tweet={text}
            createdAt={created_at}
            screenName={screen_name}
            profileImage={profile_image_url}
          />
        );
      }
    )}
  </section>
);

export default TweetList;
