import React from 'react';
import PropTypes from 'prop-types';
import TweetListItem from './tweetListItem';

const TweetList = ({ tweets }) => (
  <section className="cards">
    {tweets.map(({
        id,
        text,
        created_at: createdAt,
        user: { screen_name: screenName, profile_image_url: profileImage },
      }) => (
        <TweetListItem
          key={id}
          tweet={text}
          createdAt={createdAt}
          screenName={screenName}
          profileImage={profileImage}
        />
      ))}
  </section>
);
TweetList.propTypes = {
  tweets: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default TweetList;
