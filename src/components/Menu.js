import React, {Component} from 'react';
import {Link} from 'react-router';

export default class Menu extends Component {
  render() {
    const {text, uri, currentUri, icon = 'leaf'} = this.props;

    let linkClass = (uri === currentUri) ? "menu active" : "menu";
    return (
      <li>
        <a href="#" className={linkClass} >

          <i className={"menu-icon fa fa-" + icon}></i>
          <Link to={uri}>{text}</Link>
          <b className="arrow fa fa-angle-down pull-right"></b>
        </a>

      </li>
    )
  }
}