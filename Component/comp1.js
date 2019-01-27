import React, { Component } from 'react';
import FCop from './funcComp'


class comp1 extends Component {
  render() {
   
    return (
     <div>
  <FCop {...this.props} />
      </div>
   
    );
   
   
  }
}

export default comp1;
