import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import { compose } from 'redux';

class SignIn extends React.Component {

  onSubmit = formProps => {
    this.props.signin(formProps,() => {
      this.props.history.push('/feature');
    });
  }

  render() {

    const { handleSubmit } = this.props;

    return (
      <div>
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <fieldset>
              <label> Email </label>
              <Field
                name="email"
                type="text"
                component="input"
                autoComplete="off"
              />
          </fieldset>
          <fieldset>
              <label> Password </label>
              <Field
                name="password"
                type="password"
                component="input"
                autoComplete="none"
              />
          </fieldset>
          {this.props.errorMesssage}
          <button> Sign In </button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {errorMesssage: state.auth.errorMesssage};
}

export default compose(
  connect(mapStateToProps,actions),
  reduxForm({ form: 'signin'})
)(SignIn);
