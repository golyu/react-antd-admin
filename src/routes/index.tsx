import React, { lazy, FC } from 'react'

import Dashboard from '~/pages/dashboard'
import LoginPage from '~/pages/login'
import LayoutPage from '~/pages/layout'
import { RouteProps } from './config'
import { Routes, Route } from 'react-router'

const NotFound = lazy(() => import(/* webpackChunkName: "404'"*/ '~/pages/404'))
const Documentation = lazy(() => import(/* webpackChunkName: "404'"*/ '~/pages/doucumentation'))
const Guide = lazy(() => import(/* webpackChunkName: "guide'"*/ '~/pages/guide'))
const RoutePermission = lazy(() => import(/* webpackChunkName: "route-permission"*/ '~/pages/permission/route'))
const ButtonPermission = lazy(() => import(/* webpackChunkName: "button-permission"*/ '~/pages/permission/button'))
const PermissionConfig = lazy(() => import(/* webpackChunkName: "permission-config'"*/ '~/pages/permission/config'))
const AccountPage = lazy(() => import(/* webpackChunkName: "account'"*/ '~/pages/account'))
const RechargeCenter = lazy(() => import(/* webpackChunkName: "recharge-center" */ '~/pages/recharge/center'))
const RechargeDetails = lazy(() => import(/* webpackChunkName: "recharge-details" */ '~/pages/recharge/details'))
const UserInfo = lazy(() => import(/* webpackChunkName: "user-info" */ '~/pages/user/info'))
const UpdatePassword = lazy(() => import(/* webpackChunkName: "update-password" */ '~/pages/user/password'))
const TryCreate = lazy(() => import(/* webpackChunkName: "package-create" */ '~/pages/package/create'))
const Orders = lazy(() => import(/* webpackChunkName: "package-orders" */ '~/pages/package/orders'))
const CreateWarehouse = lazy(() => import(/* webpackChunkName: "warehouse-create" */ '~/pages/warehouse/create'))
const WarehouseOrders = lazy(() => import(/* webpackChunkName: "warehouse-orders" */ '~/pages/warehouse/orders'))
const CommodityAdd = lazy(() =>
  import(/* webpackChunkName: "inventory-commodity-add" */ '~/pages/inventory/commodity/add')
)
const CommodityList = lazy(() =>
  import(/* webpackChunkName: "inventory-commodity-list" */ '~/pages/inventory/commodity/list')
)
const InventoryDetails = lazy(() => import(/* webpackChunkName: "inventory-details" */ '~/pages/inventory/details'))
const ShopAdd = lazy(() => import(/* webpackChunkName: "shop-add" */ '~/pages/shop/add'))
const ShopList = lazy(() => import(/* webpackChunkName: "shop-list" */ '~/pages/shop/list'))

export const routeList: RouteProps[] = [
  {
    path: 'login',
    element: <LoginPage />,
    meta: {
      titleId: 'title.login'
    }
  },
  {
    path: '',
    element: <LayoutPage />,
    meta: {
      titleId: ''
    },
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />,
        meta: {
          titleId: 'title.dashboard'
        }
      },
      {
        path: 'documentation',
        element: <Documentation />,
        meta: {
          titleId: 'title.documentation'
        }
      },
      {
        path: 'guide',
        element: <Guide />,
        meta: {
          titleId: 'title.guide'
        }
      },
      {
        path: 'permission/route',
        element: <RoutePermission />,
        meta: {
          titleId: 'title.permission.route',
          auth: true
        }
      },
      {
        path: 'permission/button',
        element: <ButtonPermission />,
        meta: {
          titleId: 'title.permission.button'
        }
      },
      {
        path: 'permission/config',
        element: <PermissionConfig />,
        meta: {
          titleId: 'title.permission.config'
        }
      },
      {
        path: 'account',
        element: <AccountPage />,
        meta: {
          titleId: 'title.account'
        }
      },
      {
        path: 'recharge/center',
        element: <RechargeCenter />,
        meta: {
          titleId: 'title.recharge.center'
        }
      },
      {
        path: 'recharge/details',
        element: <RechargeDetails />,
        meta: {
          titleId: 'title.recharge.details'
        }
      },
      {
        path: 'user/info',
        element: <UserInfo />,
        meta: {
          titleId: 'title.user.info'
        }
      },
      {
        path: 'user/update/password',
        element: <UpdatePassword />,
        meta: {
          titleId: 'title.update.password'
        }
      },
      {
        path: 'package/create',
        element: <TryCreate />,
        meta: {
          titleId: 'title.dedicated.line.package.try.create'
        }
      },
      {
        path: 'package/orders',
        element: <Orders />,
        meta: {
          titleId: 'title.dedicated.line.package.orders'
        }
      },
      {
        path: 'warehouse/create',
        element: <CreateWarehouse />,
        meta: {
          titleId: 'title.warehouse.create'
        }
      },
      {
        path: 'warehouse/orders',
        element: <WarehouseOrders />,
        meta: {
          titleId: 'title.warehouse.orders'
        }
      },
      {
        path: 'inventory/commodity/add',
        element: <CommodityAdd />,
        meta: {
          titleId: 'title.commodity.add'
        }
      },
      {
        path: 'inventory/commodity/list',
        element: <CommodityList />,
        meta: {
          titleId: 'title.commodity.list'
        }
      },
      {
        path: 'inventory/details',
        element: <InventoryDetails />,
        meta: {
          titleId: 'title.inventory.details'
        }
      },
      {
        path: 'shop/add',
        element: <ShopAdd />,
        meta: {
          titleId: 'title.shop.add'
        }
      },
      {
        path: 'shop/list',
        element: <ShopList />,
        meta: {
          titleId: 'title.shop.list'
        }
      },
      {
        path: '*',
        element: <NotFound />,
        meta: {
          titleId: 'title.notFount'
        }
      }
    ]
  }
]

export const RenderRoutes: FC = () => {
  return (
    <Routes>
      {routeList.map(route => (
        <Route path={route.path} element={route.element} key={route.path}>
          {route.children?.map(child => (
            <Route path={child.path} element={child.element} key={child.path} />
          ))}
        </Route>
      ))}
    </Routes>
  )
}
