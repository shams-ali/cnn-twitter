import React from "react";
import { Field, reduxForm } from "redux-form";
import "../styles/search-bar.css";
const SearchBar = ({ handleSubmit, pristine, reset, submitting }) => (
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

export default reduxForm({
  form: "searchBar"
})(SearchBar);
