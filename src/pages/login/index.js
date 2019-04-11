import React from "react";
import "./style.css";
import "./font_779092_8emozmua56i/iconfont.css";
import http from "../../http";
import Loading from "../../components/loading";

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      istrue: false
    };
  }
  render() {
    return (
      <div className="wy_login">
        <div className="wy_loginbox">
          <p className="wy_title">登录</p>
          <div className="wy_username">
            <p className="wy_usernamecode">
              <i className="iconfont icon-yonghu-xianxing" />
              <input
                type="text"
                placeholder="用户名"
                ref={input => (this.name = input)}
              />
            </p>
          </div>
          <div className="wy_password">
            <p className="wy_passwordcode">
              <i className="iconfont icon-jiesuo" />
              <input
                type="text"
                placeholder="密码"
                ref={input => (this.pas = input)}
              />
            </p>
          </div>
          <button className="wy_tologin" onClick={this.login}>
            登录
          </button>
          <button className="wy_toregister">立即注册</button>
        </div>
        <Loading open={this.state.istrue} />
      </div>
    );
  }
  login = () => {
    if (this.name.value.trim()) {
      if (this.pas.value.trim()) {
        let usermsg = http.post("/user/login", {
          user_name: this.name.value,
          user_pwd: this.pas.value
        });
        usermsg
          .then(data => {
            if (data.code === 1) {
              document.cookie = "userid=" + data.token;
              setTimeout(() => {
                this.setState({ istrue: false });
                this.props.history.push("/exam/questions");
              }, 1000);
            }
          })
          .catch(err => {
            alert("错误");

            this.setState({ istrue: false });
            console.log(err);
          });
      } else {
        alert("请填写密码");
      }
    } else {
      alert("请填写姓名");
    }
  };
}

export default Login;
