/*
* Login  登录
* Error  错误
* Main  导航页
* Account  管理员账户管理
* AccountList  管理员账户列表
* AccountLogs  管理员账户操作日志
* Updatepassword  管理员账户修改密码
* User  用户管理
* PersonalList  个人用户
* CompanyList  公司用户
* TeamList  团队用户
* UserDetail 资料详情
* ExamineList  用户资料审核
* Announcement  通告管理
* all  全部
* examine  待审核
* release  已发布
* having  进行中
* end  已结束
* processed  已处理
* Untreated  未处理
* ClassList  通告/职业分类
* AnnouncementDetail  通告详情
* Commission  佣金管理
* CommissionLogs  佣金使用记录
* withdrawals  提现记录
* recharge  充值记录
* Information  资讯管理
* banner  banner图上传
* Release  资讯发布
* informationList  资讯列表
* update  资讯修改
* Comment  资讯评论
* Message  系统消息管理
* MessageList  系统消息列表
* */

import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Error from '@/pages/Error'
import Main from '@/pages/Main'
import Account from '@/pages/Account'
import User from '@/pages/User'
import Announcement from '@/pages/Announcement'
import Commission from '@/pages/Commission'
import Information from '@/pages/Information'
import Message from '@/pages/Message'
import AccountList from '@/pages/AccountList'
import Updatepassword from '@/pages/Updatepassword'
import AccountLogs from '@/pages/AccountLogs'
import UserlList from '@/pages/UserList'
import ExamineList from '@/pages/ExamineList'
import UserDetail from '@/pages/UserDetail'
import AnnouncementList from '@/pages/AnnouncementList'
import AnnouncementDetail from '@/pages/AnnouncementDetail'
import ComplaintList from '@/pages/ComplaintList'
import ClassList from '@/pages/ClassList'
import Recharge from '@/pages/Recharge'
import Withdrawals from '@/pages/Withdrawals'
import CommissionList from '@/pages/CommissionList'
import CommissionLogs from '@/pages/CommissionLogs'
import banner from '@/pages/banner'
import Release from '@/pages/Release'
import InformationList from '@/pages/InformationList'
import Comment from '@/pages/Comment'
import MessageList from '@/pages/MessageList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      alias: '/', // 别名
      component: Main,
      redirect: '/account/accountList',
      children: [
        {
          path: '/account',
          name: 'account',
          component: Account,
          redirect: '/account/accountList',
          children: [
            {
              path: 'accountList',
              name: 'accountList',
              component: AccountList
            },
            {
              path: 'accountLogs',
              name: 'accountLogs',
              component: AccountLogs
            },
            {
              path: 'updatepassword',
              name: 'updatepassword',
              component: Updatepassword
            }
          ]
        },
        {
          path: 'user',
          name: 'user',
          component: User,
          redirect: '/user/personalList',
          children: [
            {
              path: 'personalList',
              name: 'personalList',
              component: UserlList
            },
            {
              path: 'companyList',
              name: 'companyList',
              component: UserlList
            },
            {
              path: 'teamList',
              name: 'teamList',
              component: UserlList
            },
            {
              path: 'examineList',
              name: 'examineList',
              component: ExamineList
            },
            {
              path: 'personal/:id',
              name: 'personaldetail',
              component: UserDetail
            },
            {
              path: 'company/:id',
              name: 'companydetail',
              component: UserDetail
            },
            {
              path: 'examine/:id',
              name: 'examinedetail',
              component: UserDetail
            }
          ]
        },
        {
          path: 'announcement',
          name: 'announcement',
          component: Announcement,
          redirect: '/announcement/all',
          children: [
            {
              path: 'all',
              name: 'all',
              component: AnnouncementList
            },
            {
              path: 'examine',
              name: 'examine',
              component: AnnouncementList
            },
            {
              path: 'start',
              name: 'start',
              component: AnnouncementList
            },
            {
              path: 'having',
              name: 'having',
              component: AnnouncementList
            },
            {
              path: 'end',
              name: 'end',
              component: AnnouncementList
            },
            {
              path: 'processed',
              name: 'processed',
              component: ComplaintList
            },
            {
              path: 'untreated',
              name: 'untreated',
              component: ComplaintList
            },
            {
              path: 'classList',
              name: 'classList',
              component: ClassList
            },
            {
              path: ':id',
              name: 'details',
              component: AnnouncementDetail
            }
          ]
        },
        {
          path: 'commission',
          name: 'commission',
          component: Commission,
          redirect: '/commission/commissionList',
          children: [
            {
              path: 'commissionList',
              name: 'commissionList',
              component: CommissionList
            },
            {
              path: 'recharge',
              name: 'recharge',
              component: Recharge
            },
            {
              path: 'withdrawals',
              name: 'withdrawals',
              component: Withdrawals
            },
            {
              path: ':id',
              name: 'commissionLogs',
              component: CommissionLogs
            }
          ]
        },
        {
          path: 'information',
          name: 'information',
          component: Information,
          redirect: '/information/hbanner',
          children: [
            {
              path: 'hbanner',
              name: 'hbanner',
              component: banner
            },
            {
              path: 'zbanner',
              name: 'zbanner',
              component: banner
            },
            {
              path: 'tbanner',
              name: 'tbanner',
              component: banner
            },
            {
              path: 'release',
              name: 'release',
              component: Release
            },
            {
              path: 'informationList',
              name: 'informationList',
              component: InformationList
            },
            {
              path: 'update/:id',
              name: 'update',
              component: Release
            },
            {
              path: ':id',
              name: 'Comment',
              component: Comment
            }
          ]
        },
        {
          path: 'message',
          name: 'message',
          component: Message,
          redirect: '/message/messageList',
          children: [
            {
              path: 'messageList',
              name: 'messageList',
              component: MessageList
            }
          ]
        }
      ]
    },
    {
      path: '/Login',
      name: 'Login',
      component: Login
    },
    {
      path: '/error',
      name: 'error',
      component: Error
    }
  ]
})
