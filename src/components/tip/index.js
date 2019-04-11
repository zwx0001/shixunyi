import React, { Component } from "react";
import "./index.css";
import { Input, Button } from "antd";
class Tip extends Component {
  state = {
    val: "",
    id: ""
  };
  render() {
    return this.props.flag ? (
      <div className="z_tip">
        <div className="mask">
          <Input
            placeholder="请输入班级名称"
            onChange={e => this.onChange(e, 1)}
          />
          <Input
            placeholder="请输入教室号id"
            onChange={e => this.onChange(e, 2)}
          />
          <div className="btn">
            <Button block onClick={() => this.props.toggle()}>
              取消
            </Button>
            <Button
              type="primary"
              block
              onClick={() => this.props.toggle(this.state.val,this.state.id)}
            >
              确定
            </Button>
          </div>
        </div>
      </div>
    ) : null;
  }
  onChange = (e, i) => {
    if (i === 1) {
      this.setState({
        val: e.target.value
      });
    } else {
      this.setState({
        id: e.target.value
      });
    }
  };
}
export default Tip;
