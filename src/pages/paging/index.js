import React from "react";
import { Table } from "antd";
import "./index.css";
import "antd/dist/antd.css";
class Paging extends React.Component {
  constructor() {
    super();
    this.state = {
      tableColumnx: [],
      data: [
        {
          key: "1",
          name: "1608A",
          host: "曲丽丽",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "900%"
        },
        {
          key: "2",
          name: "1608B",
          host: "张三 ",
          pro: "未完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "6.0%"
        },
        {
          key: "3",
          name: "1609A",
          host: "李四",
          pro: "未完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "80%"
        },
        {
          key: "4",
          name: "1609b",
          host: "王五",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "70%"
        },
        {
          key: "5",
          name: "1610A",
          host: "小李",
          pro: "未完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "60%"
        },
        {
          key: "6",
          name: "1610b",
          host: "小王",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "45%"
        },
        {
          key: "7",
          name: "1611A",
          host: "校长",
          pro: "未完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "20%"
        },
        {
          key: "8",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        },
        {
          key: "9",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        },
        {
          key: "10",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        },
        {
          key: "11",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        },
        {
          key: "12",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        },
        {
          key: "13",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        },
        {
          key: "14",
          name: "1611B",
          host: "小屏",
          pro: "以完成",
          not: "重新阅卷",
          date: "20183.21",
          oto: "50%"
        }
      ],
      count: 8,
      tableColumns: [
        {
          title: "班级名称",
          dataIndex: "name",
          key: "name"
        },
        {
          title: "出题人",
          dataIndex: "host",
          key: "host"
        },
        {
          title: "阅卷状态",
          dataIndex: "pro",
          key: "pro"
        },
        {
          title: "操作时间",
          dataIndex: "date",
          key: "date"
        },
        {
          title: "成材率",
          dataIndex: "oto",
          key: "oto"
        },
        {
          title: "操作",
          dataIndex: "not",
          key: "not"
        }
      ]
    };
  }
  render() {
    return (
      <div className="wrap">
        <div className="title">
          <form>
            状态：
            <input placeholder="不限" />
            班级：
            <input placeholder="不限" />
            <button>查询</button>
          </form>
        </div>
        <h3>试卷列表</h3>
        <div className="cont">
          <Table
            columns={this.state.tableColumns}
            dataSource={this.state.data}
            pagination={{
              total: this.state.count,
              pageSize: 4,
              defaultPageSize: 4,
              showQuickJumper: true
            }}
          />
        </div>
      </div>
    );
  }
}

export default Paging;
