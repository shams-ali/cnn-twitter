import React from "react";
import { Field, reduxForm } from "redux-form";

const SearchBar = ({ handleSubmit, pristine, reset, submitting }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Search</label>
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
};

export default reduxForm({
  form: "simple" // a unique identifier for this form
})(SearchBar);
