import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './HeaderStyle.css';


class Header extends React.Component {

  renderLinks() {
    if(this.props.authenticated) {
      return (
        <div>
            <Link to='/signout'> Sign Out </Link>
            <Link to='/feature'> Feature </Link>
        </div>
      )
    }
    else {
      return (
        <div>
              <Link to='/signup'> Sign Up </Link>
              <Link to='/signin'> Sign In </Link>
        </div>
      )
    }
  }
  render() {
    return(
      <div className="Header">
        <Link to='/'> Redux Auth </Link>
        {this.renderLinks()}
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated
  };
}

export default connect(mapStateToProps)(Header);
