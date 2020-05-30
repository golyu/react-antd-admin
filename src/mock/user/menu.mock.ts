import { MenuList } from '~/interface/layout/menu.interface'
import { mock, intercepter } from '../config'

const mockMenuList: MenuList = [
  {
    name: 'dashboard',
    label: {
      zh_CN: '首页',
      en_US: 'Dashboard'
    },
    icon: 'dashboard',
    key: '0',
    path: '/dashboard'
  },
  {
    name: 'documentation',
    label: {
      zh_CN: '文档',
      en_US: 'Documentation'
    },
    icon: 'documentation',
    key: '1',
    path: '/documentation'
  },
  {
    name: 'guide',
    label: {
      zh_CN: '引导',
      en_US: 'Guide'
    },
    icon: 'guide',
    key: '2',
    path: '/guide'
  },
  {
    name: 'permission',
    label: {
      zh_CN: '权限',
      en_US: 'Permission'
    },
    icon: 'permission',
    key: '3',
    path: '/permission',
    children: [
      {
        name: 'routePermission',
        label: {
          zh_CN: '路由权限',
          en_US: 'Route Permission'
        },
        key: '2-0',
        path: '/permission/route'
      },
      {
        name: 'buttonPermission',
        label: {
          zh_CN: '按钮权限',
          en_US: 'Button Permission'
        },
        key: '2-1',
        path: '/permission/button'
      },
      {
        name: 'permissionConfig',
        label: {
          zh_CN: '权限配置',
          en_US: 'Permission Config'
        },
        key: '2-2',
        path: '/permission/config'
      },
      {
        name: 'notFound',
        label: {
          zh_CN: '404',
          en_US: '404'
        },
        key: '2-3',
        path: '/permission/404'
      }
    ]
  },
  {
    name: 'account',
    label: {
      zh_CN: '个人设置',
      en_US: 'Account'
    },
    icon: 'account',
    key: '4',
    path: '/user',
    children: [
      {
        name: 'userInfo',
        label: {
          zh_CN: '用户资料',
          en_US: 'User Info'
        },
        key: '4-0',
        path: '/user/info'
      },
      {
        name: 'updatePassword',
        label: {
          zh_CN: '修改密码',
          en_US: 'Update Password'
        },
        key: '4-1',
        path: '/user/update/password'
      }
    ]
  },
  {
    name: 'rechargeReconciliation',
    label: {
      zh_CN: '充值对账',
      en_US: 'Recharge Reconciliation'
    },
    key: '5',
    path: '/recharge',
    children: [
      {
        name: 'rechargeCenter',
        label: {
          zh_CN: '充值中心',
          en_US: 'Recharge Center'
        },
        key: '5-0',
        path: '/recharge/center'
      },
      {
        name: 'rechargeDetails',
        label: {
          zh_CN: '充值明细',
          en_US: 'Recharge Details'
        },
        key: '5-1',
        path: '/recharge/details'
      }
    ]
  },
  {
    name: 'package',
    label: {
      zh_CN: '专线小包管理',
      en_US: 'Dedicated Line Package Manager'
    },
    key: '6',
    path: '/package',
    children: [
      {
        name: 'tryCreate',
        label: {
          zh_CN: '试算价格/创建订单',
          en_US: 'Trial Price/Create Order'
        },
        key: '6-0',
        path: '/package/create'
      },
      {
        name: 'orders',
        label: {
          zh_CN: '专线小包订单列表',
          en_US: 'Dedicated Package Orders'
        },
        key: '6-1',
        path: '/package/orders'
      }
    ]
  }
]

mock.mock('/user/menu', 'get', intercepter(mockMenuList))
