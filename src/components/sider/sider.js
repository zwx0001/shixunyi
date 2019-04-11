import React from "react";
import { Menu, Icon } from "antd";
import { Link } from "dva/router";
import "./sider.css";

const SubMenu = Menu.SubMenu;

class Siders extends React.Component {
  rootSubmenuKeys = ["sub1", "sub2", "sub4", "sub5"];

  state = {
    openKeys: ["sub1"]
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <div className="z_menu">
        <Menu
          mode="inline"
          openKeys={this.state.openKeys}
          onOpenChange={this.onOpenChange}
          style={{ width: 256 }}
          defaultSelectedKeys={["1"]}
        >
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="form" />
                <span>试题管理</span>
              </span>
            }
          >
            <Menu.Item key="1">
              <Link to="/exam/questions">添加试题</Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link to="/exam/examType">试题分类</Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/exam/getQuestionsType">查看试题</Link>
            </Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="form" />
                <span>用户管理</span>
              </span>
            }
          >
            <Menu.Item key="5">
              <Link to="/exam/role">用户角色</Link>
            </Menu.Item>
            <Menu.Item key="6">Option 6</Menu.Item>
            <SubMenu key="sub3" title="profile">
              <Menu.Item key="7">Option 7</Menu.Item>
              <Menu.Item key="8">Option 8</Menu.Item>
            </SubMenu>
          </SubMenu>
          <SubMenu
            key="sub4"
            title={
              <span>
                <Icon type="profile" />
                <span>班级管理</span>
              </span>
            }
          >
            <Menu.Item key="9">
              <Link to="/exam/subject">课程分类</Link>
            </Menu.Item>
            <Menu.Item key="10"><Link to="/exam/classmen">班级管理</Link></Menu.Item>
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub5"
            title={
              <span>
                <Icon type="profile" />
                <span>学生管理</span>
              </span>
            }
          >
            <Menu.Item key="13">Option 10</Menu.Item>
            <Menu.Item key="14">Option 11</Menu.Item>
            <Menu.Item key="15">Option 12</Menu.Item>
          </SubMenu>


          <SubMenu
            key="sub8"
            title={
              <span>
                <Icon type="profile" />
                <span>考试管理</span>
              </span>
            }
          >
            <Menu.Item key="123">
             <Link to="/exam/examination">考试管理</Link>
            </Menu.Item>
            <Menu.Item key="1334">
              <Link to="/exam/creatTest">添加考试</Link>
            </Menu.Item>
          </SubMenu>

          <Menu.Item key="17">
            <Icon type="calendar" />
            成绩统计
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}

export default Siders;