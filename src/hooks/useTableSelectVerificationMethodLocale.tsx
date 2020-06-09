import { Language } from '~/interface'
import { LiteralUnion } from 'antd/lib/_util/type'
import { PresetColorType, PresetStatusColorType } from 'antd/lib/_util/colors'
import { genSelect } from '~/utils/select'
import * as React from 'react'
import { ReactNode } from 'react'
import { ReactComponent as PersonalAuthenticationSvg } from '~/assets/tag/personal_authentication.svg'
import { ReactComponent as EnterpriseAuthenticationSvg } from '~/assets/tag/enterprise_authentication.svg'
import Icon, { PayCircleOutlined } from '@ant-design/icons'

const PersonalAuthenticationIcon = (props: any) => <Icon component={PersonalAuthenticationSvg} {...props} />
const EnterpriseAuthenticationIcon = (props: any) => <Icon component={EnterpriseAuthenticationSvg} {...props} />

export interface VerificationMethod {
  code: number
  color: LiteralUnion<PresetColorType | PresetStatusColorType, string>
  text: string
  icon: ReactNode
}

const en_US = new Map<number, VerificationMethod>([
  [1, { code: 1, color: 'green', text: 'Personal Authentication', icon: <PersonalAuthenticationIcon /> }],
  [2, { code: 2, color: 'blue', text: 'Enterprise Authentication', icon: <EnterpriseAuthenticationIcon /> }]
])
const zh_CN = new Map<number, VerificationMethod>([
  [1, { code: 1, color: 'green', text: '个人认证', icon: <PersonalAuthenticationIcon /> }],
  [2, { code: 2, color: 'blue', text: '企业认证', icon: <EnterpriseAuthenticationIcon /> }]
])
export default function useTableSelectVerificationMethodLocale(lang: Language) {
  const def = { code: 4, color: 'red', text: 'Not Found', icon: <PayCircleOutlined /> }
  if (lang === 'en_US') return genSelect(en_US, def)
  return genSelect(zh_CN, def)
}

export function getTableSelectVerificationMethodLocale(lang: Language) {
  if (lang === 'en_US') {
    return en_US
  }
  return zh_CN
}
