import React, { Component } from "react";
import { Table, Divider, Popconfirm, message } from "antd";
import http from "../../utils/fetch";
import axios from "axios";
import getCookie from "../../utils/cookie";
import Tip from "../../components/tip";
import { connect } from "dva";

const { Column } = Table;

class ClassMen extends Component {
  state = {
    list: [],
    grade_id: "",
    flag: false
  };

  render() {
    // let { getdata } = this.props;
    // getdata("666");
    // console.log(this.props.classall);
    let len = this.state.list.length;
    return (
      <div className="z_wrap">
        <h2>班级管理</h2>
        <Table
          dataSource={this.state.list}
          size="middle"
          pagination={{
            total: len,
            showSizeChanger: true,
            showQuickJumper: true,
            pageSize: 4
          }}
        >
          <Column title="班级名称" dataIndex="grade_name" key="grade_name" />
          <Column title="教室号" dataIndex="room_text" key="room_text" />
          <Column
            title="操作"
            key="action"
            render={(text, record, index) => {
              return (
                <span>
                  <a
                    href="/"
                    onClick={e => this.up(e)}
                    grade_id={text.grade_id}
                  >
                    更新
                  </a>
                  <Divider type="vertical" />
                  <a href="/" onClick={e => this.add(e)}>添加</a>
                  <Divider type="vertical" />
                  <a
                      href="/"
                    grade_name={text.grade_name}
                    onClick={e => this.godetail(e)}
                  >
                    详情
                  </a>

                  <Popconfirm
                    title="Are you sure delete this class?"
                    onConfirm={this.confirm}
                    onCancel={this.cancel}
                    okText="Yes"
                    cancelText="No"
                  >
                    <Divider type="vertical" />
                    <a href="/" grade_id={text.grade_id} onClick={e => this.del(e)}>
                      删除
                    </a>
                  </Popconfirm>
                </span>
              );
            }}
          />
        </Table>
        <Tip flag={this.state.flag} toggle={this.toggle} />
      </div>
    );
  }
  getdata = () => {
    let that = this;
    let list = [];
    http.get("/manger/grade").then(data => {
      data.data.forEach(item => {
        list.push({
          key: item.grade_id,
          grade_name: item.grade_name,
          grade_id: item.grade_id,
          room_id: item.room_id
        });
        
      });
      that.setState({
        list: list
      });
    });
    http.get("/manger/room").then(res => {
      list.forEach(item => {
        res.data.forEach(itm => {
          if (item.room_id === itm.room_id) {
            item.room_text = itm.room_text;
          }
        });

      that.setState({
        list: list
      });
    });
  })
}
  componentDidMount() {
    this.getdata();
    let { fetch } = this.props;
    fetch("/manger/grade");
  }
  up = e => {
    //更新班级
    let grade_id = e.target.getAttribute("grade_id");
    this.setState({
      grade_id: grade_id
    });
    axios
      .put("/manger/grade/update", {
        grade_id: grade_id,
        grade_name: "",
        subject_id: "",
        room_id: ""
      })
      .then(data => {
        if (data.code === 0) {
          message.info(data.msg);
        }else{
          message.info(data.msg);
        }
      });
  };
  add = e => {
    //添加班级
    this.setState({
      flag: true
    });
  };
  godetail = e => {
    let s = e.target.getAttribute("grade_name");
    this.props.history.push("/exam/classdetail?class=" + s);
  };
  del = e => {
    //删除班级
    let grade_id = e.target.getAttribute("grade_id");
    this.setState({
      grade_id: grade_id
    });
  };
  confirm = e => {
    var param = { grade_id: this.state.grade_id };
    axios
      .delete("/manger/grade/delete", {
        headers: {
          "content-Type": "application/json",
          authorization: getCookie("userid")
        },
        data: param
      })
      .then(data => {
        if (data.data.code === 1) {
          message.info(data.msg);
          this.getdata();
        }
      });
    message.success("Click on Yes");
  };
  cancel = e => {
    message.error("Click on No");
  };
  toggle = (val,id) => {
    this.setState({
      flag: false
    });
    
    if (val&&id) {
      http
        .post("/manger/grade", {
          grade_name: val.trim(),
          room_id: "tix3hj-qgcuqc-w2j7qk-l123q"
        })
        .then(data => {
          if (data.code === 1) {
            message.info(data.msg);
            this.getdata();
          } else {
            message.info(data.msg);
          }
        });
    }
  };
}

let Classmen = connect(
  state => {
    return {
      classall: state.classall
    };
  },
  dispatch => {
    return {
      getdata(params) {
        dispatch({
          type: "classall/getclass",
          payload: params
        });
      },
      fetch(params) {
        dispatch({
          type: "classall/getdata",
          payload: params
        });
      }
    };
  }
)(ClassMen);
export default Classmen;
