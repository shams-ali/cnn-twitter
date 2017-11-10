import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTwitterFeed } from "../../modules/twitter";
import TweetListItem from "../../components/tweetList";

const Home = ({ twitterFeed, getTwitterFeed, isRequestingTwitterFeed }) => (
  <div>
    <h1>Home</h1>
    <p>TitterFeed: {console.log(twitterFeed)}</p>
    <TweetListItem tweets={twitterFeed} />
    <p>
      <button onClick={getTwitterFeed} disabled={isRequestingTwitterFeed}>
        Get Twitter Feed
      </button>
    </p>
  </div>
);

const mapStateToProps = ({
  twitter: { twitterFeed, isRequestingTwitterFeed }
}) => ({
  twitterFeed,
  isRequestingTwitterFeed
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTwitterFeed
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
