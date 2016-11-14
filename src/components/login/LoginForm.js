import React, {Component} from 'react';

export default class LoginForm extends Component {
  render() {
    return (
      <div id="login-form" className="row">
        <div className="login col-xs-4 col-xs-offset-4 no-padding">

          <div className="col-xs-10 col-xs-offset-1">
            <h4 className="login-header">
              <i className="header-icon fa fa-coffee"></i>
              &nbsp; Please Enter Your Information
            </h4>


            <div className="login-input">
              <div className="col-xs-10 no-padding">
                <input className="input" type="text" placeholder="Username"/>
              </div>
              <div className="col-xs-2">
                <i className="input-icon pull-right fa fa-user"></i>
              </div>
            </div>

            <div className="login-input">
              <div className="col-xs-10 no-padding">
                <input className="input" type="password" placeholder="Password"/>
              </div>
              <div className="col-xs-2">
                <i className="input-icon pull-right fa fa-lock"></i>
              </div>
            </div>

              <div className="col-xs-9 no-padding">
                <input className="input-select" type="checkbox"/>
                Remember me
              </div>

              <div className="col-xs-3 no-padding">
                <button className="btn btn-primary">
                  <i className="fa fa-key"></i>
                  &nbsp; Login
                </button>
              </div>

          </div>


          <div className="footer col-xs-12">
            <div className="col-xs-6 col-xs-offset-7 pull right">
              <a href="">I forgot my password &nbsp;
              <i className="fa fa-arrow-right"></i>
              </a>
            </div>
          </div>

        </div>
      </div>
    )
  }
}