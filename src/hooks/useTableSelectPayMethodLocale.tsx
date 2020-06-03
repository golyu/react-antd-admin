import { Language } from '~/interface'
import { LiteralUnion } from 'antd/lib/_util/type'
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors'
import { genSelect } from '~/utils/select'
import * as React from 'react'
import { ReactNode } from 'react'
import { ReactComponent as AliPaySvg } from '~/assets/logo/ali_pay.svg'
import { ReactComponent as WeChatPaySvg } from '~/assets/logo/we_chat_pay.svg'
import { ReactComponent as UnionPaySvg } from '~/assets/logo/union_pay.svg'
import Icon, { PayCircleOutlined } from '@ant-design/icons'

const WeChatPayIcon = (props: any) => <Icon component={WeChatPaySvg} {...props} />
const AliPayIcon = (props: any) => <Icon component={AliPaySvg} {...props} />
const UnionPayIcon = (props: any) => <Icon component={UnionPaySvg} {...props} />

interface PayMethod {
  color: LiteralUnion<PresetColorType | PresetStatusColorType, string>
  text: string
  icon: ReactNode
}

const en_US = new Map<number, PayMethod>()
  .set(1, { color: 'green', text: 'WeChatPay', icon: <WeChatPayIcon /> })
  .set(2, { color: 'blue', text: 'AliPay', icon: <AliPayIcon /> })
  .set(3, { color: 'orange', text: 'UnionPay', icon: <UnionPayIcon /> })

const zh_CN = new Map<number, PayMethod>()
  .set(1, { color: 'green', text: '微信', icon: <WeChatPayIcon /> })
  .set(2, { color: 'blue', text: '支付宝', icon: <AliPayIcon /> })
  .set(3, { color: 'orange', text: '银联', icon: <UnionPayIcon /> })

export default function useTableSelectPayMethodLocale(lang: Language) {
  const def = { color: 'red', text: 'Not Found', icon: <PayCircleOutlined /> }
  if (lang === 'en_US') return genSelect(en_US, def)
  return genSelect(zh_CN, def)
}
