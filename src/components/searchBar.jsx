import React from 'react';
import { Field, reduxForm } from 'redux-form';
import PropTypes from 'prop-types';

import '../styles/search-bar.css';

const SearchBar = ({ handleSubmit, pristine, submitting }) => (
  <div className="sw">
    <form onSubmit={handleSubmit}>
      <Field
        name="search"
        component="input"
        type="text"
        placeholder="Search Twitter!!"
        className="search"
      />
      <button type="submit" className="go" disabled={pristine || submitting}>
        <span className="entypo-search" />
      </button>
    </form>
  </div>
);

SearchBar.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

export default reduxForm({
  form: 'searchBar',
})(SearchBar);
