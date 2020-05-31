import React, { FC } from 'react'
import { ReactComponent as GuideSvg } from '~/assets/menu/guide.svg'
import { ReactComponent as PermissionSvg } from '~/assets/menu/permission.svg'
import { ReactComponent as DashboardSvg } from '~/assets/menu/dashboard.svg'
import { ReactComponent as AccountSvg } from '~/assets/menu/account.svg'
import { ReactComponent as DocumentationSvg } from '~/assets/menu/documentation.svg'
import { ReactComponent as RechargeSvg } from '~/assets/menu/recharge.svg'
import { ReactComponent as PackageSvg } from '~/assets/menu/package.svg'
import { ReactComponent as OrderSvg } from '~/assets/menu/order.svg'
import { ReactComponent as InventorySvg } from '~/assets/menu/inventory.svg'
import { ReactComponent as ShopSvg } from '~/assets/menu/shop.svg'
import { ReactComponent as WarehouseSvg } from '~/assets/menu/warehouse.svg'
import { ReactComponent as WarehouseServiceSvg } from '~/assets/menu/warehouse_service.svg'

interface Props {
  type: string
}

export const CustomIcon: FC<Props> = props => {
  const { type } = props
  let com = <GuideSvg />
  switch (type) {
    case 'guide':
      com = <GuideSvg />
      break
    case 'permission':
      com = <PermissionSvg />
      break
    case 'dashboard':
      com = <DashboardSvg />
      break
    case 'account':
      com = <AccountSvg />
      break
    case 'documentation':
      com = <DocumentationSvg />
      break
    case 'recharge':
      com = <RechargeSvg />
      break
    case 'package':
      com = <PackageSvg />
      break
    case 'warehouseService':
      com = <WarehouseServiceSvg />
      break
    case 'order':
      com = <OrderSvg />
      break
    case 'shop':
      com = <ShopSvg />
      break
    case 'inventory':
      com = <InventorySvg />
      break
    case 'warehouse':
      com = <WarehouseSvg />
      break
  }

  return <span className="anticon">{com}</span>
}
