import axios from "axios";
export const GET_TWITTER_FEED_REQUESTED = "twitter/GET_TWITTER_FEED_REQUESTED";
export const SET_TWITTER_FEED = "twitter/SET_TWITTER_FEED";

const initialState = {
  twitterFeed: {},
  isRequestingTwitterFeed: false
};

export default (state = initialState, { type, twitterFeed }) => {
  switch (type) {
    case GET_TWITTER_FEED_REQUESTED:
      return {
        ...state,
        isRequestingTwitterFeed: true
      };

    case SET_TWITTER_FEED:
      return {
        ...state,
        twitterFeed,
        isRequestingTwitterFeed: !state.isRequestingTwitterFeed
      };

    default:
      return state;
  }
};

export const getTwitterFeed = q => dispatch => {
  dispatch({
    type: GET_TWITTER_FEED_REQUESTED
  });
  return axios
    .get(`/api/search?q=hello`)
    .then(({ data: twitterFeed }) =>
      dispatch({ type: SET_TWITTER_FEED, twitterFeed })
    );
};
