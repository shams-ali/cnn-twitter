export const GET_TWITTER_FEED_REQUESTED = "twitter/GET_TWITTER_FEED_REQUESTED";
export const SET_TWITTER_FEED = "twitter/SET_TWITTER_FEED";

const initialState = {
  twitterFeed: { feed: "this is initial feed" },
  isRequestingTwitterFeed: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_TWITTER_FEED_REQUESTED:
      return {
        ...state,
        isRequestingTwitterFeed: true
      };

    case SET_TWITTER_FEED:
      return {
        ...state,
        twitterFeed: { feed: "this is feed after async" },
        isRequestingTwitterFeed: !state.isRequestingTwitterFeed
      };

    default:
      return state;
  }
};

export const getTwitterFeed = () => {
  return dispatch => {
    dispatch({
      type: GET_TWITTER_FEED_REQUESTED
    });

    return setTimeout(() => {
      dispatch({
        type: SET_TWITTER_FEED
      });
    }, 3000);
  };
};
