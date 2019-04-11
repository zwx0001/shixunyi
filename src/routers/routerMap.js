import login from "@/pages/login";
import classManger from "@/pages/classManger";
import home from "@/pages/home";
import addExam from "@/pages/addExam";
import paging from "@/pages/paging";
import userrole from "@/pages/role";
import selectExam from "@/pages/selectExam";
import classmanagement from "@/pages/classManagement";
import creatTest from "@/pages/creatTest";
import classmen from "@/pages/classMen";
import adduser from "@/pages/adduser";
import examDetail from '@/pages/examDetail';
import examination from "@/pages/examination";
import classdetail from '@/pages/classdetail';
const routers = [
  {
    path: "/",
    component: login,
    exact: true
  },
  {
    path: "/exam",
    component: home,
    child: [
      {
        path: "/exam/role",
        component: userrole
      },
      {
        path: "/exam/questions",
        component: addExam
      },
      {
        path: "/exam/exams",
        component: paging
      },
      {
        path: "/exam/userrole",
        component: userrole
      },
      {
        path: "/exam/suject",
        component: classManger
      },
      {
        path: "/exam/getQuestionsType",
        component: selectExam
      },
      {
        path: "/exam/subject", //班级管理  科目一  科目二
        component: classmanagement
      },
      {
        path: "/exam/examType",
        component: classManger
      },
      {
        path: "/exam/creatTest",
        component: creatTest
      },
      {
        path: "/exam/examination",
        component: examination
      },
      {
        path: "/exam/classmen", //班级分类
        component: classmen
      },{
        path:'/exam/add',
          component: adduser}
      ,{
        path:'/exam/examDetail',
        component: examDetail
      },
      {
        path:'/exam/classdetail',
        component:classdetail
      }
    ]
  },

  {
    path: "/student/login",
    component: login
  }
];

export default routers;
