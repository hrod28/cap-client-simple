'use strict';
import React, {PropTypes} from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="container-fluid">
        <p>Header Here...</p>
        {this.props.children}
      </div>
    );
  }
}

App.PropTypes = {
  children: PropTypes.object.isRequired
};

export default App;
