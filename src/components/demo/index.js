import React, {Component} from 'react';

import '../../style/demo.less';
import Header from './Header';
import LeftNav from './LeftNav';
import Breadcrumb from './Breadcrumb';

export default class Demo extends Component {
  render() {
    return (
      <div id="demo">
        <div>
          <Header />
        </div>
        <div className="col-xs-2 no-padding">
          <LeftNav />
        </div>
        <div className="col-xs-10 no-padding">
          <Breadcrumb />
        </div>
        <div className="col-xs-10 no-padding">
          {this.props.children}
        </div>
      </div>
    )

  }
}