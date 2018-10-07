import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { createPost } from '../actions';

class PostsNew extends Component {
  constructor(props) {
    super(props);
    this.onSubmit = (values) => {
      console.debug(values);
      this.props.createPost(values, () => {
        this.props.history.push('/');
      });
    };
  }

  renderField(field) {
    const { meta: { touched, error } } = field;
    const formClasses = `form-group ${ touched && error ? 'has-danger' : '' }`;
    return (
      <div className={formClasses}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type="text"
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Create a new post</h3>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <Field
            label="Post Title"
            name="title"
            component={this.renderField}
          />
          <Field
            label="Categories"
            name="categories"
            component={this.renderField}
          />
          <Field
            label="Content"
            name="content"
            component={this.renderField}
          />
          <button type="submit" className="btn btn-primary">Save</button>
          <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  if (!values.title) {
    errors.title = "Enter a title."
  }
  if (!values.categories) {
    errors.categories = "Enter at least one category."
  }
  if (!values.content) {
    errors.content = "Enter some content."
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'PostsNewForm'
})(
  connect(null, { createPost })(PostsNew)
);

