import React, {Component} from 'react';
import {Link} from 'react-router';

const MenuData = [
  {id: 1, text: '试题管理', uri: 'paperList'},
  {id: 2, text: '试卷管理', uri: 'b'},
  {id: 3, text: '个人中心', uri: 'userCenter'}
];
const currentUri = 'userCenter';

export default class Breadcrumb extends Component {
  render() {
    const breadData = MenuData.find((item)=> {
      return item.uri === currentUri;
    });
    return (
      <div id="breadcrumbs">

        <ul className="breadcrumb">
          <li>
            <i className="fa fa-home"></i>
            &nbsp; 教师后台管理系统
          </li>

          <li><Link to={breadData.uri}>{breadData.text}</Link></li>
          <li><Link disabled="disabled" to={breadData.uri + 'info'}>详细信息</Link></li>

        </ul>

      </div>
    )

  }
}