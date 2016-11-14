import React, {Component} from 'react';
import Menu from './Menu';

const MenuData = [
  {id: 1, text: '试题管理', uri: 'paperList', icon: 'tachometer'},
  {id: 2, text: '试卷管理', uri: 'b'},
  {id: 3, text: '人员管理', uri: 'c', icon: 'user-plus'},
  {id: 4, text: '个人中心', uri: 'userCenter', icon: 'user-circle'}
];
const currentUri = 'a';


export default class LeftNav extends Component {
  render() {
    return (
      <div className="left-nav" id="leftNav">
        <div>
          <ul>
            {
              MenuData.map((item, index) => {
                return (<Menu key={index}
                              {...item}
                              currentUri={currentUri}
                />)
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}