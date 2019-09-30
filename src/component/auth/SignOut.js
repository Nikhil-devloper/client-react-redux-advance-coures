import React,{ Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class SignOut extends Component {

  componentDidMount() {
      this.props.signout();
  }

  render() {
      return <div> Sory to see you go !</div>;
  }

}

export default connect(null,actions)(SignOut);
