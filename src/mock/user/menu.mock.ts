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
    name: 'warehouseServiceInfo',
    label: {
      zh_CN: '仓库服务信息',
      en_US: 'Warehouse Service Info'
    },
    icon: 'warehouseService',
    key: '1',
    path: '/service/warehouse/info'
  },
  {
    name: 'order',
    label: {
      zh_CN: '订单管理',
      en_US: 'Order Manager'
    },
    icon: 'order',
    key: '2',
    path: '/order',
    children: [
      {
        name: 'orderCreate',
        label: {
          zh_CN: '手动创建待打包订单',
          en_US: 'Manually create a packaging order'
        },
        key: '2-0',
        path: '/order/create'
      },
      {
        name: 'orderList',
        label: {
          zh_CN: '订单列表',
          en_US: 'Order List'
        },
        key: '2-1',
        path: '/order/list'
      },
      {
        name: 'orderSync',
        label: {
          zh_CN: '同步订单',
          en_US: 'Synchronize Order'
        },
        key: '2-2',
        path: '/order/sync'
      }
    ]
  },
  {
    name: 'shop',
    label: {
      zh_CN: '店铺管理',
      en_US: 'Shop Manager'
    },
    icon: 'shop',
    key: '3',
    path: '/shop',
    children: [
      {
        name: 'shopAdd',
        label: {
          zh_CN: '添加店铺',
          en_US: 'Add Shop'
        },
        key: '3-0',
        path: '/shop/add'
      },
      {
        name: 'shopList',
        label: {
          zh_CN: '店铺列表',
          en_US: 'Shop List'
        },
        key: '3-1',
        path: '/shop/list'
      }
    ]
  },
  {
    name: 'inventory',
    label: {
      zh_CN: '库存管理',
      en_US: 'Inventory Manager'
    },
    icon: 'inventory',
    key: '4',
    path: '/inventory',
    children: [
      {
        name: 'commodityAdd',
        label: {
          en_US: 'Add Commodity',
          zh_CN: '添加商品'
        },
        key: '4-0',
        path: '/inventory/commodity/add'
      },
      {
        name: 'commodityList',
        label: {
          en_US: 'Commodity List',
          zh_CN: '商品列表'
        },
        key: '4-1',
        path: '/inventory/commodity/list'
      },
      {
        name: 'inventoryDetails',
        label: {
          zh_CN: '库存明细',
          en_US: 'Inventory Details'
        },
        key: '4-2',
        path: '/inventory/details'
      }
    ]
  },
  {
    name: 'warehouse',
    label: {
      zh_CN: '仓储管理',
      en_US: 'Warehouse Manager'
    },
    key: '5',
    icon: 'warehouse',
    path: '/warehouse',
    children: [
      {
        name: 'warehouseCreate',
        label: {
          zh_CN: '添加仓储订单',
          en_US: 'Warehouse Create'
        },
        key: '5-0',
        path: '/warehouse/create'
      },
      {
        name: 'wareHouseOrders',
        label: {
          zh_CN: '仓储订单列表',
          en_US: 'Warehouse Orders'
        },
        key: '5-1',
        path: '/warehouse/orders'
      }
    ]
  },
  {
    name: 'package',
    label: {
      zh_CN: '专线小包管理',
      en_US: 'Dedicated Line Package Manager'
    },
    icon: 'package',
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
  },
  {
    name: 'account',
    label: {
      zh_CN: '个人设置',
      en_US: 'Account'
    },
    icon: 'account',
    key: '7',
    path: '/user',
    children: [
      {
        name: 'userInfo',
        label: {
          zh_CN: '用户资料',
          en_US: 'User Info'
        },
        key: '7-0',
        path: '/user/warehouse'
      },
      {
        name: 'updatePassword',
        label: {
          zh_CN: '修改密码',
          en_US: 'Update Password'
        },
        key: '7-1',
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
    icon: 'recharge',
    key: '8',
    path: '/recharge',
    children: [
      {
        name: 'rechargeCenter',
        label: {
          zh_CN: '充值中心',
          en_US: 'Recharge Center'
        },
        key: '8-0',
        path: '/recharge/center'
      },
      {
        name: 'rechargeDetails',
        label: {
          zh_CN: '充值明细',
          en_US: 'Recharge Details'
        },
        key: '8-1',
        path: '/recharge/details'
      }
    ]
  }

  // {
  //   name: 'documentation',
  //   label: {
  //     zh_CN: '文档',
  //     en_US: 'Documentation'
  //   },
  //   icon: 'documentation',
  //   key: '9',
  //   path: '/documentation'
  // },
  // {
  //   name: 'guide',
  //   label: {
  //     zh_CN: '引导',
  //     en_US: 'Guide'
  //   },
  //   icon: 'guide',
  //   key: '10',
  //   path: '/guide'
  // },
  // {
  //   name: 'permission',
  //   label: {
  //     zh_CN: '权限',
  //     en_US: 'Permission'
  //   },
  //   icon: 'permission',
  //   key: '11',
  //   path: '/permission',
  //   children: [
  //     {
  //       name: 'routePermission',
  //       label: {
  //         zh_CN: '路由权限',
  //         en_US: 'Route Permission'
  //       },
  //       key: '11-0',
  //       path: '/permission/route'
  //     },
  //     {
  //       name: 'buttonPermission',
  //       label: {
  //         zh_CN: '按钮权限',
  //         en_US: 'Button Permission'
  //       },
  //       key: '11-1',
  //       path: '/permission/button'
  //     },
  //     {
  //       name: 'permissionConfig',
  //       label: {
  //         zh_CN: '权限配置',
  //         en_US: 'Permission Config'
  //       },
  //       key: '11-2',
  //       path: '/permission/config'
  //     },
  //     {
  //       name: 'notFound',
  //       label: {
  //         zh_CN: '404',
  //         en_US: '404'
  //       },
  //       key: '11-3',
  //       path: '/permission/404'
  //     }
  //   ]
  // }
]
mock.mock('/user/menu', 'get', intercepter(mockMenuList))
