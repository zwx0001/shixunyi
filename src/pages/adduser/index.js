import React from "react";
import "./style.css";
import { Select } from 'antd';
import http from '../../http'

const Option = Select.Option;

class Adduser extends React.Component {
    constructor(){
        super()
        this.state = {
            identity:''
        }
    }
  render() {
    return (
      <div className="wy_addusers">
        <div className="wy_add">
            <div className="wy_username"><span>姓名：</span><input type="text" placeholder="请输入姓名" ref={name=>this.name=name}/></div>
            <div className="wy_password"><span>密码:</span><input type="text" placeholder="请输入姓名" ref={name=>this.pas=name}/></div>
            <div className="wy_chooseuserrole">
            <Select defaultValue="" style={{ width: 120 }} onChange={this.handleChange}>
      <Option value="管理员">管理员</Option>
      <Option value="出题者">出题者</Option>
      <Option value="浏览者">浏览者</Option>
    </Select>
            </div>
            <div className="wy_getmesgadduser">
                <button onClick={this.getadd}>提交</button>
            </div>
        </div>
      </div>
    );
  }
  handleChange=(value)=>{
    this.setState({identity:value});
  }
  getadd=()=>{
console.log(this.pas.value)
console.log(this.name.value)
if(this.pas.value.trim()){
    if(this.name.value.trim()){
        if(this.state.identity){
            http.post('/user',{
                user_name:this.name.value,
                user_pwd:this.pas.value,
                identity_id:this.name.value
            }).then((res)=>{
                console.log(res)
                if(res.code === 0){
                    alert('请正确更改用户名密码格式为 用户：请输入4到16位（字母，数字，下划线，减号）格式的用户名 密码：您的密码应该最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符')
                }else{
                    alert('添加成功')
                    this.props.history.push('/exam/role')
                }
            })
        }else{
            alert('请选择权限')
        }
    }else{
        alert('请正确填写密码')
    }
}else{
    alert('请正确填写姓名')
}
  }
}

export default Adduser;
