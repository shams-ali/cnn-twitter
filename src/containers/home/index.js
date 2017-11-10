import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTwitterFeed } from "../../modules/twitter";
import TweetListItem from "../../components/tweetList";
import SearchBar from "../../components/searchBar";

const Home = ({ twitterFeed, getTwitterFeed, isRequestingTwitterFeed }) => (
  <div className="centered">
    <SearchBar
      handleSubmit={getTwitterFeed}
      submitting={isRequestingTwitterFeed}
    />
    <TweetListItem tweets={twitterFeed} />
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
