import React from 'react';
import requireAuth from './requireAuth.js';

class Feature extends React.Component {
  render() {
    return (
      <div>
        Welcome to Feature Component!
      </div>
    );
  }
}

export default requireAuth(Feature);
