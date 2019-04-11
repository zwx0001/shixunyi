import React from "react";
import "./index.css";
import "antd/dist/antd.css";
import { Table, Divider } from "antd";
import { connect } from 'dva';

const columns = [
  {
    title: "课程名称",
    dataIndex: "classname",
    key: "name",
    render: text => <span>{text}</span>
  },
  {
    title: "撰写人",
    dataIndex: "people",
    key: "age"
  },
  {
    title: "版本",
    dataIndex: "part",
    key: "learnclass"
  },
  {
    title: "操作时间",
    dataIndex: "nums",
    key: "nums"
  },
  {
    title: "操作",
    key: "action",
    render: (text, record) => (
      <span>
        <a href="/">详情</a>
        <Divider type="vertical" />
        <a href="/">编辑</a>
        <Divider type="vertical" />
        <a href="/">删除</a>
      </span>
    )
  }
];

const data = [
  {
    key: "1",
    classname: "模块化开发",
    people: "刘于",
    part: "1.0",
    nums: '2018-12-11'
  },
  {
    key: "2",
    classname: "1608D",
    people: "刘于",
    part: "1.0",
    nums: '2018-12-11'
  }
];

class ClassManger extends React.Component {
  render() {
    return (
      <div className="syh-container">
        <section className="syh-classInfo">
          <Table
            pagination={{ pageSize: 6 }}
            columns={columns}
            dataSource={data}
          />
        </section>
        
      </div>
    );
  }
}
const mapStateToProps = (state)=>{
  console.log(state)
  return state
}
const mapDispatchToProps = (dispatch) =>{
    return {
      update(){
        return dispatch({
          type:'products/borderland',
          payload:'sss'
        })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ClassManger);
