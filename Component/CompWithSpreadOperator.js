import React, { Component } from 'react';
import myComp1 from './funcComp'
import myComp2 from './funcComp'
import myComp3 from './funcComp'
import myComp4 from './funcComp'


class comp1 extends Component {
  render() {
   
    return (
     <div>
  <myComp1 {...this.props} />
  <myComp2 {...this.props} />
  <myComp3 {...this.props} />
  <myComp4 {...this.props} />
      </div>
   
    );
   
   
  }
}

export default comp1;
