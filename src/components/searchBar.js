import React from "react";
import { Field, reduxForm } from "redux-form";

const SearchBar = ({ handleSubmit, pristine, reset, submitting }) => (
  <form onSubmit={handleSubmit}>
    <div className="group">
      <div>
        <Field
          name="search"
          component="input"
          type="text"
          placeholder="Search Twitter!!"
        />
      </div>
    </div>
    <div>
      <button type="submit" disabled={pristine || submitting}>
        Submit
      </button>
      <button type="button" disabled={pristine || submitting} onClick={reset}>
        Clear Values
      </button>
    </div>
  </form>
);

export default reduxForm({
  form: "searchBar"
})(SearchBar);
