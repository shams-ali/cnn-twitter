import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTwitterFeed } from "../../modules/twitter";

const Home = ({ twitterFeed, getTwitterFeed, isRequestingTwitterFeed }) => (
  <div>
    <h1>Home</h1>
    <p>TitterFeed: {console.log(twitterFeed)}</p>

    <p>
      <button onClick={getTwitterFeed} disabled={isRequestingTwitterFeed}>
        Get Twitter Feed
      </button>
    </p>
  </div>
);

const mapStateToProps = state => ({
  twitterFeed: state.twitter.twitterFeed,
  isRequestingTwitterFeed: state.twitter.isRequestingTwitterFeed
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getTwitterFeed,
      changePage: () => push("/about-us")
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
