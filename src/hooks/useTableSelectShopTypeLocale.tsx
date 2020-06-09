/**
 * 支持的商铺类型,虾皮,来赞达.....
 */
import { LiteralUnion } from 'antd/lib/_util/type'
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors'
import { genSelect } from '~/utils/select'
import * as React from 'react'
import { ReactNode } from 'react'
import { ReactComponent as ShopeeSvg } from '~/assets/shop/shopee.svg'
import { ReactComponent as LazadaSvg } from '~/assets/shop/lazada.svg'
import { ReactComponent as ShopifySvg } from '~/assets/shop/shopify.svg'
import Icon, { PayCircleOutlined } from '@ant-design/icons'
import { Language } from '~/interface'

const LazadaSvgIcon = (props: any) => <Icon component={LazadaSvg} {...props} />
const ShopeeIcon = (props: any) => <Icon component={ShopeeSvg} {...props} />
const ShopifyIcon = (props: any) => <Icon component={ShopifySvg} {...props} />

interface PayMethod {
  code: number
  color: LiteralUnion<PresetColorType | PresetStatusColorType, string>
  text: string
  icon: ReactNode
}

const en_US = new Map<number, PayMethod>([
  [1, { code: 1, color: 'orange', text: 'Shopee', icon: <ShopeeIcon /> }],
  [2, { code: 2, color: 'blue', text: 'Lazada', icon: <LazadaSvgIcon /> }],
  [3, { code: 3, color: 'orange', text: 'Wish', icon: <ShopifyIcon /> }],
  [4, { code: 4, color: 'green', text: 'Shopify', icon: <ShopifyIcon /> }],
  [5, { code: 5, color: 'orange', text: 'Vova', icon: <ShopifyIcon /> }]
])

export default function useTableSelectShopType() {
  const def = { code: 6, color: 'red', text: 'Not Found', icon: <PayCircleOutlined /> }
  return genSelect(en_US, def)
}

export function getTableSelectShopType(lang: Language) {
  if (lang === 'en_US') {
    return [{ code: 0, color: 'orange', text: 'All', icon: null }, ...Array.from(en_US.values())]
  }
  return [{ code: 0, color: 'orange', text: '全部', icon: null }, ...Array.from(en_US.values())]
}
