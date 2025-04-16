import { createRouter as _createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'PageView',
    redirect: '/home',
    component: () => import('@/view/PageView.vue'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/view/Home/HomePage.vue'),
        meta: {
          title: '首页',
        }
      },
      {
        path: '/await',
        name: 'Await',
        component: () => import('@/view/await.vue'),
        meta: {
          title: '页面开发中',
        }
      },
      //师资库管理
      {
        path: '/TeacherIndex',
        name: 'TeacherIndex',
        redirect: '/TeacherIndex/TeacherDetail',
        component: () => import('@/view/Teacher/TeacherIndex/TeacherIndex.vue'),
        meta: {
          title: '师资库管理',
        },
        children: [
          {
            path: 'TeacherDetail',
            name: 'TeacherDetail',
            component: () => import('@/view/Teacher/TeacherDetail/TeacherDetail.vue'),
            meta: {
              title: '讲师入口'
            }
          },
          {
            path: 'TeacherManagement',
            name: 'TeacherManagement',
            component: () => import('@/view/Teacher/TeacherManagement/TeacherManagement.vue'),
            meta: {
              title: '师资管理',
            }
          },
          {
            path: 'TeacherJudgement',
            name: 'TeacherJudgement',
            component: () => import('@/view/Teacher/TeacherJudgement/TeacherJudgement.vue'),
            meta: {
              title: '师资评价'
            }
          }
        ]
      },
      //师资库管理
      // {
      //   path: '/TeacherIndex',
      //   name: 'TeacherIndex',
      //   redirect: '/TeacherIndex/TeacherDetail',
      //   component: () => import('@/view/TeacherManagement/TeacherIndex.vue'),
      //   meta: {
      //     title: '师资库',
      //   },
      //   children: [
      //     {
      //       path: 'TeacherDetail',
      //       name: 'TeacherDetail',
      //       component: () => import('@/view/TeacherManagement/TeacherDetail.vue'),
      //       meta: {
      //         title: '讲师入口'
      //       }
      //     },
      //     {
      //       path: 'TeacherManagement',
      //       name: 'TeacherManagement',
      //       component: () => import('@/view/TeacherManagement/TeacherManagement.vue'),
      //       meta: {
      //         title: '师资管理',
      //       }
      //     },
      //     {
      //       path: 'TeacherJudgement',
      //       name: 'TeacherJudgement',
      //       component: () => import('@/view/TeacherManagement/TeacherJudgement.vue'),
      //       meta: {
      //         title: '师资评价'
      //       }
      //     }
      //   ]
      // },
      //课件库管理
      {
        path: '/CourseIndex',
        name: 'CourseIndex',
        redirect: '/CourseIndex/CourseDetail',
        component: () => import('@/view/CoursewareManagement/CourseIndex.vue'),
        meta: {
          title: '课件库',
        },

        children: [
          {
            path: 'CourseDetail',
            name: 'CourseDetail',
            component: () => import('@/view/CoursewareManagement/CourserDetail.vue'),
            meta: {
              title: '课件展示'
            }
          },
          {
            path: 'CourseManagement',
            name: 'CourseManagement',
            component: () => import('@/view/CoursewareManagement/CourseManagement.vue'),
            meta: {
              title: '课件库管理',
            }
          }
        ]
      },
      //案例库管理
      {
        path: '/CaseIndex',
        name: 'CaseIndex',
        redirect: '/CaseIndex/CaseDetail',
        component: () => import('@/view/CaseManagement/CaseIndex.vue'),
        meta: {
          title: '案例库',
        },

        children: [
          {
            path: 'CaseDetail',
            name: 'CaseDetail',
            component: () => import('@/view/CaseManagement/CaseDetail.vue'),
            meta: {
              title: '案例展示'
            }
          },
          {
            path: 'CaseManagement',
            name: 'CaseManagement',
            component: () => import('@/view/CaseManagement/CaseManagement.vue'),
            meta: {
              title: '案例库管理',
            }
          },
          {
            path: 'CaseAdd',
            name: 'CaseAdd',
            component: () => import('@/view/CaseManagement/CaseAdd.vue'),
            meta: {
              title: '案例上传',
            }
          },
        ]
      },
      //试题库管理
      {
        path: '/QuestionBankIndex',
        name: 'QuestionBankIndex',
        redirect: '/QuestionBankIndex/QuestionBankDetail',
        component: () => import('@/view/QuestionBankManagement/QuestionBankIndex.vue'),
        meta: {
          title: '试题库',
        },

        children: [
          {
            path: 'QuestionBankDetail',
            name: 'QuestionBankDetail',
            component: () => import('@/view/QuestionBankManagement/QuestionBankDetail.vue'),
            meta: {
              title: '试题展示'
            }
          },
          {
            path: 'QuestionBankManagement',
            name: 'QuestionBankManagement',
            component: () => import('@/view/QuestionBankManagement/QuestionBankManagement.vue'),
            meta: {
              title: '试题库管理',
            }
          },
          {
            path: 'QuestionBankAdd',
            name: 'QuestionBankAdd',
            component: () => import('@/view/QuestionBankManagement/QuestionBankAdd.vue'),
            meta: {
              title: '试题上传',
            }
          },
        ]
      },
      //系统管理
      {
        path: '/AdminIndex',
        name: 'AdminIndex',
        redirect: '/AdminIndex/AdminDetail',
        component: () => import('@/view/AdminManagement/AdminIndex.vue'),
        meta: {
          title: '系统管理',
        },

        children: [
          {
            path: 'AdminDetail',
            name: 'AdminDetail',
            component: () => import('@//view/AdminManagement/AdminDetail.vue'),
            meta: {
              title: '系统详情'
            }
          },
          {
            path: 'AdminManagement',
            name: 'AdminManagement',
            component: () => import('@/view/AdminManagement/AdminManagement.vue'),
            meta: {
              title: '系统管理',
            }
          },
        ]
      },
      {
        path: '/software',
        name: 'software',
        component: () => import('@/view/Software.vue'),
        redirect: '/software/smartTown',
        meta: {
          title: '软件产品',
        },
        children: [
          {
            path: 'smartTown',
            name: 'smartTown',
            component: () => import('@/view/Software_smartTown.vue'),
            meta: {
              title: '软件产品丨智能小镇管理系统'
            }
          },
          {
            path: 'bigData',
            name: 'bigData',
            component: () => import('@/view/Software_bigData.vue'),
            meta: {
              title: '软件产品丨大数据管理系统'
            }
          }
        ]
      },
      {
        path: '/service',
        name: 'service',
        component: () => import('@/view/Service.vue'),
        props: true,
        meta: {
          title: '相关服务',
        }
      },
      {
        path: '/servicedetail',
        name: 'serviceDetail',
        component: () => import('@/view/ServiceDetail.vue'),
        props: true,
        meta: {
          title: '相关服务-详情',
        }
      },
      {
        path: '/newsinformation',
        name: 'newsInformation',
        component: () => import('@/view/NewsInformation.vue'),
        meta: {
          title: '新闻动态',
        }
      },
      {
        path: '/companyintroduction',
        name: 'companyIntroduction',
        component: () => import('@/view/CompanyIntroduction.vue'),
        meta: {
          title: '公司介绍',
        }
      },
      {
        path: '/jobchance',
        name: 'jobChance',
        component: () => import('@/view/JobChance.vue'),
        meta: {
          title: '工作机会',
        }
      },
      {
        path: '/contactus',
        name: 'contactUs',
        component: () => import('@/view/ContactUs.vue'),
        meta: {
          title: '联系我们',
        }
      },
    ]
  }
]

export function createRouter() {
  const router = _createRouter({
    history: createWebHashHistory(),
    routes
  })

  return router
}