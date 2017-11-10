import React from "react";
import { push } from "react-router-redux";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getTwitterFeed } from "../../modules/twitter";

const Home = props => (
  <div>
    <h1>Home</h1>
    <p>Count: {props.twitterFeed.feed}</p>

    <p>
      <button
        onClick={props.getTwitterFeed}
        disabled={props.isRequestingTwitterFeed}
      >
        Get Twitter Feed
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
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
